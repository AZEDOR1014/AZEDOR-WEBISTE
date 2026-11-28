import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner, AiChannels } from "@/components/Shared";
import SolutionLive from "@/components/SolutionLive";
import ConversationDiagram from "@/components/ConversationDiagram";
import Faq from "@/components/Faq";
import AuditForm from "@/components/AuditForm";

export function generateStaticParams() { return SOLUTIONS.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = SOLUTIONS.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.name} for Service Businesses | AZEDOR`, description: s.sub };
}

/** Which stage of the six-stage Growth System this solution serves. */
const STAGE_FOR_SLUG: Record<string, number> = {
  "paid-advertising": 0,
  "websites-funnels": 1,
  "conversation-ai-agent": 2,
  "calling-ai-agent": 2,
  "crm-sales-automation": 3,
  "business-process-automation": 4,
  "reputation-management": 5,
};

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = SOLUTIONS.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const stage = JOURNEY[STAGE_FOR_SLUG[s.slug] ?? 0];
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><s.icon size={18} /></span>Solution · AZEDOR Growth System</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{s.headline}</h1>
        <p className="mt-4 text-lg text-mutedDark">{s.sub}</p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-lineDark bg-deep px-4 py-2 text-sm font-semibold text-white">Growth System stage: <span className="text-lime">{stage.stage}</span> — {stage.purpose}</p>
        <div><Link href="/free-audit" className="btn btn-primary mt-7">Get Your Free Audit</Link></div>
      </div>
    </section>
    <section className="bg-paper py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead label="Interactive demonstration" title="See It Working — Interactive Demonstration." sub="Try the interactive demonstration below — an illustrative example of how this solution works, not a real client's live data." />
      <div className="mx-auto max-w-3xl"><SolutionLive slug={s.slug} /></div>
    </div></section>
    {s.slug === "conversation-ai-agent" && (
      <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHead label="Every channel" title="One Conversation AI Agent. Every Channel." sub="Your customers message wherever they are. The Conversation AI Agent is built to answer on all of them — in your business name, with one log in your CRM, and human handover whenever it should." />
        <AiChannels />
      </div></section>
    )}
    {s.slug === "conversation-ai-agent" && (
      <section className="bg-paper py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHead label="How it connects" title="Messages From Every Channel Land in One Place." sub="A customer messages on any channel. The Conversation AI Agent is built to answer, qualify them and book the appointment — straight into your calendar." />
        <ConversationDiagram />
      </div></section>
    )}
    {s.slug === "calling-ai-agent" && (
      <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHead label="On every call" title="What Happens on a Call." sub="The same steps, every time — so callers are handled the same way, and the details are logged." />
        <ol className="grid gap-4 sm:grid-cols-2">
          {["Answers in your business name, around the clock, with human handover.", "Takes the caller's name, number and what they need.", "Asks if it is urgent, and follows the rules you set.", "Qualifies the caller and books the appointment.", "Logs the call in your CRM, with the details attached.", "Hands over to your team whenever the caller asks — or the question needs a human."].map((t, i) => (
            <li key={t} className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">0{i + 1} · </span>{t}</li>
          ))}
        </ol>
      </div></section>
    )}
    <section className="py-20"><div className="mx-auto grid max-w-shell gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="The problem" title="The Problem" /><p className="text-lg leading-relaxed text-muted">{s.problem}</p>
        <h3 className="mt-8 text-2xl font-bold">What it does</h3><p className="mt-2 leading-relaxed text-muted">{s.what}</p></div>
      <div><SectionHead label="How it works" title="How It Works" /><ol className="space-y-3">{s.how.map((h, i) => (<li key={h} className="rounded-card border border-line bg-white px-5 py-4"><span className="font-extrabold text-limeDeep">0{i + 1} · </span>{h}</li>))}</ol></div>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell gap-10 px-4 sm:px-6 lg:grid-cols-3">
      <div><h2 className="text-2xl font-bold">Industries that benefit</h2><ul className="mt-3 space-y-2 text-muted">{s.industries.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
      <div><h2 className="text-2xl font-bold">Realistic use cases</h2><ul className="mt-3 space-y-2 text-muted">{s.uses.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
      <div><h2 className="text-2xl font-bold">Compatible integrations</h2><ul className="mt-3 space-y-2 text-muted">{s.integrations.map((x) => (<li key={x}>✓ {x}</li>))}</ul></div>
    </div></section>
    <section className="py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <div><SectionHead label="FAQs" title={`Questions about ${s.name}`} /><Faq items={s.faqs} /></div>
      <div><h3 className="mb-4 text-2xl font-bold">Get your free audit</h3><AuditForm compact /></div>
    </div></section>
    <CtaBanner />
  </>);
}
