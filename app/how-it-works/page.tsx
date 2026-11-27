import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/Shared";
export const metadata: Metadata = { title: "How It Works | AZEDOR", description: "From first call to booked jobs in 4 steps: Discover, Design, Implement, Optimize." };
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">From First Call to Booked Jobs in 4 Steps.</h1></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed"><ol className="space-y-6">
<li><h2 className="text-2xl font-bold">1. Discover</h2><p>We understand your business, your customer journey and your problems. This starts with your Free Lead-Leak &amp; Automation Audit.</p></li>
<li><h2 className="text-2xl font-bold">2. Design</h2><p>We create a customized marketing and automation strategy — in writing, with scope and timeline before you commit.</p></li>
<li><h2 className="text-2xl font-bold">3. Implement</h2><p>We build and integrate the required systems: ads, website, AI agent, CRM and follow-up. We test with you before anything goes live.</p></li>
<li><h2 className="text-2xl font-bold">4. Optimize</h2><p>We monitor performance, improve workflows and provide support after launch.</p></li>
</ol><p className="mt-8"><Link href="/free-audit" className="rounded-btn bg-lime px-6 py-3 font-bold text-ink">Get Your Free Audit →</Link></p></div></section>
    <CtaBanner />
  </>);
}
