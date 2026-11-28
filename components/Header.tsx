"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { NAV_INDUSTRIES, SOLUTIONS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const toggleMenu = (name: string) => setMenu((m) => (m === name ? null : name));
  const closeMenus = () => { setMenu(null); setOpen(false); };
  const onMenuKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Escape") { setMenu(null); } };
  return (
    <>
    <header className="sticky top-0 z-50 border-b border-lineDark bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="AZEDOR — home"><Image src="/images/logo-azedor-transparent.png" alt="AZEDOR" width={480} height={122} priority className="h-10 w-auto sm:h-12" /></Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex" aria-label="Main">
          <div className="relative" onMouseEnter={() => setMenu("solutions")} onMouseLeave={() => setMenu(null)} onKeyDown={onMenuKeyDown}>
            <button className="flex min-h-[44px] items-center gap-1 py-2 hover:text-lime" aria-expanded={menu === "solutions"} aria-haspopup="true" aria-controls="menu-solutions" onClick={() => toggleMenu("solutions")}>Solutions <ChevronDown size={14} aria-hidden /></button>
            {menu === "solutions" && (
              <div id="menu-solutions" className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 rounded-card border border-lineDark bg-deep p-2 shadow-xl">
                {SOLUTIONS.map((s) => (
                  <Link key={s.slug} href={`/solutions/${s.slug}`} onClick={closeMenus} className="block rounded-lg px-3 py-2.5 hover:bg-white/5">
                    <span className="block text-white">{s.name}</span>
                    <span className="block text-xs font-normal text-mutedDark">{s.headline}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setMenu("industries")} onMouseLeave={() => setMenu(null)} onKeyDown={onMenuKeyDown}>
            <button className="flex min-h-[44px] items-center gap-1 py-2 hover:text-lime" aria-expanded={menu === "industries"} aria-haspopup="true" aria-controls="menu-industries" onClick={() => toggleMenu("industries")}>Industries <ChevronDown size={14} aria-hidden /></button>
            {menu === "industries" && (
              <div id="menu-industries" className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 rounded-card border border-lineDark bg-deep p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {NAV_INDUSTRIES.map((g) => (
                    <div key={g.group}>
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-lime">{g.group}</p>
                      {g.items.map((i) => (
                        <Link key={i.slug} href={`/industries/${i.slug}`} onClick={closeMenus} className="block rounded px-2 py-1.5 text-sm hover:bg-white/5">{i.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
                <Link href="/industries" onClick={closeMenus} className="mt-3 flex items-center gap-1 border-t border-lineDark px-2 pt-3 text-sm text-lime">All industries <ArrowRight size={14} /></Link>
              </div>
            )}
          </div>
          <Link href="/our-work" className="inline-flex min-h-[44px] items-center hover:text-lime">Our Work</Link>
          <Link href="/how-it-works" className="inline-flex min-h-[44px] items-center hover:text-lime">How It Works</Link>
          <Link href="/blog" className="inline-flex min-h-[44px] items-center hover:text-lime">Blog</Link>
          <Link href="/about" className="inline-flex min-h-[44px] items-center hover:text-lime">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/free-audit" className="btn btn-primary btn-sm hidden sm:inline-flex">Get Your Free Audit</Link>
          <button className="rounded-btn p-2.5 hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">{open ? <X aria-hidden /> : <Menu aria-hidden />}</button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-lineDark bg-ink px-4 pb-6 pt-2 lg:hidden">
          <p className="py-2 text-xs font-bold uppercase tracking-wider text-lime">Solutions</p>
          {SOLUTIONS.map((s) => (<Link key={s.slug} href={`/solutions/${s.slug}`} onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm">{s.name}</Link>))}
          <p className="py-2 text-xs font-bold uppercase tracking-wider text-lime">Industries</p>
          {NAV_INDUSTRIES.flatMap((g) => g.items).map((i) => (<Link key={i.slug} href={`/industries/${i.slug}`} onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm">{i.name}</Link>))}
          <Link href="/our-work" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm font-semibold">Our Work</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm font-semibold">How It Works</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm font-semibold">Blog</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center py-1 text-sm font-semibold">About</Link>
          <Link href="/free-audit" onClick={() => setOpen(false)} className="btn btn-primary btn-sm mt-3 min-h-[44px] w-full">Get Your Free Audit</Link>
        </div>
      )}
    </header>
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-lineDark bg-ink/95 px-4 py-3 backdrop-blur lg:hidden">
      <Link href="/free-audit" className="btn btn-primary w-full">Get Your Free Audit →</Link>
    </div>
    </>
  );
}
