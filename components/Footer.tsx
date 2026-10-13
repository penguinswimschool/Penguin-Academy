"use client"
import React from 'react';
import { GOOGLE_REVIEWS_URL } from '@/lib/approved-course-details';
import { Award, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  onTermsClick?: () => void;
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
      <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Penguin Academy</span>
            </div>
            <p className="text-gray-400 mb-6">
              SSI swim teacher education in Singapore, led by a verified active SSI Swim Teacher Instructor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/courses/penguin-pro-swim-teacher-pathway" className="hover:text-white transition-colors">Penguin Pro Bundle</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-1" className="hover:text-white transition-colors">SSI Swim Teacher Level 1</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-2" className="hover:text-white transition-colors">SSI Swim Teacher Level 2</Link></li>
              <li><Link href="/courses/baby-and-me-swim-teacher" className="hover:text-white transition-colors">SSI Baby & Me Instructor</Link></li>
              <li><Link href="/courses/ssi-adult-swim-teacher" className="hover:text-white transition-colors">SSI Adult Swim Teacher</Link></li>
              <li><Link href="/courses/react-right-cpr-aed-first-aid" className="hover:text-white transition-colors">Full SSI React Right</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  About Trainer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Course Listing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Course Calendar
                </button>
              </li>
              <li><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+6589094395" className="hover:text-white transition-colors cursor-pointer">+65 8909 4395</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:swim@penguinswimschool.sg" className="hover:text-white transition-colors cursor-pointer">swim@penguinswimschool.sg</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>CBD / Central Singapore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Penguin Academy Singapore. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <button className="hover:text-white transition-colors">
              <Link href='/terms'>
                Terms & Conditions
              </Link>
              </button>
              <a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Verified SSI Profile</a>
            </div>
          </div>
        </div>
      </div>
      </footer>
  );
};

export default Footer;
