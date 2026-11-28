"use client";
import { useState } from "react";
import { AnimatedNumber } from "./Animate";
import Link from "next/link";

export default function LeadLossCalculator() {
  const [inq, setInq] = useState(100);
  const [missed, setMissed] = useState(30);
  const [conv, setConv] = useState(20);
  const [value, setValue] = useState(500);
  const missedOpp = Math.round((inq * missed) / 100);
  const lostCustomers = (inq * missed) / 100 * (conv / 100);
  const monthly = lostCustomers * value;
  const annual = monthly * 12;
  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
  const slider = "h-11 w-full cursor-pointer accent-ink";
  return (
    <div className="grid gap-8 rounded-card border border-line bg-white p-6 sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div><label htmlFor="calc-inquiries" className="flex justify-between text-sm font-semibold">Monthly inquiries <span>{inq}</span></label><input id="calc-inquiries" type="range" min={10} max={1000} step={10} value={inq} onChange={(e) => setInq(+e.target.value)} className={slider} aria-valuetext={`${inq} inquiries per month`} /></div>
        <div><label htmlFor="calc-missed" className="flex justify-between text-sm font-semibold">Missed or poorly followed up (%) <span>{missed}%</span></label><input id="calc-missed" type="range" min={0} max={90} value={missed} onChange={(e) => setMissed(+e.target.value)} className={slider} aria-valuetext={`${missed} percent missed`} /></div>
        <div><label htmlFor="calc-conversion" className="flex justify-between text-sm font-semibold">Conversion rate (%) <span>{conv}%</span></label><input id="calc-conversion" type="range" min={1} max={80} value={conv} onChange={(e) => setConv(+e.target.value)} className={slider} aria-valuetext={`${conv} percent conversion`} /></div>
        <div><label htmlFor="calc-value" className="flex justify-between text-sm font-semibold">Average customer value <span>{fmt(value)}</span></label><input id="calc-value" type="range" min={50} max={10000} step={50} value={value} onChange={(e) => setValue(+e.target.value)} className={slider} aria-valuetext={`${fmt(value)} average customer value`} /></div>
        <p className="text-xs leading-relaxed text-muted">Formula: monthly inquiries × missed % × conversion rate × average customer value. Figures are illustrative estimates based on your inputs, not guaranteed revenue.</p>
      </div>
      <div className="rounded-card bg-ink p-6 text-white" aria-live="polite">
        <p className="eyebrow text-lime">Your estimated leak</p>
        <p className="mt-4 text-sm text-mutedDark">Missed monthly opportunities</p>
        <p className="text-4xl font-extrabold text-brandAmber"><AnimatedNumber value={missedOpp} format={(n) => String(n)} /></p>
        <p className="mt-4 text-sm text-mutedDark">Potential missed revenue / month</p>
        <p className="text-4xl font-extrabold text-brandRose"><AnimatedNumber value={monthly} format={fmt} /></p>
        <p className="mt-4 text-sm text-mutedDark">Potential missed revenue / year</p>
        <p className="text-2xl font-extrabold text-brandRose"><AnimatedNumber value={annual} format={fmt} /></p>
        <Link href="/free-audit" className="btn btn-primary btn-sm mt-6">Get Your Free Audit →</Link>
      </div>
    </div>
  );
}
