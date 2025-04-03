
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
  output: 'standalone'
};

export default nextConfig;
