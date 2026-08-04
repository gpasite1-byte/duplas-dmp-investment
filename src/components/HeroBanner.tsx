import React from 'react';
import { Wifi, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroBannerProps {
  onOpenQuoteModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative bg-[#070A10] text-white overflow-hidden py-16 lg:py-24">
      {/* BACKGROUND IMAGE WITH LIGHTING OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=90"
          alt="Telecom Tower Infrastructure"
          className="w-full h-full object-cover opacity-25 scale-105 transform filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A10] via-[#070A10]/90 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & TEXT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-950/60 border border-brand-red/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-red">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span>SOLUÇÕES COMPLETA EM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              TELECOMUNICAÇÕES, <br />
              <span className="text-brand-red font-black">INTERNET E</span> TECNOLOGIA
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              Internet de alta qualidade, soluções em telecom, tecnologia avançada e suporte técnico especializado para o seu negócio ou residência.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg shadow-brand-red/35 hover:shadow-xl transition-all transform active:scale-95"
              >
                NOSSOS SERVIÇOS
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center bg-gray-900/80 hover:bg-gray-800 border border-gray-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-lg backdrop-blur-sm transition-all"
              >
                <Wifi className="w-4 h-4 mr-2.5 text-brand-red" />
                PLANOS DE INTERNET
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FLOATING GLASS PROMO CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0F1626]/90 border border-blue-500/20 rounded-2xl p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-brand-red/40 transition-all">
              
              {/* Card Neon Glow Effect */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header */}
              <div className="flex items-center space-x-3 mb-5 border-b border-gray-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white shadow-md">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wide text-white">INTERNET RÁPIDA</h3>
                  <p className="text-xs text-gray-400">Para empresas e residências</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">A PARTIR DE</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-brand-red tracking-tight">8.500</span>
                  <span className="text-sm font-extrabold text-gray-300">Kz/mês</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-7">
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mr-2.5 flex-shrink-0" />
                  Alta velocidade
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mr-2.5 flex-shrink-0" />
                  Estabilidade garantida
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mr-2.5 flex-shrink-0" />
                  Suporte 24/7
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-red mr-2.5 flex-shrink-0" />
                  Instalação rápida
                </li>
              </ul>

              {/* Card Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-lg flex items-center justify-center shadow-md shadow-brand-red/30 transition-all active:scale-98"
              >
                VER PLANOS
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
