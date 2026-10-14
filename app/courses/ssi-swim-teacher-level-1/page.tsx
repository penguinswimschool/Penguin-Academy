import { Award, BookOpenCheck, CheckCircle, Clock3, GraduationCap, MapPin, ShieldCheck, Users, Waves } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import StructuredData from '@/components/StructuredData'
import WhatsAppButton from '@/components/WhatsAppButton'
import { COURSE_DETAILS, COURSE_STANDARDS, FULL_REACT_RIGHT } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI Swim Teacher Level 1 Singapore | Requirements & Cost',
  description: 'Review SSI Level 1 scope, minimum age, 24–28 recommended hours, supervised apprenticeship and Penguin Academy’s SGD 1,688 fee in Singapore.',
  path: '/courses/ssi-swim-teacher-level-1',
})

const facts = [
  { icon: GraduationCap, label: 'Minimum age', value: '18 years' },
  { icon: Clock3, label: 'Recommended duration', value: COURSE_STANDARDS.level1.recommendedDuration },
  { icon: Users, label: 'Training cohort', value: COURSE_DETAILS.capacity },
  { icon: MapPin, label: 'Training location', value: COURSE_DETAILS.venue },
]

const suitableFor = [
  ['New swim teachers', 'A foundation route for candidates preparing to teach SSI Aquatike I–III and Beginner I–III programmes.'],
  ['Career switchers', 'A structured pathway for confident swimmers who want professional teaching education and supervised experience.'],
  ['Coaches formalising their pathway', 'A suitable starting point within SSI for teachers who do not yet hold SSI Swim Teacher Level 1.'],
]

const pathway = [
  ['Prepare', 'Complete the applicable SSI digital learning before instructor-led training.'],
  ['Train', `Attend ${COURSE_DETAILS.liveDay.toLowerCase()} (${COURSE_DETAILS.hours}) for instructor-led knowledge and practical development.`],
  ['Demonstrate', 'Complete the Candidate Water Fitness Evaluation when required by the current standard, together with academic, practical and final assessments.'],
  ['Apprentice', 'Complete at least four Aquatike and four Beginner lessons, directly supervised by an active SSI Level 1 Teacher Mentor or higher. SSI recommends at least four cumulative apprenticeship hours.'],
  ['Complete', 'A digital certification card may be issued only after all applicable academic and in-water requirements are successfully completed.'],
]

const included = [
  'SSI Swim Teacher Level 1 training and assessment pathway',
  FULL_REACT_RIGHT,
  'Applicable SSI digital learning',
  'Instructor-led knowledge and practical training',
  'Theory and practical assessments plus final exam',
  'Programme-specific supervised apprenticeship requirement',
  'Ongoing Penguin mentorship for eligible teacher-course graduates—ask for the current scope and terms',
]

const faqs = [
  ['Is SSI Level 1 completed in one day?', 'No. Penguin Academy includes one instructor-led day, while SSI also requires the applicable digital learning, water fitness evaluation, assessments, final exam and supervised apprenticeship.'],
  ['What can an active SSI Level 1 teacher conduct?', 'The current SSI standard lists Aquatike I–III and Beginner I–III within the active-status Level 1 programme scope.'],
  ['What are the Level 1 apprenticeship requirements?', 'At least four Aquatike and four Beginner lessons are required, with SSI recommending a cumulative minimum of four hours under direct supervision by an active Level 1 Teacher Mentor or higher.'],
  ['How much does Level 1 cost?', 'Penguin Academy’s published fee is SGD 1,688. The offer includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.'],
  ['Does Level 1 guarantee a coaching job or pool access?', 'No. Certification, employment, income, venue access, NROC status and programme eligibility are separate matters. Check the exact employer, facility and setting where you plan to teach.'],
  ['Can international candidates join?', 'International candidates are welcome to enquire. Training is conducted in person in Singapore. Any overseas delivery or apprenticeship arrangement must be confirmed in writing and is not guaranteed.'],
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
}

export default function SSILevel1Page() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={buildCoursePageStructuredData('level1')} />
      <StructuredData data={faqStructuredData} />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#071b2b] pb-16 pt-28 text-white sm:pb-24 sm:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_8%_82%,rgba(56,189,248,0.14),transparent_32%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <nav className="mb-8 text-sm text-slate-300" aria-label="Breadcrumb"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span><Link href="/courses" className="hover:text-white">Courses</Link><span className="mx-2">/</span><span>Level 1</span></nav>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Foundation SSI teaching pathway</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">SSI Swim Teacher Level 1 in Singapore.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Develop the knowledge and practical teaching skills needed to conduct SSI programmes from Aquatike I through Beginner III.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><BookNowButton courseTitle="SSI Swim Teacher Level 1" source="level1_hero" className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">Ask about Level 1</BookNowButton><Link href="/course-dates" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white hover:border-white/40 hover:bg-white/10">View course dates</Link></div></div>
              <aside className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Current Penguin fee</p><p className="mt-3 text-5xl font-semibold tracking-tight">SGD 1,688</p><p className="mt-3 leading-7 text-slate-300">Includes full SSI React Right. Certification follows successful completion of every applicable requirement.</p></aside>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f6f4ee] py-10 sm:py-14"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-lg leading-8 text-slate-700"><strong className="text-[#0b2438]">Direct answer:</strong> SSI Swim Teacher Level 1 is the foundation pathway for teaching SSI Aquatike I–III and Beginner I–III programmes. Candidates must be at least 18. SSI recommends 24–28 hours, including required learning, evaluation, assessment and apprenticeship—not only the instructor-led day.</p></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{facts.map(({icon:Icon,label,value})=><article key={label} className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-6"><Icon className="h-6 w-6 text-teal-700"/><p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p><p className="mt-2 font-bold leading-6 text-[#0b2438]">{value}</p></article>)}</div></div></section>

        <section className="bg-[#dff5f1] py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-800">Who this course usually suits</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Start with the learner group you want to support.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{suitableFor.map(([title,text])=><article key={title} className="rounded-[1.5rem] bg-white p-7 shadow-[0_18px_55px_rgba(11,36,56,0.07)]"><Waves className="h-7 w-7 text-teal-700"/><h3 className="mt-5 text-xl font-bold text-[#0b2438]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.43fr_0.57fr] lg:px-10"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Complete pathway</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Five stages—not a one-day shortcut.</h2><p className="mt-5 leading-8 text-slate-600">The exact sequence and timing depend on candidate progress and confirmed apprenticeship arrangements. A training day alone does not produce certification.</p></div><ol className="space-y-4">{pathway.map(([title,text],index)=><li key={title} className="flex gap-5 rounded-2xl border border-slate-200 p-6"><span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#0b2438] font-bold text-white">{index+1}</span><div><h3 className="font-bold text-[#0b2438]">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div></li>)}</ol></div></section>

        <section className="bg-[#071b2b] py-16 text-white sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.46fr_0.54fr] lg:px-10"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Fee and inclusions</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">SGD 1,688 with full React Right.</h2><p className="mt-5 leading-8 text-slate-300">Published prices are in Singapore dollars. Refresher training, new certifications, venue access, dedicated pool sessions and one-to-one services require separate confirmation and may carry additional fees.</p><BookNowButton courseTitle="SSI Swim Teacher Level 1" source="level1_inclusions" className="mt-8 rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">Check availability on WhatsApp</BookNowButton></div><ul className="grid gap-3">{included.map(item=><li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-200"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300"/><span className="leading-6">{item}</span></li>)}</ul></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2"><article className="rounded-[1.75rem] border border-slate-200 p-7 sm:p-9"><Award className="h-7 w-7 text-teal-700"/><h2 className="mt-5 text-2xl font-semibold text-[#0b2438]">What comes after Level 1?</h2><p className="mt-4 leading-7 text-slate-600">SSI Level 1 is the required prerequisite for SSI Swim Teacher Level 2. Baby Swim Teacher and Adult Swim Teacher are separate specialisations. Choose the next pathway according to the learners you intend to teach.</p><Link href="/courses" className="mt-6 inline-flex font-bold text-teal-700 hover:text-teal-600">Compare all courses →</Link></article><article className="rounded-[1.75rem] border border-slate-200 p-7 sm:p-9"><ShieldCheck className="h-7 w-7 text-teal-700"/><h2 className="mt-5 text-2xl font-semibold text-[#0b2438]">Certification is not universal pool access.</h2><p className="mt-4 leading-7 text-slate-600">Employers, facilities and public programmes may apply separate requirements. ActiveSG coaching requires valid NROC status and a Usage Permit. Confirm the exact setting where you plan to teach.</p><Link href="/blog/ssi-vs-nroc-swimming-instructor-certification-singapore" className="mt-6 inline-flex font-bold text-teal-700 hover:text-teal-600">Compare SSI and NROC →</Link></article></div></section>

        <section className="bg-[#f6f4ee] py-16 sm:py-24"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Level 1 FAQ</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Questions candidates ask before enrolling.</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question,answer])=><details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-[#0b2438]"><span>{question}</span><span className="text-2xl font-normal text-teal-700 group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p></details>)}</div><div className="mt-10 flex flex-wrap gap-4"><a href="https://training.divessi.com/index.php?id=22219535" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-600"><BookOpenCheck className="h-5 w-5"/>Official SSI Level 1 standard</a><Link href="/blog/ssi-swim-teacher-level-1-requirements-cost-career-path" className="font-bold text-teal-700 hover:text-teal-600">Read the detailed Level 1 guide →</Link></div></div></section>

        <section className="bg-[#dff5f1] py-16 sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-end"><div><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">Ready to discuss Level 1?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Share your swimming background, preferred dates and intended teaching setting. We will explain the confirmed pathway and current arrangements.</p></div><BookNowButton courseTitle="SSI Swim Teacher Level 1" source="level1_final" className="rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Ask Penguin Academy</BookNowButton></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
