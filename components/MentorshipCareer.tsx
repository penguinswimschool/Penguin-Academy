import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, MessageCircleQuestion, UsersRound } from 'lucide-react'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'
import { WHATSAPP_URL } from '@/lib/approved-course-details'

const supportExamples = [
  {
    icon: MessageCircleQuestion,
    title: 'Teaching questions',
    text: 'Discuss lesson structure, swimmer progression and ways to adapt communication for different learners.',
  },
  {
    icon: UsersRound,
    title: 'Continued development',
    text: 'Identify a suitable next pathway and the practical areas where further experience may help.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Career readiness',
    text: 'Prepare your qualifications, lesson-planning evidence and questions for appropriate coaching opportunities.',
  },
]

export default function MentorshipCareer() {
  return (
    <section className="bg-[#dff5f1] py-16 sm:py-24 lg:py-28" aria-labelledby="mentorship-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(11,36,56,0.14)] sm:min-h-[540px]">
          <Image
            src="/academy-coach-community.jpg"
            alt="Penguin Academy swim teachers learning together in Singapore"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/70 via-transparent to-transparent" />
          <p className="absolute inset-x-6 bottom-6 max-w-md text-lg font-semibold leading-7 text-white">
            Certification is the beginning. Your development continues with the Penguin community.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-800">Lifetime Penguin mentorship</p>
          <h2 id="mentorship-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">
            Support for the teacher you are becoming.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Ongoing mentorship is available to eligible teacher-course graduates. Ask the Academy for the current scope and terms for your course and support needs.
          </p>
          <div className="mt-8 grid gap-4">
            {supportExamples.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-teal-900/10 bg-white/80 p-5 backdrop-blur-sm">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#0b2438] text-cyan-300"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <div><h3 className="font-bold text-[#0b2438]">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, please explain the current mentorship scope and terms for teacher-course graduates.')}`} source="home_mentorship_scope" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Ask about mentorship <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></TrackedWhatsAppLink>
            <Link href="/swimming-coach-career-singapore" className="inline-flex items-center justify-center rounded-full border border-[#0b2438]/20 bg-white px-7 py-4 font-bold text-[#0b2438] hover:border-teal-600">Explore the career pathway</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
