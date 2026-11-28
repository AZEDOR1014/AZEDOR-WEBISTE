import type { Metadata } from "next";
import { CtaBanner } from "@/components/Shared";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Service | AZEDOR",
  description: "The terms for using the AZEDOR website and requesting a free audit.",
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/terms`,
    title: "Terms of Service | AZEDOR",
    description: "The terms for using the AZEDOR website and requesting a free audit.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Terms of Service | AZEDOR",
    description: "The terms for using the AZEDOR website and requesting a free audit.",
  },
};
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Terms of Service</h1></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed"><p>Last updated: 26 November 2026.</p><p>The Free Lead-Leak &amp; Automation Audit is a free review of your marketing, lead handling and automation. It is not a guarantee of results. Any plan, scope or price for work is agreed in writing before work starts.</p><p>Content on this website is for general information.</p></div></section>
    <CtaBanner />
  </>);
}
