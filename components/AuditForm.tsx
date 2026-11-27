"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

const CHALLENGES = ["Not enough leads", "Missing calls", "Slow follow-up", "Poor lead conversion", "Too much manual work", "Appointment no-shows", "Low repeat business", "Other"];

export default function AuditForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", business: "", email: "", website: "", phone: "", industry: "", challenge: "" });
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
      router.push("/thank-you");
    } catch (err: any) {
      setState("error");
      setError(err?.message || "Something went wrong. Please try again — your details were not lost, you can resubmit.");
    }
  }

  const input = "w-full rounded-btn border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none";
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
      {error && <p role="alert" className="mt-4 rounded-btn bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      <button type="submit" disabled={state === "loading"} className="mt-5 flex w-full items-center justify-center gap-2 rounded-btn bg-lime px-6 py-3.5 text-base font-bold text-ink hover:bg-limeDark disabled:opacity-60">
        {state === "loading" && <Loader2 className="animate-spin" size={18} />} {state === "loading" ? "Sending…" : "Get Your Free Audit"}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">No obligation. We use your details only to prepare your audit and contact you about it. We never sell your information.</p>
    </form>
  );
}
