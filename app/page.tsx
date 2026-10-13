"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AcademyVideo from '@/components/AcademyVideo';
import CourseList from '@/components/CourseList';
import TrainingJourney from '@/components/TrainingJourney';
import TrainingReel from '@/components/TrainingReel';
import AcademyMoments from '@/components/AcademyMoments';
import CourseCalendar from '@/components/CourseCalendar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SuccessPage from '@/components/SuccessPage';
import TermsConditions from '@/components/TermsConditions';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';
import { homepageStructuredData } from '@/lib/structured-data';
import { WHATSAPP_URL } from '@/lib/approved-course-details';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
    setShowTerms(false);
    setShowAdminDashboard(false);
    // Update URL without page reload
    window.history.pushState({}, '', '/');
  };

  const handleAskQuestions = (courseTitle?: string) => {
    const message = courseTitle
      ? `Hi Penguin Academy, I am interested in ${courseTitle}. Please share the next available date and course details.`
      : 'Hi Penguin Academy, I have a question about your swim teacher courses.';
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  if (showSuccess) {
    return <SuccessPage onBackToHome={handleBackToHome} />;
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
    <div className="min-h-screen bg-white">
      <StructuredData data={homepageStructuredData} />
      <Header 
        onContactClick={() => setShowContactForm(true)}
      />
      <main id="main-content">
        <Hero onContactClick={() => setShowContactForm(true)} />
        <CourseList onAskQuestions={handleAskQuestions} />
        <TrainingJourney />
        <TrainingReel />
        <AcademyMoments />
        <AcademyVideo />
        <CourseCalendar />
      </main>
      <Footer 
        onTermsClick={() => setShowTerms(true)} 
        onAdminClick={() => setShowAdminDashboard(true)} 
      />
      <WhatsAppButton />
    </div>
  );
}

export default App;
