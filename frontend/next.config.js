/** @type {import('next').NextConfig} */

const apiBasePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:8000/api'

const nextConfig = {
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/api/:path*',
        destination: `${apiBasePath}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
