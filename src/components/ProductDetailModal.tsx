import React from 'react';
import { Product } from '../types';
import { X, ShoppingCart, CheckCircle2, ShieldCheck, MessageCircle, Truck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const handleWhatsAppQuote = () => {
    const text = `Olá! Gostaria de receber cotação e prazo de entrega para o seguinte equipamento:\n\n*Produto:* ${product.name}\n${product.brand ? `*Marca:* ${product.brand}\n` : ''}${product.partNumber ? `*Referência/PN:* ${product.partNumber}\n` : ''}*Empresa:* Duplas DMP Investment Angola.`;
    window.open(`https://wa.me/244941950022?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-60 object-contain"
            />
            {product.brand && (
              <span className="mt-4 text-xs font-black uppercase tracking-widest text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                Marca: {product.brand}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-brand-red uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                {product.partNumber && (
                  <span className="text-[10px] text-gray-400 font-mono">
                    Ref: {product.partNumber}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black text-gray-900 mt-2 leading-snug">{product.name}</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">{product.subtitle}</p>

              <div className="mt-3 bg-emerald-50 border border-emerald-100 p-2.5 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-emerald-800 block">
                    Disponível sob Cotação
                  </span>
                  <span className="text-[10px] text-emerald-600">
                    Proposta formal para empresas e particulares
                  </span>
                </div>
                <Truck className="w-4 h-4 text-emerald-600" />
              </div>

              {/* Specs List */}
              <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3">
                <h4 className="text-xs font-bold text-gray-800 uppercase">Especificações Técnicas:</h4>
                <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-md shadow-brand-red/30 flex items-center justify-center transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADICIONAR À LISTA DE COTAÇÃO
              </button>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase py-3 rounded-xl shadow flex items-center justify-center transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                COTAR AGORA NO WHATSAPP
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-gray-500 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantia oficial e suporte técnico local Duplas DMP</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
