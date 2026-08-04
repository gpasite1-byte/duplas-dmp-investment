import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, ChevronLeft, ChevronRight, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - 4) : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= products.length - 4 ? 0 : prev + 1));
  };

  return (
    <section id="loja" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">LOJA ONLINE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1">
            PRODUTOS EM DESTAQUE
          </h2>
        </div>

        {/* PRODUCTS CAROUSEL & GRID */}
        <div className="relative">
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-brand-red hover:border-brand-red transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-brand-red hover:border-brand-red transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 group relative"
              >
                {/* Product Image & Top Cart Action */}
                <div className="relative mb-4 bg-gray-50 rounded-xl p-4 flex items-center justify-center h-44 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-red-100 text-brand-red text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => onAddToCart(product)}
                    className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-brand-red text-brand-red hover:text-white rounded-full shadow-md transition-colors"
                    title="Adicionar ao Carrinho"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="font-bold text-sm text-gray-900 line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.subtitle}</p>
                </div>

                {/* Price & Action Button */}
                <div className="text-center mt-auto space-y-3">
                  <div>
                    <span className="text-base font-extrabold text-brand-red block">
                      {product.formattedPrice}
                    </span>
                    {product.oldPrice && (
                      <span className="text-[11px] text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full bg-gray-100 hover:bg-brand-red text-gray-800 hover:text-white font-extrabold text-[11px] uppercase tracking-wider py-2.5 rounded-lg transition-colors"
                  >
                    {product.price === null ? 'COMPRAR AGORA' : 'VER DETALHES'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GUARANTEE BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Loja 100% Segura</h4>
              <p className="text-[11px] text-gray-500">Compras protegidas e seguras</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Entrega Rápida</h4>
              <p className="text-[11px] text-gray-500">Para todo o território nacional</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Garantia de Qualidade</h4>
              <p className="text-[11px] text-gray-500">Produtos originais e certificados</p>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-gray-900 uppercase">Suporte na Compra</h4>
              <p className="text-[11px] text-gray-500">Apoio antes e depois da compra</p>
            </div>
          </div>
        </div>

        {/* VER TODOS OS PRODUTOS BUTTON */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md shadow-brand-red/25 transition-all">
            <ShoppingCart className="w-4 h-4 mr-2" />
            VER TODOS OS PRODUTOS
          </button>
        </div>

      </div>
    </section>
  );
};
