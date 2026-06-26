import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import { GraduationCap, Clock, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SSI Swim Teacher Level 1 Certification | Penguin Academy Singapore',
  description: 'Kickstart your professional swim teaching journey with SSI Swim Teacher Level 1 Certification in Singapore. Learn essential skills for teaching beginners and young children.',
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/courses/ssi-swim-teacher-level-1',
  },
}

export default function SSILevel1Page() {
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
            <span className="text-gray-600">SSI Swim Teacher Level 1</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">SSI Swim Teacher Level 1 Certification</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">1.5 Days</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Capacity</div>
                  <div className="text-gray-600">8 Students</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kickstart your professional swim teaching journey with the SSI Swim Teacher Level 1 Certification in Singapore, offered by Penguin Academy. This course is designed for aspiring instructors who want to work with beginners and young children in private or group settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You'll learn essential skills like water safety, floating, gliding, and how to manage engaging and safe swim lessons.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="space-y-3">
                {[
                  "SSI Swim Teacher Level 1 Certification",
                  "React Right (CPR, AED, First Aid)",
                  "Lifetime mentorship & training with the Penguin Team",
                  "24/7 support via PenguinGPT",
                  "Lifetime membership in the Penguin Family",
                  "Complimentary Lifetime Refresher"
                ].map((feature, index) => (
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
                  <div className="text-3xl font-bold text-gray-900">$1,288</div>
                  <div className="text-sm text-gray-600">includes React Right</div>
                </div>
                <div className="flex gap-4">
                  <BookNowButton courseTitle="SSI Swim Teacher Level 1 Certification" />
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
