import React from 'react';
import { Laptop, Printer, Server, Network, Camera, Zap, Grid, Barcode } from 'lucide-react';

interface ShopCategoriesProps {
  onSelectCategory?: (category: string) => void;
}

export const ShopCategories: React.FC<ShopCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    { icon: Laptop, title: 'Portáteis & PCs', subtitle: 'Dell, HP, Lenovo', categoryName: 'Computadores & Portáteis' },
    { icon: Printer, title: 'Impressão & Toners', subtitle: 'HP Laserjet & Epson', categoryName: 'Impressão & Consumíveis' },
    { icon: Server, title: 'Servidores & Racks', subtitle: 'Dell PowerEdge & HPE', categoryName: 'Servidores & Armazenamento' },
    { icon: Network, title: 'Redes & Starlink', subtitle: 'Switches, Fibra & Wi-Fi', categoryName: 'Redes & Telecomunicações' },
    { icon: Camera, title: 'Segurança & CFTV', subtitle: 'Hikvision 4K & ZKTeco', categoryName: 'Segurança Eletrónica & CCTV' },
    { icon: Zap, title: 'UPS & Energia', subtitle: 'APC Smart-UPS', categoryName: 'Energia & UPS' },
    { icon: Barcode, title: 'Automação & POS', subtitle: 'Impressoras & Leitores', categoryName: 'Automação Comercial & POS' },
    { icon: Grid, title: 'VER TODAS', subtitle: 'Categorias do Catálogo', isAction: true, categoryName: 'Todos' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
            EXPLORE POR CATEGORIA
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
            Principais Categorias de Equipamentos & TI em Angola
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <a
                key={idx}
                href="#loja"
                onClick={() => onSelectCategory && onSelectCategory(cat.categoryName)}
                className={`p-3.5 rounded-xl border border-gray-200 flex flex-col items-center text-center transition-all duration-300 ${
                  cat.isAction
                    ? 'bg-brand-red text-white hover:bg-brand-redHover border-brand-red shadow-md'
                    : 'bg-white hover:border-brand-red hover:shadow-lg text-gray-800'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    cat.isAction ? 'bg-white/20 text-white' : 'bg-red-50 text-brand-red'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-black text-xs tracking-tight leading-tight">{cat.title}</span>
                <span className={`text-[9px] mt-1 line-clamp-1 ${cat.isAction ? 'text-white/80' : 'text-gray-500'}`}>
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
