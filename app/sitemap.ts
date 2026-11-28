import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { INDUSTRIES, SOLUTIONS } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";

// Same rule as app/layout.tsx: azedor.com is NOT attached yet, so the sitemap
// uses the live Vercel URL. Set NEXT_PUBLIC_SITE_URL to https://azedor.com
// in Vercel when the domain is attached — no code change needed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azedor-website.vercel.app";

// lastModified is the real file-modification date of the page (or of the data
// file behind a dynamic page), never "now" for every URL. If a file cannot be
// read, fall back to the last known site-wide change date, 2026-11-28.
const FALLBACK = new Date("2026-11-28");
function mtime(...relPaths: string[]): Date {
  try {
    return new Date(Math.max(...relPaths.map((p) => statSync(join(process.cwd(), p)).mtimeMs)));
  } catch {
    return FALLBACK;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // [path, priority, changeFrequency, files that determine lastModified]
  const pages: [string, number, "weekly" | "monthly", string[]][] = [
    ["", 1, "weekly", ["app/page.tsx", "lib/data.ts", "lib/blog.ts"]],
    ["/free-audit", 0.9, "weekly", ["app/free-audit/page.tsx"]],
    ["/solutions", 0.8, "weekly", ["app/solutions/page.tsx", "lib/data.ts"]],
    ["/industries", 0.8, "weekly", ["app/industries/page.tsx", "lib/data.ts"]],
    ["/blog", 0.8, "weekly", ["app/blog/page.tsx", "lib/blog.ts"]],
    ["/how-it-works", 0.7, "monthly", ["app/how-it-works/page.tsx"]],
    ["/our-work", 0.7, "monthly", ["app/our-work/page.tsx"]],
    ["/about", 0.7, "monthly", ["app/about/page.tsx"]],
    ["/contact", 0.7, "monthly", ["app/contact/page.tsx"]],
    ["/privacy", 0.3, "monthly", ["app/privacy/page.tsx"]],
    ["/terms", 0.3, "monthly", ["app/terms/page.tsx"]],
    // /thank-you is deliberately excluded: it is a post-conversion page with
    // robots noindex, nofollow and must never be submitted to Google.
  ];
  return [
    ...pages.map(([p, priority, changeFrequency, files]) => ({
      url: `${SITE_URL}${p}`,
      lastModified: mtime(...files),
      changeFrequency,
      priority,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      lastModified: mtime("app/industries/[slug]/page.tsx", "lib/data.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${SITE_URL}/solutions/${s.slug}`,
      lastModified: mtime("app/solutions/[slug]/page.tsx", "lib/data.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BLOG_POSTS.map((b) => ({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
