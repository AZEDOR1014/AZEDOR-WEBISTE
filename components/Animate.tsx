"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

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

export type FunnelStep = { stage: string; purpose: string; solution: string; detail: string; color: string; text: string; leak: string };

const FUNNEL_WIDTHS = [100, 88, 76, 64, 52, 40];

/** Visual funnel: wide top, narrow bottom, one colour per stage, leak shown at each stage.
    Used only where the lead-to-customer flow needs explaining — homepage Growth System,
    How It Works page, and industry pages. Animated on scroll, stage by stage. */
export function FunnelDiagram({ steps, dark = true }: { steps: FunnelStep[]; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl">
      {steps.map((st, i) => (
        <motion.div
          key={st.stage}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="mx-auto mb-2 min-w-[240px] rounded-b-2xl rounded-t-lg px-4 py-3 shadow-md sm:min-w-0"
          style={{ width: `${FUNNEL_WIDTHS[Math.min(i, FUNNEL_WIDTHS.length - 1)]}%`, backgroundColor: st.color, color: st.text }}
        >
          <p className="flex flex-wrap items-center justify-center gap-x-2 text-center text-sm font-extrabold sm:text-base">
            <span>{i + 1}. {st.stage}</span>
            <span className="font-semibold opacity-80">· {st.solution}</span>
          </p>
          <p className="mt-0.5 text-center text-xs leading-relaxed opacity-90 sm:text-sm">{st.purpose}</p>
          <p className="mt-0.5 text-center text-[11px] font-semibold opacity-75 sm:text-xs">Leak: {st.leak.replace("Without it: ", "")}</p>
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
