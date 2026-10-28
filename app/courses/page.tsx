import type { Metadata } from 'next'
import { Baby, GraduationCap, HeartPulse, Layers3, Users } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import CourseList from '@/components/CourseList'
import StructuredData from '@/components/StructuredData'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import WhatsAppButton from '@/components/WhatsAppButton'
import { COURSE_STANDARDS, FULL_REACT_RIGHT, WHATSAPP_URL } from '@/lib/approved-course-details'
import { coursesPageStructuredData } from '@/lib/structured-data'
import { SOCIAL_IMAGE, SOCIAL_IMAGE_METADATA } from '@/lib/social-metadata'

export const metadata: Metadata = {
  title: 'Swim Teacher Courses Singapore | SSI Certification',
  description: 'Compare SSI Level 1, Level 2, Baby Swim Teacher, Adult Swim Teacher and full React Right courses in Singapore. View requirements and SGD fees.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/courses' },
  openGraph: { title: 'SSI Swim Teacher Courses in Singapore', description: 'Compare SSI swim teacher pathways, prerequisites, recommended hours, apprenticeships and current Penguin Academy fees in SGD.', url: 'https://www.swimcoachcertification.com/courses', type: 'website', images: [SOCIAL_IMAGE_METADATA] },
  twitter: { card: 'summary_large_image', title: 'SSI Swim Teacher Courses in Singapore', description: 'Compare SSI swim teacher pathways, prerequisites, recommended hours, apprenticeships and current Penguin Academy fees in SGD.', images: [SOCIAL_IMAGE] },
}

const choices = [
  { icon: GraduationCap, title: 'New to swim teaching', course: 'Start with SSI Swim Teacher Level 1.', note: 'Foundation skills for teaching Aquatike and Beginner programmes.', href: '/courses/ssi-swim-teacher-level-1' },
  { icon: Layers3, title: 'Ready to progress', course: 'Continue to SSI Swim Teacher Level 2.', note: 'For certified Level 1 teachers developing stroke and class progression.', href: '/courses/ssi-swim-teacher-level-2' },
  { icon: Baby, title: 'Teaching babies with parents', course: 'Choose SSI Baby Swim Teacher.', note: 'Parent-child teaching for SSI Baby Swim I and Baby Swim II.', href: '/courses/baby-and-me-swim-teacher' },
  { icon: Users, title: 'Teaching adult learners', course: 'Choose SSI Adult Swim Teacher.', note: 'Structured teaching for adult swimming programmes.', href: '/courses/ssi-adult-swim-teacher' },
  { icon: HeartPulse, title: 'Emergency response', course: 'Take full SSI React Right.', note: 'First Aid & CPR, AED Provider and Oxygen Provider.', href: '/courses/react-right-cpr-aed-first-aid' },
]

const comparison = [
  { course: 'Level 1', href: '/courses/ssi-swim-teacher-level-1', suited: 'New swim teachers', prerequisite: 'Minimum age 18', hours: COURSE_STANDARDS.level1.recommendedDuration, apprenticeship: '4 Aquatike + 4 Beginner lessons', fee: 'SGD 1,688' },
  { course: 'Level 2', href: '/courses/ssi-swim-teacher-level-2', suited: 'Level 1 teachers progressing', prerequisite: 'SSI Level 1; age 18+', hours: COURSE_STANDARDS.level2.recommendedDuration, apprenticeship: '4 Intermediate + 2 Advanced lessons', fee: 'SGD 1,688' },
  { course: 'Baby Swim Teacher', href: '/courses/baby-and-me-swim-teacher', suited: 'Parent-child programmes', prerequisite: 'Minimum age 18', hours: COURSE_STANDARDS.baby.recommendedDuration, apprenticeship: '2 Baby Swim I + 2 Baby Swim II lessons', fee: 'SGD 1,688' },
  { course: 'Adult Swim Teacher', href: '/courses/ssi-adult-swim-teacher', suited: 'Adult swimming programmes', prerequisite: 'Minimum age 18', hours: COURSE_STANDARDS.adult.recommendedDuration, apprenticeship: '1 Adult I + 1 Adult II lesson', fee: 'SGD 1,688' },
  { course: 'Full React Right', href: '/courses/react-right-cpr-aed-first-aid', suited: 'Emergency response training', prerequisite: 'Minimum age 12', hours: COURSE_STANDARDS.reactRight.recommendedDuration, apprenticeship: 'Practical scenarios; no teaching apprenticeship', fee: 'SGD 100' },
]

const faqs = [
  ['Are swimming teacher, swimming instructor and swimming coach certification the same?', 'SSI uses the title Swim Teacher for these professional programmes. “Coach” may also refer to separate sport-coaching pathways such as SG-Coach or NROC. Choose according to the programmes and work setting you intend to serve.'],
  ['Which SSI swim teacher course should a beginner take?', 'SSI Swim Teacher Level 1 is the foundation pathway for Aquatike and Beginner programmes. Candidates must be at least 18.'],
  ['Do I need Level 1 before Level 2?', 'Yes. SSI Swim Teacher Level 1 certification is required before Level 2; choosing the bundle does not remove this prerequisite.'],
  ['How much do Penguin Academy courses cost?', 'Each teacher course is SGD 1,688. Any two teacher courses cost SGD 2,888. Standalone full SSI React Right costs SGD 100.'],
  ['What does full SSI React Right include?', `${FULL_REACT_RIGHT}. It is included with every teacher course and the two-course bundle.`],
  ['Is certification completed in one instructor-led day?', 'No. The instructor-led day is one part of the pathway. Applicable digital learning, water fitness, theory and practical assessments, final exam and programme-specific apprenticeship must also be completed.'],
  ['Can international candidates join?', 'International candidates may enquire. Confirm dates, in-person requirements, the complete pathway and recognition for your intended country or employer before arranging travel.'],
  ['Is SSI certification a universal licence to teach in Singapore?', 'No. Employers, facilities and public programmes may have separate requirements. Check the rules for the exact setting where you intend to teach.'],
]

export default function CoursesPage() {
  const guidanceUrl = `${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, please help me choose the right swim teacher certification pathway.')}`

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={coursesPageStructuredData} />
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="Professional pathways" title="SSI Swim Teacher Courses in Singapore" description="Compare each SSI pathway by prerequisite, recommended total hours, apprenticeship and SGD fee. Every SGD 1,688 teacher course includes full SSI React Right." primaryHref="#compare" primaryLabel="Compare courses" secondaryHref="/course-dates" secondaryLabel="View course dates" />

        <section className="border-b border-slate-200 bg-[#f6f4ee] py-10 sm:py-14"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-lg leading-8 text-slate-700"><strong className="text-[#0b2438]">Direct answer:</strong> Penguin Academy offers SSI Swim Teacher Level 1, Level 2, Baby Swim Teacher, Adult Swim Teacher and full SSI React Right training in Singapore. Compare the learner groups, prerequisites and supervised teaching requirements below to choose your course. Each teacher course is SGD 1,688 and includes First Aid & CPR, AED Provider and Oxygen Provider. Any two teacher courses cost SGD 2,888; standalone full React Right costs SGD 100.</p></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Find your starting point</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Compare SSI swim teacher pathways.</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{choices.map(({ icon: Icon, title, course, note, href }) => <Link key={title} href={href} className="group rounded-[1.5rem] border border-slate-200 bg-[#f7f8f6] p-6 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-bold text-[#0b2438]">{title}</h3><p className="mt-3 text-sm font-semibold text-teal-800 group-hover:text-teal-600">{course}</p><p className="mt-2 text-sm leading-6 text-slate-600">{note}</p></Link>)}</div></div></section>

        <section id="compare" className="scroll-mt-24 bg-[#071b2b] py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Side-by-side guide</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Requirements, duration and SGD fees.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">SSI’s recommended hours describe the complete programme—not only the instructor-led session. Swipe the table on smaller screens.</p><div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/5"><table className="w-full min-w-[920px] text-left text-sm"><thead className="border-b border-white/10 bg-white/5 text-cyan-200"><tr>{['Course', 'Best suited to', 'Prerequisite', 'Recommended total', 'Apprenticeship', 'Penguin fee'].map(label => <th key={label} className="px-5 py-4 font-bold">{label}</th>)}</tr></thead><tbody>{comparison.map(row => <tr key={row.course} className="border-b border-white/10 last:border-0"><td className="px-5 py-5 font-bold"><Link href={row.href} className="text-white underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-200">{row.course}</Link></td><td className="px-5 py-5 text-slate-300">{row.suited}</td><td className="px-5 py-5 text-slate-300">{row.prerequisite}</td><td className="px-5 py-5 text-slate-300">{row.hours}</td><td className="px-5 py-5 text-slate-300">{row.apprenticeship}</td><td className="whitespace-nowrap px-5 py-5 font-bold text-cyan-200">{row.fee}</td></tr>)}</tbody></table></div></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-10"><div className="rounded-[2rem] bg-[#dff5f1] p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-800">The complete pathway</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b2438]">One training day is not the whole certification.</h2><ol className="mt-7 space-y-4 text-slate-700">{['Complete the applicable SSI digital learning.', 'Attend instructor-led knowledge and practical training.', 'Complete the Candidate Water Fitness Evaluation when required by the current standard.', 'Pass the required theory, practical and final assessments.', 'Complete the programme-specific supervised apprenticeship.'].map((step, index) => <li key={step} className="flex gap-4"><span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">{index + 1}</span><span className="leading-7">{step}</span></li>)}</ol></div><div className="rounded-[2rem] border border-slate-200 p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Important distinction</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b2438]">Certification and work-setting requirements are separate.</h2><p className="mt-5 leading-7 text-slate-600">Requirements depend on where you plan to teach. ActiveSG coaching requires valid NROC status and a Usage Permit. SportSG’s Sports Education Programme requires NROC-certified coaches; swimming coaches in that programme also need valid SwimSafer certification, and MOE registration applies where stated. Private employers and venues may impose their own requirements.</p><Link href="/blog/ssi-vs-nroc-swimming-instructor-certification-singapore" className="mt-7 inline-flex font-bold text-teal-700 hover:text-teal-600">Compare SSI and NROC pathways →</Link></div></div></section>

        <div id="course-list"><CourseList /></div>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Course questions answered</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">What candidates ask before enrolling.</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{faqs.map(([question, answer]) => <article key={question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-[#0b2438]">{question}</h3><p className="mt-3 leading-7 text-slate-600">{answer}</p></article>)}</div><div className="mt-12 rounded-[1.75rem] bg-[#f6f4ee] p-7 sm:p-9"><h3 className="text-2xl font-semibold text-[#0b2438]">Read before you choose</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{[
          ['How to become a swimming instructor in Singapore', '/blog/how-to-become-certified-swimming-instructor-singapore'],
          ['SSI Level 1 requirements, cost and career path', '/blog/ssi-swim-teacher-level-1-requirements-cost-career-path'],
          ['SSI Level 1 vs Level 2', '/blog/ssi-swim-teacher-level-1-vs-level-2'],
          ['React Right: CPR, AED and Oxygen Provider explained', '/blog/ssi-react-right-cpr-aed-oxygen-provider-explained'],
          ['Baby swimming teacher certification in Singapore', '/blog/baby-swimming-teacher-certification-singapore'],
          ['SSI vs NROC: which pathway fits your goal?', '/blog/ssi-vs-nroc-swimming-instructor-certification-singapore'],
        ].map(([label, href]) => <Link key={href} href={href} className="font-semibold text-teal-800 hover:text-teal-600">{label} →</Link>)}</div></div></div></section>

        <section className="bg-[#071b2b] py-16 text-white sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><Link href="/swimming-coach-career-singapore" className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 transition hover:border-cyan-300/40 hover:bg-white/[0.09] sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Career readiness</p><h2 className="mt-4 text-2xl font-semibold tracking-tight">From teacher training to appropriate opportunities.</h2><p className="mt-3 max-w-3xl leading-7 text-slate-300">Build a practical readiness portfolio, understand the separate requirements that employers and venues may apply, and ask about the current scope of ongoing Penguin mentorship.</p><span className="mt-6 inline-flex font-bold text-cyan-200 group-hover:text-white">Explore the career pathway →</span></Link></div></section>

        <section className="bg-[#dff5f1] py-14 sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-800">Travelling to Singapore?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b2438]">International candidates are welcome to enquire.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Review SGD fees, in-person requirements, travel exclusions and recognition checks before making arrangements.</p></div><Link href="/international-candidates" className="inline-flex flex-none rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-[#12344d]">International candidate guide</Link></div></section>

        <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="rounded-[2rem] bg-[#0b2438] p-8 text-white sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Personal guidance</p><div className="mt-4 flex flex-col items-start justify-between gap-7 md:flex-row md:items-end"><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Not sure which certification fits?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">Tell us your current qualifications, teaching experience and preferred learner group. We’ll explain the most suitable route.</p></div><TrackedWhatsAppLink href={guidanceUrl} source="courses_guidance" className="inline-flex flex-none rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">Ask on WhatsApp</TrackedWhatsAppLink></div></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
