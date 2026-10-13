import type { Metadata } from 'next'
import { Baby, GraduationCap, HeartPulse, Layers3, Users } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import CourseList from '@/components/CourseList'
import WhatsAppButton from '@/components/WhatsAppButton'
import { WHATSAPP_URL } from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'SSI Swim Teacher Courses Singapore | Compare Certifications',
  description: 'Compare SSI Swim Teacher Level 1, Level 2, Baby & Me, Adult and React Right courses from Penguin Academy Singapore.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/courses' },
  openGraph: { title: 'SSI Swim Teacher Courses Singapore', description: 'Compare professional swim teacher certifications, requirements, prices and pathways.', url: 'https://www.swimcoachcertification.com/courses', type: 'website' },
}

const choices = [
  { icon: GraduationCap, title: 'New to swim teaching', course: 'Start with SSI Swim Teacher Level 1.', note: 'Foundation skills for teaching beginner swimmers.' },
  { icon: Layers3, title: 'Ready to progress', course: 'Continue to SSI Swim Teacher Level 2.', note: 'For Level 1 teachers developing stroke and class progression.' },
  { icon: Baby, title: 'Teaching infants', course: 'Choose SSI Baby & Me Swim Teacher.', note: 'Parent-child teaching for infants aged 6 months to 3 years.' },
  { icon: Users, title: 'Teaching adult learners', course: 'Choose SSI Adult Swim Teacher.', note: 'Structured teaching for adult beginners and improvers.' },
  { icon: HeartPulse, title: 'Emergency response', course: 'Take full SSI React Right.', note: 'First Aid & CPR, AED Provider and Oxygen Provider.' },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="Professional pathways" title="Choose the right swim teacher certification." description="Compare every Penguin Academy pathway by experience, outcome, course requirement and price—then speak with us if you would like personal guidance." primaryHref="#course-list" primaryLabel="Compare courses" secondaryHref="/course-dates" secondaryLabel="View course dates" />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Find your starting point</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">A pathway for every teaching goal.</h2></div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {choices.map(({ icon: Icon, title, course, note }) => <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#f7f8f6] p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-bold text-[#0b2438]">{title}</h3><p className="mt-3 text-sm font-semibold text-teal-800">{course}</p><p className="mt-2 text-sm leading-6 text-slate-600">{note}</p></article>)}
            </div>
          </div>
        </section>

        <div id="course-list"><CourseList /></div>

        <section className="bg-[#dff5f1] py-14 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center">
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-800">Travelling to Singapore?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b2438]">International candidates are welcome to enquire.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Review SGD fees, in-person requirements, travel exclusions and recognition checks before making arrangements.</p></div>
            <Link href="/international-candidates" className="inline-flex flex-none rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-[#12344d]">International candidate guide</Link>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="rounded-[2rem] bg-[#0b2438] p-8 text-white sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Personal guidance</p>
              <div className="mt-4 flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
                <div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Not sure which certification fits?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">Tell us your current qualifications, teaching experience and preferred learner group. We’ll explain the most suitable route.</p></div>
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, please help me choose the right swim teacher certification pathway.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex flex-none rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">Ask on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
