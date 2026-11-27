import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, JOURNEY, SOLUTIONS, INDUSTRY_SOLUTIONS, GROUP_ACCENT } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import { FunnelDiagram, BeforeAfter, Reveal } from "@/components/Animate";
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
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GROUP_ACCENT[ind.group].main }}><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><ind.icon size={18} /></span>{ind.group} · AZEDOR</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{ind.headline}</h1>
          <div className="mt-5 h-1.5 w-20 rounded-full" style={{ backgroundColor: GROUP_ACCENT[ind.group].main }} />
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
    <section className="bg-paper py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <BeforeAfter before={ind.before} after={ind.after} />
    </div></section>
    <section className="bg-ink py-20 text-white"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead dark label="Your customer journey" title={`The ${ind.name} Customer Journey`} />
      <FunnelDiagram steps={JOURNEY.map((j, i) => {
        const indWords = [
          { purpose: `${ind.name} ads & search`, leak: "They find a competitor first." },
          { purpose: "Call, form or message", leak: "Missed call = lost customer." },
          { purpose: "Conversation & Calling AI Agents answer fast & qualify", leak: "Slow reply loses the booking." },
          { purpose: `Booked: ${ind.pipeline[2] ?? "appointment"}`, leak: "Quote sent, never followed up." },
          { purpose: "Job done, reminders sent", leak: "No reminder, no repeat visit." },
          { purpose: "Review + rebooking invite", leak: "Customer never comes back." },
        ][i];
        return { ...j, purpose: indWords.purpose, leak: indWords.leak };
      })} />
    </div></section>
    <section style={{ backgroundColor: GROUP_ACCENT[ind.group].soft }} className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Solutions" title={`Solutions for ${ind.name}`} sub={`Every solution, shaped for how a ${ind.name.toLowerCase()} business actually works — from the first ad click to the review after the job.`} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s) => (
          <Link key={s.slug} href={`/solutions/${s.slug}`} className="group rounded-card border border-line bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tintLime text-ink"><s.icon size={22} /></span>
            <h3 className="mt-3 text-xl font-bold">{s.slug === "calling-ai-agent" ? "Calling AI Agent — AI Receptionist" : s.name}</h3>
            <p className="mt-2 leading-relaxed text-muted">{INDUSTRY_SOLUTIONS[ind.slug]?.[s.slug] ?? s.sub}</p>
            <span className="mt-4 inline-block text-sm font-bold text-ink group-hover:underline">Learn more →</span>
          </Link>
        ))}
        <Link href="/free-audit" className="group rounded-card bg-ink p-6 text-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-bold">Not sure where to start?</h3>
          <p className="mt-2 leading-relaxed text-mutedDark">Get a Free Lead-Leak &amp; Automation Audit. We check your ads, reply speed, booking and follow-up — and show you the leaks in writing.</p>
          <span className="mt-4 inline-block text-sm font-bold text-lime group-hover:underline">Get Your Free Audit →</span>
        </Link>
      </div>
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Customized solutions" title={`What AZEDOR Builds for ${ind.name}`} />
      <ul className="grid gap-3 sm:grid-cols-2">{ind.solutions.map((s) => (<li key={s} className="rounded-card border border-line bg-white px-5 py-4 font-semibold">✓ {s}</li>))}</ul>
      <h3 className="mt-12 text-2xl font-bold">Your CRM pipeline</h3>
      <ol className="mt-4 flex flex-wrap items-center gap-2">{ind.pipeline.map((s, i) => (<Reveal key={s} delay={i * 0.08} className="flex items-center gap-2"><li className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold">{i + 1}. {s}</li>{i < ind.pipeline.length - 1 && <span aria-hidden className="font-bold text-lime">→</span>}</Reveal>))}</ol>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="FAQs" title={`Questions from ${ind.name} Businesses`} /><Faq items={ind.faqs} /></div>
      <div><h3 className="mb-4 text-2xl font-bold">Get your free audit</h3><AuditForm compact /></div>
    </div></section>
    <CtaBanner />
  </>);
}
