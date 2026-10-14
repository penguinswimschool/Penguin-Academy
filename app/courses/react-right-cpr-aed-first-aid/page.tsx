import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import CourseMetaGrid from '@/components/CourseMetaGrid'
import { Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import {
  COURSE_DETAILS,
  COURSE_STANDARDS,
  FULL_REACT_RIGHT,
  LIFETIME_REFRESHER,
  PENGUIN_SUPPORT,
} from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import StructuredData from '@/components/StructuredData'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI React Right Singapore | First Aid, CPR, AED & Oxygen',
  description: 'Full SSI React Right in Singapore for SGD 100, including First Aid & CPR, AED Provider and Oxygen Provider training.',
  path: '/courses/react-right-cpr-aed-first-aid',
})

const reactRightIncludes = [
  FULL_REACT_RIGHT,
  'First Aid & CPR module (recommended 5 hours)',
  'AED Provider module (recommended 1 hour)',
  'Oxygen Provider module (recommended 2 hours)',
  'Practical scenario-based assessments',
  'Academic assessments and final exam for each applicable portion',
  'Certification is valid for 2 years',
  PENGUIN_SUPPORT,
  LIFETIME_REFRESHER,
]

export default function ReactRightPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData data={buildCoursePageStructuredData('reactRight')} />
      <Header />
      <main id="main-content" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">React Right</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">React Right: First Aid, CPR, AED & Oxygen Provider</h1>
            </div>

            <CourseMetaGrid recommendedDuration={COURSE_STANDARDS.reactRight.recommendedDuration} minimumAge={COURSE_STANDARDS.reactRight.minimumAge} liveTraining="Scheduled practical training" />

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Complete the full SSI React Right combination: First Aid & CPR, AED Provider and Oxygen Provider. Suitable for swim coaches, personal trainers, educators, and anyone who wants to respond confidently in emergencies. {COURSE_DETAILS.format}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What&apos;s Included</h3>
              <div className="space-y-3">
                {reactRightIncludes.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="text-3xl font-bold text-gray-900">SGD 100</div>
                  <div className="text-sm text-gray-600">Standalone course</div>
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-2 md:gap-4">
                  <BookNowButton courseTitle="Full SSI React Right" className="w-full text-center md:w-auto" />
                  <Link
                    href="/course-dates"
                    className="inline-flex w-full items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-50 transition-colors md:w-auto"
                  >
                    View course dates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
