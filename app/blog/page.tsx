import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { CtaBanner } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Blog — Marketing, AI and Automation for Service Businesses | AZEDOR",
  description: "Plain, practical guides for HVAC, salon, and service businesses in the USA — missed calls, AI receptionists, client follow-up, and CRM systems that book more jobs.",
};

const TAG_STYLES: Record<string, string> = {
  HVAC: "bg-tintLime text-ink",
  Salon: "bg-tintRose text-roseDark",
  CRM: "bg-tintSky text-skyDark",
  AI: "bg-tintViolet text-violetDark",
};

export default function BlogPage() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">AZEDOR Blog</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Practical Guides for Service Businesses.</h1>
        <p className="mt-4 text-lg text-mutedDark">Plain, honest advice on missed calls, AI receptionists, client follow-up, and CRM — written for HVAC, salon, and service businesses in the USA. No jargon, no fluff. Where an article quotes published research, it names the source — see the Sources note at the end of each research article.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Missed calls", "What unanswered calls cost, and how to work out your own number."],
            ["Follow-up & no-shows", "Reminders, rebooking and CRM follow-up that bring customers back."],
            ["Reviews & reputation", "Asking every customer for a review — the right way."],
          ].map(([t, d]) => (
            <div key={t} className="card"><h2 className="text-lg font-bold">{t}</h2><p className="mt-1 text-sm leading-relaxed text-muted">{d}</p></div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <article key={p.slug} className="flex flex-col rounded-card border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${TAG_STYLES[p.tag] ?? "bg-paper text-ink"}`}>{p.tag}</span>
                <span>{p.dateLabel}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug">
                <Link href={`/blog/${p.slug}`} className="hover:text-ink/70">{p.title}</Link>
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{p.summary}</p>
              <Link href={`/blog/${p.slug}`} className="mt-5 font-bold text-ink hover:text-limeDeep">Read the article →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><h2 className="text-3xl font-extrabold leading-snug sm:text-4xl">Read It. Then Find Your Own Leaks.</h2><p className="mt-4 leading-relaxed text-muted">The guides above show the system. A free audit shows what it would find in your business — your ads, reply speed, booking and follow-up, in writing.</p><p className="mt-6"><Link href="/free-audit" className="btn btn-primary">Get Your Free Audit →</Link></p></div>
      <div className="card"><p className="font-bold">New here? Start with these two.</p><ul className="mt-3 space-y-2 text-muted"><li>→ <Link href="/blog/missed-calls-cost-hvac-companies" className="font-bold text-ink underline">Missed Calls Cost HVAC Companies More Than You Think</Link></li><li>→ <Link href="/blog/how-to-reduce-no-shows-service-businesses" className="font-bold text-ink underline">How to Reduce No-Shows for Service Businesses</Link></li></ul></div>
    </div></section>
    <CtaBanner />
  </>);
}
