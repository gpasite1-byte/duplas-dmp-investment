import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/244941950022?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20e%20cota%C3%A7%C3%A3o%20de%20produtos%20e%20servi%C3%A7os%20da%20Duplas%20DMP."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp Duplas DMP"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp: +244 941 950 022
      </span>
    </a>
  );
};
