import { NextResponse } from "next/server";

// Website Form → Secure API Route → n8n Webhook → HighLevel CRM
// Integration interface (documented):
// - Set N8N_WEBHOOK_URL in Vercel env vars to the n8n webhook URL for the
//   AZEDOR lead-intake workflow. The webhook forwards the lead to HighLevel.
// - If N8N_WEBHOOK_URL is not set, the API is in DEVELOPMENT MODE: the lead
//   is validated and logged server-side, and the response tells the caller
//   the lead was received but NOT forwarded. The form then shows an honest
//   message instead of a false success. Never silently discard a real lead.
// - No webhook URL or CRM key is ever exposed to the browser.

const RATE = new Map<string, { count: number; at: number }>();

function sanitize(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, 500) : "";
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const hit = RATE.get(ip);
    if (hit && now - hit.at < 60_000 && hit.count >= 5) {
      return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a minute and try again." }, { status: 429 });
    }
    RATE.set(ip, hit && now - hit.at < 60_000 ? { count: hit.count + 1, at: hit.at } : { count: 1, at: now });

    const body = await req.json().catch(() => ({}));
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
    if (!webhook) {
      console.warn("[audit] DEVELOPMENT MODE — no N8N_WEBHOOK_URL set. Lead received, not forwarded:", JSON.stringify({ ...lead, email: "[redacted]" }));
      return NextResponse.json({ ok: false, devMode: true, error: "Thank you — your details were received, but our lead system is not connected yet. Please email azedor.marketing@gmail.com and we will prepare your audit." }, { status: 503 });
    }
    const res = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    if (!res.ok) {
      console.error("[audit] n8n webhook failed:", res.status);
      return NextResponse.json({ ok: false, error: "We could not send your audit request just now. Please try again or email azedor.marketing@gmail.com." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[audit] error", e);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
