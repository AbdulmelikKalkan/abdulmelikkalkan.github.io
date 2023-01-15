/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/about',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
