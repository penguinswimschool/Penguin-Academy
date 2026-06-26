"use client"
import React, { useState } from 'react';
import { Award, Clock, Users, CheckCircle, Heart, Zap, Shield, Baby, GraduationCap, Star, Package } from 'lucide-react';
import { createCheckoutSession } from '@/lib/stripe';
import { findProductByName } from '@/lib/stripe-config';
import Link from 'next/link';

interface CourseListProps {
  onAskQuestions: (courseTitle?: string) => void;
}

const courses = [
  {
    id: 1,
    title: "Penguin Pro Swim Teacher Pathway – Full Certification Bundle",
    duration: "5 Days",
    capacity: "6 Students",
    price: "$2,888",
    originalPrice: "$4,352",
    description: "Become a fully certified, industry-ready swim teacher in just 5 days. This intensive swim teacher training course provides everything you need to become a confident, certified professional — all under one roof at Penguin Academy.",
    features: [
      "SSI Swim Teacher Level 1, Level 2, Baby & Me Swim Teacher Certification",
      "SSI React Right (CPR, AED, First Aid)",
      "24/7 PenguinGPT Support",
      "Lifetime Mentorship & Training with the Penguin Team",
      "Lifetime Penguin Family Membership",
      "Digital SSI-Accredited Certifications",
      "Priority Booking for future upgrades",
      "Complimentary Lifetime Refresher"
    ],
    icon: Package,
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    highlight: "Save $1,464",
    isBundle: true,
    location: "Temasek Polytechnic",
    schedule: "Every Monday, Wednesday & Friday",
    installment: "$1,499 per month × 2"
  },
  {
    id: 2,
    title: "SSI Swim Teacher Level 1 Certification",
    duration: "1.5 Days",
    capacity: "8 Students",
    price: "$1,288",
    originalPrice: null,
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    description: "Kickstart your professional swim teaching journey with the SSI Swim Teacher Level 1 Certification in Singapore, offered by Penguin Academy. This course is designed for aspiring instructors who want to work with beginners and young children in private or group settings. You'll learn essential skills like water safety, floating, gliding, and how to manage engaging and safe swim lessons.",
    features: [
      "SSI Swim Teacher Level 1 Certification",
      "React Right (CPR, AED, First Aid)",
      "Lifetime mentorship & training with the Penguin Team",
      "24/7 support via PenguinGPT",
      "Lifetime membership in the Penguin Family",
      "Complimentary Lifetime Refresher"
    ],
    icon: GraduationCap,
    highlight: "includes React Right",
    isBundle: false
  },
  {
    id: 3,
    title: "SSI Swim Teacher Level 2 Certification",
    duration: "1 Day",
    capacity: "6 Students",
    price: "$1,288",
    originalPrice: null,
    description: "Take your swim teaching to the next level with the SSI Swim Teacher Level 2 course in Singapore, conducted by Penguin Academy. This course builds on Level 1 and covers advanced skills like stroke development (freestyle, backstroke, breaststroke), technique correction, endurance building, and class progression planning.",
    features: [
      "SSI Swim Teacher Level 2 Certification",
      "React Right (CPR, AED, First Aid)",
      "Lifetime mentorship & training with the Penguin Team",
      "24/7 support via PenguinGPT",
      "Lifetime membership in the Penguin Family",
      "Complimentary Lifetime Refresher"
    ],
    icon: Award,
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
    highlight: "includes React Right",
    isBundle: false
  },
  {
    id: 4,
    title: "Baby & Me Swim Teacher Course",
    duration: "3 Days",
    capacity: "6 Students",
    price: "$888",
    originalPrice: null,
    description: "Become a certified Baby Swim Teacher in Singapore with the SSI Baby & Me course at Penguin Academy. This course equips you to conduct fun, engaging, and safe parent-child swim classes for infants aged 6 months to 3 years. You'll learn how to build water confidence, teach early motor skills, and create meaningful bonding experiences through songs, games, and guided movement.",
    features: [
      "SSI Baby & Me Teacher Certification",
      "Lifetime mentorship & training with the Penguin Team",
      "24/7 support via PenguinGPT",
      "Lifetime membership in the Penguin Family",
      "Complimentary Lifetime Refresher"
    ],
    icon: Baby,
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    highlight: "Ages 6 months - 3 years",
    isBundle: false
  },
  {
    id: 5,
    title: "React Right (CPR, AED, First Aid)",
    duration: "0.5 Day",
    capacity: "12 Students",
    price: "$199",
    originalPrice: null,
    description: "The React Right First Aid course in Singapore, conducted by Penguin Academy, certifies you in CPR, AED usage, and emergency First Aid under the SSI framework. This essential course is suitable for swim coaches, personal trainers, educators, and everyday individuals who want to be prepared to respond in real-life emergencies.",
    features: [
      "React Right Certification (SSI-accredited)",
      "CPR and AED training",
      "First Aid response for common emergencies",
      "Practical scenario-based assessments",
      "Study support via PenguinGPT",
      "Complimentary Lifetime Refresher"
    ],
    icon: Shield,
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    highlight: "Standalone course",
    isBundle: false
  }
];

const CourseList: React.FC<CourseListProps> = ({ onAskQuestions }) => {
  const [loadingCourseId, setLoadingCourseId] = useState<number | null>(null);

  const handleBookCourse = async (course: any) => {
    setLoadingCourseId(course.id);
    try {
      // Find the corresponding product by course title
      const product = findProductByName(course.title);
      
      if (!product) {
        console.error('Product not found for course:', course.title);
        alert('Product configuration not found. Please contact support.');
        setLoadingCourseId(null);
        return;
      }

      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = window.location.href;
      
      await createCheckoutSession(product.priceId, product.mode, successUrl, cancelUrl);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to create checkout session. Please try again or contact support.');
      setLoadingCourseId(null);
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SSI Swim Teacher <span className="text-blue-600">Certification Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of SSI swim teacher certification programs designed to launch or advance your aquatic education career in Singapore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div key={course.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden ${course.isBundle ? 'border-yellow-400 border-2 relative' : 'border-gray-100'}`}>
                {course.isBundle && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-2">
                    <span className="text-sm font-bold text-gray-900">🏆 MOST POPULAR BUNDLE</span>
                  </div>
                )}
                <div className="relative h-64">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute ${course.isBundle ? 'top-12' : 'top-4'} right-4 px-3 py-1 rounded-full text-sm font-semibold ${course.isBundle ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}`}>
                    <div>{course.price}</div>
                    {course.originalPrice && (
                      <div className="text-xs line-through opacity-75">{course.originalPrice}</div>
                    )}
                  </div>
                  {course.highlight && (
                    <div className={`absolute ${course.isBundle ? 'top-12' : 'top-4'} left-4 px-3 py-1 rounded-full text-xs font-bold ${course.isBundle ? 'bg-red-500 text-white' : 'bg-yellow-400 text-blue-900'}`}>
                      {course.highlight}
                    </div>
                  )}
                </div>
                
                <div className={`p-8 ${course.isBundle ? 'pt-6' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                    <h3 className={`font-bold text-gray-900 ${course.isBundle ? 'text-lg' : 'text-xl'}`}>{course.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{course.capacity}</span>
                    </div>
                    {course.location && (
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 text-blue-600">📍</span>
                        <span>{course.location}</span>
                      </div>
                    )}
                    {course.schedule && (
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 text-blue-600">🗓️</span>
                        <span>{course.schedule}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {course.installment && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>Installment Option:</strong> {course.installment}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => handleBookCourse(course)}
                      disabled={loadingCourseId === course.id}
                      className={`w-full px-2 py-2.5 rounded-lg font-semibold transition-colors text-xs whitespace-nowrap text-center ${course.isBundle ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {loadingCourseId === course.id ? 'Processing...' : (course.isBundle ? 'Book Bundle' : 'Book Now')}
                    </button>
                    <Link
                      href={course.id === 1 
                        ? '/courses/penguin-pro-swim-teacher-pathway'
                        : course.id === 2
                        ? '/courses/ssi-swim-teacher-level-1'
                        : course.id === 3
                        ? '/courses/ssi-swim-teacher-level-2'
                        : course.id === 4
                        ? '/courses/baby-and-me-swim-teacher'
                        : '/courses/react-right-cpr-aed-first-aid'
                      }
                      className={`w-full px-2 py-2.5 border rounded-lg font-semibold transition-colors text-xs text-center whitespace-nowrap ${course.isBundle ? 'border-green-600 text-green-600 hover:bg-green-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                    >
                      Learn More
                    </Link>
                    <button
                      onClick={() => onAskQuestions(course.title)}
                      className={`w-full px-2 py-2.5 border rounded-lg font-semibold transition-colors text-xs text-center whitespace-nowrap ${course.isBundle ? 'border-green-600 text-green-600 hover:bg-green-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                    >
                      Ask Questions
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Penguin Academy?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Globally Recognised</h4>
                <p className="text-gray-600">SSI certifications are accepted in over 130 countries worldwide by swim schools and aquatic centres.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Instruction</h4>
                <p className="text-gray-600">Learn from our authorised SSI Course Presenter with extensive aquatic education experience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Lifetime Support</h4>
                <p className="text-gray-600">Ongoing mentorship, 24/7 PenguinGPT support, and lifetime membership in the Penguin Family.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 mt-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Package className="h-8 w-8 text-gray-900" />
                <h4 className="text-2xl font-bold text-gray-900">Bundle vs Individual Courses</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-900">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h5 className="font-bold mb-2">🏆 Penguin Pro Bundle</h5>
                  <p className="text-sm mb-2">All 5 certifications in 5 days</p>
                  <p className="text-lg font-bold">$2,888 (Save $1,464)</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h5 className="font-bold mb-2">📚 Individual Courses</h5>
                  <p className="text-sm mb-2">Take courses separately</p>
                  <p className="text-lg font-bold">$4,352 total</p>
                </div>
              </div>
              <p className="text-sm text-gray-800 mt-4">Perfect for new swim teachers or those wanting comprehensive certification quickly!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h4 className="text-lg font-bold text-gray-900">Penguin Family Benefits</h4>
                </div>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Lifetime mentorship and training support</li>
                  <li>• Access to exclusive workshops and updates</li>
                  <li>• Networking opportunities with certified instructors</li>
                  <li>• Career guidance and job placement assistance</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <h4 className="text-lg font-bold text-gray-900">PenguinGPT Support</h4>
                </div>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• 24/7 AI-powered learning assistance</li>
                  <li>• Instant answers to teaching questions</li>
                  <li>• Lesson planning and curriculum support</li>
                  <li>• Continuous professional development</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">About SSI (Swim Schools International)</h4>
              <p className="text-gray-600 text-center">
                Swim Schools International (SSI) is one of the world's leading aquatic education providers, offering structured swim teacher programmes that are trusted in over 130 countries. As an SSI-certified swim teacher, you'll be equipped to teach beginners through to advanced swimmers across various age groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;