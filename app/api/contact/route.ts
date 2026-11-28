import { NextResponse } from "next/server";

// General contact form → Secure API Route → n8n Webhook → HighLevel CRM.
// Same hardening as /api/audit (n8n guide §8): 10s timeout, ~10 KB payload
// limit, honeypot field, webhook auth header, HTTPS + host allow-list for
// the webhook URL, per-submission idempotency key, no personal data in logs.
// Until N8N_WEBHOOK_URL and N8N_WEBHOOK_SECRET are set in Vercel, this
// route answers with the same honest 503 dev-mode message as the audit
// form — it never falsely reports success. The contact page shows the
// fallback (email azedor.marketing@gmail.com) alongside the form.
// Rate limiting here is in-memory per Vercel instance; durable rate
// limiting still needs Vercel KV / Upstash Redis (owner step).

const RATE = new Map<string, { count: number; at: number }>();
const GLOBAL_KEY = "__global__";
const MAX_BODY_BYTES = 10 * 1024;
const N8N_HOST = "n8n-9bqk.srv1417751.hstgr.cloud";

const SUBJECTS = ["General question", "Question about the free audit", "Pricing", "Partnership", "Something else"];

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
      console.warn("[contact] rate limited", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a minute and try again." }, { status: 429 });
    }

    const raw = await req.text().catch(() => "");
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Message too large. Please shorten it and try again." }, { status: 400 });
    }
    const body = raw ? JSON.parse(raw) : {};
    // Honeypot: bots fill hidden fields, people do not. Silently accept
    // and drop — never forward, never tell the sender it was caught.
    if (typeof body.company2 === "string" && body.company2.trim() !== "") {
      console.warn("[contact] honeypot filled, dropped", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: true });
    }

    const message = {
      name: sanitize(body.name),
      business: sanitize(body.business),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      subject: sanitize(body.subject),
      message: sanitize(body.message),
      source: "azedor.com contact form",
      receivedAt: new Date().toISOString(),
    };
    if (!message.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email) || !SUBJECTS.includes(message.subject) || !message.message) {
      return NextResponse.json({ ok: false, error: "Please add your name, a valid email, a subject, and your message." }, { status: 400 });
    }

    const webhook = process.env.N8N_WEBHOOK_URL;
    const secret = process.env.N8N_WEBHOOK_SECRET;
    if (!webhook || !secret) {
      console.warn("[contact] DEVELOPMENT MODE — webhook or secret not set. Message received, not forwarded.", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, devMode: true, error: "Thank you — your message was received, but our message system is not connected yet. Please email azedor.marketing@gmail.com and we will reply there." }, { status: 503 });
    }
    let url: URL;
    try {
      url = new URL(webhook);
    } catch {
      console.error("[contact] webhook URL rejected: not a valid URL", JSON.stringify({ id: submissionId }));
      return NextResponse.json({ ok: false, error: "Our message system is not configured correctly. Please email azedor.marketing@gmail.com." }, { status: 503 });
    }
    if (url.protocol !== "https:" || url.hostname !== N8N_HOST || !url.pathname.startsWith("/webhook/")) {
      console.error("[contact] webhook URL rejected: host or path not allowed", JSON.stringify({ id: submissionId, host: url.hostname }));
      return NextResponse.json({ ok: false, error: "Our message system is not configured correctly. Please email azedor.marketing@gmail.com." }, { status: 503 });
    }
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AZEDOR-WEBHOOK-SECRET": secret,
        "X-Idempotency-Key": submissionId,
      },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[contact] n8n webhook failed", JSON.stringify({ id: submissionId, status: res.status }));
      return NextResponse.json({ ok: false, error: "We could not send your message just now. Please try again or email azedor.marketing@gmail.com." }, { status: 502 });
    }
    console.info("[contact] forwarded", JSON.stringify({ id: submissionId }));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] error", JSON.stringify({ id: submissionId }));
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
