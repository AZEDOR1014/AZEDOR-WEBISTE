"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall, MessageSquareText, KanbanSquare, CalendarCheck, Mail, Star } from "lucide-react";
import { Tilt } from "./Animate";

// Status colours: teal = engaged, sky = new, lime = booked/good, violet = scheduled, amber = waiting, rose = at risk.
const ROWS = [
  { icon: PhoneCall, label: "AI receptionist", detail: "Answered 3 calls · booked 2 appointments", time: "2 min ago", dot: "#14B8A6" },
  { icon: MessageSquareText, label: "New inquiry — Meta Ads", detail: "AC repair · qualified · in pipeline", time: "9 min ago", dot: "#0EA5E9" },
  { icon: KanbanSquare, label: "CRM pipeline", detail: "New Lead → Qualified → Visit Scheduled", time: "Live", dot: "#C3F75D" },
  { icon: CalendarCheck, label: "Appointments today", detail: "4 confirmed · 1 rescheduled", time: "Today", dot: "#8B7CF6" },
  { icon: Mail, label: "Automated follow-up", detail: "Estimate reminder sent · opened", time: "1 h ago", dot: "#F59E0B" },
  { icon: Star, label: "Review requests", detail: "2 requests sent after completed jobs", time: "Today", dot: "#FB7185" },
];

const CHAT = [
  { who: "Caller", text: "Hi — my AC just stopped working." },
  { who: "AI", text: "Sorry to hear that. Is anyone at home now, and is this an emergency?" },
  { who: "Caller", text: "Yes, we're home. It's urgent." },
  { who: "AI", text: "Booked — tomorrow, 9–11am. A technician will call to confirm." },
];

/** Interactive hero dashboard: pipeline rows light up in sequence, AI chat types itself. */
export default function DashboardDemo() {
  const [active, setActive] = useState(0);
  const [chatCount, setChatCount] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % ROWS.length), 1800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setChatCount((c) => (c >= CHAT.length ? 1 : c + 1)), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <Tilt className="rounded-card border border-lineDark bg-deep p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-lineDark pb-4">
        <p className="font-bold text-white">AZEDOR Growth System</p>
        <span className="flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
          <motion.span className="h-2 w-2 rounded-full bg-ink" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
          Live demo
        </span>
      </div>
      {/* AI chat, animating one message at a time */}
      <div className="mt-4 space-y-2 rounded-xl border border-lineDark bg-ink/60 p-3" aria-label="AI receptionist demo chat">
        <AnimatePresence mode="popLayout">
          {CHAT.slice(0, chatCount).map((m) => (
            <motion.p
              key={m.text}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${m.who === "AI" ? "bg-lime/15 text-lime" : "ml-auto bg-white/10 text-white"}`}
            >
              <strong>{m.who}: </strong>{m.text}
            </motion.p>
          ))}
        </AnimatePresence>
        {chatCount < CHAT.length && (
          <p className="flex gap-1 px-1" aria-hidden>
            {[0, 1, 2].map((d) => (
              <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-mutedDark" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />
            ))}
          </p>
        )}
      </div>
      {/* Pipeline rows lighting up in sequence */}
      <div className="mt-3 space-y-2">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.label}
            animate={active === i ? { borderColor: r.dot, backgroundColor: "rgba(255,255,255,0.06)" } : { borderColor: "#303831", backgroundColor: "rgba(16,18,17,0.6)" }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-3 rounded-xl border p-3"
          >
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: r.dot }} aria-hidden />
            <r.icon className="mt-0.5 shrink-0 text-lime" size={18} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">{r.label}</p>
              <p className="truncate text-xs text-mutedDark">{r.detail}</p>
            </div>
            <span className="shrink-0 text-[11px] text-mutedDark">{r.time}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-mutedDark">Demonstration data shown for illustration. This is a mockup of the AZEDOR system, not a real client's results.</p>
    </Tilt>
  );
}
