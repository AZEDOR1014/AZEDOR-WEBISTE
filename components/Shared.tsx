import Link from "next/link";
import { PhoneCall, MessageSquareText, KanbanSquare, CalendarCheck, Mail, Star } from "lucide-react";

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

export function DashboardDemo() {
  const rows = [
    { icon: PhoneCall, label: "AI receptionist", detail: "Answered 3 calls · booked 2 appointments", time: "2 min ago" },
    { icon: MessageSquareText, label: "New inquiry — Meta Ads", detail: "AC repair · qualified · in pipeline", time: "9 min ago" },
    { icon: KanbanSquare, label: "CRM pipeline", detail: "New Lead → Qualified → Visit Scheduled", time: "Live" },
    { icon: CalendarCheck, label: "Appointments today", detail: "4 confirmed · 1 rescheduled", time: "Today" },
    { icon: Mail, label: "Automated follow-up", detail: "Estimate reminder sent · opened", time: "1 h ago" },
    { icon: Star, label: "Review requests", detail: "2 requests sent after completed jobs", time: "Today" },
  ];
  return (
    <div className="rounded-card border border-lineDark bg-deep p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-lineDark pb-4">
        <p className="font-bold text-white">AZEDOR Growth System</p>
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">Live demo</span>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 rounded-xl border border-lineDark bg-ink/60 p-3">
            <r.icon className="mt-0.5 shrink-0 text-lime" size={18} />
            <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-white">{r.label}</p><p className="truncate text-xs text-mutedDark">{r.detail}</p></div>
            <span className="shrink-0 text-[11px] text-mutedDark">{r.time}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-mutedDark">Demonstration data shown for illustration. This is a mockup of the AZEDOR system, not a real client's results.</p>
    </div>
  );
}
