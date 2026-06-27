import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'

const baseUrl = 'https://www.swimcoachcertification.com'

const staticRoutes = [
  '',
  '/courses/ssi-swim-teacher-level-1',
  '/courses/ssi-swim-teacher-level-2',
  '/courses/baby-and-me-swim-teacher',
  '/courses/penguin-pro-swim-teacher-pathway',
  '/courses/react-right-cpr-aed-first-aid',
  '/blog',
  '/terms',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  if (sanityClient) {
    try {
      const posts: { slug: string }[] = await sanityClient.fetch(
        `*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`
      )
      for (const post of posts) {
        entries.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(),
        })
      }
    } catch (error) {
      console.error('Error fetching blog slugs for sitemap:', error)
    }
  }

  return entries
}
