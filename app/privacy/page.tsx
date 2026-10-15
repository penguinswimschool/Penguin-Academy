import type { Metadata } from 'next'
import Link from 'next/link'
import { Database, Eye, LockKeyhole, Mail, RefreshCw, ShieldCheck, UserCheck } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SOCIAL_IMAGE, SOCIAL_IMAGE_METADATA } from '@/lib/social-metadata'

export const metadata: Metadata = {
  title: 'Privacy Policy | Penguin Academy Singapore',
  description: 'How Penguin Academy collects, uses, protects and manages personal data for website visitors, course enquiries and candidates in Singapore.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/privacy' },
  openGraph: { title: 'Privacy Policy | Penguin Academy', description: 'Penguin Academy data protection and privacy information.', url: 'https://www.swimcoachcertification.com/privacy', type: 'website', images: [SOCIAL_IMAGE_METADATA] },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy | Penguin Academy', description: 'Penguin Academy data protection and privacy information.', images: [SOCIAL_IMAGE] },
}

const sections = [
  { icon: Database, title: '1. Personal data we may collect', body: <>We may collect information you provide when making an enquiry or enrolling in a course, such as your name, email address, telephone number, course interest, availability and relevant qualification information. The website may also collect limited technical and usage information through essential technologies and configured analytics.</> },
  { icon: Eye, title: '2. How we use personal data', body: <>We use personal data to respond to enquiries, recommend suitable course pathways, arrange training, administer enrolment and payment, communicate course information, maintain candidate records, meet certification or legal requirements, improve the website and protect our services.</> },
  { icon: UserCheck, title: '3. Consent and communication', body: <>By voluntarily providing personal data for an enquiry or course process, you consent to its use for the notified purpose. You may withdraw consent for future use by contacting us, subject to legal, contractual and operational consequences that we will explain where applicable.</> },
  { icon: RefreshCw, title: '4. Service providers and transfers', body: <>We may use service providers for website hosting, enquiry storage, email delivery, analytics, payment processing and certification administration. WhatsApp enquiries are also subject to WhatsApp’s own privacy practices. Where personal data is transferred outside Singapore, we take reasonable steps to ensure a comparable standard of protection as required by applicable law.</> },
  { icon: LockKeyhole, title: '5. Protection and retention', body: <>We use reasonable administrative and technical safeguards to protect personal data against unauthorised access, use, disclosure, alteration or loss. We retain personal data only for as long as it is reasonably needed for the purpose collected, legitimate business needs, certification records or legal obligations, after which it is securely deleted or anonymised where practicable.</> },
  { icon: ShieldCheck, title: '6. Access, correction and enquiries', body: <>You may ask to access or correct personal data under our control, or raise a privacy concern, by contacting our data protection contact below. We may need to verify your identity and may charge a reasonable fee where permitted. Applicable exceptions under Singapore law may apply.</> },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      <Header />
      <main id="main-content" className="pt-16">
        <section className="relative overflow-hidden bg-[#071b2b] py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(45,212,191,0.17),transparent_34%)]" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Legal &amp; privacy</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Privacy Policy</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">How Penguin Academy manages personal data for website visitors, course enquiries and candidates.</p>
            <p className="mt-5 text-sm text-slate-400">Last updated: 13 October 2026</p>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="h-fit rounded-[1.5rem] border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Organisation</p>
              <p className="mt-3 font-bold text-[#0b2438]">Penguin Swim School Pte. Ltd.</p>
              <p className="mt-1 text-sm text-slate-600">UEN: 202215517W</p>
              <div className="mt-6 border-t border-slate-100 pt-6 text-sm leading-6 text-slate-600"><p className="font-bold text-[#0b2438]">Data protection contact</p><a href="mailto:swim@penguinswimschool.sg?subject=Data%20Protection%20Enquiry" className="mt-2 inline-flex break-all text-teal-700 hover:text-teal-600">swim@penguinswimschool.sg</a><p className="mt-2">+65 8909 4395</p></div>
            </aside>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(11,36,56,0.07)] sm:p-10 lg:p-12">
              <div className="border-b border-slate-100 pb-8"><p className="text-lg leading-8 text-slate-600">This Policy should be read together with our <Link href="/terms" className="font-semibold text-teal-700 hover:text-teal-600">Terms &amp; Conditions</Link>. It explains our general approach under Singapore’s Personal Data Protection Act 2012. Specific enrolment or certification processes may include additional notices where necessary.</p></div>
              <div className="divide-y divide-slate-100">
                {sections.map(({ icon: Icon, title, body }) => <section key={title} className="py-8"><div className="flex items-start gap-4"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Icon className="h-5 w-5" /></span><div><h2 className="text-xl font-bold text-[#0b2438] sm:text-2xl">{title}</h2><p className="mt-4 leading-8 text-slate-600">{body}</p></div></div></section>)}
                <section className="py-8"><div className="flex items-start gap-4"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Mail className="h-5 w-5" /></span><div><h2 className="text-xl font-bold text-[#0b2438] sm:text-2xl">7. Updates to this Policy</h2><p className="mt-4 leading-8 text-slate-600">We may update this Policy when our practices, services or legal obligations change. The current version and effective date will be published on this page.</p></div></div></section>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
