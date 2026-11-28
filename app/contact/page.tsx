import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/AuditForm";
import { SectionHead, CtaBanner } from "@/components/Shared";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Contact AZEDOR | Send a Message",
  description: "Send AZEDOR a general message — a question, pricing, or a partnership. For a free review of where your business loses leads, use the Free Audit form instead.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/contact`,
    title: "Contact AZEDOR | Send a Message",
    description: "Send AZEDOR a general message — a question, pricing, or a partnership. For a free review of where your business loses leads, use the Free Audit form instead.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Contact AZEDOR | Send a Message",
    description: "Send AZEDOR a general message — a question, pricing, or a partnership. For a free review of where your business loses leads, use the Free Audit form instead.",
  },
};

export default function Contact() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Contact AZEDOR.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">A general question, pricing, or a partnership — send a message and we will reply. No booking calendar on this page.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHead label="Talk to AZEDOR" title="Send a Message" sub="Use this form for a general message. It is not the audit form — for a free review of where your business loses leads, use the Free Audit form instead." />
            <div className="card mt-6">
              <p className="font-bold">Prefer email?</p>
              <p className="mt-2 leading-relaxed text-muted">Email us directly at <a href="mailto:azedor.marketing@gmail.com" className="font-bold text-ink underline">azedor.marketing@gmail.com</a>. Tell us your name, your business, and what you need — we read each message and reply as soon as we can.</p>
            </div>
            <div className="card mt-4">
              <p className="font-bold">Looking for a free audit instead?</p>
              <p className="mt-2 leading-relaxed text-muted">The Free Audit checks your ads, reply speed, booking page, follow-up and reviews — and shows you, in writing, where leads are leaking.</p>
              <p className="mt-4"><Link href="/free-audit" className="btn btn-primary btn-sm">Get Your Free Audit →</Link></p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
