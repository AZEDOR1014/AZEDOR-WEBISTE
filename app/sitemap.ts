import type { MetadataRoute } from "next";
import { INDUSTRIES, SOLUTIONS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://azedor.com";
  const now = new Date();
  const pages = ["", "/industries", "/solutions", "/how-it-works", "/our-work", "/free-audit", "/thank-you", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...INDUSTRIES.map((i) => ({ url: `${base}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...SOLUTIONS.map((s) => ({ url: `${base}/solutions/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
