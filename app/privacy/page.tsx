import type { Metadata } from "next";
import { CtaBanner } from "@/components/Shared";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy | AZEDOR",
  description: "How AZEDOR handles the information you share through this website.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy | AZEDOR",
    description: "How AZEDOR handles the information you share through this website.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Privacy Policy | AZEDOR",
    description: "How AZEDOR handles the information you share through this website.",
  },
};
export default function Page() {
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20"><div className="mx-auto max-w-shell px-4 sm:px-6"><h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Privacy Policy</h1></div></section>
    <section className="py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 prose-p:text-muted prose-p:leading-relaxed"><p>Last updated: 28 November 2026.</p><p>When you submit the Free Audit form, we collect the name, business name, email, website and other details you provide, and use them only to prepare your audit and contact you about it. We do not sell your information.</p><p>We do not currently use analytics or advertising tracking on this website. The site is built so that analytics can only load if AZEDOR switches them on — Google Analytics 4, Google Tag Manager and the Meta Pixel are all off unless AZEDOR sets them up with its own account IDs (environment settings named NEXT_PUBLIC_GA4_MEASUREMENT_ID, NEXT_PUBLIC_GTM_ID and NEXT_PUBLIC_META_PIXEL_ID). With none of those set, no analytics or tracking script loads at all, and no visitor data is sent to Google or Meta. If AZEDOR switches analytics on in the future, this page will be updated first to say what is collected and why. You can contact us at azedor.marketing@gmail.com to ask what information we hold about you, or to ask us to delete it.</p></div></section>
    <CtaBanner />
  </>);
}
