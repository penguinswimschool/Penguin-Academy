"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseList from '@/components/CourseList';
import CourseCalendar from '@/components/CourseCalendar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SuccessPage from '@/components/SuccessPage';
import PenguinGPT from '@/components/PenguinGPT';
import TermsConditions from '@/components/TermsConditions';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPenguinGPT, setShowPenguinGPT] = useState(false);
  const [penguinGPTContext, setPenguinGPTContext] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  useEffect(() => {
    // Check if we're on the success page
    if (window.location.pathname === '/success') {
      setShowSuccess(true);
    }
  }, []);

  const handleBackToHome = () => {
    setShowSuccess(false);
    setShowContactForm(false);
    setShowPenguinGPT(false);
    setPenguinGPTContext(null);
    setShowTerms(false);
    setShowAdminDashboard(false);
    // Update URL without page reload
    window.history.pushState({}, '', '/');
  };

  const handleAskQuestions = (courseTitle?: string) => {
    if (courseTitle) {
      setPenguinGPTContext(`I'm interested in learning more about the ${courseTitle}. Can you tell me more about this course?`);
    }
    setShowPenguinGPT(true);
  };

  if (showSuccess) {
    return <SuccessPage onBackToHome={handleBackToHome} />;
  }

  if (showPenguinGPT) {
    return <PenguinGPT onBack={() => setShowPenguinGPT(false)} initialMessage={penguinGPTContext} />;
  }

  if (showTerms) {
    return <TermsConditions onBack={handleBackToHome} />;
  }

  if (showAdminDashboard) {
    window.location.href = '/dashboard';
    return null;
  }

  if (showContactForm) {
    return <ContactForm onBack={() => setShowContactForm(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header 
        onContactClick={() => setShowContactForm(true)}
      />
      <Hero onContactClick={() => setShowContactForm(true)} />
      <CourseList onAskQuestions={handleAskQuestions} />
      
      <CourseCalendar />
      <Footer 
        onTermsClick={() => setShowTerms(true)} 
        onAdminClick={() => setShowAdminDashboard(true)} 
      />
      {/* Floating PenguinGPT Button */}
      <button
        onClick={() => handleAskQuestions()}
        className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50 border-2 border-purple-200 hover:border-purple-300"
        title="Chat with PenguinGPT"
      >
        <Image 
          src="/2.png" 
          alt="Chat with PenguinGPT" 
          width={32} 
          height={32} 
          className="rounded-full object-cover"
        />
      </button>
      
      <WhatsAppButton />
    </div>
  );
}

export default App;