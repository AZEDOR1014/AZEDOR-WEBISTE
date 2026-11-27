import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import Faq from "@/components/Faq";
import AuditForm from "@/components/AuditForm";

export function generateStaticParams() { return SOLUTIONS.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = SOLUTIONS.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.name} for Service Businesses | AZEDOR`, description: s.sub };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = SOLUTIONS.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><s.icon size={18} /></span>Solution · AZEDOR Growth System</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{s.headline}</h1>
        <p className="mt-4 text-lg text-mutedDark">{s.sub}</p>
        <Link href="/free-audit" className="mt-7 inline-block rounded-btn bg-lime px-6 py-3.5 font-bold text-ink hover:bg-limeDark">Get Your Free Audit</Link>
      </div>
    </section>
    <section className="py-20"><div className="mx-auto grid max-w-shell gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="The problem" title="The Problem" /><p className="text-lg leading-relaxed text-muted">{s.problem}</p>
        <h3 className="mt-8 text-2xl font-bold">What it does</h3><p className="mt-2 leading-relaxed text-muted">{s.what}</p></div>
      <div><SectionHead label="How it works" title="How It Works" /><ol className="space-y-3">{s.how.map((h, i) => (<li key={h} className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-lime">0{i + 1} · </span>{h}</li>))}</ol></div>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell gap-10 px-4 sm:px-6 lg:grid-cols-3">
      <div><h3 className="text-xl font-bold">Industries that benefit</h3><ul className="mt-3 space-y-2 text-muted">{s.industries.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
      <div><h3 className="text-xl font-bold">Realistic use cases</h3><ul className="mt-3 space-y-2 text-muted">{s.uses.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
      <div><h3 className="text-xl font-bold">Compatible integrations</h3><ul className="mt-3 space-y-2 text-muted">{s.integrations.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
    </div></section>
    <section className="py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="FAQs" title={`Questions about ${s.name}`} /><Faq items={s.faqs} /></div>
      <div><h3 className="mb-4 text-2xl font-bold">Get your free audit</h3><AuditForm compact /></div>
    </div></section>
    <CtaBanner />
  </>);
}
