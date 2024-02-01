/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    IMAGE_URL_PROTOCOL: process.env.IMAGE_URL_PROTOCOL,
    IMAGE_URL_HOSTNAME: process.env.IMAGE_URL_HOSTNAME,
    IMAGE_URL: process.env.IMAGE_URL,
  },

    images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_URL_PROTOCOL,
        hostname: process.env.IMAGE_URL_HOSTNAME,
        port: '',
        pathname: '/**',
      },
    ],
  },

};

module.exports = nextConfig;
