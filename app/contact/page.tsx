import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { SectionHead, CtaBanner } from "@/components/Shared";

export const metadata: Metadata = { title: "Contact AZEDOR | Get Your Free Audit", description: "Share your details and AZEDOR will contact you about your Free Lead-Leak & Automation Audit." };

export default function Contact() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Get Your Free Lead-Leak Audit.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">Share your details. We will contact you. No booking on this page.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHead label="Contact" title="Talk to AZEDOR" sub="Email azedor.marketing@gmail.com or WhatsApp +92-316-1291014. Or send the form and we will come back to you." />
          </div>
          <AuditForm compact />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
