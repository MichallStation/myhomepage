const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  navigateFallback: '/',
  // buildExcludes: [/middleware-manifest.json$/],
  cleanupOutdatedCaches: true,
  // sw: 'service-worker.js',
  // disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // locales: ['home', 'en', 'vi', 'zh'],
    locales: ['home', 'en', 'vi'],
    defaultLocale: 'home',
    localeDetection: false,
  },
  // trailingSlash: true,
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
