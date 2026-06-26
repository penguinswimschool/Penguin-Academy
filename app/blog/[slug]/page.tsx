import { sanityClient } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// GROQ query to get a single blog post by slug
const postQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    title,
    color
  },
  body,
  seoTitle,
  seoDescription
}`

// GROQ query to get all blog post slugs for static generation
const slugsQuery = `*[_type == "blogPost"] {
  slug
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
    bio: any
  }
  categories: Array<{
    title: string
    color: string
  }>
  body: any
  seoTitle?: string
  seoDescription?: string
}

// Optimized data fetching with caching
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    if (!sanityClient) {
      return null
    }
    // Add caching and revalidation strategy
    const post = await sanityClient.fetch(postQuery, { slug }, {
      next: {
        revalidate: 3600, // Revalidate every hour
        tags: [`blog-post-${slug}`] // Cache tag for this specific post
      }
    })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getBlogPostSlugs(): Promise<{ slug: { current: string } }[]> {
  try {
    if (!sanityClient) {
      return []
    }
    return await sanityClient.fetch(slugsQuery, {}, {
      next: {
        revalidate: 86400, // Revalidate daily
        tags: ['blog-slugs']
      }
    })
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.mainImage && sanityClient ? [
        {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 600,
          alt: post.mainImage.alt || post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.mainImage && sanityClient ? [urlFor(post.mainImage).url()] : undefined,
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getBlogPostSlugs()
    return posts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Custom components for PortableText
const portableTextComponents = {
  types: {
    embeddedImage: ({ value }: any) => {
      return (
        <div className="my-8">
            <Image
              src={value.image ? urlFor(value.image).url() : '/penguinacademylogo512x280.jpg'}
              alt={value.alt || 'Blog image'}
              width={800}
              height={600}
              className="rounded-lg"
            />
          {value.caption && (
            <p className="text-center text-gray-600 mt-2 text-sm">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            {post.categories?.map((category) => (
              <span
                key={category.title}
                className="text-sm px-3 py-1 rounded-full mr-2"
                style={{ backgroundColor: category.color || '#3B82F6', color: 'white' }}
              >
                {category.title}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>

          {/* Author and Date */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
              )}
              <div>
                <p className="font-medium text-gray-900">{post.author?.name}</p>
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        {post.mainImage && (
          <div className="mb-8">
            <Image
              src={post.mainImage ? urlFor(post.mainImage).url() : '/penguinacademylogo512x280.jpg'}
              alt={post.mainImage?.alt || post.title}
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Author Bio */}
        {post.author?.bio && (
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
            <div className="flex items-start">
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4 flex-shrink-0"
                />
              )}
              <div>
                <p className="font-medium text-gray-900 mb-2">{post.author.name}</p>
                <PortableText value={post.author.bio} />
              </div>
            </div>
          </div>
        )}

        {/* Related Posts Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More from our blog</h3>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all posts →
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  )
}
