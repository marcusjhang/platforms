import type { NextConfig } from "next";

// Optional comma-separated hosts (wildcards allowed, e.g. "*.example.dev") that may
// load dev resources and submit Server Actions, for proxied preview environments
const extraAllowedOrigins = (process.env.EXTRA_ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: extraAllowedOrigins,
  experimental: {
    // Enable experimental features if needed
    serverActions: {
      allowedOrigins: extraAllowedOrigins
    }
  },
  // Ensure proper handling of Vercel Analytics and Speed Insights
  // headers: async () => {
  //   return [
  //     {
  //       source: '/_vercel/speed-insights/script.js',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
