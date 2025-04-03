
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Required for Replit hosting
  output: 'standalone',
  experimental: {
    serverActions: true
  }
};

export default nextConfig;
