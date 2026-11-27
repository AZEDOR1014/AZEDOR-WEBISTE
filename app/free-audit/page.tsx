import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Free Lead-Leak & Automation Audit | AZEDOR",
  description: "Discover where your business is losing leads, time and revenue opportunities. Free audit: website, lead handling, follow-up, CRM and automation review.",
};

export default function FreeAudit() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Free Audit</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Discover Where Your Business Is Losing Leads, Time and Revenue Opportunities.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">No booking calendar. Submit your details and AZEDOR will contact you afterward through its sales follow-up process.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What you receive</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>✓ Website and funnel assessment</li>
              <li>✓ Lead handling review</li>
              <li>✓ Sales follow-up assessment</li>
              <li>✓ CRM assessment</li>
              <li>✓ Automation opportunity identification</li>
              <li>✓ Customized recommendations in writing</li>
            </ul>
            <div className="mt-10"><Faq items={[
              { q: "What happens after I submit?", a: "We review your business and contact you with your audit findings. There is no obligation." },
              { q: "Do I need to book a call now?", a: "No. There is no calendar on this website. We contact you first, and a call is arranged in the follow-up if it fits." },
              { q: "How much does the audit cost?", a: "It is free. Any plan or price for work is agreed in writing afterward, before anything is built." },
            ]} /></div>
          </div>
          <AuditForm />
        </div>
      </section>
    </>
  );
}
