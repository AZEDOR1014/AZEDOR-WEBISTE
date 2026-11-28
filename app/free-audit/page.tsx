import type { Metadata } from "next";
import Link from "next/link";
import AuditForm from "@/components/AuditForm";
import Faq from "@/components/Faq";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Free Lead-Leak & Automation Audit | AZEDOR",
  description: "Discover where your business is losing leads, time and revenue opportunities. Free audit: website, lead handling, follow-up, CRM and automation review.",
  alternates: { canonical: `${SITE_URL}/free-audit` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/free-audit`,
    title: "Free Lead-Leak & Automation Audit | AZEDOR",
    description: "Discover where your business is losing leads, time and revenue opportunities. Free audit: website, lead handling, follow-up, CRM and automation review.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Free Lead-Leak & Automation Audit | AZEDOR",
    description: "Discover where your business is losing leads, time and revenue opportunities. Free audit: website, lead handling, follow-up, CRM and automation review.",
  },
};

export default function FreeAudit() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Free Audit</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Discover Where Your Business Is Losing Leads, Time and Revenue Opportunities.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">No booking calendar. Submit your details and AZEDOR will contact you afterward through its sales follow-up process. Free, with no obligation.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What you receive</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ Website and funnel assessment</strong> — does your page turn clicks into bookings, or lose them?</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ Lead handling review</strong> — how fast are calls and messages answered, and who gets missed?</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ Sales follow-up assessment</strong> — do estimates and inquiries get followed up, or go quiet?</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ CRM assessment</strong> — is every lead in one place, with its history?</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ Automation opportunity identification</strong> — which repetitive work could run on its own?</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><strong className="text-ink">✓ Customized recommendations in writing</strong> — what to fix first, and what it would take.</li>
            </ul>
            <h2 className="mt-10 text-2xl font-bold">What happens next</h2>
            <ol className="mt-4 space-y-3 text-muted">
              <li className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">1 · </span>You send the form — two minutes, nothing to prepare.</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">2 · </span>We review your business and contact you with the findings.</li>
              <li className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">3 · </span>You decide. Any plan or price for work is agreed in writing afterward, before anything is built.</li>
            </ol>
            <div className="mt-10"><Faq items={[
              { q: "What happens after I submit?", a: "We review your business and contact you with your audit findings. There is no obligation." },
              { q: "Do I need to book a call now?", a: "No. There is no calendar on this website. We contact you first, and a call is arranged in the follow-up if it fits." },
              { q: "How much does the audit cost?", a: "It is free. Any plan or price for work is agreed in writing afterward, before anything is built." },
              { q: "What do you need from me?", a: "Only the form: your name, business name, email and industry. A website or social link and your main challenge help, but both are optional." },
              { q: "What if I only have a general question?", a: "Use the contact page instead — it has a general message form. The audit form is for a review of your business." },
            ]} /></div>
            <p className="mt-8 text-sm text-muted">Prefer a general message instead? <Link href="/contact" className="font-bold text-ink underline">Contact AZEDOR →</Link></p>
          </div>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
