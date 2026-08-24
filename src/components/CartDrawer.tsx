import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

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
  const [customerName, setCustomerName] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');

  if (!isOpen) return null;

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsAppQuote = () => {
    if (cartItems.length === 0) return;

    let message = `*SOLICITAÇÃO DE COTAÇÃO - DUPLAS DMP INVESTMENT*\n`;
    if (customerName.trim()) message += `*Cliente:* ${customerName.trim()}\n`;
    if (customerCompany.trim()) message += `*Empresa:* ${customerCompany.trim()}\n`;
    message += `*Data:* ${new Date().toLocaleDateString('pt-AO')}\n\n`;
    message += `*ITENS / EQUIPAMENTOS SELECIONADOS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      if (item.product.brand) message += `   • Marca: ${item.product.brand}\n`;
      if (item.product.partNumber) message += `   • Ref/PN: ${item.product.partNumber}\n`;
      message += `   • Quantidade: ${item.quantity} un.\n\n`;
    });

    message += `Gostaria de receber a cotação formal com disponibilidade e prazos de entrega em Angola.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/244941950022?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

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
              <div>
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-900">
                  Lista de Cotação ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'})
                </h3>
                <p className="text-[10px] text-gray-500">Orçamento direto para empresas e particulares</p>
              </div>
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
                <p className="font-extrabold text-sm text-gray-800">A sua lista de cotação está vazia</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Navegue pelo nosso catálogo estilo NCR Angola e adicione equipamentos para solicitar proposta.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-[11px] text-emerald-800 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Envie a sua lista pelo WhatsApp para receber cotação imediata com a nossa equipa comercial.</span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-3.5 border border-gray-100 p-3.5 rounded-xl bg-gray-50/70 hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-1.5 border border-gray-200"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase text-brand-red bg-red-50 px-1.5 py-0.5 rounded">
                          {item.product.brand || item.product.category}
                        </span>
                        {item.product.partNumber && (
                          <span className="text-[9px] text-gray-400 font-mono">
                            PN: {item.product.partNumber}
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-xs text-gray-900 line-clamp-1 mt-1">{item.product.name}</h4>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                        Disponível sob Cotação
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          title="Diminuir"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-black w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          title="Aumentar"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-gray-400 hover:text-brand-red p-2"
                      title="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Optional Customer info for faster WhatsApp formatting */}
                <div className="pt-2 space-y-2 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-700 block">Identificação rápida (Opcional):</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="text-xs px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-red"
                    />
                    <input
                      type="text"
                      placeholder="Sua Empresa"
                      value={customerCompany}
                      onChange={(e) => setCustomerCompany(e.target.value)}
                      className="text-xs px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & WhatsApp Quote Action */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-3">
              <div className="flex justify-between items-center text-xs text-gray-600 font-bold">
                <span>Total de Itens para Cotação:</span>
                <span className="text-gray-900 font-black text-sm bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  {totalItemsCount} unidades
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSendWhatsAppQuote}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>SOLICITAR COTAÇÃO VIA WHATSAPP</span>
                </button>

                <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-gray-400 hover:text-brand-red underline"
                  >
                    Limpar toda a lista
                  </button>
                  <span>Atendimento oficial Angola: +244 941 950 022</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
