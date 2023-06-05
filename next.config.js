/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  images: {
    domains: ["portlandai-autoblog-images.s3.us-west-2.amazonaws.com"],
  },
}

module.exports = nextConfig
