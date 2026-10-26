import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  HeartPulse,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import { sanityClient, urlFor } from '@/lib/sanity'
import {
  COMPLETION_REQUIREMENTS,
  COURSE_DETAILS,
  WHATSAPP_URL,
} from '@/lib/approved-course-details'
import { blogArticles } from '@/lib/blog-articles'
import { SOCIAL_IMAGE, SOCIAL_IMAGE_METADATA } from '@/lib/social-metadata'
import { organizationStructuredDataNode, websiteStructuredDataNode } from '@/lib/structured-data'

const blogQuery = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now()
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{name, image},
  categories[]->{title, color},
  featured
}`

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt: string
  mainImage?: any
  author?: { name?: string; image?: any }
  categories?: Array<{ title: string; color?: string }>
  featured?: boolean
  imageUrl?: string
  imageAlt?: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) return []

  try {
    return await sanityClient.fetch(blogQuery, {}, {
      next: { revalidate: 1800, tags: ['blog-posts'] },
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Swim Teacher Training Guides Singapore | Penguin Academy'
  const description = 'Clear guides to SSI swim teacher pathways, course requirements, apprenticeship and React Right CPR, AED and Oxygen Provider training in Singapore.'
  const url = 'https://www.swimcoachcertification.com/blog'

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'website', url, images: [SOCIAL_IMAGE_METADATA] },
    twitter: { card: 'summary_large_image', title, description, images: [SOCIAL_IMAGE] },
  }
}

const pathways = [
  {
    title: 'SSI Swim Teacher Level 1',
    description: 'The foundational pathway for teaching beginner swimmers safely and progressively.',
    href: '/courses/ssi-swim-teacher-level-1',
    price: 'SGD 1,688',
    icon: GraduationCap,
  },
  {
    title: 'SSI Swim Teacher Level 2',
    description: 'Advanced stroke development and class progression for certified Level 1 teachers.',
    href: '/courses/ssi-swim-teacher-level-2',
    price: 'SGD 1,688',
    icon: Layers3,
  },
  {
    title: 'SSI Baby Swim Teacher',
    description: 'Parent-child teaching for Baby Swim I, ages 2–35 months, and Baby Swim II, ages 12–35 months.',
    href: '/courses/baby-and-me-swim-teacher',
    price: 'SGD 1,688',
    icon: Users,
  },
  {
    title: 'SSI Adult Swim Teacher',
    description: 'Training to conduct SSI Adult swim programmes with adult-focused teaching practice.',
    href: '/courses/ssi-adult-swim-teacher',
    price: 'SGD 1,688',
    icon: Waves,
  },
  {
    title: 'Full SSI React Right',
    description: 'First Aid & CPR, AED Provider and Oxygen Provider training in one pathway.',
    href: '/courses/react-right-cpr-aed-first-aid',
    price: 'SGD 100',
    icon: HeartPulse,
  },
]

const topics = [
  {
    title: 'Swim teacher pathways',
    description: 'Understand which course fits your experience, teaching goals and next step.',
    icon: BookOpenCheck,
  },
  {
    title: 'Assessment & apprenticeship',
    description: 'Learn what candidates complete beyond the instructor-led training day.',
    icon: ShieldCheck,
  },
  {
    title: 'Teaching specialisations',
    description: 'Explore how teaching babies, children and adults calls for different judgement.',
    icon: Sparkles,
  },
  {
    title: 'Emergency response',
    description: 'Clear guidance around First Aid & CPR, AED Provider and Oxygen Provider training.',
    icon: HeartPulse,
  },
]

const faqs = [
  {
    question: 'Which SSI swim teacher courses does Penguin Academy offer?',
    answer: 'Penguin Academy offers SSI Swim Teacher Level 1, Level 2, Baby Swim Teacher and Adult Swim Teacher pathways, plus full SSI React Right.',
  },
  {
    question: 'Do I need Level 1 before Level 2?',
    answer: 'Yes. SSI Swim Teacher Level 1 certification is required before the Level 2 pathway.',
  },
  {
    question: 'What does full SSI React Right include?',
    answer: 'Full SSI React Right includes First Aid & CPR, AED Provider and Oxygen Provider training.',
  },
  {
    question: 'Is React Right included with a teacher course?',
    answer: 'Yes. Full React Right is included with every SGD 1,688 teacher course and with the SGD 2,888 any-two-teacher-course bundle.',
  },
  {
    question: 'Is certification issued after the instructor-led day?',
    answer: COMPLETION_REQUIREMENTS,
  },
  {
    question: 'Where and when are courses held?',
    answer: `Training is held in ${COURSE_DETAILS.venue}. ${COURSE_DETAILS.schedule}.`,
  },
]

export default async function BlogPage() {
  const cmsPosts = await getBlogPosts()
  const staticPosts: BlogPost[] = blogArticles.map((article) => ({
    _id: `published-${article.slug}`,
    title: article.title,
    slug: { current: article.slug },
    excerpt: article.excerpt,
    publishedAt: article.publishedAt,
    categories: [{ title: article.category }],
    author: { name: 'Penguin Academy' },
    featured: false,
    imageUrl: article.image,
    imageAlt: article.imageAlt,
  }))
  const staticSlugs = new Set(staticPosts.map((post) => post.slug.current))
  const posts = [...staticPosts, ...cmsPosts.filter((post) => !staticSlugs.has(post.slug.current))]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const latestPosts = featuredPost ? posts.filter((post) => post._id !== featuredPost._id) : []

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      websiteStructuredDataNode,
      organizationStructuredDataNode,
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.swimcoachcertification.com/blog#page',
        url: 'https://www.swimcoachcertification.com/blog',
        name: 'Penguin Academy Swim Teacher Training Guides',
        description: 'Guides to SSI swim teacher pathways, completion requirements and React Right training in Singapore.',
        isPartOf: { '@id': 'https://www.swimcoachcertification.com/#website' },
        about: { '@id': 'https://www.swimcoachcertification.com/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.swimcoachcertification.com/' },
          { '@type': 'ListItem', position: 2, name: 'Training Guides', item: 'https://www.swimcoachcertification.com/blog' },
        ],
      },
      ...(posts.length > 0 ? [{
        '@type': 'ItemList',
        name: 'Published Penguin Academy training guides',
        itemListElement: posts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://www.swimcoachcertification.com/blog/${post.slug.current}`,
          name: post.title,
        })),
      }] : []),
    ],
  }

  return (
    <div className="academy-marketing min-h-screen bg-[#f6f4ee]">
      <StructuredData data={structuredData} />
      <Header />
      <main id="main-content" className="pt-16">
        <section className="relative overflow-hidden bg-[#071b2b] py-20 text-white sm:py-28">
          <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Penguin Academy knowledge centre</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="academy-display max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Swim teacher training guides for Singapore.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Clear, practical guidance on SSI swim teacher pathways, completion requirements, apprenticeship and emergency-response training.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/courses" className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#071b2b] transition hover:bg-cyan-200">
                  Compare courses
                </Link>
                <TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, please help me choose the right course pathway.')}`} source="blog_index_hero" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                  Ask on WhatsApp
                </TrackedWhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="guides-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Academy guides</p>
            <h2 id="guides-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Current training insights.</h2>

            {featuredPost ? (
              <>
                <div className="mt-12"><PostCard post={featuredPost} featured /></div>
                {latestPosts.length > 0 && (
                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post) => <PostCard key={post._id} post={post} />)}
                  </div>
                )}
              </>
            ) : (
              <div className="mt-12 grid overflow-hidden rounded-[1.75rem] bg-[#0b2438] text-white shadow-[0_25px_70px_rgba(7,27,43,0.18)] lg:grid-cols-[1fr_0.75fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><BookOpenCheck className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-7 text-3xl font-semibold tracking-[-0.03em]">New guides are being prepared and reviewed.</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">For current prices, prerequisites, course inclusions and completion requirements, use the verified course pages or speak directly with the Academy.</p>
                  <TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, I have a question about your swim teacher courses.')}`} source="blog_index_guidance" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#071b2b] transition hover:bg-cyan-200">Ask the Academy <ArrowRight className="h-4 w-4" aria-hidden="true" /></TrackedWhatsAppLink>
                </div>
                <div className="relative min-h-[320px]">
                  <Image src="/academy-ssi-learning-community.jpg" alt="Penguin Academy learning community with an SSI flag" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2438] via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="pathways-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Start with the pathways</p>
              <h2 id="pathways-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">
                Find the course that matches your next step.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pathways.map(({ title, description, href, price, icon: Icon }) => (
                <Link key={href} href={href} className="group flex min-h-[260px] flex-col rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(11,36,56,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,36,56,0.12)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-teal-700"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span className="text-lg font-bold text-teal-700">{price}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#0b2438]">{title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">Course details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              ))}
              <Link href="/courses/penguin-pro-swim-teacher-pathway" className="group flex min-h-[260px] flex-col rounded-[1.5rem] bg-[#0b2438] p-7 text-white shadow-[0_20px_55px_rgba(7,27,43,0.2)] transition hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><Sparkles className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="text-lg font-bold text-cyan-300">SGD 2,888</span>
                </div>
                <h3 className="mt-7 text-xl font-bold">Any 2 teacher courses</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">Choose any two teacher pathways with full SSI React Right included.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300">Explore the bundle <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="topics-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Topics we cover</p>
                <h2 id="topics-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Answers built around real course decisions.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">Each guide is designed to answer a specific question and point you to the relevant verified course information.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {topics.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/70 p-6">
                    <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-[#0b2438]">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="faq-title">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Quick answers</p>
              <h2 id="faq-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Course questions, answered clearly.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Need advice for your own background? WhatsApp the Academy at +65 8909 4395.</p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#0b2438] marker:hidden">{faq.question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071b2b] py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verified guidance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Learn with an instructor and mentoring team.</h2>
              <p className="mt-3 text-slate-300">Remus Teo · SSI Swim Teacher Instructor &nbsp;·&nbsp; Rayner Teo · Trainer &amp; Mentor</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold transition hover:bg-white/10">Remus profile <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="https://my.divessi.com/pro/126454" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold transition hover:bg-white/10">Rayner profile <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className={`group grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(11,36,56,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,36,56,0.13)] ${featured ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
      <div className={`relative bg-slate-200 ${featured ? 'min-h-[320px]' : 'h-52'}`}>
        <Image
          src={post.imageUrl || (post.mainImage ? urlFor(post.mainImage).width(1200).height(700).fit('crop').url() : '/academy-supervised-session.jpg')}
          alt={post.imageAlt || post.mainImage?.alt || post.title}
          fill
          sizes={featured ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className={`object-cover transition duration-700 group-hover:scale-[1.02] ${post.imageUrl === '/academy-ssi-learning-community.jpg' ? 'object-top' : ''}`}
        />
      </div>
      <article className="flex flex-col justify-center p-7 sm:p-9">
        <div className="flex flex-wrap gap-2">
          {featured && <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Featured guide</span>}
          {post.categories?.slice(0, 2).map((category) => <span key={category.title} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{category.title}</span>)}
        </div>
        <h3 className={`${featured ? 'mt-6 text-3xl' : 'mt-5 text-xl'} font-bold tracking-[-0.03em] text-[#0b2438] group-hover:text-teal-700`}>{post.title}</h3>
        {post.excerpt && <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>}
        <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-500">
          <span>{post.author?.name || 'Penguin Academy'}</span>
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
        </div>
      </article>
    </Link>
  )
}
