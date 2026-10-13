import type { Metadata } from 'next'
import Link from 'next/link'
import { Building, Calendar, CheckCircle, CreditCard, FileText, GraduationCap, Shield, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Penguin Academy Singapore',
  description: 'Read the enrolment, payment, attendance, certification, cancellation and conduct terms for Penguin Academy courses in Singapore.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/terms' },
  openGraph: { title: 'Terms & Conditions | Penguin Academy Singapore', description: 'Terms applying to Penguin Academy course enrolment and participation.', url: 'https://www.swimcoachcertification.com/terms', siteName: 'Penguin Academy', locale: 'en_SG', type: 'website' },
}

const sections = [
  { icon: Building, title: '1. Ownership & governance', content: <p>Penguin Academy operates under Penguin Swim School Pte. Ltd. (UEN: 202215517W). All certification courses, training materials and operational decisions are managed and governed by Penguin Swim School.</p> },
  { icon: CreditCard, title: '2. Course enrolment & payments', content: <ul><li>Course enrolment is confirmed only upon full payment.</li><li>Fees paid are non-refundable and non-transferable in the event of participant withdrawal, absence or failure to complete any part of the course.</li><li>No refund is issued for changes in personal circumstances, including medical conditions, scheduling conflicts or inability to attend.</li></ul> },
  { icon: GraduationCap, title: '3. Attendance & certification requirements', content: <ul><li>Participants must complete all required training days, learning, assessments and applicable apprenticeship criteria to receive certification.</li><li>Penguin Academy may withhold certification where minimum requirements have not been met, even if full payment has been made.</li></ul> },
  { icon: Calendar, title: '4. Course changes & cancellations by Penguin Academy', content: <p>Penguin Academy may postpone, reschedule or cancel a course due to unforeseen circumstances, including instructor availability, minimum participant requirements or venue issues. In such cases, participants will be offered an alternative date or course, but no refunds will be issued.</p> },
  { icon: Shield, title: '5. Intellectual property', content: <p>Course materials, training content and digital resources, including the Penguin Swim Coach Handbook, are the intellectual property of Penguin Swim School and Penguin Academy. They may not be copied, distributed or shared without written permission.</p> },
  { icon: Users, title: '6. Code of conduct', content: <p>Participants are expected to behave professionally and respectfully during training. Penguin Academy may remove a participant who breaches conduct or safety expectations, without refund.</p> },
  { icon: CheckCircle, title: '7. Acceptance of terms', content: <p>By enrolling in a Penguin Academy course, participants acknowledge that they have read, understood and agreed to these Terms &amp; Conditions.</p> },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <Header />
      <main id="main-content" className="pt-16">
        <section className="relative overflow-hidden bg-[#071b2b] py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(45,212,191,0.17),transparent_34%)]" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Course policies</p><h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Terms &amp; Conditions</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Important information about enrolment, participation, certification and course administration.</p><p className="mt-5 text-sm text-slate-400">Last updated: 13 October 2026</p></div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="h-fit rounded-[1.5rem] border border-slate-200 bg-white p-6 lg:sticky lg:top-24"><FileText className="h-7 w-7 text-teal-700" /><h2 className="mt-4 text-xl font-bold text-[#0b2438]">Before you enrol</h2><p className="mt-3 text-sm leading-6 text-slate-600">Please read these terms before making payment or committing to a training date.</p><div className="mt-6 border-t border-slate-100 pt-6 text-sm text-slate-600"><p className="font-bold text-[#0b2438]">Related policy</p><Link href="/privacy" className="mt-2 inline-flex text-teal-700 hover:text-teal-600">Privacy Policy</Link></div></aside>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(11,36,56,0.07)] sm:p-10 lg:p-12">
              <div className="divide-y divide-slate-100">
                {sections.map(({ icon: Icon, title, content }) => <section key={title} className="py-8 first:pt-0"><div className="flex items-start gap-4"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Icon className="h-5 w-5" /></span><div className="min-w-0"><h2 className="text-xl font-bold text-[#0b2438] sm:text-2xl">{title}</h2><div className="mt-4 space-y-3 leading-8 text-slate-600 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-teal-600 [&_li]:before:content-['•']">{content}</div></div></div></section>)}
              </div>
              <section className="mt-5 rounded-[1.5rem] bg-[#dff5f1] p-6 sm:p-8"><h2 className="text-xl font-bold text-[#0b2438]">Contact information</h2><div className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2"><p><strong>Company:</strong> Penguin Swim School Pte. Ltd.</p><p><strong>UEN:</strong> 202215517W</p><p><strong>Phone:</strong> +65 8909 4395</p><p className="break-all"><strong>Email:</strong> swim@penguinswimschool.sg</p><p><strong>Location:</strong> Singapore</p></div></section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
