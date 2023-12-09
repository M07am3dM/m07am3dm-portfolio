/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcLoader: true,
  },
  fonts: {
    google: {
      families: ["Your Font Family"],
    },
  },
};

module.exports = nextConfig;
