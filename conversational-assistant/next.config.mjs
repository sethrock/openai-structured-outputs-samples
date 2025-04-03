
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      }
    ],
  },
  // Required for Replit hosting
  output: 'standalone',
  // Configure server
  webpack: (config) => {
    return config
  },
  experimental: {
    serverMinification: false
  }
};

export default nextConfig;
