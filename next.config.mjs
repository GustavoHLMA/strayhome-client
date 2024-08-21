/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],

  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
