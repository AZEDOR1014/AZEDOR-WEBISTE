"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const DEMOS = [
  { key: "HVAC CRM pipeline", title: "HVAC CRM pipeline", body: "New Inquiry → Qualified → Visit Scheduled → Estimate Sent → Approved → Job Completed → Follow-Up. Every lead, every estimate, in one place." },
  { key: "AI receptionist", title: "AI receptionist conversation", body: "Caller: My AC stopped working. AI: I'm sorry to hear that. Is anyone at home now, and is this an emergency? … Appointment booked for tomorrow, 9–11am. A human can take over at any time." },
  { key: "Salon booking", title: "Salon booking workflow", body: "Instagram inquiry → AI replies with services and prices → client picks a time → booking confirmed → reminder sent the day before → rebooking invite after the visit." },
  { key: "Real estate", title: "Real estate lead qualification", body: "Buyer asks about a listing → AI asks budget, timeline and area → qualified lead routed to the right agent → viewing booked." },
  { key: "Follow-up", title: "Automated follow-up workflow", body: "Lead in → instant reply → day-2 check-in → day-5 reminder → no-show rescue → long-term nurture. It stops the moment the lead replies." },
];

/** System-in-action as smooth animated tabs — one demo at a time, no wall of text. */
export default function SystemDemos() {
  const [sel, setSel] = useState(DEMOS[0].key);
  const demo = DEMOS.find((d) => d.key === sel)!;
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="flex flex-row flex-wrap gap-2 lg:col-span-2 lg:flex-col" role="tablist" aria-label="System demonstrations">
        {DEMOS.map((d) => (
          <button
            key={d.key}
            role="tab"
            aria-selected={sel === d.key}
            onClick={() => setSel(d.key)}
            className={`rounded-btn border px-4 py-2.5 text-left text-sm font-semibold transition-colors ${sel === d.key ? "border-lime bg-lime/10 text-lime" : "border-lineDark hover:border-lime hover:text-lime"}`}
          >
            {d.title}
          </button>
        ))}
      </div>
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={demo.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-card border border-lineDark bg-ink p-6"
          >
            <h3 className="font-bold text-lime">{demo.title}</h3>
            <p className="mt-3 leading-relaxed text-mutedDark">{demo.body}</p>
            <p className="mt-3 text-[11px] text-mutedDark">Demonstration — illustrative example, not a client result.</p>
          </motion.div>
        </AnimatePresence>
        <Link href="/our-work" className="mt-6 inline-block rounded-btn bg-lime px-6 py-3 font-bold text-ink hover:bg-limeDark">View Our Work →</Link>
      </div>
    </div>
  );
}
