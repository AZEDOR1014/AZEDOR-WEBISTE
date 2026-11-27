import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import Faq from "@/components/Faq";
import AuditForm from "@/components/AuditForm";

export function generateStaticParams() { return INDUSTRIES.map((i) => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!ind) return {};
  return { title: `${ind.name} Marketing Agency USA — ${ind.headline}`, description: ind.sub };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!ind) notFound();
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">{ind.group} · AZEDOR</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{ind.headline}</h1>
          <p className="mt-4 text-lg text-mutedDark">{ind.sub}</p>
          <Link href="/free-audit" className="mt-7 inline-block rounded-btn bg-lime px-6 py-3.5 font-bold text-ink hover:bg-limeDark">Get Your Free Audit</Link>
        </div>
        <div className="relative h-72 overflow-hidden rounded-card sm:h-96"><Image src={ind.image} alt={`${ind.name} business`} fill className="object-cover" priority /></div>
      </div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label={`Problems in ${ind.name}`} title="The Problems That Cost You Customers" />
      <div className="grid gap-4 md:grid-cols-3">{ind.problems.map((p) => (<article key={p.title} className="rounded-card border border-line bg-white p-6"><h3 className="text-xl font-bold">{p.title}</h3><p className="mt-2 text-muted">{p.example}</p><p className="mt-3 border-t border-line pt-3 text-sm font-semibold">{p.consequence}</p></article>))}</div>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell gap-6 px-4 sm:px-6 md:grid-cols-2">
      <div className="rounded-card border border-line bg-white p-6"><p className="text-xs font-bold uppercase tracking-wider text-red-600">Before AZEDOR</p><p className="mt-3 leading-relaxed text-muted">{ind.before}</p></div>
      <div className="rounded-card border border-ink bg-ink p-6 text-white"><p className="text-xs font-bold uppercase tracking-wider text-lime">After AZEDOR</p><p className="mt-3 leading-relaxed text-mutedDark">{ind.after}</p></div>
    </div></section>
    <section className="bg-ink py-20 text-white"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead dark label="Your customer journey" title={`The ${ind.name} Customer Journey`} />
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{JOURNEY.map((j, i) => (<li key={j.stage} className="rounded-card border border-lineDark bg-deep p-5"><p className="text-xs font-bold uppercase tracking-wider text-lime">Step {i + 1} · {j.stage}</p><h3 className="mt-2 font-bold">{j.solution}</h3><p className="mt-1 text-sm text-mutedDark">{j.purpose}. {j.detail}</p></li>))}</ol>
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Customized solutions" title={`What AZEDOR Builds for ${ind.name}`} />
      <ul className="grid gap-3 sm:grid-cols-2">{ind.solutions.map((s) => (<li key={s} className="rounded-card border border-line bg-white px-5 py-4 font-semibold">✓ {s}</li>))}</ul>
      <h3 className="mt-12 text-2xl font-bold">Your CRM pipeline</h3>
      <ol className="mt-4 flex flex-wrap gap-2">{ind.pipeline.map((s, i) => (<li key={s} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold">{i + 1}. {s}</li>))}</ol>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="FAQs" title={`Questions from ${ind.name} Businesses`} /><Faq items={ind.faqs} /></div>
      <div><h3 className="mb-4 text-2xl font-bold">Get your free audit</h3><AuditForm compact /></div>
    </div></section>
    <CtaBanner />
  </>);
}
