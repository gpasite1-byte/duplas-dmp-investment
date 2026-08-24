import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B0F19] text-gray-300 text-xs py-2 px-4 border-b border-gray-800 hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Tagline */}
        <div className="flex items-center space-x-2 font-medium text-gray-400">
          <span>Tecnologia que conecta. Soluções que impulsionam. Angola.</span>
        </div>

        {/* Right Side: Contact Info & Socials */}
        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/244941950022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-brand-red transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">+244 941 950 022</span>
          </a>

          <a
            href="tel:+244947077913"
            className="flex items-center space-x-1.5 hover:text-brand-red transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>+244 947 077 913</span>
          </a>

          <a
            href="mailto:geral@duplasdmp.co.ao"
            className="flex items-center space-x-1.5 hover:text-brand-red transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-red" />
            <span>geral@duplasdmp.co.ao</span>
          </a>

          <div className="flex items-center space-x-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-brand-red" />
            <span>Seg - Sex: 08h - 17h</span>
          </div>

          <div className="h-3 w-[1px] bg-gray-800"></div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2.5">
            <a
              href="https://www.facebook.com/DUPLASDMP/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors"
              aria-label="Facebook Duplas DMP"
            >
              <Facebook className="w-3 h-3" />
            </a>
            <a
              href="https://ao.linkedin.com/company/duplas-dmp-insvestment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors"
              aria-label="LinkedIn Duplas DMP"
            >
              <Linkedin className="w-3 h-3" />
            </a>
            <a
              href="https://www.instagram.com/duplasdmp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors"
              aria-label="Instagram Duplas DMP"
            >
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
