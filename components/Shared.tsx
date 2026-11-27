import Link from "next/link";
import { AI_CHANNELS } from "@/lib/data";

/** One AI agent, every channel — icon + name + one plain line per channel. */
export function AiChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {AI_CHANNELS.map((c) => (
        <article key={c.name} className="rounded-card border border-line bg-white p-5 shadow-sm">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tintLime text-ink"><c.icon size={22} /></span>
          <h3 className="mt-3 text-xl font-bold">{c.name}</h3>
          <p className="mt-2 leading-relaxed text-muted">{c.line}</p>
        </article>
      ))}
      <article className="rounded-card border border-line bg-ink p-5 text-white shadow-sm">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lime">✓</span>
        <h3 className="mt-3 text-xl font-bold">One log, every channel</h3>
        <p className="mt-2 leading-relaxed text-mutedDark">Every message, from every channel, lands in one place in your CRM — so nothing is missed and a human can take over with the full history.</p>
      </article>
    </div>
  );
}

export function SectionHead({ label, title, sub, dark = false }: { label?: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      {label && <p className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-lime" : "text-ink"}`}>{label}</p>}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px] ${dark ? "text-white" : ""}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-mutedDark" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}

export function CtaBanner({ title = "Find Out Where Your Business Is Losing Opportunities.", sub = "Get a Free Lead-Leak & Automation Audit. We check your ads, reply speed, booking and follow-up — and show you the leaks in writing." }: { title?: string; sub?: string }) {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-shell px-4 text-center sm:px-6">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-mutedDark">{sub}</p>
        <Link href="/free-audit" className="mt-8 inline-block rounded-btn bg-lime px-8 py-4 font-bold text-ink hover:bg-limeDark">Get Your Free Audit</Link>
        <p className="mt-3 text-sm text-mutedDark">Customized solutions. No obligation. Built around your business.</p>
      </div>
    </section>
  );
}

