import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://azedor.com"),
  title: { default: "AZEDOR — Your Marketing, Sales and Automation. Connected.", template: "%s | AZEDOR" },
  description: "AZEDOR builds customized marketing, CRM and AI automation systems for service-based businesses in the USA. More leads, more customers, less manual work.",
  openGraph: { type: "website", siteName: "AZEDOR", locale: "en_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "AZEDOR", url: "https://azedor.com", description: "AI marketing, CRM and business automation agency for service-based businesses.", email: "azedor.marketing@gmail.com" }) }} />
      </body>
    </html>
  );
}
