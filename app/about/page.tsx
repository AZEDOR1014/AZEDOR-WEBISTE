import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBanner } from "@/components/Shared";
export const metadata: Metadata = { title: "About AZEDOR | AZEDOR", description: "AZEDOR builds customized marketing, CRM and AI automation systems for service-based businesses." };
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto flex max-w-shell flex-wrap items-center gap-8 px-4 sm:px-6"><Image src="/images/logo-azedor-square-transparent.png" alt="AZEDOR logo" width={1109} height={873} priority className="h-28 w-auto sm:h-36" /><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">AZEDOR Builds Systems, Not Just Ads.</h1></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed"><p>AZEDOR is a remote digital marketing and automation agency for service-based businesses in the USA. We start with HVAC, salons and spas — and the same system works for every service business.</p>
<p>We do not stop at leads. We follow the job from first enquiry to booking to review.</p>
<p>What we believe: slow follow-up loses the job. Fast, honest follow-up wins it.</p>
<p>Business problems first. Technology second. Customized implementation. Transparent communication. Long-term customer value.</p>
<div className="mt-8 rounded-card border border-dashed border-line bg-paper p-6 text-muted"><p className="font-bold text-ink">Founder photograph &amp; biography</p><p>A genuine founder photograph and approved biography will be added here. No team members, offices or awards are claimed on this site until verified.</p></div></div></section>
    <CtaBanner />
  </>);
}
