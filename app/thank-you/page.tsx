import { ThankYouGate } from "@/components/AuditForm";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata = {
  title: "Thank You | AZEDOR",
  description: "Thank you for requesting your Free Lead-Leak & Automation Audit.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/thank-you` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/thank-you`,
    title: "Thank You | AZEDOR",
    description: "Thank you for requesting your Free Lead-Leak & Automation Audit.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Thank You | AZEDOR",
    description: "Thank you for requesting your Free Lead-Leak & Automation Audit.",
  },
};
export default function ThankYou() {
  return (
    <section className="bg-paper py-24">
      <ThankYouGate />
    </section>
  );
}
