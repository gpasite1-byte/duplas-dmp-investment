import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle, Globe } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer id="contactos" className="bg-[#070A10] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="space-y-4 lg:col-span-1">
            {/* LOGOMARCA DO RODAPÉ */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="font-black text-xl italic">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-tight leading-none">
                  Duplas <span className="text-brand-red font-extrabold uppercase">DMP</span>
                </span>
                <span className="text-[9px] font-bold text-white tracking-widest uppercase">
                  Investment
                </span>
              </div>
            </a>

            <p className="text-xs leading-relaxed text-gray-400">
              Tecnologia que conecta. Soluções que impulsionam. A sua parceira de referência em telecomunicações, redes e informática em Angola.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href="https://www.facebook.com/DUPLASDMP/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-all hover:scale-110"
                aria-label="Facebook Duplas DMP"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://ao.linkedin.com/company/duplas-dmp-insvestment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-all hover:scale-110"
                aria-label="LinkedIn Duplas DMP"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/duplasdmp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-all hover:scale-110"
                aria-label="Instagram Duplas DMP"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/244941950022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 transition-all hover:scale-110"
                aria-label="WhatsApp Duplas DMP"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              LINKS RÁPIDOS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Início</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Loja Online</span></a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Nossos Serviços</span></a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Sobre Nós</span></a></li>
              <li><a href="#contactos" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Contactos Oficiais</span></a></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-white transition-colors text-left flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Pedir Cotação</span></button></li>
            </ul>
          </div>

          {/* COLUMN 3: CATEGORIAS EM DESTAQUE */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              EQUIPAMENTOS & TI
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Computadores & Portáteis</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Impressão & Consumíveis</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Servidores & Bastidores</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Redes, Wi-Fi 6 & Fibra</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>Segurança & CFTV 4K</span></a></li>
              <li><a href="#loja" className="hover:text-white transition-colors flex items-center space-x-1.5"><span className="text-brand-red">›</span><span>UPS & Proteção Elétrica</span></a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACTE-NOS */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              CONTACTE-NOS
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://wa.me/244941950022" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-emerald-400 transition-colors">
                    +244 941 950 022
                  </a>
                  <span className="block text-[10px] text-gray-500">WhatsApp Comercial & Loja</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+244947077913" className="text-white font-bold hover:text-brand-red transition-colors">
                    +244 947 077 913
                  </a>
                  <span className="block text-[10px] text-gray-500">Atendimento & Suporte</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">geral@duplasdmp.co.ao</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Luanda, Angola</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Seg - Sex: 08h - 17h</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: MAPA COBERTURA ANGOLA */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 flex items-center">
              <Globe className="w-3.5 h-3.5 text-brand-red mr-1.5" />
              COBERTURA ANGOLA
            </h4>
            
            <div className="bg-[#0F1626] border border-gray-800 rounded-xl p-4 relative overflow-hidden group hover:border-brand-red/40 transition-colors text-center">
              <div className="relative w-full h-28 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-24 h-24 text-gray-700 fill-current opacity-60">
                  <path d="M30,15 Q45,10 60,18 T85,35 Q90,55 75,70 T45,85 Q20,80 15,60 T30,15 Z" />
                </svg>
                <span className="absolute top-8 left-10 w-2.5 h-2.5 bg-brand-red rounded-full animate-ping"></span>
                <span className="absolute top-8 left-10 w-2.5 h-2.5 bg-brand-red rounded-full"></span>

                <span className="absolute bottom-10 right-10 w-2 h-2 bg-brand-red rounded-full"></span>
                <span className="absolute top-12 right-12 w-2 h-2 bg-brand-red rounded-full"></span>
              </div>
              <span className="text-[11px] font-extrabold text-white block mt-1 uppercase tracking-wider">
                Luanda & Províncias
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© 2024 Duplas DMP Investment. Todos os direitos reservados. Angola.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-brand-red transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-red transition-colors">Termos e Condições</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
