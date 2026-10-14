"use client"
import React from 'react';
import { GOOGLE_REVIEWS_URL } from '@/lib/approved-course-details';
import { Award, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
      <footer className="border-t border-white/10 bg-[#061724] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-[#071b2b]"><Award className="h-6 w-6" /></span>
              <span className="text-xl font-bold tracking-tight">Penguin Academy</span>
            </div>
            <p className="mb-6 leading-7 text-slate-400">
              SSI swim teacher education in Singapore, supported by an instructor and practical mentoring team.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/courses/penguin-pro-swim-teacher-pathway" className="hover:text-white transition-colors">Penguin Pro Bundle</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-1" className="hover:text-white transition-colors">SSI Swim Teacher Level 1</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-2" className="hover:text-white transition-colors">SSI Swim Teacher Level 2</Link></li>
              <li><Link href="/courses/baby-and-me-swim-teacher" className="hover:text-white transition-colors">SSI Baby Swim Teacher</Link></li>
              <li><Link href="/courses/ssi-adult-swim-teacher" className="hover:text-white transition-colors">SSI Adult Swim Teacher</Link></li>
              <li><Link href="/courses/react-right-cpr-aed-first-aid" className="hover:text-white transition-colors">Full SSI React Right</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="transition-colors hover:text-white">About Academy</Link></li>
              <li><Link href="/courses" className="transition-colors hover:text-white">All Courses</Link></li>
              <li><Link href="/course-dates" className="transition-colors hover:text-white">Course Dates</Link></li>
              <li><Link href="/swimming-coach-career-singapore" className="transition-colors hover:text-white">Swimming Coach Career</Link></li>
              <li><Link href="/international-candidates" className="transition-colors hover:text-white">International Candidates</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-white">Training Guides</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              <li><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-300" />
                <a href="tel:+6589094395" className="hover:text-white transition-colors cursor-pointer">+65 8909 4395</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                <a href="mailto:swim@penguinswimschool.sg" className="hover:text-white transition-colors cursor-pointer">swim@penguinswimschool.sg</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span>CBD / Central Singapore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 text-sm text-slate-500 md:mb-0">
              © {new Date().getFullYear()} Penguin Academy Singapore. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 md:justify-end">
              <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Verified SSI Profile</a>
            </div>
          </div>
        </div>
      </div>
      </footer>
  );
};

export default Footer;
