/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production'
        ? `${process.env.BACKEND_URL}/api/:path*`
        : 'http://locahost:8000/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
