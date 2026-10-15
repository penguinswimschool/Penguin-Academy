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
  async headers() {
    const securityHeaders = [
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/:path(login|signup|account|dashboard|studio)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
        ],
      },
      {
        source: '/:path(login|signup|account|dashboard|studio)/:rest*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
        ],
      },
    ];
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
      {
        source: '/adult-swim-instructor',
        destination: '/courses/ssi-adult-swim-teacher',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
