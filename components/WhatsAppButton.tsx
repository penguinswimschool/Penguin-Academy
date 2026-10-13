import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsAppEnquiry } from '@/lib/analytics';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppEnquiry({ source: 'floating_button' });
    window.open('https://wa.me/6589094395', '_blank');
  };

  return (
    <div className="fixed bottom-22 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="rounded-full border-4 border-white bg-[#25D366] p-4 text-white shadow-[0_12px_35px_rgba(7,27,43,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
