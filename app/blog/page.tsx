import { sanityClient } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// GROQ query to get all blog posts
const blogQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    color
  },
  featured
}`

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  mainImage: any
  author: {
    name: string
    image: any
  }
  categories: Array<{
    title: string
    color: string
  }>
  featured: boolean
}

// Optimized data fetching with caching
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!sanityClient) {
      return []
    }
    return await sanityClient.fetch(blogQuery, {}, {
      next: {
        revalidate: 1800, // Revalidate every 30 minutes
        tags: ['blog-posts']
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog - Penguin Swim Academy',
    description: 'Discover insights, tips, and stories about swimming instruction, SSI certification, and the world of aquatic education.',
    openGraph: {
      title: 'Blog - Penguin Swim Academy',
      description: 'Discover insights, tips, and stories about swimming instruction, SSI certification, and the world of aquatic education.',
      type: 'website',
      url: '/blog',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog - Penguin Swim Academy',
      description: 'Discover insights, tips, and stories about swimming instruction, SSI certification, and the world of aquatic education.',
    },
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights, tips, and stories about swimming instruction, 
            SSI certification, and the world of aquatic education.
          </p>
        </div>

        {/* Featured Posts */}
        {posts.filter(post => post.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts
                .filter(post => post.featured)
                .slice(0, 3)
                .map((post) => (
                  <FeaturedPostCard key={post._id} post={post} />
                ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Posts</h2>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {post.mainImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.mainImage ? urlFor(post.mainImage).url() : '/penguinacademylogo512x280.jpg'}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-3">
            {post.categories?.map((category) => (
              <span
                key={category.title}
                className="text-xs px-2 py-1 rounded-full mr-2"
                style={{ backgroundColor: category.color || '#3B82F6', color: 'white' }}
              >
                {category.title}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
              )}
              <span className="text-sm text-gray-500">{post.author?.name}</span>
            </div>
            <time className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  )
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {post.mainImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.mainImage ? urlFor(post.mainImage).url() : '/penguinacademylogo512x280.jpg'}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-3">
            {post.categories?.map((category) => (
              <span
                key={category.title}
                className="text-xs px-2 py-1 rounded-full mr-2"
                style={{ backgroundColor: category.color || '#3B82F6', color: 'white' }}
              >
                {category.title}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
              )}
              <span className="text-sm text-gray-500">{post.author?.name}</span>
            </div>
            <time className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  )
} 