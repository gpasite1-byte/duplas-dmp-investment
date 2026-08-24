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
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, ShieldCheck, CheckCircle2, Award, Truck } from 'lucide-react';

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
            <ShopCategories />
            <FeaturedProducts
              products={productsData}
              onAddToCart={handleAddToCart}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
            <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            <WhyChooseUs />
            <TestimonialsSection />
            <NewsletterSection />
          </div>
        )}

        {currentPage === 'internet' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="text-center space-y-3 bg-[#070A10] text-white py-14 px-6 rounded-3xl relative overflow-hidden">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">CONECTIVIDADE EMPRESARIAL & RESIDENCIAL</span>
              <h1 className="text-3xl sm:text-4xl font-black">Soluções de Internet Dedicada & Satélite em Angola</h1>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">Fibra óptica dedicada 1:1, conectividade Starlink e enlaces de rádio com alta estabilidade e suporte 24/7.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-brand-red/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-red bg-red-50 px-2 py-0.5 rounded">Residencial</span>
                <h3 className="font-extrabold text-lg">Internet Residencial Estável</h3>
                <div className="text-sm font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">Cotação Sob Medida</div>
                <p className="text-xs text-gray-600">Navegação sem limites para streaming, home office e jogos com Router Wi-Fi 6 incluído.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-extrabold py-3 rounded-lg uppercase transition-all">Pedir Cotação</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-brand-red/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-red bg-red-50 px-2 py-0.5 rounded">PME & Escritórios</span>
                <h3 className="font-extrabold text-lg">Internet Empresarial Plus</h3>
                <div className="text-sm font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">Cotação Sob Medida</div>
                <p className="text-xs text-gray-600">Garantia de banda, múltiplos pontos de acesso e prioridade de tráfego para empresas.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-extrabold py-3 rounded-lg uppercase transition-all">Pedir Cotação</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-brand-red shadow-md space-y-4 relative">
                <span className="absolute -top-3 right-4 bg-brand-red text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">Destaque</span>
                <span className="text-[10px] font-black uppercase text-brand-red bg-red-50 px-2 py-0.5 rounded">Corporativo</span>
                <h3 className="font-extrabold text-lg">Link Dedicado Fibra 1:1</h3>
                <div className="text-sm font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">Cotação Sob Medida</div>
                <p className="text-xs text-gray-600">Simetria de upload e download, IP Fixo público, SLA de 99.9% e monitorização ininterrupta.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-extrabold py-3 rounded-lg uppercase transition-all">Pedir Cotação</button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-brand-red/40 transition-all">
                <span className="text-[10px] font-black uppercase text-brand-red bg-red-50 px-2 py-0.5 rounded">Remoto & Fazendas</span>
                <h3 className="font-extrabold text-lg">Satélite Starlink Pro</h3>
                <div className="text-sm font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg">Cotação Sob Medida</div>
                <p className="text-xs text-gray-600">Cobertura total em qualquer ponto de Angola, baixa latência e instalação completa com mastro.</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-extrabold py-3 rounded-lg uppercase transition-all">Pedir Cotação</button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'telecom' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="bg-[#070A10] text-white p-12 rounded-3xl text-center space-y-3">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">VOZ & DADOS</span>
              <h1 className="text-3xl sm:text-4xl font-black">Telecomunicações Avançadas & Telefonia IP</h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">Centrais Telefónicas PABX Virtuais, Troncos SIP, Intercomunicadores e Soluções Integradas para Empresas em Angola.</p>
            </div>
            <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
          </div>
        )}

        {currentPage === 'tecnologia' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
            <div className="bg-[#070A10] text-white p-12 rounded-3xl text-center space-y-3">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">INFRAESTRUTURA & SEGURANÇA</span>
              <h1 className="text-3xl sm:text-4xl font-black">Tecnologia, CFTV 4K & Data Centers</h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">Sistemas de vídeo-vigilância inteligente com IA Hikvision, biometria ZKTeco, fusão de fibra óptica e montagem de racks de servidores.</p>
            </div>
            <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
          </div>
        )}

        {currentPage === 'loja' && (
          <div className="py-8 max-w-7xl mx-auto px-4 lg:px-8">
            <ShopCategories />
            <FeaturedProducts
              products={productsData}
              onAddToCart={handleAddToCart}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
          </div>
        )}

        {currentPage === 'sobre' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="bg-[#070A10] text-white p-12 rounded-3xl text-center space-y-4">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">A NOSSA HISTÓRIA & MISSÃO</span>
              <h1 className="text-3xl sm:text-4xl font-black">Sobre a Duplas DMP Investment</h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                Mais de uma década de dedicação e liderança no setor de telecomunicações, redes, informática e segurança eletrónica em Angola.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-gray-900">Missão</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fornecer equipamentos de informática de alta qualidade no padrão das maiores lojas de retalho de Angola, associados a serviços de telecomunicações estáveis que impulsionam o crescimento das empresas nacionais.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-gray-900">Visão</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ser reconhecida como a parceira de tecnologia mais confiável e completa em Angola, garantindo inovação contínua, atendimento humanizado e assistência técnica local qualificada.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-gray-900">Compromisso Angola</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Presentes em Luanda com capacidade técnica de atendimento e entrega em todas as 18 províncias do país, com equipas de engenharia e suporte helpdesk 24/7.
                </p>
              </div>
            </div>

            <WhyChooseUs />
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'contactos' && (
          <div className="py-16 max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
            <div className="bg-[#070A10] text-white p-12 rounded-3xl text-center space-y-4">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">ATENDIMENTO OFICIAL</span>
              <h1 className="text-3xl sm:text-4xl font-black">Entre em Contacto com a Duplas DMP</h1>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                Estamos prontos para atender a sua empresa, preparar orçamentos personalizados e tirar todas as suas dúvidas técnicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp & Call 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900">WhatsApp & Loja</h3>
                  <p className="text-xs text-gray-500">Recepção de clientes, cotações rápidas e encomendas da loja.</p>
                  <p className="text-lg font-black text-gray-900">+244 941 950 022</p>
                </div>
                <a
                  href="https://wa.me/244941950022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase py-3 rounded-lg text-center transition-all"
                >
                  Falar no WhatsApp
                </a>
              </div>

              {/* Call 2 & Suporte */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900">Atendimento & Suporte</h3>
                  <p className="text-xs text-gray-500">Linha telefónica direta para assistência técnica e projetos.</p>
                  <p className="text-lg font-black text-gray-900">+244 947 077 913</p>
                </div>
                <a
                  href="tel:+244947077913"
                  className="w-full bg-gray-900 hover:bg-black text-white font-extrabold text-xs uppercase py-3 rounded-lg text-center transition-all"
                >
                  Ligar Agora
                </a>
              </div>

              {/* Email & Redes Sociais */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900">E-mail & Redes Sociais</h3>
                  <p className="text-xs text-gray-500">geral@duplasdmp.co.ao</p>
                  <div className="flex items-center space-x-3 pt-2">
                    <a
                      href="https://www.facebook.com/DUPLASDMP/?locale=pt_BR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-brand-red hover:text-white rounded-lg transition-colors"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://ao.linkedin.com/company/duplas-dmp-insvestment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-brand-red hover:text-white rounded-lg transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/duplasdmp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-brand-red hover:text-white rounded-lg transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-red hover:bg-brand-redHover text-white font-extrabold text-xs uppercase py-3 rounded-lg text-center transition-all"
                >
                  Pedir Cotação Formal
                </button>
              </div>
            </div>
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
