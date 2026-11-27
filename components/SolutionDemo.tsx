"use client";
import { useEffect, useState, type ReactNode } from "react";
import { Megaphone, Globe, PhoneCall, KanbanSquare, Workflow, Star, Check, Send, Clock } from "lucide-react";

/**
 * Live, working demos for the 6 solution pages — demonstration data only.
 * Every demo runs in a FIXED-HEIGHT panel: numbers, colours and opacity
 * change, but no element is added, removed or resized, so nothing on the
 * page jumps up or down (same stability rule as the hero fix).
 */

function DemoShell({ title, children, height = "h-[360px]" }: { title: string; children: ReactNode; height?: string }) {
  return (
    <div className={`overflow-hidden rounded-card border border-lineDark bg-deep p-5 text-white shadow-xl ${height}`}>
      <div className="flex h-8 items-center justify-between border-b border-lineDark pb-3">
        <p className="font-bold">{title}</p>
        <span className="flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ink" /> Live demo
        </span>
      </div>
      <p className="mt-2 text-[11px] text-mutedDark">Live demo — demonstration data. This is a mockup, not a real client&apos;s results.</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function useTicker(ms: number, fn: (n: number) => void) {
  useEffect(() => {
    const t = setInterval(() => fn(1), ms);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms]);
}

/* --- 1. Paid Advertising: live ads dashboard --- */
function AdsDemo() {
  const [spend, setSpend] = useState(128.4);
  const [leads, setLeads] = useState(23);
  useTicker(3000, () => { setSpend((s) => +(s + 1.7).toFixed(1)); setLeads((l) => l + (Math.random() > 0.5 ? 1 : 0)); });
  const cpl = (spend / Math.max(leads, 1)).toFixed(2);
  const bars = [42, 68, 55, 80, 64, 92, 74];
  return (
    <DemoShell title="Paid Advertising — live ads dashboard">
      <div className="grid grid-cols-3 gap-3">
        {[["Ad spend today", `$${spend.toFixed(1)}`], ["Leads today", `${leads}`], ["Cost per lead", `$${cpl}`]].map(([l, v]) => (
          <div key={l} className="h-[64px] rounded-xl border border-lineDark bg-ink/60 px-3 py-2">
            <p className="text-[11px] text-mutedDark">{l}</p>
            <p className="text-xl font-extrabold text-lime">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-[150px] items-end gap-2 rounded-xl border border-lineDark bg-ink/60 p-3">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-lime/80 transition-all duration-500" style={{ height: `${h}%`, opacity: 0.5 + (i % 3) * 0.2 }} />
        ))}
      </div>
      <p className="mt-3 truncate text-xs text-mutedDark">Sample ad: &ldquo;AC not cooling? Same-day repair in your city — book a free check.&rdquo; · Meta Ads · updating every few seconds</p>
    </DemoShell>
  );
}

/* --- 2. Websites & Sales Funnels: live funnel + mini lead form --- */
function FunnelDemo() {
  const [counts, setCounts] = useState([148, 62, 21]);
  const [sent, setSent] = useState(false);
  useTicker(3000, () => setCounts(([a, b, c]) => [a + 3, b + 1, c + (Math.random() > 0.6 ? 1 : 0)]));
  const stages = [["Attract — ad clicks", counts[0], "#F59E0B"], ["Capture — form visits", counts[1], "#0EA5E9"], ["Convert — bookings", counts[2], "#C3F75D"]] as const;
  return (
    <DemoShell title="Websites & Funnels — live funnel demo">
      <div className="space-y-2">
        {stages.map(([label, n, color], i) => (
          <div key={label} className="flex h-[40px] items-center justify-between rounded-xl border border-lineDark bg-ink/60 px-3">
            <span className="text-sm font-semibold">{i + 1}. {label}</span>
            <span className="text-lg font-extrabold" style={{ color }}>{n}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-[120px] flex-col justify-center rounded-xl border border-lineDark bg-ink/60 p-3">
        {sent ? (
          <p className="flex items-center gap-2 text-sm font-bold text-lime"><Check size={18} /> Thank you — demo only. No real lead was sent.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input required placeholder="Your name (demo)" aria-label="Your name" className="h-11 flex-1 rounded-lg border border-lineDark bg-deep px-3 text-sm text-white placeholder:text-mutedDark" />
            <input required type="email" placeholder="Email (demo)" aria-label="Email" className="h-11 flex-1 rounded-lg border border-lineDark bg-deep px-3 text-sm text-white placeholder:text-mutedDark" />
            <button type="submit" className="h-11 rounded-lg bg-lime px-4 text-sm font-bold text-ink">Try the form</button>
          </form>
        )}
        <p className="mt-2 text-[11px] text-mutedDark">Demo form — nothing is sent anywhere.</p>
      </div>
    </DemoShell>
  );
}

/* --- 3. AI Receptionists & Agents: live chat demo --- */
const AI_CHAT = [
  { who: "Caller", text: "Hi — my AC just stopped working." },
  { who: "AI", text: "Sorry to hear that. Is anyone at home now, and is this an emergency?" },
  { who: "Caller", text: "Yes, we're home. It's urgent." },
  { who: "AI", text: "Booked — tomorrow, 9–11am. A technician will call to confirm." },
];
function AiDemo() {
  const [shown, setShown] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setShown((c) => (c >= AI_CHAT.length ? 1 : c + 1)), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <DemoShell title="AI Receptionist — live chat demo">
      <div className="flex h-[232px] flex-col justify-between gap-2">
        {AI_CHAT.map((m, i) => (
          <p
            key={m.text}
            style={{ opacity: i < shown ? 1 : 0, transition: "opacity 0.5s ease" }}
            className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${m.who === "AI" ? "bg-lime/15 text-lime" : "ml-auto bg-white/10 text-white"}`}
          >
            <strong>{m.who}: </strong>{m.text}
          </p>
        ))}
      </div>
      <p className="mt-3 flex h-[24px] items-center gap-2 text-sm font-bold text-lime">
        {shown >= AI_CHAT.length ? (<><Check size={16} /> Appointment booked — tomorrow, 9–11am (demo)</>) : (<><span className="flex gap-1"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /></span> AI is typing…</>)}
      </p>
    </DemoShell>
  );
}

/* --- 4. CRM & Sales Automation: live pipeline demo --- */
const STAGES = ["New", "Contacted", "Qualified", "Booked", "Won"];
const LEADS = ["A. Smith — AC repair", "B. Jones — Boiler service", "C. Lee — Salon booking", "D. Patel — Dental checkup"];
function CrmDemo() {
  const [pos, setPos] = useState([0, 1, 2, 3]);
  const [sentCount, setSentCount] = useState(2);
  useEffect(() => {
    const t = setInterval(() => {
      setPos((p) => p.map((x) => (x + 1) % STAGES.length));
      setSentCount((n) => n + 1);
    }, 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <DemoShell title="CRM & Sales Automation — live pipeline demo">
      <div className="grid h-[190px] grid-cols-5 gap-2">
        {STAGES.map((s, si) => (
          <div key={s} className="rounded-xl border border-lineDark bg-ink/60 p-2">
            <p className="h-5 text-center text-[11px] font-bold text-mutedDark">{s}</p>
            <div className="mt-2 space-y-2">
              {LEADS.filter((_, li) => pos[li] === si).map((l) => (
                <p key={l} className="rounded-lg bg-lime/15 px-2 py-1.5 text-[11px] font-semibold leading-tight text-lime">{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 flex h-[24px] items-center gap-2 text-xs text-mutedDark">
        <Send size={14} className="text-lime" /> Follow-up emails sent automatically in this demo: <strong className="text-white">{sentCount}</strong>
      </p>
    </DemoShell>
  );
}

/* --- 5. Business Process Automation: live workflow demo --- */
const WF_STEPS = ["Trigger — new booking", "Assign — technician notified", "Notify — customer SMS sent", "Done — job scheduled"];
function WorkflowDemo() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState("09:41:02");
  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % (WF_STEPS.length + 1));
      setTime(new Date().toLocaleTimeString("en-GB"));
    }, 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <DemoShell title="Business Process Automation — live workflow demo">
      <div className="flex h-[232px] flex-col justify-between gap-2">
        {WF_STEPS.map((s, i) => (
          <div key={s} className="flex h-[52px] items-center gap-3 rounded-xl border border-lineDark bg-ink/60 px-3">
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${i < step ? "bg-lime text-ink" : i === step ? "bg-white/20 text-white" : "bg-white/5 text-mutedDark"}`}>
              {i < step ? <Check size={14} /> : i + 1}
            </span>
            <span className="flex-1 text-sm font-semibold">{s}</span>
            <span className="flex items-center gap-1 text-[11px] text-mutedDark"><Clock size={12} /> {i < step ? time : "—"}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 flex h-[24px] items-center text-xs text-mutedDark">
        {step >= WF_STEPS.length ? "Workflow complete — next job starts automatically (demo)." : `Step ${step + 1} of ${WF_STEPS.length} running… (demo)`}
      </p>
    </DemoShell>
  );
}

/* --- 6. Reputation Management: live review demo --- */
const REVIEW_POOL = [
  { name: "Sarah M.", text: "Fast, friendly and fixed the same day." },
  { name: "James R.", text: "Great service from start to finish." },
  { name: "Amina K.", text: "Booked online, technician arrived on time." },
  { name: "Tom W.", text: "Clear price, no surprises. Very happy." },
  { name: "Priya S.", text: "Best salon visit I have had in years." },
];
function ReviewsDemo() {
  const [idx, setIdx] = useState(0);
  const [replied, setReplied] = useState(1);
  useEffect(() => {
    const t = setInterval(() => { setIdx((i) => (i + 1) % REVIEW_POOL.length); setReplied((n) => n + 1); }, 3500);
    return () => clearInterval(t);
  }, []);
  const shown = [REVIEW_POOL[idx], REVIEW_POOL[(idx + 1) % REVIEW_POOL.length], REVIEW_POOL[(idx + 2) % REVIEW_POOL.length]];
  return (
    <DemoShell title="Reputation Management — live review demo">
      <div className="flex h-[232px] flex-col justify-between gap-2">
        {shown.map((r) => (
          <div key={r.name + r.text} className="flex h-[70px] items-center gap-3 rounded-xl border border-lineDark bg-ink/60 px-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime"><Star size={16} /></span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{r.name} <span className="text-amber-400">★★★★★</span></p>
              <p className="truncate text-xs text-mutedDark">&ldquo;{r.text}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 flex h-[24px] items-center gap-2 text-xs text-mutedDark">
        <Check size={14} className="text-lime" /> Automatic thank-you replies sent in this demo: <strong className="text-white">{replied}</strong>
      </p>
    </DemoShell>
  );
}

const DEMOS: Record<string, { icon: typeof Megaphone; name: string; el: () => ReactNode }> = {
  "paid-advertising": { icon: Megaphone, name: "Paid Advertising", el: () => <AdsDemo /> },
  "websites-funnels": { icon: Globe, name: "Websites & Funnels", el: () => <FunnelDemo /> },
  "ai-receptionists-agents": { icon: PhoneCall, name: "AI Receptionists & Agents", el: () => <AiDemo /> },
  "crm-sales-automation": { icon: KanbanSquare, name: "CRM & Sales Automation", el: () => <CrmDemo /> },
  "business-process-automation": { icon: Workflow, name: "Business Process Automation", el: () => <WorkflowDemo /> },
  "reputation-management": { icon: Star, name: "Reputation Management", el: () => <ReviewsDemo /> },
};

/** Live demo panel for one solution, by slug. Fixed height — nothing jumps. */
export default function SolutionDemo({ slug }: { slug: string }) {
  const d = DEMOS[slug];
  if (!d) return null;
  return <div>{d.el()}</div>;
}

/** Tabbed panel with all six demos, for the solutions overview page. */
export function AllSolutionDemos() {
  const [slug, setSlug] = useState("paid-advertising");
  const keys = Object.keys(DEMOS);
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {keys.map((k) => {
          const I = DEMOS[k].icon;
          return (
            <button key={k} onClick={() => setSlug(k)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${slug === k ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>
              <I size={16} /> {DEMOS[k].name}
            </button>
          );
        })}
      </div>
      <SolutionDemo slug={slug} />
    </div>
  );
}
