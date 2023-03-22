/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'nox281.github.io',
      },
    ],
  },
};

module.exports = nextConfig
