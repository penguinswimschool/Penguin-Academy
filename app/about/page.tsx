import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, ShieldCheck, Users, Waves } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Penguin Academy | SSI Swim Teacher Education Singapore',
  description: 'Meet Remus Teo and Rayner Teo and learn how Penguin Academy combines SSI instructor education, assessment and practical mentoring in Singapore.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/about' },
  openGraph: { title: 'About Penguin Academy', description: 'Professional SSI swim teacher education and practical mentoring in Singapore.', url: 'https://www.swimcoachcertification.com/about', type: 'website' },
}

const standards = [
  { icon: Award, title: 'Instructor-led education', text: 'Formal course delivery, assessment and certification requirements are led through the applicable SSI pathway.' },
  { icon: Waves, title: 'Practical mentoring', text: 'Candidates develop teaching confidence through supervised practice and programme-specific apprenticeship.' },
  { icon: ShieldCheck, title: 'Safety built in', text: 'Full SSI React Right—First Aid & CPR, AED Provider and Oxygen Provider—is included with every SGD 1,688 teacher course.' },
  { icon: Users, title: 'Focused cohorts', text: 'Small cohorts of 1–8 candidates support clear feedback and meaningful instructor attention.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="About Penguin Academy" title="Professional education. Practical confidence. Lifelong support." description="Penguin Academy prepares aspiring and experienced swim teachers through structured SSI learning, assessment and hands-on mentoring in Singapore." primaryHref="/courses" primaryLabel="Explore courses" secondaryHref="/contact" secondaryLabel="Speak with the Academy" />

        <section className="bg-[#f6f4ee] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
            <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(11,36,56,0.14)] sm:min-h-[520px]">
              <Image src="/academy-ssi-community.jpg" alt="Penguin Academy swim teacher community in Singapore with an SSI flag" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Our approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">A clear path from learning to confident teaching.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Candidates move through digital learning, instructor-led education, assessment and the applicable supervised apprenticeship. Certification is issued only after every programme requirement has been completed.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {standards.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><Icon className="h-6 w-6 text-teal-700" /><h3 className="mt-4 font-bold text-[#0b2438]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Meet your training team</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Two mentors. One professional standard.</h2></div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8f6] shadow-[0_18px_55px_rgba(11,36,56,0.08)]">
                <div className="relative min-h-[390px]"><Image src="/Remus.png" alt="Remus Teo, SSI Swim Teacher Instructor" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover" /></div>
                <div className="p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Lead Instructor</p><h2 className="mt-3 text-3xl font-semibold text-[#0b2438]">Remus Teo</h2><p className="mt-4 leading-7 text-slate-600">Active SSI Swim Teacher Instructor and React Right Instructor Trainer, leading the formal learning, assessment and certification pathway.</p><div className="mt-6 space-y-3 text-sm text-slate-600"><p className="flex gap-2"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />SSI Pro 121320</p><p className="flex gap-2"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />SSI React Right Instructor Trainer</p></div><a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800 hover:text-teal-600">View verified SSI profile<ArrowRight className="h-4 w-4" /></a></div>
              </article>
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8f6] shadow-[0_18px_55px_rgba(11,36,56,0.08)]">
                <div className="relative min-h-[390px]"><Image src="/rayner-teo-profile.jpg" alt="Rayner Teo, Penguin Academy trainer and mentor" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover object-center" /></div>
                <div className="p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Trainer &amp; Mentor</p><h2 className="mt-3 text-3xl font-semibold text-[#0b2438]">Rayner Teo</h2><p className="mt-4 leading-7 text-slate-600">Guides aspiring coaches through practical teaching, learner confidence and in-water mentoring as an active SSI Swim Teacher and AUSTSWIM Competency Assessor.</p><div className="mt-6 space-y-3 text-sm text-slate-600"><p className="flex gap-2"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />SSI Pro 126454</p><p className="flex gap-2"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />AUSTSWIM Competency Assessor</p></div><a href="https://my.divessi.com/pro/126454" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800 hover:text-teal-600">View verified SSI profile<ArrowRight className="h-4 w-4" /></a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#dff5f1] py-16 sm:py-20"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center"><div><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">Ready to begin your teaching pathway?</h2><p className="mt-2 text-slate-600">Compare the certifications or ask us which course fits your experience.</p></div><Link href="/courses" className="inline-flex rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Compare courses</Link></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
