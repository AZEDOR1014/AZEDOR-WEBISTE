import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS, AI_CHANNELS, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import { AllSolutionLives } from "@/components/SolutionLive";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "AI Marketing & Automation Services for Service Businesses | AZEDOR",
  description: "Seven connected solutions: Paid Advertising, Websites & Sales Funnels, Conversation AI Agent, Calling AI Agent, CRM & Sales Automation, Business Process Automation and Reputation Management.",
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/solutions`,
    title: "AI Marketing & Automation Services for Service Businesses | AZEDOR",
    description: "Seven connected solutions: Paid Advertising, Websites & Sales Funnels, Conversation AI Agent, Calling AI Agent, CRM & Sales Automation, Business Process Automation and Reputation Management.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "AI Marketing & Automation Services for Service Businesses | AZEDOR",
    description: "Seven connected solutions: Paid Advertising, Websites & Sales Funnels, Conversation AI Agent, Calling AI Agent, CRM & Sales Automation, Business Process Automation and Reputation Management.",
  },
};

const STAGE_MAP: [string, string][] = [
  ["Attract", "Paid Advertising"],
  ["Capture", "Websites & Sales Funnels"],
  ["Engage", "Conversation & Calling AI Agents"],
  ["Convert", "CRM & Sales Automation"],
  ["Deliver", "Business Process Automation"],
  ["Retain", "Reputation Management"],
];

export default function Solutions() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Solutions</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">One System. Seven Parts. No Lost Leads.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">Most agencies stop after the lead. AZEDOR follows the lead from first click to booked job to review — through six stages, with seven solutions doing the work.</p><div className="mt-6"><Link href="/free-audit" className="btn btn-primary">Get Your Free Audit</Link></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="The Growth System" title="How the Seven Solutions Map to the Six Stages" sub="Each solution does one stage's job. Together they cover the whole customer journey — Attract, Capture, Engage, Convert, Deliver, Retain." />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {STAGE_MAP.map(([stage, solution], i) => (
          <li key={stage} className="card"><p className="text-xs font-bold uppercase tracking-wider text-limeDeep">{i + 1} · {stage}</p><p className="mt-2 text-lg font-bold">{solution}</p><p className="mt-1 text-sm leading-relaxed text-muted">{JOURNEY[i].purpose}. {JOURNEY[i].detail}</p></li>
        ))}
      </ol>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((s, i) => (<Link key={s.slug} href={`/solutions/${s.slug}`} className="rounded-card border border-line bg-white p-6 hover:border-ink"><div className="flex items-center justify-between"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tintLime text-ink"><s.icon size={22} /></span><p className="text-xs font-bold uppercase tracking-wider text-muted">0{i + 1}</p></div><h3 className="mt-3 text-2xl font-bold">{s.name}</h3><p className="mt-2 text-muted">{s.sub}</p>
        {s.slug === "conversation-ai-agent" && (<div className="mt-3 flex flex-wrap gap-1.5">{AI_CHANNELS.map((c) => (<span key={c.name} className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs font-semibold">{c.name}</span>))}</div>)}
        {s.slug === "calling-ai-agent" && (<p className="mt-3 text-sm font-semibold text-ink">Phone calls — answered in your business name, around the clock, with human handover.</p>)}
        <span className="mt-4 inline-block text-sm font-bold">Learn more →</span></Link>))}
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Interactive demonstration" title="Try Each Solution — Interactive Demonstration." sub="Pick a solution and try the interactive demonstration — an illustrative example of how it works, not a real client's live data." />
      <AllSolutionLives />
    </div></section>
    <CtaBanner />
  </>);
}
