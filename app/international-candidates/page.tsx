import type { Metadata } from 'next'
import { BadgeCheck, CalendarCheck, CircleDollarSign, Globe2, MapPin, ShieldCheck } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import WhatsAppButton from '@/components/WhatsAppButton'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import StructuredData from '@/components/StructuredData'
import { WHATSAPP_URL } from '@/lib/approved-course-details'

const pageUrl = 'https://www.swimcoachcertification.com/international-candidates'
const socialImage = 'https://www.swimcoachcertification.com/academy-coach-community.jpg'

export const metadata: Metadata = {
  title: 'International Swim Teacher Training Singapore | Penguin Academy',
  description: 'Plan SSI swim teacher training with Penguin Academy in Singapore. Review SGD fees, in-person requirements, travel planning and recognition checks before booking.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'International Candidates | Penguin Academy Singapore',
    description: 'Plan professional SSI swim teacher training in Singapore with clear SGD pricing and practical travel guidance.',
    url: pageUrl,
    siteName: 'Penguin Academy',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: socialImage,
        width: 1280,
        height: 853,
        alt: 'Penguin Academy candidates taking part in practical swim teacher training in Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Swim Teacher Candidates | Penguin Academy Singapore',
    description: 'Plan SSI swim teacher training in Singapore with clear SGD pricing, in-person requirements and travel guidance.',
    images: [socialImage],
  },
}

const internationalCandidatesStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Swim Teacher Certification in Singapore for International Candidates',
      description: 'Plan SSI swim teacher training with Penguin Academy in Singapore, including SGD fees, in-person requirements, travel planning and recognition checks.',
      inLanguage: 'en-SG',
      isPartOf: { '@id': 'https://www.swimcoachcertification.com/#website' },
      about: { '@id': 'https://www.swimcoachcertification.com/#organization' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: socialImage,
        width: 1280,
        height: 853,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.swimcoachcertification.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'International Candidates',
          item: pageUrl,
        },
      ],
    },
  ],
}

const planningPoints = [
  { icon: MapPin, title: 'Training in Singapore', text: 'Current Academy delivery includes in-person practical training in Singapore. Confirm the exact venue and complete pathway before arranging travel.' },
  { icon: CircleDollarSign, title: 'All prices are in SGD', text: 'Published course prices are in Singapore dollars. Ask for written confirmation of the current fee, inclusions and any separate personal travel costs.' },
  { icon: CalendarCheck, title: 'Confirm the full pathway', text: 'The instructor-led day is only one part of certification. Digital learning, assessments and programme-specific apprenticeship requirements also apply.' },
  { icon: BadgeCheck, title: 'Check recognition for your goal', text: 'Before enrolling, confirm acceptance with your intended employer, aquatic facility, insurer, regulator or federation in the country where you plan to work.' },
  { icon: ShieldCheck, title: 'Safety training included', text: 'Every SGD 1,688 teacher course and the SGD 2,888 bundle include full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.' },
  { icon: Globe2, title: 'Group or overseas discussions', text: 'Overseas or group delivery may be discussed case by case. Format, trainer availability and completion arrangements must be confirmed in writing.' },
]

const checklist = [
  'Your country of residence and intended training dates',
  'The course or learner group you want to teach',
  'Your current swimming, teaching and first-aid qualifications',
  'The employer, facility or jurisdiction where you intend to use the qualification',
  'Your available time in Singapore for training and programme requirements',
  'Any accessibility, language or scheduling needs',
]

const faqs = [
  ['Are international candidates welcome?', 'Yes. International candidates are welcome to enquire about Penguin Academy courses in Singapore. Availability, prerequisites and the complete training plan must be confirmed before travel is booked.'],
  ['Are the published fees in Singapore dollars?', 'Yes. All Penguin Academy prices are stated in SGD. Personal flights, accommodation, insurance, meals, local transport and immigration costs are not included unless expressly confirmed in writing.'],
  ['Can I complete the certification fully online?', 'Do not plan on a fully online pathway. SSI digital learning may form part of a programme, but practical training, assessments and programme-specific completion requirements also apply.'],
  ['Will the qualification be accepted in my country?', 'Requirements differ by employer, facility and jurisdiction. Candidates should obtain confirmation from the relevant organisation before enrolment. Penguin Academy does not promise universal acceptance.'],
  ['Can Penguin Academy arrange my visa or accommodation?', 'Penguin Academy does not provide immigration advice and does not guarantee visas, entry approval, travel or accommodation. Candidates remain responsible for their own arrangements.'],
  ['Can apprenticeship requirements be completed outside Singapore?', 'This must be confirmed for the specific course before booking. Do not assume that an overseas apprenticeship arrangement is available without written approval.'],
]

export default function InternationalCandidatesPage() {
  const message = encodeURIComponent('Hi Penguin Academy, I am an international candidate interested in SSI swim teacher training in Singapore. My country is [country], my preferred course is [course], and my travel window is [dates]. Please advise on the complete pathway and SGD fees.')

  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <StructuredData data={internationalCandidatesStructuredData} />
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="Train in Singapore" title="International candidates are welcome." description="Plan your Penguin Academy pathway with clear SGD pricing, in-person requirements and practical checks before you arrange travel." primaryHref={`${WHATSAPP_URL}?text=${message}`} primaryLabel="Discuss your training plan" primaryTrackingSource="international_hero" primaryCandidateSegment="international" secondaryHref="/courses" secondaryLabel="Compare courses" />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Plan with confidence</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">What to confirm before booking.</h2><p className="mt-5 text-lg leading-8 text-slate-600">We welcome enquiries from candidates outside Singapore. Because certification and employment requirements can differ by country, the safest approach is to confirm your entire pathway in writing before paying for travel.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {planningPoints.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#f7f8f6] p-7"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-xl font-bold text-[#0b2438]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#dff5f1] py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-800">Enquiry checklist</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Help us give you an accurate answer.</h2><p className="mt-5 leading-8 text-slate-700">Send these details in your first message so the Academy can check the most suitable course, realistic schedule and completion arrangements.</p></div>
            <ol className="rounded-[2rem] bg-white p-7 shadow-[0_18px_55px_rgba(11,36,56,0.08)] sm:p-10">{checklist.map((item, index) => <li key={item} className="flex gap-4 border-b border-slate-100 py-4 first:pt-0 last:border-0 last:pb-0"><span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#0b2438] text-sm font-bold text-white">{index + 1}</span><span className="pt-1 font-medium leading-6 text-slate-700">{item}</span></li>)}</ol>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">International candidate FAQ</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Questions to settle before travelling.</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer]) => <section key={question} className="py-7"><h3 className="text-lg font-bold text-[#0b2438]">{question}</h3><p className="mt-3 leading-7 text-slate-600">{answer}</p></section>)}</div></div>
        </section>

        <section className="bg-[#071b2b] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Before you book travel</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Get your course plan confirmed in writing.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-300">Share your country, intended course and travel window. We will explain what can be confirmed and what you must verify independently.</p></div><TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${message}`} source="international_final" candidateSegment="international" className="inline-flex flex-none rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200">WhatsApp the Academy</TrackedWhatsAppLink></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
