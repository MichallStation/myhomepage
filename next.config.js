const withPWA = require('next-pwa')({
  dest: 'public',
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
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
