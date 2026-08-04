import React from 'react';
import { Award, Cpu, Headphones, Sliders, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos de excelência no mercado Angolano.',
    },
    {
      icon: Cpu,
      title: 'Tecnologia de Ponta',
      description: 'Soluções modernas, equipamentos de alta performance e qualidade.',
    },
    {
      icon: Headphones,
      title: 'Atendimento Dedicado',
      description: 'Equipa especializada pronta para ajudar a qualquer hora.',
    },
    {
      icon: Sliders,
      title: 'Soluções Personalizadas',
      description: 'Projetos sob medida adaptados à necessidade da sua empresa.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança e Transparência',
      description: 'Compromisso com qualidade, prazos e resultados comprovados.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            POR QUE ESCOLHER A <span className="text-brand-red">DUPLAS DMP</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-start hover:border-brand-red/40 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
