import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneMissed, Clock, Filter, MailWarning, ClipboardList, Users, Check, X, Minus, PhoneCall, CalendarCheck, Mail, Star } from "lucide-react";
import { INDUSTRIES, SOLUTIONS, JOURNEY, GROUP_ACCENT, AI_CHANNELS } from "@/lib/data";
import { SectionHead, CtaBanner } from "@/components/Shared";
import DashboardPanel from "@/components/DashboardPanel";
import SystemExamples from "@/components/SystemExamples";
import { Reveal, Tilt, FunnelDiagram, ProcessSteps } from "@/components/Animate";
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

const COMPARE: { label: string; agency: string; tools: string; azedor: string }[] = [
  { label: "Lead generation", agency: "Yes", tools: "No", azedor: "Yes — connected to follow-up" },
  { label: "Industry-specific strategy", agency: "Sometimes", tools: "No", azedor: "Yes — built around your business" },
  { label: "Website and funnel development", agency: "Yes", tools: "No", azedor: "Yes" },
  { label: "Conversation & Calling AI Agent engagement", agency: "Rarely", tools: "Sometimes", azedor: "Yes — 24/7, with human handover" },
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
        <div className="mx-auto grid max-w-shell items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">AI Marketing &amp; Business Automation</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] sm:text-6xl lg:text-[72px]">More Leads. More Customers. <span className="text-lime">Less Manual Work.</span></h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mutedDark">Custom marketing, CRM and AI automation for service businesses. More customers. Less manual work.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/free-audit" className="rounded-btn bg-lime px-6 py-3.5 font-bold text-ink hover:bg-limeDark">Get Your Free Audit</Link>
              <Link href="/how-it-works" className="rounded-btn border border-lineDark px-6 py-3.5 font-bold text-white hover:border-lime">See How It Works</Link>
            </div>
            <p className="mt-4 text-sm text-mutedDark">Customized solutions. No obligation. Built around your business.</p>
            {/* What the system does — fills the left column so it balances
                with the tall dashboard panel on the right. Static content
                only: no animation, no movement, hero stays still. */}
            <div className="mt-8 border-t border-lineDark pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">What the system does for you</p>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: PhoneCall, text: "Answers every call and message — Conversation AI Agent and Calling AI Agent, 24/7." },
                  { icon: CalendarCheck, text: "Books appointments straight into your calendar." },
                  { icon: Mail, text: "Follows up automatically — estimates, reminders and rebooking." },
                  { icon: Star, text: "Asks for reviews after every completed job and brings customers back." },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime"><item.icon size={16} /></span>
                    <span className="pt-1 text-sm leading-relaxed text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-mutedDark">Answered on every channel</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {AI_CHANNELS.map((c) => (
                  <span key={c.name} className="flex items-center gap-1.5 rounded-full border border-lineDark bg-deep px-3 py-1.5 text-xs font-semibold text-white"><c.icon size={13} className="text-lime" />{c.name}</span>
                ))}
              </div>
              <Link href="/free-audit" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lime hover:underline">Get Your Free Audit <ArrowRight size={15} /></Link>
            </div>
          </div>
          <DashboardPanel />
        </div>
      </section>

      {/* 2. Problems bento */}
      <section className="bg-tintLime py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="The problem" title="Your Business Doesn't Need More Disconnected Tools." sub="Ads bring inquiries. Disconnected tools lose them." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className={i === 0 ? "lg:col-span-2" : ""}>
              <article className="h-full rounded-card border border-line bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p.icon className="text-ink" size={26} />
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.example}</p>
                <p className="mt-3 border-t border-line pt-3 text-sm font-semibold">{p.consequence}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Growth System */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead dark label="The AZEDOR Growth System" title="One Connected System. Every Stage of Your Customer Journey." sub="Every stage connects to the next. We build the combination your business needs." />
          <FunnelDiagram steps={JOURNEY} />
        </div>
      </section>

      {/* 4. Industries */}
      <section className="bg-warm py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Industries" title="Different Industries. Different Challenges. Customized Solutions." sub="One system, shaped to how your business actually works." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <Tilt key={ind.slug}>
              <Link href={`/industries/${ind.slug}`} className="group block overflow-hidden rounded-card border border-line bg-white shadow-sm hover:border-ink hover:shadow-xl">
                <div className="h-1.5" style={{ backgroundColor: GROUP_ACCENT[ind.group].main }} />
                <div className="relative h-44 overflow-hidden bg-deep">
                  <Image src={ind.image} alt={`${ind.name} business`} fill className="object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: GROUP_ACCENT[ind.group].soft, color: GROUP_ACCENT[ind.group].dark }}><ind.icon size={18} /></span>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: GROUP_ACCENT[ind.group].dark }}>{ind.group}</p>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">Challenge:</strong> {ind.problems[0].title} — {ind.problems[0].example}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><strong className="text-ink">Solution:</strong> {ind.solutions[0]}.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-ink">Discover your industry solution <ArrowRight size={15} /></span>
                </div>
              </Link>
              </Tilt>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/industries" className="inline-block rounded-btn bg-lime px-8 py-3.5 font-bold text-ink shadow-md hover:bg-limeDark">View all industries →</Link></div>
        </div>
      </section>

      {/* 5. Problem explorer */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Interactive" title="What's Holding Your Business Back?" sub="Select a problem. See what usually causes it and what AZEDOR would build to fix it." />
          <ProblemExplorer />
        </div>
      </section>

      {/* 6. Seven solutions */}
      <section className="py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Solutions" title="Everything You Need to Connect Marketing, Sales and Operations." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className={`group rounded-card border border-line p-6 shadow-sm transition-transform hover:-translate-y-1 hover:border-ink hover:shadow-lg ${i === 0 ? "bg-ink text-white" : "bg-white"} ${i === 3 ? "lg:col-span-2" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${i === 0 ? "bg-white/10 text-lime" : "bg-tintLime text-ink"}`}><s.icon size={22} /></span>
                  <p className={`text-xs font-bold uppercase tracking-wider ${i === 0 ? "text-lime" : "text-muted"}`}>0{i + 1}</p>
                </div>
                <h3 className="mt-3 text-2xl font-bold">{s.name}</h3>
                <p className={`mt-2 leading-relaxed ${i === 0 ? "text-mutedDark" : "text-muted"}`}>{s.sub}</p>
                {s.slug === "conversation-ai-agent" && (<div className="mt-3 flex flex-wrap gap-1.5">{AI_CHANNELS.map((c) => (<span key={c.name} className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${i === 0 ? "border-white/20 bg-white/10 text-white" : "border-line bg-paper"}`}>{c.name}</span>))}</div>)}
                {s.slug === "calling-ai-agent" && (<p className={`mt-3 text-sm font-semibold ${i === 0 ? "text-mutedDark" : "text-ink"}`}>Phone calls — answered in your business name, 24/7.</p>)}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">Learn more <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. System in action */}
      <section className="bg-deep py-24 text-white">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead dark label="See the system in action" title="Real Examples. Clearly Labelled." sub="How the system works — examples, not client results." />
          <SystemExamples />
        </div>
      </section>

      {/* 8. Calculator */}
      <section className="bg-tintTeal py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Calculator" title="How Much Are Lost Leads Costing You?" sub="Move the sliders. See an illustrative estimate of what missed follow-up could be worth — not a guaranteed result." />
          <LeadLossCalculator />
        </div>
      </section>

      {/* 9. Why AZEDOR */}
      <section className="bg-tintAmber py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="Why AZEDOR?" title="AZEDOR vs. Conventional Agencies vs. Disconnected Tools" sub="The difference: AZEDOR connects everything into one system." />
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
      <section className="bg-tintSky py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHead label="How it works" title="From First Call to a System That Runs." />
          <ProcessSteps steps={[
            { n: "01", title: "Discover", text: "Your business, customer journey and problems." },
            { n: "02", title: "Design", text: "A customized strategy — in writing, before you commit." },
            { n: "03", title: "Implement", text: "Ads, website, Conversation and Calling AI Agents, CRM and follow-up, built and tested." },
            { n: "04", title: "Optimize", text: "Monitored, improved and supported after launch." },
          ]} />
        </div>
      </section>

      {/* 11. Founder */}
      <section className="bg-paper py-24">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHead label="About AZEDOR" title="Business Problems First. Technology Second." sub="Remote agency. We start with how your business works — then build the system around it." />
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">✓ Customized, not templates</span>
              <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">✓ Transparent communication</span>
              <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">✓ Long-term value</span>
            </div>
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
            { q: "Can the Conversation AI Agent hand conversations over to my team?", a: "Yes. At any point the Conversation AI Agent can hand a conversation to a human, with the full history attached." },
            { q: "Do you provide ongoing support?", a: "Yes. We monitor performance, improve workflows and provide support after launch." },
            { q: "How much does it cost?", a: "Implementation scope and pricing depend on your business requirements. The free audit gives you a written plan before you commit to anything." },
          ]} />
        </div>
      </section>

      {/* 13. Final audit CTA */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-snug sm:text-4xl">Find Out Where Your Business Is Losing Opportunities.</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Website & funnel", "Lead handling", "Follow-up", "CRM", "Automation", "Recommendations"].map((c) => (
                <span key={c} className="rounded-full border border-lineDark bg-deep px-4 py-2 text-sm font-semibold text-white">{c}</span>
              ))}
            </div>
          </div>
          <AuditForm compact />
        </div>
      </section>
      <CtaBanner title="Your Marketing, Sales and Automation. Connected." sub="One system, built around your business. Start with a free audit." />
    </>
  );
}
