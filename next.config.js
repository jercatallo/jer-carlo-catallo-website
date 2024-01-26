/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: process.env.IMAGE_URL_PROTOCOL,
            hostname:  process.env.IMAGE_URL_HOSTNAME,
            port: '',
            pathname: '/**',
          },
        ],
      },

};

module.exports = nextConfig;
