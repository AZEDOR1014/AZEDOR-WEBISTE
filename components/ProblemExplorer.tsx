"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const PROBLEMS: Record<string, { cause: string; fix: string; services: string; result: string }> = {
  "Not enough leads": { cause: "Your ads, website and Google listing are not working as one system.", fix: "Targeted Meta and Google Ads connected to a fast landing page and instant follow-up.", services: "Paid Advertising, Websites & Sales Funnels", result: "More inquiries from people who already need your service." },
  "Missing calls": { cause: "Calls arrive when your team is busy, after hours, or on a job.", fix: "An AI receptionist answers every call in your business name and books the appointment.", services: "AI Receptionists & Agents", result: "No call goes unanswered, day or night." },
  "Slow follow-up": { cause: "Follow-up depends on memory and free time — and there is never enough of either.", fix: "Automated follow-up starts in minutes and continues until the lead replies or books.", services: "CRM & Sales Automation, Business Process Automation", result: "Leads hear back while they are still interested." },
  "Poor lead conversion": { cause: "Leads are not qualified before they reach your team.", fix: "AI qualification asks the right questions first, so your team talks to the right people.", services: "AI Receptionists & Agents, CRM & Sales Automation", result: "Fewer wasted calls, more booked jobs." },
  "Too much manual work": { cause: "The same admin tasks are done by hand, every day, by people who should be serving customers.", fix: "Workflows automate onboarding, reminders, routing and data entry.", services: "Business Process Automation", result: "Hours back every week, with fewer mistakes." },
  "Appointment no-shows": { cause: "Bookings are made and then forgotten — no reminder, no confirmation, no easy reschedule.", fix: "Reminders, confirmations and a one-click reschedule link before the appointment.", services: "CRM & Sales Automation, Business Process Automation", result: "Fewer empty slots and a fuller diary." },
  "Low repeat business": { cause: "Happy customers leave and are never invited back.", fix: "Rebooking and reactivation campaigns at the right interval for your service.", services: "Reputation Management, Business Process Automation", result: "Past customers return — without paying to find them again." },
};

export default function ProblemExplorer() {
  const keys = Object.keys(PROBLEMS);
  const [sel, setSel] = useState(keys[0]);
  const p = PROBLEMS[sel];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Business problems">
        {keys.map((k) => (
          <button key={k} role="tab" aria-selected={sel === k} onClick={() => setSel(k)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${sel === k ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>{k}</button>
        ))}
      </div>
      <AnimatePresence mode="wait"><motion.div key={sel} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="mt-6 grid gap-6 rounded-card border border-line bg-white p-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">What typically causes it</p>
          <p className="mt-2 leading-relaxed">{p.cause}</p>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">What AZEDOR would implement</p>
          <p className="mt-2 leading-relaxed">{p.fix}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">Services involved</p>
          <p className="mt-2 font-semibold">{p.services}</p>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">Expected improvement</p>
          <p className="mt-2 leading-relaxed">{p.result}</p>
          <Link href="/free-audit" className="mt-5 inline-block rounded-btn bg-lime px-5 py-3 text-sm font-bold text-ink hover:bg-limeDark">Find Your Revenue Leaks →</Link>
        </div>
      </motion.div></AnimatePresence>
    </div>
  );
}
