import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import CourseMetaGrid from '@/components/CourseMetaGrid'
import { Baby, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { COURSE_DETAILS, COURSE_STANDARDS, certCourseIncludes } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import StructuredData from '@/components/StructuredData'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI Baby Swim Teacher Singapore | Penguin Academy',
  description: 'Train as an SSI Baby Swim Teacher in Singapore. Review the 8–10-hour recommendation, supervised apprenticeship and SGD 1,688 fee.',
  path: '/courses/baby-and-me-swim-teacher',
})

export default function BabyAndMePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData data={buildCoursePageStructuredData('baby')} />
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">SSI Baby Swim Teacher</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Baby className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">SSI Baby Swim Teacher Course</h1>
            </div>

            <CourseMetaGrid recommendedDuration={COURSE_STANDARDS.baby.recommendedDuration} minimumAge={COURSE_STANDARDS.baby.minimumAge} />

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prepare to conduct SSI Baby Swim I and Baby Swim II parent-child programmes. SSI lists Baby Swim I for ages 2–35 months and Baby Swim II for ages 12–35 months, with a parent or guardian in the water and directly supervising the child.
              </p>
              <p className="text-gray-700 leading-relaxed">
                {COURSE_DETAILS.format} Assessment includes {COURSE_DETAILS.assessment.toLowerCase()}.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What&apos;s Included</h3>
              <div className="space-y-3">
                {certCourseIncludes('SSI Baby Swim Teacher certification', COURSE_STANDARDS.baby.apprenticeship).map((feature, index) => (
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
                  <div className="text-3xl font-bold text-gray-900">SGD 1,688</div>
                  <div className="text-sm text-gray-600">includes full React Right</div>
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-2 md:gap-4">
                  <BookNowButton courseTitle="SSI Baby Swim Teacher Course" className="w-full text-center md:w-auto" />
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
      </div>
      <Footer />
    </div>
  )
}
