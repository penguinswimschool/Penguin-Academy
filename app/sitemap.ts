import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'
import { blogArticles } from '@/lib/blog-articles'

const baseUrl = 'https://www.swimcoachcertification.com'

// Canonical URLs aligned with GSC-indexed pages (legacy slugs redirect via next.config.ts)
const staticRoutes = [
  '',
  '/about',
  '/courses',
  '/course-dates',
  '/contact',
  '/international-candidates',
  '/swimming-coach-career-singapore',
  '/courses/penguin-pro-swim-teacher-pathway',
  '/courses/ssi-swim-teacher-level-1',
  '/courses/ssi-swim-teacher-level-2',
  '/courses/baby-and-me-swim-teacher',
  '/courses/ssi-adult-swim-teacher',
  '/courses/react-right-cpr-aed-first-aid',
  '/blog',
  '/terms',
  '/privacy',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
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
