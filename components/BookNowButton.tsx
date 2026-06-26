"use client"

import React, { useState } from 'react';
import { createCheckoutSession } from '@/lib/stripe';
import { findProductByName } from '@/lib/stripe-config';

interface BookNowButtonProps {
  courseTitle: string;
  variant?: 'primary' | 'secondary' | 'green';
  className?: string;
  children?: React.ReactNode;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ 
  courseTitle, 
  variant = 'primary',
  className = '',
  children 
}) => {
  const [loading, setLoading] = useState(false);

  const handleBookCourse = async () => {
    setLoading(true);
    try {
      // Find the corresponding product by course title
      const product = findProductByName(courseTitle);
      
      if (!product) {
        console.error('Product not found for course:', courseTitle);
        alert('Product configuration not found. Please contact support.');
        setLoading(false);
        return;
      }

      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = window.location.href;
      
      await createCheckoutSession(product.priceId, product.mode, successUrl, cancelUrl);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to create checkout session. Please try again or contact support.');
      setLoading(false);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'green':
        return 'bg-green-600 text-white hover:bg-green-700';
      case 'secondary':
        return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  };

  return (
    <button
      onClick={handleBookCourse}
      disabled={loading}
      className={`px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${getVariantClasses()} ${className}`}
    >
      {loading ? 'Processing...' : (children || 'Book Now')}
    </button>
  );
};

export default BookNowButton;
