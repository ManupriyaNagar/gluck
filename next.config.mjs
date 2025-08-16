/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  staticPageGenerationTimeout: 300, // <- move here
  images: {
      unoptimized: true,
  },
};

export default nextConfig;
