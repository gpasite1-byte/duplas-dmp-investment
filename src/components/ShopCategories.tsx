import React from 'react';
import { Wifi, Network, ShieldCheck, Laptop, Cable, Grid } from 'lucide-react';

export const ShopCategories: React.FC = () => {
  const categories = [
    { icon: Wifi, title: 'Internet', subtitle: 'Planos e Serviços' },
    { icon: Network, title: 'Redes', subtitle: 'Equipamentos de Rede' },
    { icon: ShieldCheck, title: 'Segurança', subtitle: 'Câmeras e Alarmes' },
    { icon: Laptop, title: 'Informática', subtitle: 'Laptops e Acessórios' },
    { icon: Cable, title: 'Acessórios', subtitle: 'Cabos e Periféricos' },
    { icon: Grid, title: 'VER TODAS', subtitle: 'Categorias', isAction: true },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-red">CATEGORIAS DA LOJA</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <a
                key={idx}
                href="#loja"
                className={`p-4 rounded-xl border border-gray-200 flex flex-col items-center text-center transition-all duration-300 ${
                  cat.isAction
                    ? 'bg-brand-red text-white hover:bg-brand-redHover border-brand-red shadow-md'
                    : 'bg-white hover:border-brand-red hover:shadow-lg text-gray-800'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2.5 ${
                    cat.isAction ? 'bg-white/20 text-white' : 'bg-red-50 text-brand-red'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-xs tracking-tight">{cat.title}</span>
                <span className={`text-[10px] mt-0.5 ${cat.isAction ? 'text-white/80' : 'text-gray-500'}`}>
                  {cat.subtitle}
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
