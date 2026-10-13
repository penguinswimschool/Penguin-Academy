import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import CourseMetaGrid from '@/components/CourseMetaGrid'
import { Package, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import {
  COURSE_DETAILS,
  COMPLETION_REQUIREMENTS,
  FULL_REACT_RIGHT,
  LIFETIME_MEMBERSHIP,
  LIFETIME_MENTORSHIP,
  LIFETIME_REFRESHER,
  PENGUIN_SUPPORT,
} from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'Penguin Pro Bundle – Any 2 SSI Teacher Courses | Penguin Academy',
  description: 'Choose any 2 teacher courses for $2,888 SGD. The bundle includes full SSI React Right.',
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/courses/penguin-pro-swim-teacher-pathway',
  },
}

const bundleFeatures = [
  'Choose any 2: Level 1, Level 2, Baby & Me, or Adult Swim Teacher',
  FULL_REACT_RIGHT,
  'SSI digital learning, assessments, final exam and programme-specific apprenticeship for each selected course',
  PENGUIN_SUPPORT,
  LIFETIME_MENTORSHIP,
  LIFETIME_MEMBERSHIP,
  LIFETIME_REFRESHER,
]

export default function PenguinProPathwayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/#courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Penguin Pro Bundle</span>
          </nav>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 mb-8 text-center">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold text-gray-900">🏆 MOST POPULAR BUNDLE</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Penguin Pro Bundle
            </h1>
            <p className="text-xl text-gray-800 mb-6">Any 2 SSI teacher courses with full React Right included</p>
            <div className="flex items-center justify-center gap-6 text-gray-900">
              <div className="bg-white bg-opacity-30 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">$2,888</div>
                <div className="text-sm line-through opacity-75">$3,376</div>
              </div>
              <div className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold">
                Save $488
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Course Overview</h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Choose any two teacher courses: Level 1, Level 2, Baby & Me, or Adult Swim Teacher. Each selected course includes one instructor-led day (9am–6pm) at our {COURSE_DETAILS.venue} venue plus all programme-specific SSI completion requirements. {COURSE_DETAILS.format}
                </p>

                <CourseMetaGrid recommendedDuration="Varies by the 2 courses selected" minimumAge="18+" liveTraining="2 instructor-led days" />

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">What&apos;s Included</h3>
                  <div className="space-y-3">
                    {bundleFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700">
                  Assessment includes {COURSE_DETAILS.assessment.toLowerCase()}.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Bundle?</h2>
                <p className="text-gray-700 mb-4">
                  Save $488 compared with purchasing any two teacher courses separately ($3,376). Full React Right is included, not charged separately.
                </p>
                <p className="text-gray-700">
                  {COMPLETION_REQUIREMENTS} Level 2 requires SSI Swim Teacher Level 1 certification.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Book This Bundle</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$2,888</div>
                    <div className="text-sm text-gray-500 line-through">$3,376</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold text-center">
                    Save $488
                  </div>
                </div>
                <BookNowButton 
                  courseTitle="Penguin Pro Bundle – any 2 SSI teacher courses"
                  variant="green"
                  className="block w-full text-center mb-4"
                >
                  Enquire on WhatsApp
                </BookNowButton>
                <Link
                  href="/#courses"
                  className="block w-full border-2 border-green-600 text-green-600 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
