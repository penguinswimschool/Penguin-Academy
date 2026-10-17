import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, GraduationCap, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import { whatsappEnquiryUrl } from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'Page Not Found | Penguin Academy',
  description: 'The requested Penguin Academy page could not be found.',
  alternates: {},
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <Header />
      <main id="main-content" className="flex min-h-[75vh] items-center pt-20">
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">404 · Page not found</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[#0b2438] sm:text-6xl">Let’s get you back to the right training pathway.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">This page may have moved or the address may be incomplete. Continue with the Academy’s current courses and guides, or ask us directly.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Link href="/courses" className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg">
              <GraduationCap className="h-7 w-7 text-teal-700" />
              <h2 className="mt-5 text-xl font-bold text-[#0b2438]">Compare courses</h2>
              <p className="mt-3 leading-7 text-slate-600">Review SSI pathways, requirements and published SGD fees.</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-teal-800">View courses <ArrowRight className="h-4 w-4" /></span>
            </Link>
            <Link href="/blog" className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg">
              <BookOpenCheck className="h-7 w-7 text-teal-700" />
              <h2 className="mt-5 text-xl font-bold text-[#0b2438]">Read training guides</h2>
              <p className="mt-3 leading-7 text-slate-600">Understand certification, apprenticeships and pathway choices.</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-teal-800">Browse guides <ArrowRight className="h-4 w-4" /></span>
            </Link>
            <TrackedWhatsAppLink href={whatsappEnquiryUrl('the right Penguin Academy course')} source="not_found" className="group rounded-[1.5rem] border border-slate-200 bg-[#0b2438] p-6 text-white transition hover:-translate-y-1 hover:bg-teal-900 hover:shadow-lg">
              <MessageCircle className="h-7 w-7 text-cyan-300" />
              <h2 className="mt-5 text-xl font-bold">Ask Penguin Academy</h2>
              <p className="mt-3 leading-7 text-slate-300">Tell us what you hoped to find and we’ll direct you.</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-cyan-200">Open WhatsApp <ArrowRight className="h-4 w-4" /></span>
            </TrackedWhatsAppLink>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
