import React from 'react';
import { Award, Star, Users, Clock, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="pt-16">
      {/* Main Hero Content */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold">Official SSI Certification Centre</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Become a Certified <span className="text-blue-600">Swim Teacher</span> with SSI
            </h1>
            <div className="text-xl text-gray-600 mb-6 leading-relaxed">
              <p className="mb-4">
                Whether you're looking to start your journey as a certified swim teacher or upgrade your professional qualifications, Penguin Academy Singapore provides structured, globally recognised programmes that prepare you to coach with skill, safety, and confidence.
              </p>
              <p className="font-bold">
                Plus, graduates are eligible to join Penguin Swim Classes as instructors—so you can step straight into paid coaching opportunities without worrying about job placement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Penguin Academy?</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Official SSI Presenter:</strong> All courses are led by registered presenters, trained and authorised under SSI's international standards.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Internationally Recognised:</strong> SSI qualifications are accepted globally, opening doors for both local and overseas opportunities.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Singapore-Based Training:</strong> Convenient in-person courses held at selected private pools and premium venues.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Personalised Coaching:</strong> Small class sizes ensure individual attention and hands-on learning.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Job Opportunities After Graduation:</strong> Graduates are eligible to join Penguin Swim Classes as instructors, so you won't need to worry about job placement after completing your course.</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Courses
              </button>
              <button
                onClick={onContactClick}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Now
              </button>
            </div>

          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
              {/* Image placeholder - replace src with your uploaded image */}
              <div className="w-full h-[600px] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image src="/hero_image.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-bold text-gray-900">Official SSI Centre</div>
                  <div className="text-sm text-gray-600">Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Who Is This For Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Is This For?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Aspiring Coaches</h4>
              <p className="text-sm text-gray-600">Looking for recognised entry into the swim coaching industry</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Current Instructors</h4>
              <p className="text-sm text-gray-600">Want to upgrade to internationally accredited certification</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sports Professionals</h4>
              <p className="text-sm text-gray-600">Lifeguards, PE teachers expanding into aquatic education</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ex-Swimmers</h4>
              <p className="text-sm text-gray-600">Competitive swimmers and students considering coaching careers</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Penguin Academy Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Penguin Academy Singapore</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Your Trusted Centre for SSI Swim Teacher Certification
            </p>
            <p className="text-lg text-blue-200 max-w-5xl mx-auto leading-relaxed">
              Welcome to Penguin Academy, Singapore's dedicated training hub for aspiring swim coaches. As the official Swim Schools International (SSI) certification centre in Singapore, we offer a full suite of SSI swim teacher certification courses, conducted by our authorised SSI Course Presenter.
            </p>
            <div className="mt-8">
              <span className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-sm font-bold">
                OFFICIAL SSI CERTIFICATION CENTRE • SINGAPORE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <Image 
                src="/Remus.png" 
                alt="Remus Teo - SSI Pro Instructor"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
                width={128}
                height={128}
              />
            </div>
            <div className="mb-4">
              <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                SSI PRO CERTIFIED
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">Remus Teo</h1>
            <p className="text-xl text-blue-100 mb-2">SWIM INSTRUCTOR</p>
            <p className="text-lg text-blue-200 mb-6">SSI Pro 121320</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white bg-opacity-10 px-6 py-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold text-black">SSI Professional Level</span>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-10 px-6 py-3 rounded-lg">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold text-black">Master Instructor</span>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-10 px-6 py-3 rounded-lg">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold text-black">10+ Years Experience</span>
              </div>
            </div>

            <a
              href="https://my.divessi.com/pro/121320"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              View SSI Presenter Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;