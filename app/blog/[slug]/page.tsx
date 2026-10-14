import { sanityClient, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import { WHATSAPP_URL } from '@/lib/approved-course-details'
import { blogArticles, getBlogArticle, type BlogArticle } from '@/lib/blog-articles'

const SITE_URL = 'https://www.swimcoachcertification.com'

const relatedArticleSlugs: Record<string, string[]> = {
  'how-to-become-certified-swimming-instructor-singapore': [
    'ssi-swim-teacher-level-1-requirements-cost-career-path',
    'ssi-swim-teacher-level-1-vs-level-2',
    'ssi-adult-swim-teacher-certification-singapore',
  ],
  'ssi-swim-teacher-level-1-requirements-cost-career-path': [
    'how-to-become-certified-swimming-instructor-singapore',
    'ssi-swim-teacher-level-1-vs-level-2',
    'ssi-react-right-cpr-aed-oxygen-provider-explained',
  ],
  'ssi-react-right-cpr-aed-oxygen-provider-explained': [
    'how-to-become-certified-swimming-instructor-singapore',
    'ssi-adult-swim-teacher-certification-singapore',
    'baby-swimming-teacher-certification-singapore',
  ],
  'baby-swimming-teacher-certification-singapore': [
    'how-to-become-certified-swimming-instructor-singapore',
    'ssi-react-right-cpr-aed-oxygen-provider-explained',
    'ssi-adult-swim-teacher-certification-singapore',
  ],
  'ssi-swim-teacher-level-1-vs-level-2': [
    'ssi-swim-teacher-level-1-requirements-cost-career-path',
    'how-to-become-certified-swimming-instructor-singapore',
    'ssi-adult-swim-teacher-certification-singapore',
  ],
  'ssi-adult-swim-teacher-certification-singapore': [
    'how-to-become-certified-swimming-instructor-singapore',
    'ssi-swim-teacher-level-1-vs-level-2',
    'ssi-react-right-cpr-aed-oxygen-provider-explained',
  ],
}

const postQuery = `*[_type == "blogPost" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
  _id, _updatedAt, title, slug, excerpt, publishedAt, mainImage,
  author->{name, image, bio}, categories[]->{title, color}, body, seoTitle, seoDescription
}`

const slugsQuery = `*[_type == "blogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()] { slug }`

interface CmsBlogPost {
  _id: string
  _updatedAt: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  mainImage: any
  author?: { name?: string; image?: any; bio?: any }
  categories?: Array<{ title: string; color?: string }>
  body: any
  seoTitle?: string
  seoDescription?: string
}

async function getCmsBlogPost(slug: string): Promise<CmsBlogPost | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch(postQuery, { slug }, { next: { revalidate: 3600, tags: [`blog-post-${slug}`] } })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getCmsBlogPostSlugs(): Promise<Array<{ slug: { current: string } }>> {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(slugsQuery, {}, { next: { revalidate: 86400, tags: ['blog-slugs'] } })
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (article) {
    const url = `${SITE_URL}/blog/${article.slug}`
    const image = `${SITE_URL}${article.image}`
    return {
      title: article.seoTitle,
      description: article.description,
      alternates: { canonical: url },
      openGraph: {
        title: article.seoTitle, description: article.description, url, type: 'article',
        publishedTime: article.publishedAt, modifiedTime: article.updatedAt,
        authors: ['Penguin Academy'], images: [{ url: image, alt: article.imageAlt }],
      },
      twitter: { card: 'summary_large_image', title: article.seoTitle, description: article.description, images: [image] },
    }
  }

  const post = await getCmsBlogPost(slug)
  if (!post) return { title: 'Post Not Found', description: 'The requested guide could not be found.', robots: { index: false, follow: false } }
  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt
  const url = `${SITE_URL}/blog/${post.slug.current}`
  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url() : undefined
  return {
    title, description, alternates: { canonical: url },
    openGraph: {
      title, description, url, type: 'article', publishedTime: post.publishedAt, modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: image ? [{ url: image, width: 1200, height: 630, alt: post.mainImage?.alt || post.title }] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  }
}

export async function generateStaticParams() {
  const cmsPosts = await getCmsBlogPostSlugs()
  const slugs = new Set([...blogArticles.map((article) => article.slug), ...cmsPosts.map((post) => post.slug.current)])
  return [...slugs].map((slug) => ({ slug }))
}

const portableTextComponents = {
  types: {
    embeddedImage: ({ value }: any) => (
      <figure className="my-10">
        <Image src={value.image ? urlFor(value.image).width(1200).url() : '/penguinacademylogo512x280.jpg'} alt={value.alt || 'Penguin Academy training'} width={1200} height={700} className="w-full rounded-[1.5rem]" />
        {value.caption && <figcaption className="mt-3 text-center text-sm text-slate-500">{value.caption}</figcaption>}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="mt-12 text-3xl font-semibold tracking-[-0.03em] text-[#0b2438]">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-9 text-2xl font-bold text-[#0b2438]">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mt-7 text-xl font-bold text-[#0b2438]">{children}</h4>,
    normal: ({ children }: any) => <p className="mt-5 text-lg leading-8 text-slate-700">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="my-8 border-l-4 border-cyan-400 pl-6 text-xl italic leading-8 text-slate-700">{children}</blockquote>,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (article) return <StaticArticle article={article} />
  const post = await getCmsBlogPost(slug)
  if (!post) notFound()
  return <CmsArticle post={post} />
}

function StaticArticle({ article }: { article: BlogArticle }) {
  const url = `${SITE_URL}/blog/${article.slug}`
  const preferredRelatedSlugs = relatedArticleSlugs[article.slug] || []
  const related = preferredRelatedSlugs
    .map((slug) => blogArticles.find((item) => item.slug === slug))
    .filter((item): item is BlogArticle => Boolean(item))
    .slice(0, 3)
  const structuredData = buildArticleStructuredData({
    url, title: article.title, description: article.description, image: `${SITE_URL}${article.image}`,
    publishedAt: article.publishedAt, updatedAt: article.updatedAt, category: article.category, author: 'Penguin Academy',
  })

  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <StructuredData data={structuredData} />
      <Header />
      <main className="pt-16">
        <article>
          <header className="bg-[#071b2b] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-24">
              <div>
                <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
                  <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> <Link href="/blog" className="hover:text-white">Guides</Link>
                </nav>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{article.category}</p>
                <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{article.title}</h1>
                <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">{article.excerpt}</p>
                <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span>Penguin Academy</span><span aria-hidden="true">•</span>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time><span aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" />{article.readTime}</span>
                </div>
              </div>
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.75rem] sm:min-h-[440px]">
                <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
            <section aria-label="Direct answer" className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-7 sm:p-9">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-800"><BookOpenCheck className="h-5 w-5" aria-hidden="true" />Direct answer</div>
              <p className="mt-5 text-xl leading-9 text-[#0b2438]">{article.directAnswer}</p>
            </section>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {article.facts.map((fact) => <div key={fact.label} className="rounded-2xl border border-slate-200 bg-white p-5"><dt className="text-sm font-semibold text-slate-500">{fact.label}</dt><dd className="mt-2 font-bold leading-6 text-[#0b2438]">{fact.value}</dd></div>)}
            </dl>

            <div className="mt-16 space-y-14">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#0b2438] sm:text-4xl">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-700">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-6 space-y-4">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-lg leading-8 text-slate-700"><CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" /><span>{bullet}</span></li>)}</ul>}
                </section>
              ))}
            </div>

            {article.internalLinks && article.internalLinks.length > 0 && (
              <nav className="mt-16 rounded-[1.5rem] border border-slate-200 bg-white p-7 sm:p-9" aria-labelledby="next-reading-title">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Plan your pathway</p>
                <h2 id="next-reading-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#0b2438]">Continue with the most relevant information.</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {article.internalLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="inline-flex items-center justify-between gap-3 rounded-xl bg-[#f6f4ee] px-5 py-4 font-bold text-teal-800 transition hover:bg-[#dff5f1] hover:text-teal-700">
                      {link.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </nav>
            )}

            <section className="mt-16 rounded-[1.75rem] bg-[#0b2438] p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Your next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Get the pathway details that apply to you.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Review the verified course page or speak directly with Penguin Academy before enrolling.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={article.courseHref} className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#071b2b] transition hover:bg-cyan-200">{article.courseName}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${encodeURIComponent(article.whatsappMessage)}`} source="blog_article_final" courseName={article.courseName} className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:bg-white/10">Ask on WhatsApp</TrackedWhatsAppLink>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="faq-title">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Quick answers</p>
              <h2 id="faq-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#0b2438] sm:text-4xl">Frequently asked questions</h2>
              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {article.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#0b2438] marker:hidden">{faq.question}</summary><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></details>)}
              </div>
            </section>

            <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-7" aria-labelledby="sources-title">
              <h2 id="sources-title" className="text-xl font-bold text-[#0b2438]">Official sources</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Course standards and external requirements can change. These primary sources were checked when this guide was updated.</p>
              <ul className="mt-5 space-y-3">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 font-semibold text-teal-700 hover:text-teal-900"><ExternalLink className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{source.label}</a></li>)}</ul>
              <p className="mt-5 text-sm text-slate-500">Last updated {formatDate(article.updatedAt)}.</p>
            </section>

            <section className="mt-16 border-t border-slate-200 pt-12" aria-labelledby="related-title">
              <h2 id="related-title" className="text-3xl font-semibold tracking-[-0.035em] text-[#0b2438]">Continue your research</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{item.category}</p><h3 className="mt-3 font-bold leading-6 text-[#0b2438] group-hover:text-teal-700">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700">Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></Link>)}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

function CmsArticle({ post }: { post: CmsBlogPost }) {
  const url = `${SITE_URL}/blog/${post.slug.current}`
  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url() : `${SITE_URL}/academy-supervised-session.jpg`
  const structuredData = buildArticleStructuredData({
    url, title: post.title, description: post.seoDescription || post.excerpt, image,
    publishedAt: post.publishedAt, updatedAt: post._updatedAt,
    category: post.categories?.[0]?.title || 'Swim teacher training', author: post.author?.name || 'Penguin Academy',
  })
  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <StructuredData data={structuredData} /><Header />
      <main className="pt-28"><article className="mx-auto max-w-4xl px-5 pb-20 sm:px-8">
        <nav className="mb-8 text-sm"><Link href="/blog" className="font-semibold text-teal-700 hover:text-teal-900">← Back to training guides</Link></nav>
        <header><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">{post.categories?.[0]?.title || 'Academy guide'}</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">{post.title}</h1><p className="mt-5 text-xl leading-8 text-slate-600">{post.excerpt}</p><div className="mt-6 text-sm text-slate-500">{post.author?.name || 'Penguin Academy'} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></div></header>
        {post.mainImage && <Image src={image} alt={post.mainImage?.alt || post.title} width={1200} height={630} className="mt-10 w-full rounded-[1.5rem] object-cover" />}
        <div className="mt-12"><PortableText value={post.body} components={portableTextComponents} /></div>
        <div className="mt-14 border-t border-slate-200 pt-8"><Link href="/blog" className="inline-flex items-center gap-2 font-bold text-teal-700">View all training guides <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </article></main><Footer />
    </div>
  )
}

function buildArticleStructuredData(input: { url: string; title: string; description: string; image: string; publishedAt: string; updatedAt: string; category: string; author: string }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': `${input.url}#article`, url: input.url,
        mainEntityOfPage: { '@id': `${input.url}#webpage` }, headline: input.title,
        description: input.description, image: [input.image], datePublished: input.publishedAt,
        dateModified: input.updatedAt, inLanguage: 'en-SG', articleSection: input.category,
        author: { '@type': 'Organization', name: input.author, url: `${SITE_URL}/` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      { '@type': 'WebPage', '@id': `${input.url}#webpage`, url: input.url, name: input.title, isPartOf: { '@id': `${SITE_URL}/#website` }, breadcrumb: { '@id': `${input.url}#breadcrumb` } },
      {
        '@type': 'BreadcrumbList', '@id': `${input.url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Training Guides', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: input.title, item: input.url },
        ],
      },
    ],
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' })
}
