import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import AuditForm from "@/components/AuditForm";
export const metadata: Metadata = { title: "AI Marketing Agency for Service Businesses in the USA | AZEDOR", description: "One system, for every service business. AZEDOR builds customized marketing, CRM and AI automation for HVAC, salons, spas, dental, real estate and more." };
export default function Industries() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Industries</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">One System. For Every Service Business.</h1><p className="mt-4 max-w-2xl text-lg text-mutedDark">AZEDOR starts with HVAC, salons and spas in the USA — and the same system works for every service business below.</p></div></section>
    <section className="py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {INDUSTRIES.map((ind) => (<Link key={ind.slug} href={`/industries/${ind.slug}`} className="group overflow-hidden rounded-card border border-line bg-white hover:border-ink"><div className="relative h-44 bg-deep"><Image src={ind.image} alt={`${ind.name} business`} fill className="object-cover" loading="lazy" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted">{ind.group}</p><h3 className="mt-2 text-xl font-bold">{ind.name}</h3><p className="mt-2 text-sm text-muted">{ind.headline}</p><span className="mt-3 inline-block text-sm font-bold">Discover your industry solution →</span></div></Link>))}
    </div></div></section>
    <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2"><div><SectionHead label="Free audit" title="Find Your Revenue Leaks" sub="Tell us about your business. We check your ads, reply speed, booking and follow-up — and show you the leaks in writing." /></div><AuditForm compact /></div></section>
    <CtaBanner />
  </>);
}
