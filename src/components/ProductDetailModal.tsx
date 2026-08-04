import React from 'react';
import { Product } from '../types';
import { X, ShoppingCart, CheckCircle2, ShieldCheck } from 'lucide-react';

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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center border border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-56 object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-extrabold text-brand-red uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full">
                {product.category}
              </span>

              <h3 className="text-xl font-black text-gray-900 mt-2">{product.name}</h3>
              <p className="text-xs text-gray-500 font-medium">{product.subtitle}</p>

              <div className="mt-3">
                <span className="text-2xl font-black text-brand-red">
                  {product.formattedPrice}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Specs List */}
              <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3">
                <h4 className="text-xs font-bold text-gray-800 uppercase">Especificações Técnicas:</h4>
                <ul className="space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red mr-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-md shadow-brand-red/30 flex items-center justify-center"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADICIONAR AO CARRINHO
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Garantia oficial Duplas DMP Investment</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
