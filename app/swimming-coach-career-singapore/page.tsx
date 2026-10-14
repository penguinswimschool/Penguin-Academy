import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, BookOpenCheck, BriefcaseBusiness, ClipboardCheck, MapPinCheck, MessageSquareText } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import StructuredData from '@/components/StructuredData'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import WhatsAppButton from '@/components/WhatsAppButton'
import { WHATSAPP_URL } from '@/lib/approved-course-details'

const pageUrl = 'https://www.swimcoachcertification.com/swimming-coach-career-singapore'

export const metadata: Metadata = {
  title: 'Swimming Coach Career Singapore | Practical Starting Guide',
  description: 'Prepare for a swimming coach career in Singapore: choose a suitable course, build supervised experience and check employer, venue and NROC requirements.',
  alternates: { canonical: pageUrl },
  openGraph: { title: 'Swimming Coach Career in Singapore | Penguin Academy', description: 'A practical, honest route from swim teacher education to career readiness in Singapore.', url: pageUrl, type: 'website' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: 'Swimming Coach Career in Singapore', description: 'A practical route from swim teacher education to career readiness in Singapore.', inLanguage: 'en-SG', isPartOf: { '@id': 'https://www.swimcoachcertification.com/#website' }, breadcrumb: { '@id': `${pageUrl}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.swimcoachcertification.com/' },
      { '@type': 'ListItem', position: 2, name: 'Swimming Coach Career Singapore', item: pageUrl },
    ] },
  ],
}

const steps = [
  { icon: BookOpenCheck, title: 'Choose the right teaching pathway', text: 'Match your training to the learner group and setting you want to teach. SSI Level 1 is Penguin Academy’s foundation route for new swim teachers.' },
  { icon: ClipboardCheck, title: 'Complete the full pathway', text: 'Finish the applicable digital learning, instructor-led training, assessments, final exam and supervised apprenticeship—not only the training day.' },
  { icon: BadgeCheck, title: 'Build a readiness portfolio', text: 'Keep your current qualifications, a simple lesson plan, evidence of supervised feedback and a short teaching demonstration ready for appropriate opportunities.' },
  { icon: MapPinCheck, title: 'Check the exact work setting', text: 'Employers, facilities and programmes may apply separate requirements. ActiveSG facilities, for example, have their own NROC and Usage Permit requirements.' },
  { icon: MessageSquareText, title: 'Prepare for daily coaching realities', text: 'Develop clear parent or learner communication, progress notes, scheduling habits and a plan for weather, pool closures or other disruptions.' },
  { icon: BriefcaseBusiness, title: 'Evaluate opportunities carefully', text: 'Confirm responsibilities, insurance, venue access, payment arrangements and expected hours. Certification does not guarantee employment or income.' },
]

const checklist = ['Current teaching and safety qualifications', 'Learner group you are prepared to teach', 'A simple written lesson plan', 'Evidence of supervised practice and feedback', 'Availability, travel range and preferred hours', 'Questions about venue, insurance and programme requirements']

export default function CareerPage() {
  const whatsapp = `${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, I would like help choosing a swim teacher course for my coaching career goals in Singapore.')}`
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="From learning to teaching" title="Build a swimming coach career with a clear, practical foundation." description="Penguin Academy helps aspiring teachers understand the training, supervised experience and setting-specific checks needed to take a responsible next step." primaryHref="/courses" primaryLabel="Compare teacher courses" secondaryHref={whatsapp} secondaryLabel="Ask about my pathway" secondaryTrackingSource="career_hero" />

        <section className="border-b border-slate-200 bg-[#f6f4ee] py-10 sm:py-14"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-lg leading-8 text-slate-700"><strong className="text-[#0b2438]">Direct answer:</strong> A swimming coach career in Singapore starts with the right training for your intended learners, completion of all certification requirements and supervised teaching practice. You must then confirm the separate rules of the employer, venue or programme where you plan to work.</p></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">A responsible starting route</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Six steps from interest to career readiness.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{steps.map(({icon:Icon,title,text},index)=><article key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#f7f8f6] p-7"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.2em] text-teal-700">STEP {String(index+1).padStart(2,'0')}</span><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"><Icon className="h-5 w-5" /></span></div><h3 className="mt-6 text-xl font-bold text-[#0b2438]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

        <section className="bg-[#071b2b] py-16 text-white sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.44fr_0.56fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Readiness portfolio</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Show how you are prepared to teach.</h2><p className="mt-5 leading-8 text-slate-300">A useful portfolio is more than a certificate. It helps an employer or programme understand the learners you can support and the supervised experience behind your preparation.</p></div><ul className="grid gap-3 sm:grid-cols-2">{checklist.map(item=><li key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 font-medium leading-6 text-slate-200">{item}</li>)}</ul></div></section>

        <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Choose with context</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Certification and work-setting recognition are separate questions.</h2><p className="mt-5 text-lg leading-8 text-slate-600">SSI training can build a swim teacher pathway, while NROC is Singapore’s national coaching registry. They are not automatic equivalents. Check the setting where you intend to work before assuming one qualification satisfies every requirement.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/blog/ssi-vs-nroc-swimming-instructor-certification-singapore" className="rounded-full bg-[#0b2438] px-7 py-4 text-center font-bold text-white hover:bg-teal-800">Read the SSI vs NROC guide</Link><Link href="/blog/how-to-become-certified-swimming-instructor-singapore" className="rounded-full border border-slate-300 px-7 py-4 text-center font-bold text-[#0b2438] hover:border-teal-600">Read the certification guide</Link></div></div></section>

        <section className="bg-[#dff5f1] py-16 sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-end"><div><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">Which course fits your coaching goal?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Tell us your current qualifications, teaching experience and preferred learner group. We will explain the most suitable Penguin Academy route without promising employment or universal recognition.</p></div><TrackedWhatsAppLink href={whatsapp} source="career_final" className="inline-flex rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Ask Penguin Academy</TrackedWhatsAppLink></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
