/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    // prependData: `@import "styles/globals.scss";`, // prependData 옵션 추가
  },
}

module.exports = {
  // Use the CDN in production and localhost for development.
}