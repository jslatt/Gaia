/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  env: {
    TMRW_IO: process.env.TMRW_IO,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  }
}

module.exports = nextConfig
