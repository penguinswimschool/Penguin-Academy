import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/react-right-cpr-aed-first-aid',
        destination: '/courses/react-right-cpr-aed-first-aid',
        permanent: true,
      },
      {
        source: '/baby-me-swim-teacher-course',
        destination: '/courses/baby-and-me-swim-teacher',
        permanent: true,
      },
      {
        source: '/ssi-swim-teacher-level-2',
        destination: '/courses/ssi-swim-teacher-level-2',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
