
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dq2wjozdk/**',
      }
    ],
    domains: ['res.cloudinary.com']
  },
  output: 'standalone',
  webpack: (config) => {
    return config
  },
  experimental: {
    serverMinification: false
  }
};

export default nextConfig;
