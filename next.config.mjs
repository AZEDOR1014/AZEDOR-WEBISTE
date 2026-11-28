/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // The old single AI page was split into two pages on 2026-11-27.
      { source: "/solutions/ai-receptionists-agents", destination: "/solutions", permanent: true },
      // Shortcuts: proper server redirects (the redirect() pages returned a
      // 307 with no Location header, so crawlers and non-JS clients could
      // not follow them). The page files remain as a fallback.
      { source: "/hvac", destination: "/industries/hvac", permanent: true },
      { source: "/salon", destination: "/industries/salons-spas", permanent: true },
      { source: "/spa", destination: "/industries/salons-spas", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Security headers on every page. No Content-Security-Policy here on
        // purpose: the site uses inline JSON-LD and (only if configured via
        // env vars) analytics scripts, which a strict CSP would break.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
      {
        // Next.js build assets are content-hashed, so they are safe to cache
        // for a year. (Next.js already sets this; stated here explicitly.)
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Public images may be replaced (e.g. a new logo), so cache them for
        // one day only, not immutably.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
