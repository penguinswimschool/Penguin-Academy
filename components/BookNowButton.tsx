"use client"

import React from 'react';
import { whatsappEnquiryUrl } from '@/lib/approved-course-details';
import { trackWhatsAppEnquiry } from '@/lib/analytics';

interface BookNowButtonProps { courseTitle: string; variant?: 'primary' | 'secondary' | 'green'; className?: string; children?: React.ReactNode; source?: string; }

const BookNowButton: React.FC<BookNowButtonProps> = ({ courseTitle, variant = 'primary', className = '', children, source = 'course_page' }) => {
  const variantClasses = variant === 'green' ? 'bg-green-600 text-white hover:bg-green-700' : variant === 'secondary' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700';
  return <a href={whatsappEnquiryUrl(courseTitle)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source, courseName: courseTitle })} className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${variantClasses} ${className}`}>{children || 'Enquire on WhatsApp'}</a>;
};

export default BookNowButton;
