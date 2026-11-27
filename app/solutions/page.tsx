import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS, AI_CHANNELS } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import { AllSolutionLives } from "@/components/SolutionLive";
export const metadata: Metadata = { title: "AI Marketing & Automation Services for Service Businesses | AZEDOR", description: "Seven connected solutions: Paid Advertising, Websites & Sales Funnels, Conversation AI Agent, Calling AI Agent, CRM & Sales Automation, Business Process Automation and Reputation Management." };
export default function Solutions() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Solutions</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">One System. Seven Parts. No Lost Leads.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">Most agencies stop after the lead. AZEDOR follows the lead from first click to booked job to review.</p></div></section>
    <section className="py-20"><div className="mx-auto grid max-w-shell gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((s, i) => (<Link key={s.slug} href={`/solutions/${s.slug}`} className="rounded-card border border-line bg-white p-6 hover:border-ink"><div className="flex items-center justify-between"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tintLime text-ink"><s.icon size={22} /></span><p className="text-xs font-bold uppercase tracking-wider text-muted">0{i + 1}</p></div><h3 className="mt-3 text-2xl font-bold">{s.name}</h3><p className="mt-2 text-muted">{s.sub}</p>
        {s.slug === "conversation-ai-agent" && (<div className="mt-3 flex flex-wrap gap-1.5">{AI_CHANNELS.map((c) => (<span key={c.name} className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs font-semibold">{c.name}</span>))}</div>)}
        {s.slug === "calling-ai-agent" && (<p className="mt-3 text-sm font-semibold text-ink">Phone calls — answered in your business name, 24/7.</p>)}
        <span className="mt-4 inline-block text-sm font-bold">Learn more →</span></Link>))}
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Live" title="Try Each Solution — Live." sub="Pick a solution and watch it work, in real time. An example of how the system works — not a real client's results." />
      <AllSolutionLives />
    </div></section>
    <CtaBanner />
  </>);
}
