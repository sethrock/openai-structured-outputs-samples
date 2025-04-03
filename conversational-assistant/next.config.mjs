
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
  },
  // Ensure proper host binding
  async rewrites() {
    return [];
  },
  // Server configuration
  server: {
    hostname: '0.0.0.0',
    port: 5000
  }
};

export default nextConfig;
