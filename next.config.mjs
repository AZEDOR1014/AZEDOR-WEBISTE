/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
