import type { Metadata } from 'next'
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InteriorPageHero from '@/components/InteriorPageHero'
import WhatsAppButton from '@/components/WhatsAppButton'
import { WHATSAPP_URL } from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'Contact Penguin Academy | Swim Teacher Courses Singapore',
  description: 'Contact Penguin Academy in Singapore for SSI swim teacher course guidance, dates, requirements and enrolment information.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/contact' },
  openGraph: { title: 'Contact Penguin Academy', description: 'Ask about SSI swim teacher certification pathways and upcoming course dates.', url: 'https://www.swimcoachcertification.com/contact', type: 'website' },
}

const message = encodeURIComponent('Hi Penguin Academy, I would like advice about your swim teacher certification courses.')

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <InteriorPageHero eyebrow="Contact Penguin Academy" title="Let’s find the right certification pathway." description="Tell us about your experience, preferred course and availability. We’ll help you understand the requirements and next suitable step." primaryHref={`${WHATSAPP_URL}?text=${message}`} primaryLabel="WhatsApp the Academy" secondaryHref="/courses" secondaryLabel="Compare courses" />
        <section className="bg-[#f6f4ee] py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="rounded-[2rem] bg-[#0b2438] p-8 text-white sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Fastest way to reach us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start the conversation on WhatsApp.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">For useful guidance, include the course you are considering, your current swim teaching qualification, and your preferred training period.</p>
              <a href={`${WHATSAPP_URL}?text=${message}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] hover:bg-cyan-200"><MessageCircle className="h-5 w-5" />WhatsApp +65 8909 4395</a>
              <div className="mt-10 border-t border-white/10 pt-8"><p className="flex items-start gap-3 text-sm leading-6 text-slate-300"><ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-teal-300" />Please do not send payment-card information, identity documents or sensitive medical details through the website or WhatsApp unless specifically required through an authorised process.</p></div>
            </div>
            <div className="grid gap-4">
              <a href="tel:+6589094395" className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"><Phone className="h-7 w-7 text-teal-700" /><p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">Telephone</p><p className="mt-2 text-xl font-bold text-[#0b2438] group-hover:text-teal-700">+65 8909 4395</p></a>
              <a href="mailto:swim@penguinswimschool.sg" className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"><Mail className="h-7 w-7 text-teal-700" /><p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">Email</p><p className="mt-2 break-all text-xl font-bold text-[#0b2438] group-hover:text-teal-700">swim@penguinswimschool.sg</p></a>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7"><MapPin className="h-7 w-7 text-teal-700" /><p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">Training area</p><p className="mt-2 text-xl font-bold text-[#0b2438]">CBD / Central Singapore</p><p className="mt-2 text-sm leading-6 text-slate-600">The confirmed venue is shared with enrolled candidates for the applicable session.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
