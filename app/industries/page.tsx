import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES, GROUP_ACCENT, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import AuditForm from "@/components/AuditForm";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Industries We Serve — HVAC, Salons, Spas & More | AZEDOR",
  description: "One system, for every service business. AZEDOR builds customized marketing, CRM and AI automation for HVAC, salons, spas, dental, real estate and more.",
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/industries`,
    title: "Industries We Serve — HVAC, Salons, Spas & More | AZEDOR",
    description: "One system, for every service business. AZEDOR builds customized marketing, CRM and AI automation for HVAC, salons, spas, dental, real estate and more.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Industries We Serve — HVAC, Salons, Spas & More | AZEDOR",
    description: "One system, for every service business. AZEDOR builds customized marketing, CRM and AI automation for HVAC, salons, spas, dental, real estate and more.",
  },
};
export default function Industries() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Industries</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">One System. For Every Service Business.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">AZEDOR starts with HVAC, salons and spas in the USA — and the same system works for every service business below. Pick your industry to see its problems, its pipeline, and the solutions shaped for it.</p></div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {INDUSTRIES.map((ind) => (<Link key={ind.slug} href={`/industries/${ind.slug}`} className="group overflow-hidden rounded-card border border-line bg-white shadow-sm hover:border-ink hover:shadow-xl"><div className="h-1.5" style={{ backgroundColor: GROUP_ACCENT[ind.group].main }} /><div className="relative h-44 bg-deep"><Image src={ind.image} alt={`${ind.name} business`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" /></div><div className="p-5"><div className="flex items-center gap-2"><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: GROUP_ACCENT[ind.group].soft, color: GROUP_ACCENT[ind.group].dark }}><ind.icon size={18} /></span><p className="text-xs font-bold uppercase tracking-wider" style={{ color: GROUP_ACCENT[ind.group].dark }}>{ind.group}</p></div><h3 className="mt-2 text-xl font-bold">{ind.name}</h3><p className="mt-2 text-sm text-muted">{ind.headline}</p><span className="mt-3 inline-block text-sm font-bold">Discover your industry solution →</span></div></Link>))}
    </div>
    <div className="card mt-8">
      <h2 className="text-xl font-bold">Your business is not listed?</h2>
      <p className="mt-2 leading-relaxed text-muted">See <Link href="/industries/other" className="font-bold text-ink underline">Other Service Businesses</Link> — the system is built around how your business actually works, not a generic template. Or tell us about it in the free audit and we will show you where your leads leak.</p>
    </div>
    </div></section>
    <section className="bg-ink py-20 text-white"><div className="mx-auto max-w-shell px-4 sm:px-6">
      <SectionHead dark label="The Growth System" title="The Same Six Stages, in Every Industry" sub="Attract, Capture, Engage, Convert, Deliver, Retain — the journey is the same; the problems, pipeline and solutions change with the industry." />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {JOURNEY.map((j, i) => (
          <li key={j.stage} className="rounded-card border border-lineDark bg-deep p-4"><p className="text-xs font-bold uppercase tracking-wider text-lime">{i + 1} · {j.stage}</p><p className="mt-2 font-bold">{j.solution}</p><p className="mt-1 text-sm leading-relaxed text-mutedDark">{j.purpose}</p></li>
        ))}
      </ol>
      <p className="mt-8"><Link href="/how-it-works" className="btn btn-primary">See How It Works →</Link></p>
    </div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2"><div><SectionHead label="Free audit" title="Find Your Revenue Leaks" sub="Tell us about your business. We check your ads, reply speed, booking and follow-up — and show you the leaks in writing." /></div><AuditForm compact /></div></section>
    <CtaBanner />
  </>);
}
