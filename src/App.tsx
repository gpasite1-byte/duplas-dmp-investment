import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { FeaturesBar } from './components/FeaturesBar';
import { StatsBar } from './components/StatsBar';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ShopCategories } from './components/ShopCategories';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { productsData } from './data/products';
import { Product, CartItem } from './types';

export type PageType = 'home' | 'internet' | 'telecom' | 'tecnologia' | 'loja' | 'sobre' | 'contactos';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-brand-red selection:text-white">
      {/* Top Bar */}
      <TopBar />

      {/* Main Header with Page State */}
      <Header
        cartCount={totalCartCount}
        currentPage={currentPage}
        onNavigate={(p) => setCurrentPage(p as PageType)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* DYNAMIC PAGE RENDERER */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            <HeroBanner onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            <FeaturesBar />
            <StatsBar />
            <FeaturedProducts
              products={productsData}
              onAddToCart={handleAddToCart}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
            <ShopCategories />
            <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            <WhyChooseUs />
            <TestimonialsSection />
            <NewsletterSection />
          </div>
        )}

        {currentPage === 'internet' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="text-center space-y-3 bg-[#070A10] text-white py-12 rounded-3xl p-6">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">CONECTIVIDADE ILIMITADA</span>
              <h1 className="text-4xl font-black">Planos de Internet Residencial & Empresarial</h1>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">Internet de fibra óptica de alta velocidade e links dedicados em Angola.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border shadow-md space-y-4">
                <h3 className="font-extrabold text-lg">Residencial Light</h3>
                <div className="text-3xl font-black text-brand-red">8.500 Kz<span className="text-xs text-gray-500 font-normal">/mês</span></div>
                <p className="text-xs text-gray-600">Download ilimitado, velocidade 10 Mbps, Router Wi-Fi 6.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red text-white text-xs font-extrabold py-3 rounded-lg uppercase">Aderir Agora</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-md space-y-4">
                <h3 className="font-extrabold text-lg">Residencial Plus</h3>
                <div className="text-3xl font-black text-brand-red">18.500 Kz<span className="text-xs text-gray-500 font-normal">/mês</span></div>
                <p className="text-xs text-gray-600">Ideal para streaming 4K, 30 Mbps, Suporte 24/7.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red text-white text-xs font-extrabold py-3 rounded-lg uppercase">Aderir Agora</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-md space-y-4 border-brand-red">
                <h3 className="font-extrabold text-lg">Empresarial Pro</h3>
                <div className="text-3xl font-black text-brand-red">45.000 Kz<span className="text-xs text-gray-500 font-normal">/mês</span></div>
                <p className="text-xs text-gray-600">Banda 100% Dedicada 1:1, IP Fixo, SLA 99.9%.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red text-white text-xs font-extrabold py-3 rounded-lg uppercase">Aderir Agora</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-md space-y-4">
                <h3 className="font-extrabold text-lg">Corporativo Fibra</h3>
                <div className="text-3xl font-black text-brand-red">95.000 Kz<span className="text-xs text-gray-500 font-normal">/mês</span></div>
                <p className="text-xs text-gray-600">Link Simétrico 100 Mbps, IPs Fixos, Monitorização 24h.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red text-white text-xs font-extrabold py-3 rounded-lg uppercase">Aderir Agora</button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'telecom' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="bg-[#070A10] text-white p-10 rounded-3xl text-center">
              <h1 className="text-4xl font-black">Telecomunicações Avançadas</h1>
              <p className="text-sm text-gray-300 mt-2">Centrais Telefónicas PABX Virtuais, Troncos SIP e Telefonia IP para Empresas em Angola.</p>
            </div>
          </div>
        )}

        {currentPage === 'tecnologia' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="bg-[#070A10] text-white p-10 rounded-3xl text-center">
              <h1 className="text-4xl font-black">Tecnologia & Segurança Eletrónica</h1>
              <p className="text-sm text-gray-300 mt-2">CCTV IP, Data Centers, Fusão de Fibra Óptica e Projetos de TI.</p>
            </div>
          </div>
        )}

        {currentPage === 'loja' && (
          <div className="py-12 max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-3xl font-black text-gray-900 mb-6">Catálogo Completo da Loja</h1>
            <FeaturedProducts
              products={productsData}
              onAddToCart={handleAddToCart}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
          </div>
        )}

        {currentPage === 'sobre' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl font-black text-gray-900">Sobre a Duplas DMP Investment</h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">Mais de 10 anos de liderança e compromisso com o mercado Angolano em telecomunicações e tecnologia.</p>
          </div>
        )}

        {currentPage === 'contactos' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl font-black text-gray-900">Contacte-nos</h1>
            <p className="text-sm text-gray-600">Telefone: (244) 923 457 890 | E-mail: geral@duplasdmp.co.ao | Luanda, Angola</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
