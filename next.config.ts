import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/clean-sofa',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
