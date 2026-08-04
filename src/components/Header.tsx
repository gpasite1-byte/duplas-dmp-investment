import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenCart: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  currentPage,
  onNavigate,
  onOpenCart,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group text-left">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-[#8F0006] flex items-center justify-center text-white shadow-md shadow-brand-red/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-2xl tracking-tighter italic">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-gray-900 tracking-tight leading-none flex items-center">
                Duplas <span className="text-brand-red ml-1 font-extrabold uppercase text-lg tracking-wider">DMP</span>
              </span>
              <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase mt-0.5">
                Investment
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-gray-700">
            <button
              onClick={() => onNavigate('home')}
              className={`py-2 transition-colors ${currentPage === 'home' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Início
            </button>

            <button
              onClick={() => onNavigate('internet')}
              className={`py-2 transition-colors ${currentPage === 'internet' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Internet
            </button>

            <button
              onClick={() => onNavigate('telecom')}
              className={`py-2 transition-colors ${currentPage === 'telecom' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Telecomunicações
            </button>

            <button
              onClick={() => onNavigate('tecnologia')}
              className={`py-2 transition-colors ${currentPage === 'tecnologia' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Tecnologia
            </button>

            <button
              onClick={() => onNavigate('loja')}
              className={`py-2 transition-colors ${currentPage === 'loja' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Loja
            </button>

            <button
              onClick={() => onNavigate('sobre')}
              className={`py-2 transition-colors ${currentPage === 'sobre' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Sobre Nós
            </button>

            <button
              onClick={() => onNavigate('contactos')}
              className={`py-2 transition-colors ${currentPage === 'contactos' ? 'text-brand-red border-b-2 border-brand-red font-bold' : 'hover:text-brand-red'}`}
            >
              Contactos
            </button>
          </nav>

          {/* ACTIONS: SEARCH, CART, QUOTE BUTTON */}
          <div className="flex items-center space-x-4">
            
            {/* Search Icon */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-brand-red hover:bg-gray-100 rounded-full transition-all"
                aria-label="Pesquisar"
              >
                <Search className="w-5 h-5" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50">
                  <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Pesquisar produtos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs w-full focus:outline-none text-gray-800"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-brand-red hover:bg-gray-100 rounded-full transition-all"
              aria-label="Carrinho"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* "Pedir Cotação" Button */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-md shadow-brand-red/25 hover:shadow-lg transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-2" />
              Pedir Cotação
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-brand-red rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-brand-red font-bold">Início</button>
          <button onClick={() => { onNavigate('internet'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Internet & Planos</button>
          <button onClick={() => { onNavigate('telecom'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Telecomunicações</button>
          <button onClick={() => { onNavigate('tecnologia'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Tecnologia & Segurança</button>
          <button onClick={() => { onNavigate('loja'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Loja Online</button>
          <button onClick={() => { onNavigate('sobre'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Sobre Nós</button>
          <button onClick={() => { onNavigate('contactos'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red font-medium">Contactos</button>
        </div>
      )}
    </header>
  );
};
