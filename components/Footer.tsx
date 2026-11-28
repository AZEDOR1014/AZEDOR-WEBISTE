import Link from "next/link";
import Image from "next/image";
import { NAV_INDUSTRIES, SOLUTIONS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-shell gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image src="/images/logo-azedor-transparent.png" alt="AZEDOR" width={480} height={122} loading="lazy" className="h-12 w-auto" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mutedDark">Your Marketing, Sales and Automation. Connected. AZEDOR builds customized marketing, CRM and AI automation systems for service-based businesses in the USA.</p>
          <p className="mt-4 text-sm text-mutedDark">Email: <a className="text-lime hover:underline" href="mailto:azedor.marketing@gmail.com">azedor.marketing@gmail.com</a></p>
        </div>
        <nav aria-label="Solutions">
          <p className="eyebrow mb-3 text-lime">Solutions</p>
          {SOLUTIONS.map((s) => (<Link key={s.slug} href={`/solutions/${s.slug}`} className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">{s.name}</Link>))}
        </nav>
        <nav aria-label="Industries">
          <p className="eyebrow mb-3 text-lime">Industries</p>
          {NAV_INDUSTRIES.flatMap((g) => g.items).map((i) => (<Link key={i.slug} href={`/industries/${i.slug}`} className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">{i.name}</Link>))}
          <Link href="/industries" className="flex min-h-[44px] items-center py-1 text-sm text-lime">All industries →</Link>
        </nav>
        <nav aria-label="Company">
          <p className="eyebrow mb-3 text-lime">Company</p>
          <Link href="/how-it-works" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">How It Works</Link>
          <Link href="/our-work" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Our Work</Link>
          <Link href="/blog" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Blog</Link>
          <Link href="/about" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">About</Link>
          <Link href="/free-audit" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Free Audit</Link>
          <Link href="/contact" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Contact</Link>
          <Link href="/privacy" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="flex min-h-[44px] items-center py-1 text-sm text-mutedDark hover:text-white">Terms of Service</Link>
        </nav>
      </div>
      <div className="border-t border-lineDark pb-20 pt-5 text-center text-xs text-mutedDark lg:pb-5">© {new Date().getFullYear()} AZEDOR. All rights reserved.</div>
    </footer>
  );
}
