"use client"
import React from 'react';
import { useState } from 'react';
import { Award, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  onTermsClick?: () => void;
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick, onAdminClick }) => {
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminAccess = () => {
    if (adminPassword === 'chatgptbhai') {
      setShowAdminPrompt(false);
      setAdminPassword('');
      if (onAdminClick) {
        onAdminClick();
      } else {
        // Default behavior: navigate to dashboard
        window.location.href = '/dashboard';
      }
    } else {
      alert('Incorrect password');
      setAdminPassword('');
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Penguin Academy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Singapore's trusted centre for SSI swim teacher certification. Official SSI certification centre offering globally recognised aquatic education programs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/courses/penguin-pro-swim-teacher-pathway" className="hover:text-white transition-colors">Penguin Pro Bundle</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-1" className="hover:text-white transition-colors">SSI Swim Teacher Level 1</Link></li>
              <li><Link href="/courses/ssi-swim-teacher-level-2" className="hover:text-white transition-colors">SSI Swim Teacher Level 2</Link></li>
              <li><Link href="/courses/baby-and-me-swim-teacher" className="hover:text-white transition-colors">SSI Baby & Me Instructor</Link></li>
              <li><Link href="/courses/react-right-cpr-aed-first-aid" className="hover:text-white transition-colors">React Right (CPR, AED, First Aid)</Link></li>
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
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+6589553399" className="hover:text-white transition-colors cursor-pointer">+65 8955 3399</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:swim@penguinswimschool.sg" className="hover:text-white transition-colors cursor-pointer">swim@penguinswimschool.sg</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Singapore • Private Pools & Premium Venues</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Penguin Academy Singapore. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <button className="hover:text-white transition-colors">
              <Link href='/terms'>
                Terms & Conditions
              </Link>
              </button>
              <a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SSI Presenter Profile</a>
              {/* <button 
                onClick={() => setShowAdminPrompt(true)}
                className="hover:text-white transition-colors text-xs"
              >
                Admin
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </footer>

      {/* Admin Password Modal */}
      {showAdminPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Access</h3>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminAccess()}
              placeholder="Enter admin password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleAdminAccess}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Access
              </button>
              <button
                onClick={() => {
                  setShowAdminPrompt(false);
                  setAdminPassword('');
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;