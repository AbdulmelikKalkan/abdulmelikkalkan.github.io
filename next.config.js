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
        source: 'https://abdulmelik.dev/cv',
        destination: 'https://abdulmelik.dev/about',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
