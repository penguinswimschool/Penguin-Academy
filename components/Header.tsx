'use client'

import React, { useState } from 'react';
import { Menu, X, MessageCircle, Award, User, LogOut, Settings, Shield, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../hooks/auth';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

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
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/';
    }
  };

  const handleDashboardClick = () => {
    try {
      if (user?.role === 'admin') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const getRoleDisplay = () => {
    if (!user) return null;
    switch (user.role) {
      case 'admin':
        return {
          label: 'Admin',
          color: 'bg-purple-100 text-purple-800',
          icon: <Shield className="h-3 w-3" />
        };
      case 'client':
        return {
          label: 'Client',
          color: 'bg-blue-100 text-blue-800',
          icon: <User className="h-3 w-3" />
        };
      default:
        return {
          label: 'User',
          color: 'bg-gray-100 text-gray-800',
          icon: <User className="h-3 w-3" />
        };
    }
  };

  const roleDisplay = getRoleDisplay();

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
          
          <nav className="hidden items-center space-x-8 md:flex" aria-label="Primary navigation">
            <button 
              onClick={() => scrollToSection('hero')}
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

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="rounded-full bg-cyan-300 px-5 py-2.5 font-bold text-[#071b2b] transition-colors hover:bg-cyan-200"
            >
              Contact
            </button>

            {loading ? (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm">Loading...</span>
              </div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button aria-label="Open account menu" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-gray-50">
                    <User className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white" align="end">
                  <DropdownMenuLabel className="font-normal bg-white">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.email}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {roleDisplay?.label}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleDashboardClick} className="bg-white hover:bg-gray-50">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>{user.role === 'admin' ? 'Dashboard' : 'Account'}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 bg-white hover:bg-gray-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className="flex items-center space-x-2 text-slate-300 transition-colors hover:text-white">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#071b2b] md:hidden">
          <div className="space-y-2 px-4 py-4">
            <button 
              onClick={() => scrollToSection('hero')}
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
            {loading ? (
              <div className="flex items-center space-x-2 text-gray-500 py-2">
                {/* <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div> */}
                {/* <span className="text-sm">Loading...</span> */}
              </div>
            ) : user ? (
              <div className="space-y-3 border-t border-white/10 pt-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex w-full items-center space-x-2 py-2 text-left text-slate-200 hover:text-cyan-300">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">{user.email}</span>
                      {roleDisplay && (
                        <span className={`text-xs px-2 py-1 rounded-full flex items-center space-x-1 ${roleDisplay.color}`}>
                          {roleDisplay.icon}
                          <span>{roleDisplay.label}</span>
                        </span>
                      )}
                      <ChevronDown className="h-3 w-3 ml-auto" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white" align="end">
                    <DropdownMenuLabel className="font-normal bg-white">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.email}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {roleDisplay?.label}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleDashboardClick} className="bg-white hover:bg-gray-50">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>{user.role === 'admin' ? 'Dashboard' : 'Account'}</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 bg-white hover:bg-gray-50">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link href="/login" className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/5 hover:text-cyan-300">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </div>
              </Link>
            )}

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
