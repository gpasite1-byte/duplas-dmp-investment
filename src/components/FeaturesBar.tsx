import React from 'react';
import { Zap, Headphones, ShieldCheck, Wrench, MapPin } from 'lucide-react';

export const FeaturesBar: React.FC = () => {
  const features = [
    { icon: Zap, text: 'Internet de Alta Performance' },
    { icon: Headphones, text: 'Suporte Técnico Especializado 24/7' },
    { icon: ShieldCheck, text: 'Equipamentos de Qualidade' },
    { icon: Wrench, text: 'Instalação Rápida e Profissional' },
    { icon: MapPin, text: 'Cobertura Nacional em Angola' },
  ];

  return (
    <div className="bg-[#090D16] border-y border-gray-800/80 py-5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 group">
                <div className="w-9 h-9 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-300 leading-tight">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
