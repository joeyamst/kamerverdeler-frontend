import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  typescript: {
      ignoreBuildErrors: true
  },
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/kamerverdeler-frontend/' : '',
    basePath: isProd ? '/kamerverdeler-frontend' : '',
    output: 'export'
};

export default nextConfig;
