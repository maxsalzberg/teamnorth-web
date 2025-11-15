/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 768, 1024, 1200],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;