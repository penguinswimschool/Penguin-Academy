import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookNowButton from '@/components/BookNowButton'
import Image from 'next/image'
import { Package, Clock, Users, CheckCircle, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Penguin Pro Swim Teacher Pathway – Full Certification Bundle | Penguin Academy',
  description: 'Become a fully certified, industry-ready swim teacher in just 5 days. Complete SSI certification bundle including Level 1, Level 2, Baby & Me, and React Right.',
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/courses/penguin-pro-swim-teacher-pathway',
  },
}

export default function PenguinProPathwayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/#courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Penguin Pro Swim Teacher Pathway</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 mb-8 text-center">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold text-gray-900">🏆 MOST POPULAR BUNDLE</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Penguin Pro Swim Teacher Pathway
            </h1>
            <p className="text-xl text-gray-800 mb-6">Full Certification Bundle</p>
            <div className="flex items-center justify-center gap-6 text-gray-900">
              <div className="bg-white bg-opacity-30 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">$2,888</div>
                <div className="text-sm line-through opacity-75">$4,352</div>
              </div>
              <div className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold">
                Save $1,464
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Become a fully certified, industry-ready swim teacher in just 5 days. This intensive swim teacher training course provides everything you need to become a confident, certified professional — all under one roof at Penguin Academy.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-gray-600">5 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Capacity</div>
                      <div className="text-gray-600">6 Students</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Temasek Polytechnic</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Schedule</div>
                      <div className="text-gray-600">Every Monday, Wednesday & Friday</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {[
                      "SSI Swim Teacher Level 1, Level 2, Baby & Me Swim Teacher Certification",
                      "SSI React Right (CPR, AED, First Aid)",
                      "24/7 PenguinGPT Support",
                      "Lifetime Mentorship & Training with the Penguin Team",
                      "Lifetime Penguin Family Membership",
                      "Digital SSI-Accredited Certifications",
                      "Priority Booking for future upgrades",
                      "Complimentary Lifetime Refresher"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Installment Option</h3>
                  <p className="text-gray-700 font-semibold">$1,499 per month × 2</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Bundle?</h2>
                <p className="text-gray-700 mb-4">
                  The Penguin Pro Swim Teacher Pathway is the most comprehensive and cost-effective way to become a fully certified swim instructor. By bundling all certifications together, you save $1,464 compared to taking courses individually.
                </p>
                <p className="text-gray-700 mb-4">
                  This bundle is perfect for new swim teachers or those wanting comprehensive certification quickly. You'll complete all 5 certifications in just 5 days, making you immediately employable as a swim instructor.
                </p>
                <p className="text-gray-700">
                  Plus, graduates are eligible to join Penguin Swim Classes as instructors—so you can step straight into paid coaching opportunities without worrying about job placement.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Book This Course</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$2,888</div>
                    <div className="text-sm text-gray-500 line-through">$4,352</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold text-center">
                    Save $1,464
                  </div>
                </div>
                <BookNowButton 
                  courseTitle="Penguin Pro Swim Teacher Pathway – Full Certification Bundle"
                  variant="green"
                  className="block w-full text-center mb-4"
                >
                  Book Bundle
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
