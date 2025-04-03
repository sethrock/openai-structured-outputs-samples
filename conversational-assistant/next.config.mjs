
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloud',
        pathname: '/**',
      },
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
  webSocketServerPort: 5000
};

export default nextConfig;
