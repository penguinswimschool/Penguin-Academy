"use client"

import React from 'react';
import { whatsappEnquiryUrl } from '@/lib/approved-course-details';

interface BookNowButtonProps { courseTitle: string; variant?: 'primary' | 'secondary' | 'green'; className?: string; children?: React.ReactNode; }

const BookNowButton: React.FC<BookNowButtonProps> = ({ courseTitle, variant = 'primary', className = '', children }) => {
  const variantClasses = variant === 'green' ? 'bg-green-600 text-white hover:bg-green-700' : variant === 'secondary' ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700';
  return <a href={whatsappEnquiryUrl(courseTitle)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${variantClasses} ${className}`}>{children || 'Enquire on WhatsApp'}</a>;
};

export default BookNowButton;
