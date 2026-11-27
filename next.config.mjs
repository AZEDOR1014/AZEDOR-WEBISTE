/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The old single AI page was split into two pages on 2026-11-27.
      { source: "/solutions/ai-receptionists-agents", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
