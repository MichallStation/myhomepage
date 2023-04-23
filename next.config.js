/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['home', 'en', 'vi', 'zh'],
    defaultLocale: 'home',
    localeDetection: false,
  },
};

module.exports = nextConfig;
