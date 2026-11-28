"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white">
      {items.map((f, i) => (
        <div key={i}>
          <button
            id={`faq-button-${i}`}
            aria-controls={`faq-panel-${i}`}
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-paper"
          >
            {f.q}<ChevronDown size={18} aria-hidden className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="px-5 pb-5 text-muted leading-relaxed">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
