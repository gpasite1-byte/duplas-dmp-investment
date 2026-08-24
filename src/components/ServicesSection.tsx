import React from 'react';
import { servicesData } from '../data/services';
import { Wifi, Radio, Server, Headphones, Wrench, ShieldCheck, Cpu, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'Zap': return Zap;
      default: return Wifi;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#070A10] text-white relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-brand-red/20 text-brand-red text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-brand-red/30">
            NOSSAS SOLUÇÕES & SERVIÇOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-3 text-white">
            Soluções Completas de <span className="text-brand-red">Telecomunicações</span> e TI em Angola
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Desde a instalação de links dedicados e sistemas Starlink até cabeamento de fibra óptica, CCTV com IA e suporte técnico especializado 24/7.
          </p>
        </div>

        {/* 8 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-[#0F1626]/90 border border-gray-800/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-red hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-300 group"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1626] via-[#0F1626]/50 to-transparent"></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {service.subtitle && (
                    <span className="absolute bottom-3 left-4 text-[11px] font-bold text-gray-300 uppercase tracking-wide bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10">
                      {service.subtitle}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-black text-lg text-white group-hover:text-brand-red transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                    <button
                      onClick={onOpenQuoteModal}
                      className="inline-flex items-center text-xs font-black text-brand-red hover:text-white transition-colors group/btn"
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500/80" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="mt-16 bg-gradient-to-r from-brand-red/90 to-red-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Precisa de um Projeto Personalizado para a sua Empresa?</h3>
            <p className="text-sm text-red-100 max-w-2xl">
              Os nossos engenheiros e técnicos realizam vistoria no local e preparam uma proposta técnica e comercial sob medida para a sua infraestrutura.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="flex-shrink-0 bg-white text-brand-red hover:bg-gray-100 font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            FALAR COM ESPECIALISTA TÉCNICO
          </button>
        </div>

      </div>
    </section>
  );
};
