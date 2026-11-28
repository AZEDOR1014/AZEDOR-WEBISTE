import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

// Canonical base URL. azedor.com is NOT attached yet, so the live site is the
// Vercel URL below. When the domain is attached, set NEXT_PUBLIC_SITE_URL to
// https://azedor.com in Vercel (and update public/robots.txt) — no code change
// is needed. Never point canonicals/OG at azedor.com while it is not live.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101211",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AZEDOR — Your Marketing, Sales and Automation. Connected.", template: "%s | AZEDOR" },
  description: "AZEDOR builds customized marketing, CRM and AI automation systems for service-based businesses in the USA. More leads, more customers, less manual work.",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  robots: { index: true, follow: true },
  // No openGraph.url / twitter.title here on purpose: those are set per page
  // (blog, solution and industry pages set their own). A site-wide og:url
  // would wrongly claim every page is the home page. Next.js falls back to
  // each page's own title/description for og:title, og:description and the
  // Twitter tags when they are not set here.
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
  },
};

// Analytics: env-gated, no-op by default. Nothing loads unless Ali sets one
// of these in Vercel — no IDs are invented or hardcoded anywhere:
//   NEXT_PUBLIC_GA4_MEASUREMENT_ID  e.g. G-XXXXXXXXXX
//   NEXT_PUBLIC_GTM_ID              e.g. GTM-XXXXXXX
//   NEXT_PUBLIC_META_PIXEL_ID       e.g. 123456789012345
// Google Search Console verification (also env-only):
//   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "AZEDOR",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-azedor-transparent.png`,
        description: "AI marketing, CRM and business automation agency for service-based businesses.",
        email: "azedor.marketing@gmail.com",
        // No sameAs: AZEDOR's social profiles are not linked anywhere on the
        // site, so no profile URL could be verified. Add sameAs only with
        // verified profile URLs, never guessed ones.
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "AZEDOR",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        name: "Marketing, CRM and AI automation for service businesses",
        serviceType: [
          "Paid Advertising",
          "Websites & Sales Funnels",
          "Conversation AI Agent",
          "Calling AI Agent",
          "CRM & Sales Automation",
          "Business Process Automation",
          "Reputation Management",
        ],
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: `${SITE_URL}/solutions`,
      },
    ],
  };
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {GA4_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}',{anonymize_ip:true});`}</Script>
          </>
        ) : null}
        {GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
        ) : null}
        {PIXEL_ID ? (
          <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}</Script>
        ) : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
