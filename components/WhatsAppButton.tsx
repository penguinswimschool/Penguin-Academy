import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('http://wa.me/6589553399', '_blank');
  };

  return (
    <div className="fixed bottom-22 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton; 