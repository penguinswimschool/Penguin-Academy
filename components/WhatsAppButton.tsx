import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsAppEnquiry } from '@/lib/analytics';
import { WHATSAPP_URL } from '@/lib/approved-course-details';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppEnquiry({ source: 'floating_button' })}
        className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-[#25D366] text-white shadow-[0_12px_35px_rgba(7,27,43,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:h-16 sm:w-16"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
