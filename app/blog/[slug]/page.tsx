import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, type BlogBlock } from "@/lib/blog";
import { CtaBanner } from "@/components/Shared";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the live
// site is the Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com in
// Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = BLOG_POSTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  const url = `${SITE_URL}/blog/${p.slug}`;
  const image = `${SITE_URL}/images/blog/social-${p.slug}.jpg`;
  return {
    title: `${p.title} | AZEDOR`,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${p.title} | AZEDOR`,
      description: p.description,
      publishedTime: p.date,
      authors: ["AZEDOR"],
      images: [{ url: image, width: 1200, height: 630, alt: p.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} | AZEDOR`,
      description: p.description,
      images: [image],
    },
  };
}

// Renders bare URLs in paragraph text as clickable links. Only the
// "Sources" paragraphs in lib/blog.ts contain URLs, so this changes no
// article text — it only makes the source links clickable.
function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="break-all font-semibold text-ink underline">{part}</a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "p":
      return <p className="mt-5 leading-relaxed text-muted">{linkify(b.text)}</p>;
    case "h2":
      return <h2 className="mt-12 text-3xl font-extrabold leading-snug">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-2xl font-bold leading-snug">{b.text}</h3>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted"><span className="font-extrabold text-limeDeep">✓</span><span>{i}</span></li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3">
          {b.items.map((i, idx) => (
            <li key={i} className="rounded-card border border-line bg-white px-5 py-4 leading-relaxed text-muted"><span className="font-extrabold text-limeDeep">0{idx + 1} · </span>{i}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-card border border-limeDark bg-tintLime p-6">
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
        <div className="rounded-card border border-limeDark bg-tintLime p-6">
          <p className="eyebrow text-ink">The short answer</p>
          <p className="mt-2 text-lg leading-relaxed">{p.answer}</p>
        </div>
        {p.sections.map((b, i) => (<Block key={i} b={b} />))}
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold leading-snug">Questions About This Topic</h2>
          <div className="mt-6"><Faq items={p.faqs} /></div>
        </section>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href={p.ctaPrimary.href} className="btn btn-primary text-center">{p.ctaPrimary.label}</Link>
          <Link href={p.ctaSecondary.href} className="btn btn-secondary text-center">{p.ctaSecondary.label}</Link>
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
              <Link href={`/blog/${o.slug}`} className="mt-3 inline-block text-sm font-bold text-ink hover:text-limeDeep">Read →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, dateModified: p.date, image: `${SITE_URL}/images/blog/social-${p.slug}.jpg`, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${p.slug}` }, author: { "@type": "Organization", name: "AZEDOR", url: SITE_URL }, publisher: { "@type": "Organization", name: "AZEDOR", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-azedor-transparent.png` } } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: p.title, item: `${SITE_URL}/blog/${p.slug}` }] },
      // FAQPage uses only the questions actually rendered on this page.
      { "@type": "FAQPage", mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ] }) }} />
    <CtaBanner />
  </>);
}
