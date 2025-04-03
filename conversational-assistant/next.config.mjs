
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dq2wjozdk/**',
      }
    ]
  },
  output: 'standalone',
  experimental: {
    serverMinification: false
  }
};

export default nextConfig;
