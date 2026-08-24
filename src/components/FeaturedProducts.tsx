import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  Award, 
  Headphones, 
  Search, 
  Wrench, 
  Wifi, 
  Network, 
  Camera, 
  Laptop, 
  Check,
  Filter,
  Printer,
  Server,
  Zap,
  Barcode,
  SlidersHorizontal,
  MessageCircle
} from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleLimit, setVisibleLimit] = useState<number>(12);
  const [addedItemEffect, setAddedItemEffect] = useState<string | null>(null);

  const categories = [
    { name: 'Todos', label: 'Todos os Produtos', icon: null },
    { name: 'Computadores & Portáteis', label: '💻 Computadores & Portáteis', icon: Laptop },
    { name: 'Impressão & Consumíveis', label: '🖨️ Impressão & Toners', icon: Printer },
    { name: 'Servidores & Armazenamento', label: '🗄️ Servidores & Data Center', icon: Server },
    { name: 'Redes & Telecomunicações', label: '📡 Redes, Fibra & Starlink', icon: Network },
    { name: 'Segurança Eletrónica & CCTV', label: '📹 Segurança & CFTV 4K', icon: Camera },
    { name: 'Energia & UPS', label: '⚡ UPS & No-Breaks', icon: Zap },
    { name: 'Automação Comercial & POS', label: '🧾 POS & Leitores', icon: Barcode },
    { name: 'Acessórios & Periféricos', label: '🖥️ Monitores & Acessórios', icon: null },
    { name: 'Serviços Especializados', label: '🛠️ Serviços Técnicos', icon: Wrench },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.partNumber && product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const displayedProducts = filteredProducts.slice(0, visibleLimit);

  const handleCartClick = (product: Product) => {
    onAddToCart(product);
    setAddedItemEffect(product.id);
    setTimeout(() => {
      setAddedItemEffect(null);
    }, 1500);
  };

  const handleQuickWhatsApp = (product: Product) => {
    const text = `Olá! Gostaria de uma cotação para o produto: *${product.name}*${product.partNumber ? ` (Ref: ${product.partNumber})` : ''} - Duplas DMP Investment Angola.`;
    window.open(`https://wa.me/244941950022?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="loja" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="bg-brand-red/10 text-brand-red text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-brand-red/20 inline-block">
            CATÁLOGO PROFISSIONAL DE TI & RETALHO EM ANGOLA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Equipamentos, Informática & <span className="text-brand-red">Soluções Corporativas</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Linha completa de tecnologia no padrão NCR Angola com garantia oficial, assistência técnica e orçamentação direta.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm mb-10 space-y-4">
          
          {/* Top Row: Search and Count */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar por portátil, toner, switch, marca (Dell, HP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  Limpar
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500 w-full md:w-auto justify-between md:justify-end">
              <span className="flex items-center font-bold text-gray-700">
                <Filter className="w-3.5 h-3.5 mr-1 text-brand-red" />
                {filteredProducts.length} itens encontrados
              </span>
              {selectedCategory !== 'Todos' && (
                <span className="bg-red-50 text-brand-red px-2.5 py-0.5 rounded-md font-bold text-[11px]">
                  Filtro: {selectedCategory}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Row: Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setVisibleLimit(12);
                }}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.name
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20 scale-[1.02]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between hover:shadow-2xl hover:border-brand-red/40 transition-all duration-300 group relative"
              >
                {/* Product Image & Top Badge */}
                <div className="relative mb-3.5 bg-gray-50 rounded-xl p-3 flex items-center justify-center h-48 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-brand-red text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-40 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category & Brand Pill */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    {product.brand && (
                      <span className="text-[9px] font-black bg-gray-900/80 text-white px-2 py-0.5 rounded backdrop-blur-sm uppercase">
                        {product.brand}
                      </span>
                    )}
                    <span className="text-[9px] font-semibold bg-white/90 text-gray-700 px-2 py-0.5 rounded shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Add to quote list button */}
                  <button
                    onClick={() => handleCartClick(product)}
                    className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 z-10 ${
                      addedItemEffect === product.id
                        ? 'bg-emerald-600 text-white scale-110'
                        : 'bg-white/95 hover:bg-brand-red text-brand-red hover:text-white'
                    }`}
                    title={addedItemEffect === product.id ? 'Adicionado à Cotação!' : 'Adicionar à Lista de Cotação'}
                  >
                    {addedItemEffect === product.id ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingCart className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Info */}
                <div className="text-left space-y-1 mb-4 flex-1">
                  {product.partNumber && (
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">
                      Ref: {product.partNumber}
                    </span>
                  )}
                  <h3 className="font-extrabold text-sm text-gray-900 line-clamp-2 leading-snug group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-tight">
                    {product.subtitle}
                  </p>
                  
                  {/* Mini specs preview */}
                  <div className="pt-2">
                    <ul className="text-[10px] text-gray-600 space-y-1">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red mr-1.5 flex-shrink-0"></span>
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing Status & Action Buttons */}
                <div className="mt-auto space-y-2.5 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                        Disponível sob Cotação
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500">
                      Garantia Oficial
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold text-[10px] uppercase tracking-wider py-2.5 rounded-lg transition-colors"
                    >
                      DETALHES
                    </button>
                    <button
                      onClick={() => handleCartClick(product)}
                      className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-[10px] uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm active:scale-95"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      COTAR
                    </button>
                  </div>

                  <button
                    onClick={() => handleQuickWhatsApp(product)}
                    className="w-full bg-emerald-600/10 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-300 hover:border-emerald-600 font-bold text-[10px] uppercase py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Cotar no WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 space-y-3">
            <Search className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-black text-lg text-gray-800">Nenhum equipamento encontrado</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Não encontramos resultados para a sua pesquisa. Tente selecionar outra categoria ou pesquisar por termos como "Dell", "HP", "Router" ou "Starlink".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              Ver Todos os Produtos
            </button>
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {visibleLimit < filteredProducts.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleLimit((prev) => prev + 12)}
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              VER MAIS EQUIPAMENTOS ({filteredProducts.length - visibleLimit} RESTANTES)
            </button>
          </div>
        )}

        {/* GUARANTEE BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Equipamentos Originais</h4>
              <p className="text-[11px] text-gray-500">Marcas líderes homologadas em Angola</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Pronta Entrega em Luanda</h4>
              <p className="text-[11px] text-gray-500">Envio para todas as províncias</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Garantia & Assistência</h4>
              <p className="text-[11px] text-gray-500">Suporte técnico local especializado</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">WhatsApp Direto</h4>
              <p className="text-[11px] text-gray-500">+244 941 950 022</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
