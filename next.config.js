/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    env: {
      MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
      MAILCHIMP_SERVER_ID: process.env.MAILCHIMP_SERVER_ID,
      MAILCHIMP_AUDIENCE_LIST_ID: process.env.MAILCHIMP_AUDIENCE_LIST_ID,
    },
  },
};
