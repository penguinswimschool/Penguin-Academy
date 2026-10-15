import type { Metadata } from 'next'
import { CalendarCheck, CheckCircle, MessageCircle, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import CourseCalendar from '@/components/CourseCalendar'
import WhatsAppButton from '@/components/WhatsAppButton'
import { whatsappEnquiryUrl } from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'SSI Swim Teacher Course Dates Singapore | Penguin Academy',
  description: 'Check confirmed Penguin Academy course dates or arrange a suitable SSI swim teacher training schedule in Singapore.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/course-dates' },
  openGraph: { title: 'SSI Swim Teacher Course Dates Singapore', description: 'View confirmed intakes and understand how Penguin Academy schedules small-cohort training.', url: 'https://www.swimcoachcertification.com/course-dates', type: 'website' },
}

export default function CourseDatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="Course dates" title="Plan your professional training." description="Confirmed sessions appear on the calendar when available. For flexible arrangements, tell us your preferred course and availability." primaryHref="#calendar" primaryLabel="View calendar" secondaryHref={whatsappEnquiryUrl('the next available course date')} secondaryLabel="Ask about dates" secondaryTrackingSource="course_dates_hero" />
        <section className="bg-[#f6f4ee] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {[{ icon: CalendarCheck, title: 'Confirmed dates', text: 'Published sessions show the scheduled training date, time and available capacity.' }, { icon: Users, title: 'Small cohorts', text: 'Training is structured for 1–8 candidates, supporting focused learning and feedback.' }, { icon: MessageCircle, title: 'Flexible arrangements', text: 'If no date is listed, contact us to discuss candidate availability and instructor capacity.' }].map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-7"><Icon className="h-7 w-7 text-teal-700" /><h2 className="mt-5 text-xl font-bold text-[#0b2438]">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </section>
        <CourseCalendar />
        <section className="bg-[#dff5f1] py-16 sm:py-20"><div className="mx-auto max-w-5xl px-5 sm:px-8"><h2 className="text-3xl font-semibold tracking-tight text-[#0b2438]">Before your date is confirmed</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{['Choose the course pathway that matches your experience.', 'Share your preferred dates and availability with the Academy.', 'Review the course requirements and completion pathway.', 'Receive confirmation before making training arrangements.'].map(item=><p key={item} className="flex gap-3 rounded-2xl bg-white p-5 text-slate-700"><CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />{item}</p>)}</div></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
