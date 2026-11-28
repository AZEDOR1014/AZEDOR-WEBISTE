import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/Shared";
export const metadata: Metadata = { title: "Privacy Policy | AZEDOR", description: "How AZEDOR handles the information you share through this website." };
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Privacy Policy</h1></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed"><p>Last updated: 26 November 2026.</p><p>When you submit the Free Audit form, we collect the name, business name, email, website and other details you provide, and use them only to prepare your audit and contact you about it. We do not sell your information.</p><p>We do not currently use analytics or advertising tracking on this website. You can contact us at azedor.marketing@gmail.com to ask what information we hold about you, or to ask us to delete it.</p></div></section>
    <CtaBanner />
  </>);
}
