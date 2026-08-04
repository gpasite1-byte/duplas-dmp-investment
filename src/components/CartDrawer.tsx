import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalKwanzas = cartItems.reduce((acc, item) => {
    return acc + (item.product.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-brand-red" />
              <h3 className="font-black text-sm uppercase tracking-wider text-gray-900">
                Carrinho de Compras ({cartItems.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-50 text-brand-red flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-extrabold text-sm text-gray-800">O seu carrinho está vazio</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Explore os nossos produtos em destaque e adicione equipamentos ao seu carrinho.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-4 border border-gray-100 p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-1 border border-gray-200"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-gray-900 line-clamp-1">{item.product.name}</h4>
                    <p className="text-[11px] text-brand-red font-extrabold mt-0.5">
                      {item.product.formattedPrice}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-brand-red p-2"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-4">
              <div className="flex justify-between items-center text-sm font-extrabold text-gray-900">
                <span>Subtotal Estimado</span>
                <span className="text-brand-red text-lg">
                  {totalKwanzas.toLocaleString('pt-AO')} Kz
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    alert('Pedido finalizado! A equipa da Duplas DMP entrará em contacto para confirmação de entrega.');
                    onClearCart();
                    onClose();
                  }}
                  className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-lg flex items-center justify-center"
                >
                  FINALIZAR ENCOMENDA
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
