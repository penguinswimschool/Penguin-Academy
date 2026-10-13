import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'
import { blogArticles } from '@/lib/blog-articles'

const baseUrl = 'https://www.swimcoachcertification.com'

// Canonical URLs aligned with GSC-indexed pages (legacy slugs redirect via next.config.ts)
const staticRoutes = [
  { path: '', lastModified: '2026-10-13T15:46:26+08:00' },
  { path: '/about', lastModified: '2026-10-13T22:00:00+08:00' },
  { path: '/courses', lastModified: '2026-10-13T22:00:00+08:00' },
  { path: '/course-dates', lastModified: '2026-10-13T22:00:00+08:00' },
  { path: '/contact', lastModified: '2026-10-13T22:00:00+08:00' },
  { path: '/international-candidates', lastModified: '2026-10-13T23:00:00+08:00' },
  { path: '/courses/penguin-pro-swim-teacher-pathway', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-swim-teacher-level-1', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-swim-teacher-level-2', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/baby-and-me-swim-teacher', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/ssi-adult-swim-teacher', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/courses/react-right-cpr-aed-first-aid', lastModified: '2026-10-13T16:09:32+08:00' },
  { path: '/blog', lastModified: '2026-10-13T10:00:00+08:00' },
  { path: '/terms', lastModified: '2026-10-13T22:00:00+08:00' },
  { path: '/privacy', lastModified: '2026-10-13T22:00:00+08:00' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
  }))

  const publishedSlugs = new Set(blogArticles.map((article) => article.slug))
  for (const article of blogArticles) {
    entries.push({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt,
    })
  }

  if (sanityClient) {
    try {
      const posts: { slug: string; updatedAt: string }[] = await sanityClient.fetch(
        `*[_type == "blogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]{
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      )

      let latestBlogUpdate = new Date(Math.max(...blogArticles.map((article) => new Date(article.updatedAt).getTime())))

      for (const post of posts) {
        if (publishedSlugs.has(post.slug)) continue
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
