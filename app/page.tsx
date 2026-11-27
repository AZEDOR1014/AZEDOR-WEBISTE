import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneMissed, Clock, Filter, MailWarning, ClipboardList, Users, Check, X, Minus } from "lucide-react";
import { INDUSTRIES, SOLUTIONS, JOURNEY } from "@/lib/data";
import { SectionHead, CtaBanner, DashboardDemo } from "@/components/Shared";
import ProblemExplorer from "@/components/ProblemExplorer";
import LeadLossCalculator from "@/components/LeadLossCalculator";
import Faq from "@/components/Faq";
import AuditForm from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "AI Marketing Agency for Service Businesses in the USA | AZEDOR",
  description: "AZEDOR builds customized marketing, CRM and AI automation systems for service-based businesses. More leads, more customers, less manual work.",
};

const PROBLEMS = [
  { icon: PhoneMissed, title: "Missed calls and messages", example: "A customer calls at 7pm. No one answers.", consequence: "They call your competitor instead." },
  { icon: Clock, title: "Slow lead response", example: "An inquiry waits a day for a reply.", consequence: "By then, the customer has already booked elsewhere." },
  { icon: Filter, title: "Poor-quality inquiries", example: "Your team spends hours on people who were never a fit.", consequence: "Real buyers wait — and leave." },
  { icon: MailWarning, title: "Forgotten follow-ups", example: "A quote is sent. No one follows up.", consequence: "Work you already won is lost to silence." },
  { icon: ClipboardList, title: "Manual administrative work", example: "The same forms, emails and chasing, every day.", consequence: "Hours lost on admin instead of customers." },
  { icon: Users, title: "Low customer retention", example: "Happy customers leave and are never invited back.", consequence: "You keep paying to find new ones." },
];

const DEMOS = [
  { key: "HVAC CRM pipeline", title: "HVAC CRM pipeline", body: "New Inquiry → Qualified → Visit Scheduled → Estimate Sent → Approved → Job Completed → Follow-Up. Every lead, every estimate, in one place." },
  { key: "AI receptionist", title: "AI receptionist conversation", body: "Caller: My AC stopped working. AI: I'm sorry to hear that. Is anyone at home now, and is this an emergency? … Appointment booked for tomorrow, 9–11am. A human can take over at any time." },
  { key: "Salon booking", title: "Salon booking workflow", body: "Instagram inquiry → AI replies with services and prices → client picks a time → booking confirmed → reminder sent the day before → rebooking invite after the visit." },
  { key: "Real estate", title: "Real estate lead qualification", body: "Buyer asks about a listing → AI asks budget, timeline and area → qualified lead routed to the right agent → viewing booked." },
  { key: "Follow-up", title: "Automated follow-up workflow", body: "Lead in → instant reply → day-2 check-in → day-5 reminder → no-show rescue → long-term nurture. It stops the moment the lead replies." },
];

const COMPARE: { label: string; agency: string; tools: string; azedor: string }[] = [
  { label: "Lead generation", agency: "Yes", tools: "No", azedor: "Yes — connected to follow-up" },
  { label: "Industry-specific strategy", agency: "Sometimes", tools: "No", azedor: "Yes — built around your business" },
  { label: "Website and funnel development", agency: "Yes", tools: "No", azedor: "Yes" },
  { label: "AI lead engagement", agency: "Rarely", tools: "Sometimes", azedor: "Yes — 24/7, with human handover" },
  { label: "CRM integration", agency: "Sometimes", tools: "Partial", azedor: "Yes — one connected system" },
  { label: "Automated follow-up", agency: "Sometimes", tools: "No", azedor: "Yes" },
  { label: "Customer retention", agency: "Rarely", tools: "No", azedor: "Yes — rebooking and reviews" },
  { label: "Business process automation", agency: "Rarely", tools: "Partial", azedor: "Yes" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-ink bg-grid-dark py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-shell items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">AI Marketing &amp; Business Automation</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[68px]">More Leads. More Customers. <span className="text-lime">Less Manual Work.</span></h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mutedDark">AZEDOR builds customized marketing, CRM and AI automation systems that help service businesses attract customers, convert more inquiries and automate everyday operations.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/free-audit" className="rounded-btn bg-lime px-6 py-3.5 font-bold text-ink hover:bg-limeDark">Get Your Free Audit</Link>
              <Link href="/how-it-works" className="rounded-btn border border-lineDark px-6 py-3.5 font-bold text-white hover:border-lime">See How It Works</Link>
            </div>
            <p className="mt-4 text-sm text-mutedDark">Customized solutions. No obligation. Built around your business.</p>
          </div>
          <DashboardDemo />
        </div>
      </section>

      {/* 2. Problems bento */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="The problem" title="Your Business Doesn't Need More Disconnected Tools." sub="Too many businesses spend money generating inquiries but lose opportunities because their marketing, sales and operations are disconnected." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <article key={p.title} className={`rounded-card border border-line bg-white p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <p.icon className="text-ink" size={26} />
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.example}</p>
                <p className="mt-3 border-t border-line pt-3 text-sm font-semibold">{p.consequence}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Growth System */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead dark label="The AZEDOR Growth System" title="One Connected System. Every Stage of Your Customer Journey." sub="Not every business needs every component. AZEDOR builds the right combination for your business — and every stage connects to the next." />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {JOURNEY.map((j, i) => (
              <li key={j.stage} className="rounded-card border border-lineDark bg-deep p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-lime">Step {i + 1} · {j.stage}</p>
                <h3 className="mt-2 text-xl font-bold">{j.solution}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedDark">{j.purpose}. {j.detail}</p>
                {i < JOURNEY.length - 1 && <p className="mt-4 text-lime" aria-hidden>↓ Next: {JOURNEY[i + 1].stage}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Industries" title="Different Industries. Different Challenges. Customized Solutions." sub="A dental clinic does not operate like an HVAC company. A salon does not sell like a real estate agency. Your marketing and automation should reflect the way your business actually works." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group overflow-hidden rounded-card border border-line bg-white hover:border-ink">
                <div className="relative h-44 overflow-hidden bg-deep">
                  <Image src={ind.image} alt={`${ind.name} business`} fill className="object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">Challenge:</strong> {ind.problems[0].title} — {ind.problems[0].example}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">Solution:</strong> {ind.solutions[0]}.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-ink">Discover your industry solution <ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/industries" className="inline-block rounded-btn border border-ink px-6 py-3 font-bold hover:bg-ink hover:text-white">See all industries →</Link></div>
        </div>
      </section>

      {/* 5. Problem explorer */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Interactive" title="What's Holding Your Business Back?" sub="Select a problem. See what usually causes it and what AZEDOR would build to fix it." />
          <ProblemExplorer />
        </div>
      </section>

      {/* 6. Six solutions */}
      <section className="py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Solutions" title="Everything You Need to Connect Marketing, Sales and Operations." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className={`group rounded-card border border-line p-6 hover:border-ink ${i === 0 ? "bg-ink text-white" : "bg-white"} ${i === 3 ? "lg:col-span-2" : ""}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${i === 0 ? "text-lime" : "text-muted"}`}>0{i + 1}</p>
                <h3 className="mt-3 text-2xl font-bold">{s.name}</h3>
                <p className={`mt-2 leading-relaxed ${i === 0 ? "text-mutedDark" : "text-muted"}`}>{s.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">Learn more <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. System in action */}
      <section className="bg-deep py-24 text-white">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead dark label="See the system in action" title="Real Demonstrations. Clearly Labelled." sub="Conceptual demonstrations of the AZEDOR system. These are examples of how the system works — not results from real clients." />
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="flex flex-row flex-wrap gap-2 lg:col-span-2 lg:flex-col">
              {DEMOS.map((d) => (<a key={d.key} href="#demo" className="rounded-btn border border-lineDark px-4 py-2.5 text-sm font-semibold hover:border-lime hover:text-lime">{d.title}</a>))}
            </div>
            <div id="demo" className="space-y-4 lg:col-span-3">
              {DEMOS.map((d) => (
                <div key={d.key} className="rounded-card border border-lineDark bg-ink p-5">
                  <h3 className="font-bold text-lime">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mutedDark">{d.body}</p>
                  <p className="mt-2 text-[11px] text-mutedDark">Demonstration — illustrative example, not a client result.</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/our-work" className="mt-8 inline-block rounded-btn bg-lime px-6 py-3 font-bold text-ink hover:bg-limeDark">View Our Work →</Link>
        </div>
      </section>

      {/* 8. Calculator */}
      <section className="py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Calculator" title="How Much Are Lost Leads Costing You?" sub="Move the sliders. See an illustrative estimate of what missed follow-up could be worth — not a guaranteed result." />
          <LeadLossCalculator />
        </div>
      </section>

      {/* 9. Why AZEDOR */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Why AZEDOR?" title="AZEDOR vs. Conventional Agencies vs. Disconnected Tools" sub="A fair comparison. Many conventional agencies do good work — the difference is that AZEDOR connects everything into one system." />
          <div className="overflow-x-auto rounded-card border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead><tr className="border-b border-line bg-ink text-white"><th className="px-4 py-3">Capability</th><th className="px-4 py-3">Conventional agency</th><th className="px-4 py-3">Disconnected tools</th><th className="px-4 py-3 text-lime">AZEDOR</th></tr></thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.label} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-semibold">{r.label}</td>
                    <td className="px-4 py-3 text-muted">{r.agency === "Yes" ? <Check className="text-green-600" size={18} /> : r.agency === "Sometimes" ? <Minus className="text-amber-600" size={18} /> : <X className="text-red-500" size={18} />} {r.agency}</td>
                    <td className="px-4 py-3 text-muted">{r.tools === "Yes" ? <Check className="text-green-600" size={18} /> : r.tools === "Partial" || r.tools === "Sometimes" ? <Minus className="text-amber-600" size={18} /> : <X className="text-red-500" size={18} />} {r.tools}</td>
                    <td className="px-4 py-3 font-semibold">{r.azedor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="How it works" title="From First Call to a System That Runs." />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[["01", "Discover", "Understand the business, the customer journey and the problems."], ["02", "Design", "Create a customized marketing and automation strategy."], ["03", "Implement", "Build and integrate the required systems."], ["04", "Optimize", "Monitor performance, improve workflows and provide support."]].map(([n, t, d]) => (
              <li key={n} className="rounded-card border border-line bg-white p-6"><p className="text-3xl font-extrabold text-lime">{n}</p><h3 className="mt-3 text-xl font-bold">{t}</h3><p className="mt-2 text-muted leading-relaxed">{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* 11. Founder */}
      <section className="bg-paper py-24">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHead label="About AZEDOR" title="Business Problems First. Technology Second." sub="AZEDOR is a remote digital marketing and automation agency. We start with how your business actually works — then build the system around it." />
            <ul className="space-y-2 text-muted">
              <li>✓ Customized implementation, not templates</li>
              <li>✓ Transparent communication</li>
              <li>✓ Long-term customer value over quick sales</li>
            </ul>
          </div>
          <div className="rounded-card border border-dashed border-line bg-white p-8 text-center text-muted">
            <p className="font-bold text-ink">Founder photograph &amp; biography</p>
            <p className="mt-2 text-sm leading-relaxed">A genuine founder photograph and approved biography will be added here. No team members, offices or awards are claimed on this site until verified.</p>
          </div>
        </div>
      </section>

      {/* 12. FAQs */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHead label="FAQs" title="Questions About Working With AZEDOR" />
          <Faq items={[
            { q: "What types of businesses do you work with?", a: "All service-based businesses — HVAC, home services, salons and spas, beauty, dental and healthcare, real estate, automotive, gyms, coaches, education, legal, accounting and more." },
            { q: "Can I use my existing website and CRM?", a: "Yes. We can work with what you have, or rebuild the parts that lose leads. The free audit shows which is better for you." },
            { q: "Do I need all six services?", a: "No. We build the combination your business needs — nothing more." },
            { q: "What happens during the free audit?", a: "We review your website and funnel, lead handling, sales follow-up, CRM and automation opportunities — then give you customized recommendations in writing." },
            { q: "Can you integrate my existing software?", a: "Yes. Integrations are part of the design. We connect the tools you already pay for." },
            { q: "How long does implementation take?", a: "It depends on scope. You get a written plan and timeline before any build starts." },
            { q: "Can AI hand conversations over to my team?", a: "Yes. At any point the AI agent can hand a conversation to a human, with the full history attached." },
            { q: "Do you provide ongoing support?", a: "Yes. We monitor performance, improve workflows and provide support after launch." },
            { q: "How much does it cost?", a: "Implementation scope and pricing depend on your business requirements. The free audit gives you a written plan before you commit to anything." },
          ]} />
        </div>
      </section>

      {/* 13. Final audit CTA */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Find Out Where Your Business Is Losing Opportunities.</h2>
            <p className="mt-4 text-lg text-mutedDark">Your Free Lead-Leak &amp; Automation Audit includes: a website and funnel assessment, a lead handling review, a sales follow-up assessment, a CRM assessment, automation opportunity identification, and customized recommendations.</p>
          </div>
          <AuditForm compact />
        </div>
      </section>
      <CtaBanner title="Your Marketing, Sales and Automation. Connected." sub="One system, built around your business. Start with a free audit." />
    </>
  );
}
