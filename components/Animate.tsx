"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check, X, Magnet, MousePointerClick, PhoneCall, ClipboardCheck, Workflow, HeartHandshake, type LucideIcon } from "lucide-react";

/** Fade + slide in on scroll. Respects prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Restrained 3D tilt on hover (desktop pointers only). Never moves layout. */
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches && !reduce);
  }, [reduce]);
  if (!enabled) return <div className={className}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
    >
      {children}
    </motion.div>
  );
}

export type FunnelStep = { stage: string; purpose: string; solution: string; detail: string; color: string; text: string; leak: string; icon?: string | LucideIcon };

/** String icon keys (from server components) map to components here, inside the client component — component functions cannot cross the server/client boundary as props. */
const FUNNEL_ICONS: Record<string, LucideIcon> = { Magnet, MousePointerClick, PhoneCall, ClipboardCheck, Workflow, HeartHandshake };

/** Band widths: gentle taper on mobile (so headlines fit), steeper on desktop. */
const FUNNEL_WIDTHS = [
  "w-full",
  "w-[97%] sm:w-[90%]",
  "w-[94%] sm:w-[80%]",
  "w-[91%] sm:w-[70%]",
  "w-[88%] sm:w-[62%]",
  "w-[85%] sm:w-[54%]",
];

/** Short headline labels so every stage headline fits on ONE line, even on
    the narrow bottom bands. The full solution names still appear on the
    solution pages and in the content below the divider. */
const SHORT_SOLUTION: Record<string, string> = {
  "Paid Advertising": "Paid Ads",
  "Websites & Sales Funnels": "Website & Funnels",
  "Conversation & Calling AI Agents": "Conversation & Calling AI",
  "CRM & Sales Automation": "CRM Automation",
  "Business Process Automation": "Process Automation",
  "Reputation Management": "Reviews",
};

/** Real funnel: trapezoid bands, wide at the top and narrower at the bottom,
    with slanted edges, so the whole shape reads as a funnel. Headline and
    content are separate: headline on its own line, a divider, then the
    content below in smaller, lighter text. Used only where the
    lead-to-customer flow needs explaining — homepage Growth System,
    How It Works page, and industry pages. */
export function FunnelDiagram({ steps, dark = true }: { steps: FunnelStep[]; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl">
      {steps.map((st, i) => (
        <motion.div
          key={st.stage}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={`mx-auto mb-[3px] flex min-h-[104px] min-w-0 flex-col justify-center px-3 py-3 [clip-path:polygon(0_0,100%_0,calc(100%-12px)_100%,12px_100%)] sm:px-6 sm:[clip-path:polygon(0_0,100%_0,calc(100%-20px)_100%,20px_100%)] ${FUNNEL_WIDTHS[Math.min(i, FUNNEL_WIDTHS.length - 1)]}`}
          style={{
            backgroundColor: st.color,
            color: st.text,
          }}
        >
          <p className={`flex flex-nowrap items-center gap-1.5 whitespace-nowrap font-extrabold sm:gap-2 ${i === 2 ? "text-[11px] sm:text-base" : i >= 3 ? "text-xs sm:text-base" : "text-xs sm:text-lg"}`}>
            {(() => { const I = typeof st.icon === "string" ? FUNNEL_ICONS[st.icon] : st.icon; return I ? <I size={16} strokeWidth={2.5} className="shrink-0 sm:h-5 sm:w-5" /> : null; })()}
            <span className="shrink-0">{i + 1}. {st.stage}</span>
            <span className="shrink-0 font-semibold opacity-80">· {SHORT_SOLUTION[st.solution] ?? st.solution}</span>
          </p>
          <hr className="my-2 border-t" style={{ borderColor: st.text, opacity: 0.3 }} />
          <p className="text-xs leading-relaxed opacity-90 sm:text-sm">{st.purpose}</p>
          <p className="mt-1 text-[11px] font-semibold opacity-75 sm:text-xs">Leak: {st.leak.replace("Without it: ", "")}</p>
        </motion.div>
      ))}
      <p className={`mt-4 text-center text-sm ${dark ? "text-mutedDark" : "text-muted"}`}>
        Find your leaks — <a href="/free-audit" className={`font-bold underline ${dark ? "text-lime" : "text-ink"}`}>Get Your Free Audit →</a>
      </p>
    </div>
  );
}

/** Animated before / after comparison. */
export function BeforeAfter({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
      <Reveal className="rounded-card border border-line bg-white p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600"><X size={16} /> Before AZEDOR</p>
        <p className="mt-3 leading-relaxed text-muted">{before}</p>
      </Reveal>
      <motion.div
        aria-hidden
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={22} />
      </motion.div>
      <Reveal delay={0.15} className="rounded-card border border-ink bg-ink p-6 text-white">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime"><Check size={16} /> After AZEDOR</p>
        <p className="mt-3 leading-relaxed text-mutedDark">{after}</p>
      </Reveal>
    </div>
  );
}

export type ProcessStep = { n: string; title: string; text: string };

/** 4-step animated timeline: line draws, nodes light up in sequence. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-line lg:bottom-auto lg:left-8 lg:right-8 lg:top-[27px] lg:h-0.5 lg:w-auto">
        <motion.div
          className="h-full w-full origin-top bg-lime lg:origin-left"
          initial={{ scaleY: 0, scaleX: 0 }}
          whileInView={{ scaleY: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </div>
      <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.18 }}
            className="relative pl-20 lg:pl-0 lg:pt-20"
          >
            <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-xl font-extrabold text-ink shadow-lg lg:left-0 lg:top-0">
              {s.n}
            </span>
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/** Number that animates to a new value instead of jumping. */
export function AnimatedNumber({ value, format }: { value: number; format: (n: number) => string }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 120, damping: 20 });
  const text = useTransform(spring, (v) => format(Math.round(v)));
  useEffect(() => { mv.set(value); }, [value, mv]);
  if (reduce) return <>{format(Math.round(value))}</>;
  return <motion.span>{text}</motion.span>;
}
