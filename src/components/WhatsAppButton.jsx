import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "918105732962"; 
  const message = encodeURIComponent("Hello Bright Minds, I would like to know more about your programs.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] group"
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap hidden md:block">
          Chat with us
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-white"></div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
