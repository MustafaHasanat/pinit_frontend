/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // experimental: {
  //   appDir: true
  // },

  images: {
    domains: ['cdn.sanity.io'], 
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
