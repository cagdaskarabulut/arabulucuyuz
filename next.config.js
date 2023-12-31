/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true
  },
  async rewrites() {
      return [
          {
              source: '/api/:path*',
              destination: 'http://localhost:8080/api/:path*',
          },
      ]
  }
}

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/Arabuluculuk',
//         permanent: true,
//       },
//     ]
//   },
// }

module.exports = nextConfig

optimizeDynamicImport = true //added for seo
