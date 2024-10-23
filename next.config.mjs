/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/demo/crystalkuta',
  assetPrefix: '/demo/crystalkuta',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
