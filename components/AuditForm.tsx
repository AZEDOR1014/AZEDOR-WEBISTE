"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

const CHALLENGES = ["Not enough leads", "Missing calls", "Slow follow-up", "Poor lead conversion", "Too much manual work", "Appointment no-shows", "Low repeat business", "Other"];

/** Key the audit form sets in sessionStorage on a real successful submission.
    /thank-you only shows its success message when this flag is present. */
export const AUDIT_SUBMITTED_KEY = "azedor-audit-submitted";

export default function AuditForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", business: "", email: "", website: "", phone: "", industry: "", challenge: "", company2: "" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.business.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.industry) {
      setError("Please add your name, business name, a valid business email, and your industry.");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, utm: typeof window !== "undefined" ? window.location.search : "" }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed. Please try again.");
      try { sessionStorage.setItem(AUDIT_SUBMITTED_KEY, "1"); } catch { /* private mode: thank-you will show the neutral page */ }
      router.push("/thank-you");
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Something went wrong. Please try again — your details were not lost, you can resubmit.");
    }
  }

  const input = "input";
  return (
    <form onSubmit={submit} noValidate className="rounded-card border border-line bg-white p-5 shadow-sm sm:p-6" aria-label="Free audit form">
      <div className={`grid gap-4 ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
        <div><label htmlFor="af-name" className="mb-1 block text-sm font-semibold">Full name *</label><input id="af-name" className={input} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" autoComplete="name" required /></div>
        <div><label htmlFor="af-business" className="mb-1 block text-sm font-semibold">Business name *</label><input id="af-business" className={input} value={form.business} onChange={(e) => set("business", e.target.value)} placeholder="Your business" autoComplete="organization" required /></div>
        <div><label htmlFor="af-email" className="mb-1 block text-sm font-semibold">Business email *</label><input id="af-email" type="email" className={input} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@yourbusiness.com" autoComplete="email" required /></div>
        <div><label htmlFor="af-website" className="mb-1 block text-sm font-semibold">Website or social media URL</label><input id="af-website" className={input} value={form.website} onChange={(e) => set("website", e.target.value)} placeholder="https://…" autoComplete="url" /></div>
        <div><label htmlFor="af-phone" className="mb-1 block text-sm font-semibold">Phone number (optional)</label><input id="af-phone" type="tel" className={input} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 …" autoComplete="tel" /></div>
        <div><label htmlFor="af-industry" className="mb-1 block text-sm font-semibold">Industry *</label>
          <select id="af-industry" className={input} value={form.industry} onChange={(e) => set("industry", e.target.value)} required>
            <option value="">Select your industry</option>
            {INDUSTRIES.map((i) => (<option key={i.slug} value={i.name}>{i.name}</option>))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2"><label htmlFor="af-challenge" className="mb-1 block text-sm font-semibold">Main business challenge (optional)</label>
          <select id="af-challenge" className={input} value={form.challenge} onChange={(e) => set("challenge", e.target.value)}>
            <option value="">Select a challenge</option>
            {CHALLENGES.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
      </div>
      {/* Honeypot: invisible to real visitors; bots that fill it are silently ignored server-side. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 overflow-hidden">
        <label htmlFor="af-company2">Company</label>
        <input id="af-company2" name="company2" tabIndex={-1} autoComplete="off" value={form.company2} onChange={(e) => set("company2", e.target.value)} />
      </div>
      {error && <p role="alert" className="mt-4 rounded-btn bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      <button type="submit" disabled={state === "loading"} className="btn btn-primary mt-5 w-full text-base">
        {state === "loading" && <Loader2 className="animate-spin" size={18} />} {state === "loading" ? "Sending…" : "Get Your Free Audit"}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">No obligation. We use your details only to prepare your audit and contact you about it. We never sell your information.</p>
    </form>
  );
}

const CONTACT_SUBJECTS = ["General question", "Question about the free audit", "Pricing", "Partnership", "Something else"];

/** General contact form — separate from the Free Audit form. Sends a message
    (not an audit request) to /api/contact and shows its answer on this page;
    it never redirects to /thank-you. */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "error" | "sent">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", subject: "", message: "", company2: "" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.subject || !form.message.trim()) {
      setError("Please add your name, a valid email, a subject, and your message.");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed. Please try again.");
      setState("sent");
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Something went wrong. Please try again — your message was not lost, you can resubmit.");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-card border border-line bg-white p-6 shadow-sm" role="status">
        <p className="text-2xl font-bold">Message sent. Thank you.</p>
        <p className="mt-2 leading-relaxed text-muted">We got your message and will come back to you at the email address you gave. If you need a faster answer, email us directly at <a href="mailto:azedor.marketing@gmail.com" className="font-bold text-ink underline">azedor.marketing@gmail.com</a>.</p>
        <p className="mt-4"><Link href="/free-audit" className="btn btn-primary btn-sm">Get a Free Audit instead →</Link></p>
      </div>
    );
  }

  const input = "input";
  return (
    <form onSubmit={submit} noValidate className="rounded-card border border-line bg-white p-5 shadow-sm sm:p-6" aria-label="General contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="cf-name" className="mb-1 block text-sm font-semibold">Full name *</label><input id="cf-name" className={input} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" autoComplete="name" required /></div>
        <div><label htmlFor="cf-business" className="mb-1 block text-sm font-semibold">Business name (optional)</label><input id="cf-business" className={input} value={form.business} onChange={(e) => set("business", e.target.value)} placeholder="Your business" autoComplete="organization" /></div>
        <div><label htmlFor="cf-email" className="mb-1 block text-sm font-semibold">Email *</label><input id="cf-email" type="email" className={input} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@yourbusiness.com" autoComplete="email" required /></div>
        <div><label htmlFor="cf-phone" className="mb-1 block text-sm font-semibold">Phone (optional)</label><input id="cf-phone" type="tel" className={input} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 …" autoComplete="tel" /></div>
        <div className="sm:col-span-2"><label htmlFor="cf-subject" className="mb-1 block text-sm font-semibold">Subject *</label>
          <select id="cf-subject" className={input} value={form.subject} onChange={(e) => set("subject", e.target.value)} required>
            <option value="">Select a subject</option>
            {CONTACT_SUBJECTS.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <div className="sm:col-span-2"><label htmlFor="cf-message" className="mb-1 block text-sm font-semibold">Message *</label><textarea id="cf-message" rows={5} className={input} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="How can we help?" required /></div>
      </div>
      {/* Honeypot: invisible to real visitors; bots that fill it are silently ignored server-side. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 overflow-hidden">
        <label htmlFor="cf-company2">Company</label>
        <input id="cf-company2" name="company2" tabIndex={-1} autoComplete="off" value={form.company2} onChange={(e) => set("company2", e.target.value)} />
      </div>
      {error && <p role="alert" className="mt-4 rounded-btn bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      <button type="submit" disabled={state === "loading"} className="btn btn-primary mt-5 w-full text-base">
        {state === "loading" && <Loader2 className="animate-spin" size={18} />} {state === "loading" ? "Sending…" : "Send Message"}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">We use your details only to reply to your message. We never sell your information. For a free audit of your business instead, use the <Link href="/free-audit" className="font-bold text-ink underline">Free Audit form</Link>.</p>
    </form>
  );
}

/** Thank-you page gate: only shows the success message when the visitor
    arrived here after a real audit-form submission (sessionStorage flag).
    Direct visits see a neutral page with links, never a false confirmation. */
export function ThankYouGate() {
  // Default (including the server-rendered HTML) is the neutral page:
  // fail closed, so no visitor ever sees a success message they did not earn.
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    try { setSubmitted(sessionStorage.getItem(AUDIT_SUBMITTED_KEY) === "1"); } catch { setSubmitted(false); }
  }, []);
  if (!submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white text-3xl font-extrabold">?</p>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">No recent submission found.</h1>
        <p className="mt-4 text-lg text-muted">This page confirms a Free Audit request — and no request was just sent from this browser. If you would like an audit, send the form below. It is free, with no obligation.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/free-audit" className="btn btn-primary">Request a Free Audit</Link>
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
      <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime text-3xl font-extrabold">✓</p>
      <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">Thank you. We got your details.</h1>
      <p className="mt-4 text-lg text-muted">AZEDOR will review your business and contact you about your Free Lead-Leak &amp; Automation Audit. There is nothing else you need to do right now.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-dark">Back to Home</Link>
        <Link href="/how-it-works" className="btn btn-secondary">See How It Works</Link>
      </div>
    </div>
  );
}
