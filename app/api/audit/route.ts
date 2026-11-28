import { NextResponse } from "next/server";

// Website Form → Secure API Route → n8n Webhook → HighLevel CRM
// Integration interface (documented):
// - Set N8N_WEBHOOK_URL in Vercel env vars to the n8n webhook URL for the
//   AZEDOR lead-intake workflow, and N8N_WEBHOOK_SECRET to the matching
//   header-auth secret. The webhook forwards the lead to HighLevel.
// - If either env var is not set, the API is in DEVELOPMENT MODE: the lead
//   is validated and the response tells the caller the lead was received
//   but NOT forwarded. The form then shows an honest message instead of a
//   false success. Never silently discard a real lead.
// - No webhook URL, secret or CRM key is ever exposed to the browser.
// - Hardening (n8n guide §8): 10s timeout, ~10 KB payload limit, honeypot
//   field, webhook auth header, HTTPS + host allow-list for the webhook URL,
//   per-submission idempotency key, no personal data in logs.
// - Rate limiting here is in-memory per Vercel instance (per-IP plus a
//   global cap). Durable rate limiting still needs Vercel KV / Upstash
//   Redis — an owner step, not built here.

const RATE = new Map<string, { count: number; at: number }>();
const GLOBAL_KEY = "__global__";
const MAX_BODY_BYTES = 10 * 1024;
const N8N_HOST = "n8n-9bqk.srv1417751.hstgr.cloud";

function sanitize(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, 500) : "";
}

function rateLimited(ip: string, now: number): boolean {
  RATE.forEach((val, key) => { if (now - val.at >= 60_000) RATE.delete(key); });
  for (const key of [ip, GLOBAL_KEY]) {
    const hit = RATE.get(key);
    const limit = key === GLOBAL_KEY ? 100 : 5;
    if (hit && now - hit.at < 60_000 && hit.count >= limit) return true;
    RATE.set(key, hit && now - hit.at < 60_000 ? { count: hit.count + 1, at: hit.at } : { count: 1, at: now });
  }
  return false;
}

export async function POST(req: Request) {
  const submissionId = crypto.randomUUID();
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    if (rateLimited(ip, now)) {
      console.warn("[audit] rate limited", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a minute and try again." }, { status: 429 });
    }

    const raw = await req.text().catch(() => "");
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Submission too large. Please try again." }, { status: 400 });
    }
    const body = raw ? JSON.parse(raw) : {};
    // Honeypot: bots fill hidden fields, people do not. Silently accept
    // and drop — never forward, never tell the sender it was caught.
    if (typeof body.company2 === "string" && body.company2.trim() !== "") {
      console.warn("[audit] honeypot filled, dropped", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: true });
    }

    const lead = {
      name: sanitize(body.name),
      business: sanitize(body.business),
      email: sanitize(body.email),
      website: sanitize(body.website),
      phone: sanitize(body.phone),
      industry: sanitize(body.industry),
      challenge: sanitize(body.challenge),
      utm: sanitize(body.utm),
      source: "azedor.com free audit form",
      receivedAt: new Date().toISOString(),
    };
    if (!lead.name || !lead.business || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !lead.industry) {
      return NextResponse.json({ ok: false, error: "Please add your name, business name, a valid business email, and your industry." }, { status: 400 });
    }

    const webhook = process.env.N8N_WEBHOOK_URL;
    const secret = process.env.N8N_WEBHOOK_SECRET;
    if (!webhook || !secret) {
      // Honest dev mode: no personal data in the log — only the submission id.
      console.warn("[audit] DEVELOPMENT MODE — webhook or secret not set. Lead received, not forwarded.", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, devMode: true, error: "Thank you — your details were received, but our lead system is not connected yet. Please email azedor.marketing@gmail.com and we will prepare your audit." }, { status: 503 });
    }
    let url: URL;
    try {
      url = new URL(webhook);
    } catch {
      console.error("[audit] webhook URL rejected: not a valid URL", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, error: "Our lead system is not configured correctly. Please email azedor.marketing@gmail.com and we will prepare your audit." }, { status: 503 });
    }
    if (url.protocol !== "https:" || url.hostname !== N8N_HOST || !url.pathname.startsWith("/webhook/")) {
      console.error("[audit] webhook URL rejected: host or path not allowed", JSON.stringify({ id: submissionId, host: url.hostname }));
      return NextResponse.json({ ok: false, error: "Our lead system is not configured correctly. Please email azedor.marketing@gmail.com and we will prepare your audit." }, { status: 503 });
    }
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AZEDOR-WEBHOOK-SECRET": secret,
        "X-Idempotency-Key": submissionId,
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[audit] n8n webhook failed", JSON.stringify({ id: submissionId, status: res.status }));
      return NextResponse.json({ ok: false, error: "We could not send your audit request just now. Please try again or email azedor.marketing@gmail.com." }, { status: 502 });
    }
    console.info("[audit] forwarded", JSON.stringify({ id: submissionId }));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[audit] error", JSON.stringify({ id: submissionId }));
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
