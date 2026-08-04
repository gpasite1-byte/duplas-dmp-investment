import React from 'react';
import { Award, CheckCircle, Users, Headphones, MapPin, Cpu } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    { icon: Award, value: '+10', label: 'Anos de Experiência' },
    { icon: CheckCircle, value: '+500', label: 'Projectos Concluídos' },
    { icon: Users, value: '+300', label: 'Clientes Satisfeitos' },
    { icon: Headphones, value: 'Suporte', label: '24/7' },
    { icon: MapPin, value: 'Cobertura', label: 'Nacional' },
    { icon: Cpu, value: 'Tecnologia', label: 'de Ponta' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center p-3 rounded-xl hover:bg-red-50/50 transition-colors">
                <Icon className="w-6 h-6 text-brand-red mb-2" />
                <span className="text-xl font-black text-gray-900 tracking-tight">{stat.value}</span>
                <span className="text-xs font-medium text-gray-600 mt-0.5">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
