import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner, SectionHead } from "@/components/Shared";
import { ProcessSteps, FunnelDiagram } from "@/components/Animate";
import { JOURNEY } from "@/lib/data";
import AuditForm from "@/components/AuditForm";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "How It Works | AZEDOR",
  description: "From first call to booked jobs in 4 steps: Discover, Design, Implement, Optimize. See the six-stage AZEDOR Growth System: Attract, Capture, Engage, Convert, Deliver, Retain.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/how-it-works`,
    title: "How It Works | AZEDOR",
    description: "From first call to booked jobs in 4 steps: Discover, Design, Implement, Optimize. See the six-stage AZEDOR Growth System: Attract, Capture, Engage, Convert, Deliver, Retain.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "How It Works | AZEDOR",
    description: "From first call to booked jobs in 4 steps: Discover, Design, Implement, Optimize. See the six-stage AZEDOR Growth System: Attract, Capture, Engage, Convert, Deliver, Retain.",
  },
};
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">How It Works</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">From First Call to Booked Jobs in 4 Steps.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">No booking calendar on this website. It starts with a free audit — then we design, build and improve your system with you.</p></div></section>
    <section className="bg-tintTeal py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="The lead flow" title="How a Visitor Becomes a Customer" sub="The six-stage AZEDOR Growth System — Attract, Capture, Engage, Convert, Deliver, Retain — and what leaks at each stage." />
      <FunnelDiagram steps={JOURNEY} dark={false} />
      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        {[
          ["Attract", "Ads and search bring people who need you now."],
          ["Capture", "A fast page turns the click into a lead."],
          ["Engage", "Calls and messages are answered fast, around the clock, with human handover."],
          ["Convert", "The lead is qualified and booked in one pipeline."],
          ["Deliver", "Reminders and scheduling run in the background."],
          ["Retain", "Reviews and rebooking invites bring customers back."],
        ].map(([stage, text]) => (
          <div key={stage} className="rounded-card border border-line bg-white p-4"><p className="font-bold">{stage}</p><p className="mt-1 text-sm leading-relaxed text-muted">{text}</p></div>
        ))}
      </div>
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Our process" title="How We Build It" sub="Four steps, in order. You see the plan in writing before you commit to anything." />
      <ProcessSteps steps={[
        { n: "1", title: "Discover", text: "Your business, customer journey and problems — starting with your free audit." },
        { n: "2", title: "Design", text: "A customized strategy in writing, with scope and timeline before you commit." },
        { n: "3", title: "Implement", text: "Ads, website, Conversation and Calling AI Agents, CRM and follow-up — built, integrated and tested with you." },
        { n: "4", title: "Optimize", text: "Performance monitored, workflows improved, support after launch." },
      ]} />
      <p className="mt-12"><Link href="/free-audit" className="btn btn-primary">Get Your Free Audit →</Link></p>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div>
        <SectionHead label="Start here" title="What Happens After You Request the Audit" sub="Three short steps. No obligation at any of them." />
        <ol className="space-y-3">
          {[["1", "You send the form.", "Name, business, email and industry — two minutes."], ["2", "We check your business.", "Your ads, reply speed, booking page, follow-up and reviews — and where leads leak."], ["3", "You get it in writing.", "Customized recommendations and a plan, before anything is built or priced."]].map(([n, t, d]) => (
            <li key={n} className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">{n} · </span><strong>{t}</strong><span className="block mt-1 text-sm text-muted">{d}</span></li>
          ))}
        </ol>
      </div>
      <AuditForm compact />
    </div></section>
    <CtaBanner />
  </>);
}
