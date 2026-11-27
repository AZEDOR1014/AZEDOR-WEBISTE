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
        <p className="mt-4 text-lg text-mutedDark">Plain, honest advice on missed calls, AI receptionists, client follow-up, and CRM — written for HVAC, salon, and service businesses in the USA. No jargon, no fluff.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
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
              <Link href={`/blog/${p.slug}`} className="mt-5 font-bold text-ink hover:text-limeDark">Read the article →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner />
  </>);
}
