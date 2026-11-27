"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageSquareText, KanbanSquare, CalendarCheck, Mail, Star } from "lucide-react";

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

/**
 * Hero dashboard — completely still in layout.
 * The hero must never move up or down: the card, the chat box and every
 * pipeline row have fixed heights, all 4 chat messages are always rendered,
 * and the cycling highlight changes only colour / opacity inside those
 * fixed-size rows. No y-translate, no tilt, no add/remove of elements.
 */
export default function DashboardPanel() {
  const [active, setActive] = useState(0);
  const [chatActive, setChatActive] = useState(3);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % ROWS.length), 1800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setChatActive((c) => (c + 1) % CHAT.length), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-card border border-lineDark bg-deep p-5 shadow-2xl">
      <div className="flex h-8 items-center justify-between border-b border-lineDark pb-4">
        <p className="font-bold text-white">AZEDOR Growth System</p>
        <span className="flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
          <motion.span className="h-2 w-2 rounded-full bg-ink" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
          Live
        </span>
      </div>
      {/* AI chat — all 4 messages always shown, fixed height. Only the
          newest message is highlighted (opacity / colour), nothing is
          added, removed or resized, so the card height never changes. */}
      <div className="mt-4 h-[248px] overflow-hidden rounded-xl border border-lineDark bg-ink/60 p-3" aria-label="AI receptionist chat">
        <div className="flex h-full flex-col justify-between gap-2">
          {CHAT.map((m, i) => (
            <p
              key={m.text}
              style={{ opacity: i === chatActive ? 1 : 0.55, transition: "opacity 0.4s ease" }}
              className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${m.who === "AI" ? "bg-lime/15 text-lime" : "ml-auto bg-white/10 text-white"}`}
            >
              <strong>{m.who}: </strong>{m.text}
            </p>
          ))}
        </div>
      </div>
      {/* Pipeline rows — fixed height each, lighting up changes only
          border / background colour, never height or position. */}
      <div className="mt-3 space-y-2">
        {ROWS.map((r, i) => (
          <div
            key={r.label}
            style={{
              borderColor: active === i ? r.dot : "#303831",
              backgroundColor: active === i ? "rgba(255,255,255,0.06)" : "rgba(16,18,17,0.6)",
              transition: "border-color 0.4s ease, background-color 0.4s ease",
            }}
            className="flex h-[62px] items-center gap-3 rounded-xl border p-3"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: r.dot }} aria-hidden />
            <r.icon className="shrink-0 text-lime" size={18} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">{r.label}</p>
              <p className="truncate text-xs text-mutedDark">{r.detail}</p>
            </div>
            <span className="shrink-0 text-[11px] text-mutedDark">{r.time}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-mutedDark">An example shown for illustration. This is how the AZEDOR system works — not a real client's results.</p>
    </div>
  );
}
