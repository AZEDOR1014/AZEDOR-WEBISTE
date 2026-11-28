import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHead, CtaBanner } from "@/components/Shared";
import AuditForm from "@/components/AuditForm";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export const metadata: Metadata = {
  title: "Our Work — Examples | AZEDOR",
  description: "Illustrative examples of the systems AZEDOR builds: websites, CRM systems, Calling and Conversation AI Agents, automation workflows and industry systems.",
  alternates: { canonical: `${SITE_URL}/our-work` },
  openGraph: {
    type: "website",
    siteName: "AZEDOR",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/images/azedor-og.png`, width: 1200, height: 630, alt: "AZEDOR — Automate. Grow. Scale." }],
    url: `${SITE_URL}/our-work`,
    title: "Our Work — Examples | AZEDOR",
    description: "Illustrative examples of the systems AZEDOR builds: websites, CRM systems, Calling and Conversation AI Agents, automation workflows and industry systems.",
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/azedor-og.png`],
    title: "Our Work — Examples | AZEDOR",
    description: "Illustrative examples of the systems AZEDOR builds: websites, CRM systems, Calling and Conversation AI Agents, automation workflows and industry systems.",
  },
};

const PROJECTS = [
  { title: "HVAC lead-to-job system (example)", industry: "HVAC", category: "CRM systems", image: "/images/industries/hvac.jpg", challenge: "Emergency calls missed after hours; estimates never followed up.", system: "Calling AI Agent — your AI Receptionist — missed-call text-back, estimate follow-up, maintenance reminders and review requests — all in one CRM pipeline.", tech: "Next.js, n8n, CRM, Calling AI Agent", shows: "How missed calls become booked jobs instead of lost jobs." },
  { title: "Salon booking & rebooking system (example)", industry: "Salons & Spas", category: "Websites and landing pages", image: "/images/industries/salons-spas.jpg", challenge: "Instagram inquiries unanswered, empty chairs, clients who never return.", system: "Booking page, Instagram inquiry handling, reminders, waitlist and 30/60/90-day rebooking campaigns.", tech: "Next.js, booking system, CRM, Conversation AI Agent", shows: "How a booking page and reminders fill empty chairs." },
  { title: "Real estate lead qualification (example)", industry: "Real Estate", category: "Calling and Conversation AI Agents", image: "/images/industries/real-estate.jpg", challenge: "Unqualified inquiries waste agent time; viewings are missed.", system: "Conversation AI Agent qualification, agent assignment, viewing booking and reminders, long-term nurturing.", tech: "Conversation AI Agent, CRM, calendar", shows: "How agents spend time on qualified buyers, not every inquiry." },
  { title: "Dental appointment system (example)", industry: "Dental & Healthcare", category: "Automation workflows", image: "/images/industries/dental-healthcare.jpg", challenge: "Missed patient calls and appointment no-shows; admin overload.", system: "Inquiry assistance, appointment reminders, scheduling support with human handover, patient reactivation.", tech: "CRM, Conversation AI Agent, calendar, reminders", shows: "How reminders and handover take admin off the front desk." },
  { title: "Gym trial-to-member system (example)", industry: "Gyms & Fitness", category: "Industry-specific systems", image: "/images/industries/gyms-fitness.jpg", challenge: "Trial inquiries go cold; members drift away unnoticed.", system: "Trial booking, onboarding, class reminders, at-risk member engagement and reactivation.", tech: "Next.js, CRM, automation workflows", shows: "How trials turn into members — and members stay." },
  { title: "Coaching discovery-call funnel (example)", industry: "Coaches & Consultants", category: "Automation workflows", image: "/images/industries/coaches-consultants.jpg", challenge: "Unqualified discovery calls and high no-show rates.", system: "Qualification funnel, appointment reminders, prospect nurturing and automated onboarding.", tech: "Funnel, CRM, calendar, automation", shows: "How only qualified prospects reach the calendar." },
];

export default function OurWork() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Our Work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Examples of What AZEDOR Builds.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">These are illustrative examples of the systems AZEDOR builds — not named clients, and not measured results. Each one shows a challenge, the system built for it, and what that system is for.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell gap-5 px-4 sm:px-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-card border border-line bg-white">
              <Image src={p.image} alt={p.title} width={1200} height={800} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">{p.category} · {p.industry}</p>
                <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted"><strong className="text-ink">Challenge:</strong> {p.challenge}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">System:</strong> {p.system}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">What this shows:</strong> {p.shows}</p>
                <p className="mt-3 border-t border-line pt-3 text-xs text-muted"><strong>Technical implementation:</strong> {p.tech}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-paper py-20"><div className="mx-auto grid max-w-shell items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div><SectionHead label="Your business next" title="Want a System Like One of These?" sub="Start with a free audit. We check your ads, reply speed, booking and follow-up — and show you, in writing, which system fits your business and what it would take to build." /></div>
        <AuditForm compact />
      </div></section>
      <CtaBanner />
    </>
  );
}
