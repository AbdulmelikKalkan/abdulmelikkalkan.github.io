/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'standalone',
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://docs.google.com/document/d/1_5kFQWujxgYVaWwZpiSBG5B7_qGexIW23jl0LLg5PjA/preview#',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig