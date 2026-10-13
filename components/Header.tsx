'use client'

import React, { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Default behavior: scroll to contact section or navigate
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071b2b]/95 text-white shadow-[0_8px_30px_rgba(3,15,25,0.18)] backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Penguin Academy home">
            <div className="flex items-center space-x-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Image src="/5.png" alt="" width={36} height={36} />
                </span>
                <span className="text-lg font-bold tracking-tight text-white sm:text-xl">Penguin Academy</span>
            </div>
          </Link>
          
          <nav className="hidden items-center space-x-8 lg:flex" aria-label="Primary navigation">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              About Trainer
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('calendar')}
              className="font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              Calendar
            </button>
            <Link 
              href="/blog"
              className="font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <button
              onClick={handleContactClick}
              className="rounded-full bg-cyan-300 px-5 py-2.5 font-bold text-[#071b2b] transition-colors hover:bg-cyan-200"
            >
              Contact
            </button>

          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#071b2b] lg:hidden">
          <div className="space-y-2 px-4 py-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/5 hover:text-cyan-300"
            >
              About Trainer
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/5 hover:text-cyan-300"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('calendar')}
              className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/5 hover:text-cyan-300"
            >
              Calendar
            </button>
            <Link 
              href="/blog"
              className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/5 hover:text-cyan-300"
            >
              Blog
            </Link>
            <button
              onClick={handleContactClick}
              className="mt-2 w-full rounded-full bg-cyan-300 px-5 py-3 font-bold text-[#071b2b] transition hover:bg-cyan-200"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
