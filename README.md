# AZEDOR Website

Premium, conversion-focused website for AZEDOR — AI marketing, CRM and business automation agency for service-based businesses in the USA.

**Tagline:** Your Marketing, Sales and Automation. Connected.

## Stack
Next.js 14 (App Router) + React + TypeScript + Tailwind CSS + Lucide icons + Framer Motion. Deployed on Vercel from GitHub.

## Conversion
The only conversion is a **Free Lead-Leak & Automation Audit**. No appointment booking calendar anywhere on the site. The form submits to `/api/audit`, which forwards to n8n (see below), then redirects to `/thank-you`.

## Lead integration — Website Form → API Route → n8n Webhook → HighLevel CRM
- Set `N8N_WEBHOOK_URL` in Vercel environment variables (see `.env.example`).
- If it is not set, the API is in **development mode**: it validates the lead, logs it server-side, and returns a 503 with an honest message — it never silently discards a lead or falsely reports success.
- No webhook URL or CRM key is exposed client-side. Never commit credentials.

## Develop
```bash
npm install
npm run dev
npm run build
```

## Pages
Home (14 sections), Industries (14, data-driven), Solutions (6, data-driven), How It Works, Our Work (demonstrations only), Free Audit, Thank You, About, Contact, Privacy, Terms. `/hvac`, `/salon`, `/spa` redirect to the matching industry pages.

## Rules
No fake testimonials, no fake statistics, no invented team/offices/awards, no prices, no booking calendar. All dashboard/demo data is labelled as demonstration.
