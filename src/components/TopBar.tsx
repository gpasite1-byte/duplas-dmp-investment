import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B0F19] text-gray-300 text-xs py-2 px-4 border-b border-gray-800 hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Tagline */}
        <div className="flex items-center space-x-2 font-medium text-gray-400">
          <span>Tecnologia que conecta. Soluções que impulsionam.</span>
        </div>

        {/* Right Side: Contact Info & Socials */}
        <div className="flex items-center space-x-6">
          <a href="tel:+244923457890" className="flex items-center space-x-1.5 hover:text-brand-red transition-colors">
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>(244) 923 457 890</span>
          </a>

          <a href="mailto:geral@duplasdmp.co.ao" className="flex items-center space-x-1.5 hover:text-brand-red transition-colors">
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
            <a href="#" className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-brand-red text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
