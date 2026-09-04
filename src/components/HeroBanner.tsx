import React from 'react';
import { Wifi, ChevronRight, CheckCircle2, ShieldCheck, MessageCircle, PhoneCall } from 'lucide-react';

interface HeroBannerProps {
  onOpenQuoteModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative bg-[#070A10] text-white overflow-hidden py-16 lg:py-24">
      {/* BACKGROUND IMAGE WITH LIGHTING OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src="imagem principal/Gemini_Generated_Image_6xkh606xkh606xkh (2).jpg"
          alt="Duplas DMP - Tecnologia e Telecomunicações"
          className="w-full h-full object-cover opacity-20 scale-105 transform filter contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A10] via-[#070A10]/95 to-[#070A10]/70"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & TEXT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-950/60 border border-brand-red/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-red">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span>SOLUÇÕES INTEGRADAS EM ANGOLA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              TELECOMUNICAÇÕES, <br />
              <span className="text-brand-red font-black">INTERNET DEDICADA &</span> EQUIPAMENTOS TI
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              Fornecimento de equipamentos de informática no padrão NCR Angola, instalação de internet Starlink, redes de fibra óptica, CFTV e assistência técnica especializada.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#loja"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg shadow-brand-red/35 hover:shadow-xl transition-all transform active:scale-95"
              >
                VER CATÁLOGO DA LOJA
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="https://wa.me/244941950022?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20com%20a%20Duplas%20DMP."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2.5 fill-current" />
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: FLOATING PROMO CARD */}
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
                  <h3 className="font-extrabold text-sm uppercase tracking-wide text-white">INTERNET & TELECOM</h3>
                  <p className="text-xs text-gray-400">Propostas sob medida para o seu negócio</p>
                </div>
              </div>

              {/* Status */}
              <div className="mb-6 bg-red-950/40 border border-brand-red/30 p-3 rounded-xl">
                <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest block">COTAÇÃO RÁPIDA</span>
                <span className="text-xl font-black text-white tracking-tight mt-0.5 block">
                  Planos Empresariais & Residência
                </span>
                <span className="text-xs text-gray-300">
                  Fibra Óptica Dedicada e Satélite Starlink
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-7">
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                  Garantia oficial e equipamentos homologados
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                  Pronta entrega em Luanda e envio às províncias
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                  Suporte técnico e helpdesk 24/7
                </li>
                <li className="flex items-center text-xs font-semibold text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                  Atendimento direto via WhatsApp (+244 941 950 022)
                </li>
              </ul>

              {/* Card Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-lg flex items-center justify-center shadow-md shadow-brand-red/30 transition-all active:scale-98"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                SOLICITAR PROPOSTA COMERCIAL
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
