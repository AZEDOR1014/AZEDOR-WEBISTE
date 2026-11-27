import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, type BlogBlock } from "@/lib/blog";
import { CtaBanner } from "@/components/Shared";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = BLOG_POSTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} | AZEDOR`,
    description: p.description,
    openGraph: {
      title: `${p.title} | AZEDOR`,
      description: p.description,
      images: [{ url: `/images/blog/social-${p.slug}.jpg`, width: 1200, height: 630, alt: p.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} | AZEDOR`,
      description: p.description,
      images: [`/images/blog/social-${p.slug}.jpg`],
    },
  };
}

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "p":
      return <p className="mt-5 leading-relaxed text-muted">{b.text}</p>;
    case "h2":
      return <h2 className="mt-12 text-3xl font-extrabold leading-snug">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-2xl font-bold leading-snug">{b.text}</h3>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted"><span className="font-extrabold text-lime">✓</span><span>{i}</span></li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {b.items.map((i, idx) => (
            <li key={i} className="rounded-card border border-line bg-white px-5 py-4 leading-relaxed text-muted"><span className="font-extrabold text-lime">0{idx + 1} · </span>{i}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-card border border-lime bg-tintLime p-6">
          <p className="font-bold">{b.title}</p>
          <p className="mt-2 leading-relaxed text-muted">{b.text}</p>
        </div>
      );
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const p = BLOG_POSTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const others = BLOG_POSTS.filter((x) => x.slug !== p.slug);
  return (<>
    <section className="bg-ink bg-grid-dark py-16 text-white lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
          <Link href="/blog" className="hover:underline">Blog</Link> · {p.tag} · {p.dateLabel} · {p.readTime}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{p.title}</h1>
        <p className="mt-4 text-lg text-mutedDark">{p.summary}</p>
      </div>
    </section>
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-card border border-lime bg-tintLime p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink">The short answer</p>
          <p className="mt-2 text-lg leading-relaxed">{p.answer}</p>
        </div>
        {p.sections.map((b, i) => (<Block key={i} b={b} />))}
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold leading-snug">Questions About This Topic</h2>
          <div className="mt-6"><Faq items={p.faqs} /></div>
        </section>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href={p.ctaPrimary.href} className="rounded-btn bg-lime px-6 py-3.5 text-center font-bold text-ink hover:bg-limeDark">{p.ctaPrimary.label}</Link>
          <Link href={p.ctaSecondary.href} className="rounded-btn border border-line bg-white px-6 py-3.5 text-center font-bold text-ink hover:border-lime">{p.ctaSecondary.label}</Link>
        </div>
      </div>
    </article>
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Keep reading</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <article key={o.slug} className="rounded-card border border-line bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">{o.tag} · {o.readTime}</p>
              <h3 className="mt-2 text-lg font-bold leading-snug"><Link href={`/blog/${o.slug}`} className="hover:text-ink/70">{o.title}</Link></h3>
              <Link href={`/blog/${o.slug}`} className="mt-3 inline-block text-sm font-bold text-ink hover:text-limeDark">Read →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, image: `https://azedor.com/images/blog/social-${p.slug}.jpg`, author: { "@type": "Organization", name: "AZEDOR", url: "https://azedor.com" }, publisher: { "@type": "Organization", name: "AZEDOR", url: "https://azedor.com" } }) }} />
    <CtaBanner />
  </>);
}
