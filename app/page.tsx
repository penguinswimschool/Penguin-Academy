import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AcademyVideo from '@/components/AcademyVideo'
import CourseList from '@/components/CourseList'
import TrainingJourney from '@/components/TrainingJourney'
import MentorshipCareer from '@/components/MentorshipCareer'
import TrainingReel from '@/components/TrainingReel'
import AcademyMoments from '@/components/AcademyMoments'
import CourseCalendar from '@/components/CourseCalendar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'
import LegacyHashRedirect from '@/components/LegacyHashRedirect'
import { homepageStructuredData } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Swimming Instructor Course Singapore | Penguin Academy',
  description: 'Become a certified swim teacher in Singapore through SSI training, supervised practice and lifetime Penguin mentorship. Compare pathways and SGD fees.',
  alternates: { canonical: 'https://www.swimcoachcertification.com/' },
  openGraph: {
    title: 'Swimming Instructor Course Singapore | Penguin Academy',
    description: 'SSI swim teacher training, supervised practice and lifetime mentorship for local and international candidates.',
    url: 'https://www.swimcoachcertification.com/',
    siteName: 'Penguin Academy',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swimming Instructor Course Singapore | Penguin Academy',
    description: 'SSI swim teacher training, supervised practice and lifetime mentorship for local and international candidates.',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <LegacyHashRedirect />
      <StructuredData data={homepageStructuredData} />
      <Header />
      <main id="main-content">
        <Hero />
        <CourseList />
        <TrainingJourney />
        <MentorshipCareer />
        <TrainingReel />
        <AcademyMoments />
        <AcademyVideo />
        <CourseCalendar />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
