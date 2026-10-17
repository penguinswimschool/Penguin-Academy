import Link from 'next/link'
import Image from 'next/image'
import { Award, BookOpenCheck, CheckCircle2, Clock3, ShieldCheck, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import StructuredData from '@/components/StructuredData'
import OfficialCourseImage from '@/components/OfficialCourseImage'

type Fact = { label: string; value: string }
type Faq = { question: string; answer: string }

interface PremiumCoursePageProps {
  structuredData: Record<string, unknown>
  eyebrow: string
  title: string
  description: string
  price: string
  priceNote: string
  directAnswer: string
  facts: Fact[]
  suitableFor: string[]
  pathway: string[]
  practicalTitle: string
  practicalDescription: string
  included: string[]
  importantTitle: string
  importantDescription: string
  faqs: Faq[]
  officialSource: { label: string; href: string }
  guide: { label: string; href: string }
  courseTitle: string
  officialImage?: { src: string; alt: string }
  courseLogo?: { src: string; alt: string; width: number; height: number }
}

export default function PremiumCoursePage({ structuredData, eyebrow, title, description, price, priceNote, directAnswer, facts, suitableFor, pathway, practicalTitle, practicalDescription, included, importantTitle, importantDescription, faqs, officialSource, guide, courseTitle, officialImage, courseLogo }: PremiumCoursePageProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  }
  const trackingKey = courseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '_')

  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <StructuredData data={structuredData} />
      <StructuredData data={faqData} />
      <Header />
      <main id="main-content" className="pt-16">
        <section className="bg-[#071b2b] py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <nav className="mb-8 text-sm text-slate-300" aria-label="Breadcrumb"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span><Link href="/courses" className="hover:text-white">Courses</Link><span className="mx-2">/</span><span>{courseTitle}</span></nav>
            <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]">
              <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{description}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><BookNowButton courseTitle={courseTitle} source={`${trackingKey}_hero`} className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">Ask about this course</BookNowButton><Link href="/course-dates" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white hover:border-white/40 hover:bg-white/10">View course dates</Link></div></div>
              <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-7 backdrop-blur sm:p-9">{courseLogo && <div className="mb-7 rounded-2xl bg-white p-4 shadow-sm"><Image src={courseLogo.src} alt={courseLogo.alt} width={courseLogo.width} height={courseLogo.height} sizes="(min-width: 1024px) 320px, calc(100vw - 6.5rem)" className="h-auto w-full" /></div>}<p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Current Penguin fee</p><p className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{price}</p><p className="mt-3 leading-7 text-slate-300">{priceNote}</p></aside>
            </div>
          </div>
        </section>
        <section className="border-b border-slate-200 bg-[#f6f4ee] py-12"><div className="mx-auto max-w-4xl px-5 text-lg leading-8 text-slate-700 sm:px-8"><strong className="text-[#0b2438]">Direct answer:</strong> {directAnswer}</div></section>
        {officialImage && <section className="bg-white py-10 sm:py-14"><div className="mx-auto max-w-6xl px-5 sm:px-8"><OfficialCourseImage {...officialImage} /></div></section>}
        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{facts.map((fact) => <article key={fact.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">{fact.label}</p><p className="mt-3 text-xl font-semibold text-[#0b2438]">{fact.value}</p></article>)}</div><div className="mt-16 grid gap-8 lg:grid-cols-2"><article className="rounded-[1.75rem] bg-[#dff5f1] p-7 sm:p-9"><Users aria-hidden="true" className="h-7 w-7 text-teal-700"/><h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b2438]">Who this course suits</h2><ul className="mt-6 space-y-4">{suitableFor.map((item) => <li key={item} className="flex gap-3 leading-7 text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-teal-700"/><span>{item}</span></li>)}</ul></article><article className="rounded-[1.75rem] bg-[#071b2b] p-7 text-white sm:p-9"><Clock3 aria-hidden="true" className="h-7 w-7 text-cyan-300"/><h2 className="mt-5 text-3xl font-semibold tracking-tight">From enrolment to completion</h2><ol className="mt-6 space-y-4">{pathway.map((item, index) => <li key={item} className="flex gap-4 leading-7 text-slate-300"><span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-300 font-bold text-[#071b2b]">{index + 1}</span><span>{item}</span></li>)}</ol></article></div></div></section>
        <section className="bg-[#f6f4ee] py-16 sm:py-24"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]"><article className="rounded-[1.75rem] border border-teal-900/10 bg-white p-7 sm:p-9"><Award aria-hidden="true" className="h-7 w-7 text-teal-700"/><h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b2438]">{practicalTitle}</h2><p className="mt-5 leading-8 text-slate-600">{practicalDescription}</p></article><article className="rounded-[1.75rem] border border-teal-900/10 bg-white p-7 sm:p-9"><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">What Penguin Academy includes</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{included.map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-teal-700"/><span>{item}</span></div>)}</div></article></div></section>
        <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-6 rounded-[1.75rem] border border-slate-200 p-7 sm:p-9 md:grid-cols-[auto_1fr]"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-teal-700"/><div><h2 className="text-2xl font-semibold text-[#0b2438]">{importantTitle}</h2><p className="mt-3 max-w-4xl leading-7 text-slate-600">{importantDescription}</p></div></div></div></section>
        <section className="bg-[#f6f4ee] py-16 sm:py-24"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Course FAQ</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Questions candidates ask before enrolling.</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(({ question, answer }) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-[#0b2438]"><span>{question}</span><span className="text-2xl font-normal text-teal-700 group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p></details>)}</div><div className="mt-10 flex flex-wrap gap-5"><a href={officialSource.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-600"><BookOpenCheck aria-hidden="true" className="h-5 w-5"/>{officialSource.label}</a><Link href={guide.href} className="font-bold text-teal-700 hover:text-teal-600">{guide.label} →</Link></div></div></section>
        <section className="bg-[#dff5f1] py-16 sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-end"><div><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">Ready to discuss this pathway?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Tell us your current experience, intended learners and preferred dates. We will explain the applicable course and completion requirements.</p></div><BookNowButton courseTitle={courseTitle} source={`${trackingKey}_final`} className="rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Ask Penguin Academy</BookNowButton></div></section>
      </main>
      <Footer />
    </div>
  )
}
