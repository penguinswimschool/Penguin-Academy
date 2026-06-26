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
    console.log("role: ", user.role);
    
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
    <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-2">
                <Image src="/5.png" alt="Penguin Academy Logo" width={50} height={50} />
                <span className="text-xl font-bold text-gray-900">Penguin Academy</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Trainer
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('calendar')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Calendar
            </button>
            <Link 
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-gray-50">
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
              <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              About Trainer
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('calendar')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Calendar
            </button>
            <Link 
              href="/blog"
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
            >
              Blog
            </Link>
            {loading ? (
              <div className="flex items-center space-x-2 text-gray-500 py-2">
                {/* <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div> */}
                {/* <span className="text-sm">Loading...</span> */}
              </div>
            ) : user ? (
              <div className="space-y-3 pt-3 border-t border-gray-200">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 text-gray-700 py-2 w-full text-left hover:text-blue-600">
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
              <Link href="/login" className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </div>
              </Link>
            )}

            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit"
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