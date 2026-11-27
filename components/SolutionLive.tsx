"use client";
import { useEffect, useState, type ReactNode } from "react";
import { Megaphone, Globe, PhoneCall, KanbanSquare, Workflow, Star, Check, Send, Clock, MessageCircle, Camera, Play, RotateCcw, User, PhoneIncoming } from "lucide-react";

/**
 * Live, working panels for the 7 solution pages — examples only.
 * Every panel runs in a FIXED-HEIGHT panel: numbers, colours and opacity
 * change, but no element is added, removed or resized, so nothing on the
 * page jumps up or down (same stability rule as the hero fix).
 */

function LiveShell({ title, children, height = "h-[360px]" }: { title: string; children: ReactNode; height?: string }) {
  return (
    <div className={`overflow-hidden rounded-card border border-lineDark bg-deep p-5 text-white shadow-xl ${height}`}>
      <div className="flex h-8 items-center justify-between border-b border-lineDark pb-3">
        <p className="font-bold">{title}</p>
        <span className="flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ink" /> Live
        </span>
      </div>
      <p className="mt-2 text-[11px] text-mutedDark">Live — an example of how the system works. Not a real client&apos;s results.</p>
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
function AdsLive() {
  const [spend, setSpend] = useState(128.4);
  const [leads, setLeads] = useState(23);
  useTicker(3000, () => { setSpend((s) => +(s + 1.7).toFixed(1)); setLeads((l) => l + (Math.random() > 0.5 ? 1 : 0)); });
  const cpl = (spend / Math.max(leads, 1)).toFixed(2);
  const bars = [42, 68, 55, 80, 64, 92, 74];
  return (
    <LiveShell title="Paid Advertising — live ads dashboard">
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
      <p className="mt-3 truncate text-xs text-mutedDark">An ad: &ldquo;AC not cooling? Same-day repair in your city — book a free check.&rdquo; · Meta Ads · updating every few seconds</p>
    </LiveShell>
  );
}

/* --- 2. Websites & Sales Funnels: live funnel + mini lead form --- */
function FunnelLive() {
  const [counts, setCounts] = useState([148, 62, 21]);
  const [sent, setSent] = useState(false);
  useTicker(3000, () => setCounts(([a, b, c]) => [a + 3, b + 1, c + (Math.random() > 0.6 ? 1 : 0)]));
  const stages = [["Attract — ad clicks", counts[0], "#F59E0B"], ["Capture — form visits", counts[1], "#0EA5E9"], ["Convert — bookings", counts[2], "#C3F75D"]] as const;
  return (
    <LiveShell title="Websites & Funnels — live funnel">
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
          <p className="flex items-center gap-2 text-sm font-bold text-lime"><Check size={18} /> Thank you — this was a try-out. No real lead was sent.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input required placeholder="Your name" aria-label="Your name" className="h-11 flex-1 rounded-lg border border-lineDark bg-deep px-3 text-sm text-white placeholder:text-mutedDark" />
            <input required type="email" placeholder="Email" aria-label="Email" className="h-11 flex-1 rounded-lg border border-lineDark bg-deep px-3 text-sm text-white placeholder:text-mutedDark" />
            <button type="submit" className="h-11 rounded-lg bg-lime px-4 text-sm font-bold text-ink">Try the form</button>
          </form>
        )}
        <p className="mt-2 text-[11px] text-mutedDark">Try-out form — nothing is sent anywhere.</p>
      </div>
    </LiveShell>
  );
}

/* --- 3. Conversation AI Agent: live chat panel across channels --- */
const AI_CHATS = [
  {
    channel: "Website chat", icon: Globe,
    messages: [
      { who: "Visitor", text: "Hi — do you have any slots this week?" },
      { who: "AI", text: "Yes — Thursday and Friday are open. Which day works for you?" },
      { who: "Visitor", text: "Thursday, please." },
      { who: "AI", text: "Booked — Thursday, 10am. You will get a reminder the day before." },
    ],
    booked: "Appointment booked — Thursday, 10am",
  },
  {
    channel: "WhatsApp", icon: MessageCircle,
    messages: [
      { who: "Caller", text: "Hi — my AC just stopped working." },
      { who: "AI", text: "Sorry to hear that. Is anyone at home now, and is this an emergency?" },
      { who: "Caller", text: "Yes, we're home. It's urgent." },
      { who: "AI", text: "Booked — tomorrow, 9–11am. A technician will call to confirm." },
    ],
    booked: "Appointment booked — tomorrow, 9–11am",
  },
  {
    channel: "Instagram DM", icon: Camera,
    messages: [
      { who: "Visitor", text: "Hi! How much is a cut and colour?" },
      { who: "AI", text: "Prices depend on the service — I can book you in and the salon will confirm the price. Which day suits you?" },
      { who: "Visitor", text: "Saturday morning?" },
      { who: "AI", text: "Booked — Saturday, 10am. See you then." },
    ],
    booked: "Appointment booked — Saturday, 10am",
  },
];
function ConversationLive() {
  const [chatIdx, setChatIdx] = useState(0);
  const [shown, setShown] = useState(1);
  const chat = AI_CHATS[chatIdx];
  useEffect(() => {
    const t = setInterval(() => {
      setShown((c) => {
        if (c < AI_CHATS[chatIdx].messages.length) return c + 1;
        setChatIdx((i) => (i + 1) % AI_CHATS.length);
        return 1;
      });
    }, 2000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatIdx]);
  const ChannelIcon = chat.icon;
  return (
    <LiveShell title="Conversation AI Agent — live chat">
      <p className="flex h-[24px] items-center gap-2 text-xs font-bold text-white">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime/15 text-lime"><ChannelIcon size={13} /></span>
        Channel: {chat.channel} <span className="font-normal text-mutedDark">· the same AI agent answers here too</span>
      </p>
      <div className="mt-2 flex h-[200px] flex-col justify-between gap-2">
        {chat.messages.map((m, i) => (
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
        {shown >= chat.messages.length ? (<><Check size={16} /> {chat.booked}</>) : (<><span className="flex gap-1"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /></span> AI is typing…</>)}
      </p>
    </LiveShell>
  );
}

/* --- 3b. Calling AI Agent: live two-person phone call panel --- */
const CALL_LINES = [
  { who: "caller", text: "Hi — my AC just stopped working." },
  { who: "ai", text: "I'm sorry to hear that. This is AZEDOR's AI assistant, for your local HVAC business. Is anyone at home now?" },
  { who: "caller", text: "Yes, we're home. It's urgent — it's so hot in here." },
  { who: "ai", text: "Understood — I will treat this as urgent. What is the best number for the technician to call?" },
  { who: "caller", text: "It's the number I'm calling from." },
  { who: "ai", text: "Booked — tomorrow, 9–11am. A technician will call to confirm." },
];
const CALL_STATUSES = ["Ringing", "Answered", "Answered", "Booking", "Booking", "Booked"];
function CallingLive() {
  const [playing, setPlaying] = useState(false);
  const [shown, setShown] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const done = shown >= CALL_LINES.length;
  useEffect(() => {
    if (!playing || done) return;
    const t = setInterval(() => setShown((c) => Math.min(c + 1, CALL_LINES.length)), 2200);
    return () => clearInterval(t);
  }, [playing, done]);
  useEffect(() => {
    if (!playing || done) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [playing, done]);
  const status = !playing && shown === 0 ? "Ringing" : CALL_STATUSES[Math.max(shown - 1, 0)];
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const start = () => { setShown(0); setSeconds(0); setPlaying(true); };
  return (
    <LiveShell title="Calling AI Agent — live phone call">
      <div className="flex h-[56px] items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-2">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"><User size={18} /></span>
          <span><span className="block text-sm font-bold">Sarah — Caller</span><span className="block text-[11px] text-mutedDark">Customer, calling from home</span></span>
        </div>
        <span className="flex items-center gap-1 text-xs font-bold text-lime"><PhoneIncoming size={14} /> {playing && !done ? "On the call" : done ? "Call ended" : "Incoming call"}</span>
        <div className="flex flex-1 items-center justify-end gap-2">
          <span className="text-right"><span className="block text-sm font-bold">AI Agent</span><span className="block text-[11px] text-mutedDark">Voice receptionist</span></span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime"><PhoneCall size={18} /></span>
        </div>
      </div>
      <div className="mt-2 flex h-[148px] flex-col justify-start gap-2 overflow-hidden">
        {CALL_LINES.map((m, i) => (
          <p
            key={m.text}
            style={{ opacity: i < shown ? 1 : 0, transition: "opacity 0.5s ease" }}
            className={`max-w-[92%] rounded-xl px-3 py-1.5 text-xs leading-relaxed ${m.who === "ai" ? "bg-lime/15 text-lime" : "ml-auto bg-white/10 text-white"}`}
          >
            <strong>{m.who === "ai" ? "AI Agent: " : "Sarah: "}</strong>{m.text}
          </p>
        ))}
        {shown === 0 && <p className="py-2 text-center text-xs text-mutedDark">Press play to hear a live call — a typed transcript, played in real time.</p>}
      </div>
      <div className="mt-3 flex h-[40px] items-center justify-between gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">Status: <span className="text-lime">{status}</span></span>
        <span className="flex items-center gap-1.5 text-sm font-bold tabular-nums"><Clock size={14} className="text-lime" /> {mm}:{ss}</span>
        {done ? (
          <button onClick={start} className="flex h-10 items-center gap-1.5 rounded-lg bg-lime px-4 text-sm font-bold text-ink"><RotateCcw size={15} /> Replay the call</button>
        ) : (
          <button onClick={start} disabled={playing} className="flex h-10 items-center gap-1.5 rounded-lg bg-lime px-4 text-sm font-bold text-ink disabled:opacity-60"><Play size={15} /> {playing ? "Call playing…" : "Hear a live call"}</button>
        )}
      </div>
    </LiveShell>
  );
}

/* --- 4. CRM & Sales Automation: live pipeline panel --- */
const STAGES = ["New", "Contacted", "Qualified", "Booked", "Won"];
const LEADS = ["A. Smith — AC repair", "B. Jones — Boiler service", "C. Lee — Salon booking", "D. Patel — Dental checkup"];
function CrmLive() {
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
    <LiveShell title="CRM & Sales Automation — live pipeline">
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
        <Send size={14} className="text-lime" /> Follow-up emails sent automatically here: <strong className="text-white">{sentCount}</strong>
      </p>
    </LiveShell>
  );
}

/* --- 5. Business Process Automation: live workflow panel --- */
const WF_STEPS = ["Trigger — new booking", "Assign — technician notified", "Notify — customer SMS sent", "Done — job scheduled"];
function WorkflowLive() {
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
    <LiveShell title="Business Process Automation — live workflow">
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
        {step >= WF_STEPS.length ? "Workflow complete — next job starts automatically." : `Step ${step + 1} of ${WF_STEPS.length} running…`}
      </p>
    </LiveShell>
  );
}

/* --- 6. Reputation Management: live review panel --- */
const REVIEW_POOL = [
  { name: "Sarah M.", text: "Fast, friendly and fixed the same day." },
  { name: "James R.", text: "Great service from start to finish." },
  { name: "Amina K.", text: "Booked online, technician arrived on time." },
  { name: "Tom W.", text: "Clear price, no surprises. Very happy." },
  { name: "Priya S.", text: "Best salon visit I have had in years." },
];
function ReviewsLive() {
  const [idx, setIdx] = useState(0);
  const [replied, setReplied] = useState(1);
  useEffect(() => {
    const t = setInterval(() => { setIdx((i) => (i + 1) % REVIEW_POOL.length); setReplied((n) => n + 1); }, 3500);
    return () => clearInterval(t);
  }, []);
  const shown = [REVIEW_POOL[idx], REVIEW_POOL[(idx + 1) % REVIEW_POOL.length], REVIEW_POOL[(idx + 2) % REVIEW_POOL.length]];
  return (
    <LiveShell title="Reputation Management — live review">
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
        <Check size={14} className="text-lime" /> Automatic thank-you replies sent here: <strong className="text-white">{replied}</strong>
      </p>
    </LiveShell>
  );
}

const LIVE_PANELS: Record<string, { icon: typeof Megaphone; name: string; el: () => ReactNode }> = {
  "paid-advertising": { icon: Megaphone, name: "Paid Advertising", el: () => <AdsLive /> },
  "websites-funnels": { icon: Globe, name: "Websites & Funnels", el: () => <FunnelLive /> },
  "conversation-ai-agent": { icon: MessageCircle, name: "Conversation AI Agent", el: () => <ConversationLive /> },
  "calling-ai-agent": { icon: PhoneCall, name: "Calling AI Agent", el: () => <CallingLive /> },
  "crm-sales-automation": { icon: KanbanSquare, name: "CRM & Sales Automation", el: () => <CrmLive /> },
  "business-process-automation": { icon: Workflow, name: "Business Process Automation", el: () => <WorkflowLive /> },
  "reputation-management": { icon: Star, name: "Reputation Management", el: () => <ReviewsLive /> },
};

/** Live panel for one solution, by slug. Fixed height — nothing jumps. */
export default function SolutionLive({ slug }: { slug: string }) {
  const d = LIVE_PANELS[slug];
  if (!d) return null;
  return <div>{d.el()}</div>;
}

/** Tabbed panel with all seven live panels, for the solutions overview page. */
export function AllSolutionLives() {
  const [slug, setSlug] = useState("paid-advertising");
  const keys = Object.keys(LIVE_PANELS);
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {keys.map((k) => {
          const I = LIVE_PANELS[k].icon;
          return (
            <button key={k} onClick={() => setSlug(k)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${slug === k ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>
              <I size={16} /> {LIVE_PANELS[k].name}
            </button>
          );
        })}
      </div>
      <SolutionLive slug={slug} />
    </div>
  );
}
