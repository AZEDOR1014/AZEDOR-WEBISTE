import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
export const metadata: Metadata = { title: "AI Marketing & Automation Services for Service Businesses | AZEDOR", description: "Six connected solutions: Paid Advertising, Websites & Sales Funnels, AI Receptionists & Agents, CRM & Sales Automation, Business Process Automation and Reputation Management." };
export default function Solutions() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Solutions</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">One System. Six Parts. No Lost Leads.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">Most agencies stop after the lead. AZEDOR follows the lead from first click to booked job to review.</p></div></section>
    <section className="py-20"><div className="mx-auto grid max-w-shell gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((s, i) => (<Link key={s.slug} href={`/solutions/${s.slug}`} className="rounded-card border border-line bg-white p-6 hover:border-ink"><div className="flex items-center justify-between"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tintLime text-ink"><s.icon size={22} /></span><p className="text-xs font-bold uppercase tracking-wider text-muted">0{i + 1}</p></div><h3 className="mt-3 text-2xl font-bold">{s.name}</h3><p className="mt-2 text-muted">{s.sub}</p><span className="mt-4 inline-block text-sm font-bold">Learn more →</span></Link>))}
    </div></section>
    <CtaBanner />
  </>);
}
