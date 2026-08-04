import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Internet Empresarial',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Internet Empresarial',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-50 text-brand-red flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-gray-900">Cotação Solicitada com Sucesso!</h3>
            <p className="text-xs text-gray-600 max-w-sm mx-auto">
              Obrigado pelo seu contacto. A nossa equipa comercial da Duplas DMP entrará em contacto muito em breve.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-md">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase">PEDIR COTAÇÃO</h3>
                <p className="text-xs text-gray-500">Preencha o formulário para receber uma proposta personalizada</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: João Baptista"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@empresa.co.ao"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Telefone (Angola) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+244 9XX XXX XXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Serviço Pretendido</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none bg-white"
                >
                  <option value="Internet Empresarial">Internet Empresarial (Fibra / Link Dedicado)</option>
                  <option value="Internet Residencial">Internet Residencial (A partir de 8.500 Kz)</option>
                  <option value="Telecomunicações">Telecomunicações & PABX Virtual</option>
                  <option value="Redes e Infraestrutura">Redes Estruturadas & Fibra</option>
                  <option value="Segurança Eletrónica">Segurança Eletrónica & CCTV</option>
                  <option value="Equipamentos da Loja">Aquisição de Equipamentos</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Mensagem / Detalhes do Projeto</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva a sua necessidade ou número de utilizadores..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-md shadow-brand-red/30 transition-all flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                ENVIAR PEDIDO DE COTAÇÃO
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
