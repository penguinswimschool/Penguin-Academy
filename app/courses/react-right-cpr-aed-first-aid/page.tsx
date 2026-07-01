import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import CourseMetaGrid from '@/components/CourseMetaGrid'
import { Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import {
  ATTACHMENT_REQUIREMENT,
  COURSE_DETAILS,
  LIFETIME_REFRESHER,
  PENGUIN_SUPPORT,
} from '@/lib/approved-course-details'

export const metadata: Metadata = {
  title: 'React Right (CPR, AED, First Aid) Certification | Penguin Academy Singapore',
  description: 'React Right certification — $100 SGD. 1 full day, 9am–6pm, CBD / Central Singapore. CPR, AED, and First Aid under the SSI framework.',
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/courses/react-right-cpr-aed-first-aid',
  },
}

const reactRightIncludes = [
  'React Right Certification (SSI-accredited)',
  'CPR and AED training',
  'First Aid response for common emergencies',
  'Practical scenario-based assessments',
  PENGUIN_SUPPORT,
  LIFETIME_REFRESHER,
  ATTACHMENT_REQUIREMENT,
]

export default function ReactRightPage() {
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
            <span className="text-gray-600">React Right (CPR, AED, First Aid)</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">React Right (CPR, AED, First Aid)</h1>
            </div>

            <CourseMetaGrid />

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Get certified in CPR, AED usage, and emergency First Aid under the SSI framework. Suitable for swim coaches, personal trainers, educators, and anyone who wants to respond confidently in emergencies. {COURSE_DETAILS.format} Assessment includes {COURSE_DETAILS.assessment.toLowerCase()}.
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
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">$100</div>
                  <div className="text-sm text-gray-600">Standalone course</div>
                </div>
                <div className="flex gap-4">
                  <BookNowButton courseTitle="React Right (CPR, AED, First Aid)" />
                  <Link
                    href="/#courses"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Ask Questions
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
