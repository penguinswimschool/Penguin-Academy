import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import { Baby, Clock, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Baby & Me Swim Teacher Course | Penguin Academy Singapore',
  description: 'Become a certified Baby Swim Teacher in Singapore with the SSI Baby & Me course. Learn to conduct fun, engaging, and safe parent-child swim classes for infants aged 6 months to 3 years.',
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/courses/baby-and-me-swim-teacher',
  },
}

export default function BabyAndMePage() {
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
            <span className="text-gray-600">Baby & Me Swim Teacher</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Baby className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Baby & Me Swim Teacher Course</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">3 Days</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Capacity</div>
                  <div className="text-gray-600">6 Students</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Become a certified Baby Swim Teacher in Singapore with the SSI Baby & Me course at Penguin Academy. This course equips you to conduct fun, engaging, and safe parent-child swim classes for infants aged 6 months to 3 years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You'll learn how to build water confidence, teach early motor skills, and create meaningful bonding experiences through songs, games, and guided movement.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="space-y-3">
                {[
                  "SSI Baby & Me Teacher Certification",
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
                  <div className="text-3xl font-bold text-gray-900">$888</div>
                  <div className="text-sm text-gray-600">Ages 6 months - 3 years</div>
                </div>
                <div className="flex gap-4">
                  <BookNowButton courseTitle="Baby & Me Swim Instructor Course" />
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
