import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogArticles } from '@/lib/blog-articles';

export default function LatestGuides() {
  const articles = [...blogArticles]
    .filter((article) => new Date(article.publishedAt).getTime() <= Date.now())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
  if (!articles.length) return null;
  return (
    <section className="bg-[#f6f4ee] py-16 sm:py-24" aria-labelledby="latest-guides-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="academy-eyebrow text-teal-800">The Academy journal</p><h2 id="latest-guides-title" className="academy-display mt-4 text-4xl leading-tight text-[#0b2438] sm:text-5xl">Your next step, explained.</h2></div>
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal-800 underline underline-offset-4">All training guides <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group border-b border-[#ccd5cf] pb-7">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-slate-200"><Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-teal-800">{article.category} · {article.readTime}</p>
                <h3 className="academy-display mt-3 text-2xl leading-snug text-[#0b2438] transition group-hover:text-teal-800">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal-800">Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
