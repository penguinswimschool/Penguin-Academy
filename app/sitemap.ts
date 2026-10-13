import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'

const baseUrl = 'https://www.swimcoachcertification.com'

// Canonical URLs aligned with GSC-indexed pages (legacy slugs redirect via next.config.ts)
const staticRoutes = [
  { path: '', lastModified: '2026-10-13T15:46:26+08:00' },
  { path: '/courses/penguin-pro-swim-teacher-pathway', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-swim-teacher-level-1', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-swim-teacher-level-2', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/baby-and-me-swim-teacher', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-adult-swim-teacher', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/react-right-cpr-aed-first-aid', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/blog', lastModified: '2026-06-26T18:09:03+05:00' },
  { path: '/terms', lastModified: '2026-10-01T11:42:49+08:00' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
  }))

  if (sanityClient) {
    try {
      const posts: { slug: string; updatedAt: string }[] = await sanityClient.fetch(
        `*[_type == "blogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]{
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      )

      let latestBlogUpdate = new Date('2026-06-26T18:09:03+05:00')

      for (const post of posts) {
        const updatedAt = new Date(post.updatedAt)

        entries.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: updatedAt,
        })

        if (updatedAt > latestBlogUpdate) {
          latestBlogUpdate = updatedAt
        }
      }

      const blogEntry = entries.find((entry) => entry.url === `${baseUrl}/blog`)
      if (blogEntry) {
        blogEntry.lastModified = latestBlogUpdate
      }
    } catch (error) {
      console.error('Error fetching blog slugs for sitemap:', error)
    }
  }

  return entries
}
