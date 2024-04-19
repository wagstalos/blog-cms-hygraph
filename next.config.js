/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
