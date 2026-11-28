import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBanner, SectionHead } from "@/components/Shared";
import AuditForm from "@/components/AuditForm";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "About AZEDOR | AZEDOR",
  description: "AZEDOR is a remote marketing and automation agency for service businesses in the USA. Business problems first, technology second — one connected system from first enquiry to review.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/about`,
    title: "About AZEDOR | AZEDOR",
    description: "AZEDOR is a remote marketing and automation agency for service businesses in the USA. Business problems first, technology second — one connected system from first enquiry to review.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "About AZEDOR | AZEDOR",
    description: "AZEDOR is a remote marketing and automation agency for service businesses in the USA. Business problems first, technology second — one connected system from first enquiry to review.",
  },
};
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto flex max-w-shell flex-wrap items-center gap-8 px-4 sm:px-6"><Image src="/images/logo-azedor-square-transparent.png" alt="AZEDOR logo" width={600} height={472} priority className="h-28 w-auto sm:h-36" /><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">About AZEDOR</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">AZEDOR Builds Systems, Not Just Ads.</h1></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed">
      <p>AZEDOR is a remote digital marketing and automation agency for service-based businesses in the USA. We start with HVAC, salons and spas — and the same system works for every service business.</p>
      <p>We do not stop at leads. We follow the job from first enquiry to booking to review — Attract, Capture, Engage, Convert, Deliver, Retain — in one connected system, not a pile of disconnected tools.</p>
      <p>What we believe: slow follow-up loses the job. Fast, honest follow-up wins it.</p>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="What we do" title="Business Problems First. Technology Second." sub="Four rules shape every system we build." />
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["Customized, not templates", "The system is built around how your business actually works — your services, your prices, your booking flow."],
          ["One system, not many tools", "Ads, website, AI agents, CRM, follow-up and reviews connect into a single flow, so nothing falls between them."],
          ["Transparent communication", "You see the plan in writing before you commit, and you see what was built after. No hidden steps."],
          ["Long-term customer value", "The goal is not one job. It is a customer who books again, and tells the next customer to call you."],
        ].map(([t, d]) => (
          <div key={t} className="card"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-muted">{d}</p></div>
        ))}
      </div>
    </div></section>
    <section className="py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div>
        <SectionHead label="What we do not do" title="What You Will Not Find Here" />
        <ul className="space-y-3 text-muted">
          <li className="rounded-card border border-line bg-white px-5 py-4">✗ <strong className="text-ink">No fake reviews or fake results.</strong> We ask real customers for real reviews — never invent them.</li>
          <li className="rounded-card border border-line bg-white px-5 py-4">✗ <strong className="text-ink">No prices quoted before a plan.</strong> Scope and pricing are agreed in writing after your free audit.</li>
          <li className="rounded-card border border-line bg-white px-5 py-4">✗ <strong className="text-ink">No ads without follow-up.</strong> A campaign is only run when the answering and follow-up behind it are ready.</li>
          <li className="rounded-card border border-line bg-white px-5 py-4">✗ <strong className="text-ink">No AI that pretends to be a person.</strong> Our agents introduce themselves as AI, and hand over to your team whenever they should.</li>
        </ul>
      </div>
      <div>
        <div className="rounded-card border border-line bg-paper p-6"><p className="font-bold text-ink">Run by its founder</p><p className="mt-2 leading-relaxed text-muted">AZEDOR is owned and run by Prof. Ali Zahoor Mehdi — the person you meet, and the person who works with you from first call to launch.</p></div>
        <div className="mt-6 rounded-card border border-line bg-white p-6">
          <p className="font-bold text-ink">How working with AZEDOR starts</p>
          <ol className="mt-3 space-y-2 text-muted">
            <li><strong className="text-ink">1 · Free audit.</strong> We check where your business leaks leads.</li>
            <li><strong className="text-ink">2 · Written plan.</strong> Scope and timeline, before you commit.</li>
            <li><strong className="text-ink">3 · Build and test.</strong> With you, before anything goes live.</li>
          </ol>
          <p className="mt-5"><Link href="/how-it-works" className="btn btn-secondary btn-sm">See How It Works →</Link></p>
        </div>
      </div>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="Free audit" title="Find Out Where Your Business Is Losing Opportunities" sub="We review your website and funnel, lead handling, sales follow-up, CRM and automation — then give you customized recommendations in writing." /></div>
      <AuditForm compact />
    </div></section>
    <CtaBanner />
  </>);
}
