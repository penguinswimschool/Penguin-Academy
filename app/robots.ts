import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/account', '/signup', '/studio', '/api', '/auth'],
    },
    sitemap: 'https://www.swimcoachcertification.com/sitemap.xml',
  }
}
