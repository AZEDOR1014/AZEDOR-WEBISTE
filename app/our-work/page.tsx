import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, CtaBanner } from "@/components/Shared";

export const metadata: Metadata = { title: "Our Work — Examples | AZEDOR", description: "Example projects: websites, CRM systems, Calling and Conversation AI Agents, automation workflows and industry systems. Clearly labelled examples." };

const PROJECTS = [
  { title: "HVAC lead-to-job system (example)", industry: "HVAC", category: "CRM systems", challenge: "Emergency calls missed after hours; estimates never followed up.", system: "Calling AI Agent — your AI Receptionist — missed-call text-back, estimate follow-up, maintenance reminders and review requests — all in one CRM pipeline.", tech: "Next.js, n8n, CRM, Calling AI Agent" },
  { title: "Salon booking & rebooking system (example)", industry: "Salons & Spas", category: "Websites and landing pages", challenge: "Instagram inquiries unanswered, empty chairs, clients who never return.", system: "Booking page, Instagram inquiry handling, reminders, waitlist and 30/60/90-day rebooking campaigns.", tech: "Next.js, booking system, CRM, Conversation AI Agent" },
  { title: "Real estate lead qualification (example)", industry: "Real Estate", category: "Calling and Conversation AI Agents", challenge: "Unqualified inquiries waste agent time; viewings are missed.", system: "Conversation AI Agent qualification, agent assignment, viewing booking and reminders, long-term nurturing.", tech: "Conversation AI Agent, CRM, calendar" },
  { title: "Dental appointment system (example)", industry: "Dental & Healthcare", category: "Automation workflows", challenge: "Missed patient calls and appointment no-shows; admin overload.", system: "Inquiry assistance, appointment reminders, scheduling support with human handover, patient reactivation.", tech: "CRM, Conversation AI Agent, calendar, reminders" },
  { title: "Gym trial-to-member system (example)", industry: "Gyms & Fitness", category: "Industry-specific systems", challenge: "Trial inquiries go cold; members drift away unnoticed.", system: "Trial booking, onboarding, class reminders, at-risk member engagement and reactivation.", tech: "Next.js, CRM, automation workflows" },
  { title: "Coaching discovery-call funnel (example)", industry: "Coaches & Consultants", category: "Automation workflows", challenge: "Unqualified discovery calls and high no-show rates.", system: "Qualification funnel, appointment reminders, prospect nurturing and automated onboarding.", tech: "Funnel, CRM, calendar, automation" },
];

export default function OurWork() {
  return (
    <>
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Our Work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Examples of What AZEDOR Builds.</h1>
          <p className="mt-4 max-w-2xl text-lg text-mutedDark">These are example projects, clearly labelled. They show how the system works. They are not presented as paying client engagements, and no outcomes are claimed for real clients.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-shell gap-5 px-4 sm:px-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="rounded-card border border-line bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">{p.category} · {p.industry}</p>
              <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted"><strong className="text-ink">Challenge:</strong> {p.challenge}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">System:</strong> {p.system}</p>
              <p className="mt-3 border-t border-line pt-3 text-xs text-muted"><strong>Technical implementation:</strong> {p.tech}</p>
              <p className="mt-2 text-[11px] text-muted">Example project — an illustration, not a client result.</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-shell px-4 sm:px-6"><Link href="/free-audit" className="rounded-btn bg-lime px-6 py-3 font-bold text-ink hover:bg-limeDark">Get Your Free Audit →</Link></div>
      </section>
      <CtaBanner />
    </>
  );
}
