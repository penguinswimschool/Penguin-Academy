import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AcademyVideo from '@/components/AcademyVideo'
import CourseList from '@/components/CourseList'
import TrainingJourney from '@/components/TrainingJourney'
import TrainingReel from '@/components/TrainingReel'
import AcademyMoments from '@/components/AcademyMoments'
import CourseCalendar from '@/components/CourseCalendar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'
import { homepageStructuredData } from '@/lib/structured-data'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={homepageStructuredData} />
      <Header />
      <main id="main-content">
        <Hero />
        <CourseList />
        <TrainingJourney />
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
