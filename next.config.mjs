/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force all pages to be client-rendered
  // This fixes hydration mismatches
  output: "export",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable development indicators UI with correct syntax
  devIndicators: false,
};

export default nextConfig;
