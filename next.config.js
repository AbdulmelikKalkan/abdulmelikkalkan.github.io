/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    unoptimized: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/about',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/about',
        permanent: true,
        basePath: false,
      },
    ]
  }
}
