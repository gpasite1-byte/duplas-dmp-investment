import React from 'react';
import { servicesData } from '../data/services';
import { Wifi, Radio, Server, Headphones, Wrench, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return Wifi;
      case 'Radio': return Radio;
      case 'Server': return Server;
      case 'Headphones': return Headphones;
      case 'Wrench': return Wrench;
      default: return Wifi;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#070A10] text-white relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">NOSSAS</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-1">
            SOLUÇÕES E <span className="text-brand-red">SERVIÇOS</span>
          </h2>
        </div>

        {/* 5 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {servicesData.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-[#0F1626]/90 border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-red/60 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Header with Red Overlay */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1626] via-[#0F1626]/60 to-transparent"></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-extrabold text-base text-white group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center text-xs font-bold text-gray-300 hover:text-brand-red transition-colors pt-2 group/btn"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
