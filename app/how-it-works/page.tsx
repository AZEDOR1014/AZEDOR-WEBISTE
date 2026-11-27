import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner, SectionHead } from "@/components/Shared";
import { ProcessSteps, FunnelDiagram } from "@/components/Animate";
import { JOURNEY } from "@/lib/data";
export const metadata: Metadata = { title: "How It Works | AZEDOR", description: "From first call to booked jobs in 4 steps: Discover, Design, Implement, Optimize." };
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">From First Call to Booked Jobs in 4 Steps.</h1></div></section>
    <section className="bg-tintTeal py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="The lead flow" title="How a Visitor Becomes a Customer" sub="The funnel behind every AZEDOR system — and what leaks at each stage." />
      <FunnelDiagram steps={JOURNEY} dark={false} />
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Our process" title="How We Build It" />
      <ProcessSteps steps={[
        { n: "1", title: "Discover", text: "Your business, customer journey and problems — starting with your free audit." },
        { n: "2", title: "Design", text: "A customized strategy in writing, with scope and timeline before you commit." },
        { n: "3", title: "Implement", text: "Ads, website, Conversation and Calling AI Agents, CRM and follow-up — built, integrated and tested with you." },
        { n: "4", title: "Optimize", text: "Performance monitored, workflows improved, support after launch." },
      ]} />
      <p className="mt-12"><Link href="/free-audit" className="rounded-btn bg-lime px-6 py-3 font-bold text-ink">Get Your Free Audit →</Link></p>
    </div></section>
    <CtaBanner />
  </>);
}
