const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 768, 1024, 1200],
    minimumCacheTTL: 31536000,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;