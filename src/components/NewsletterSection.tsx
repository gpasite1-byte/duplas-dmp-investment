import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#8F0006] via-[#E30613] to-[#8F0006] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Icon & Titles */}
          <div className="flex items-center space-x-5 text-center lg:text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white flex-shrink-0 shadow-lg hidden sm:flex">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                SUBSCREVA A NOSSA NEWSLETTER
              </h3>
              <p className="text-xs text-white/90 mt-1 max-w-xl">
                Receba novidades, promoções e conteúdos exclusivos sobre tecnologia, internet e telecomunicações.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="bg-white/20 border border-white/40 backdrop-blur-md px-6 py-3.5 rounded-xl flex items-center space-x-3 text-xs font-bold">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Obrigado! E-mail subscrito com sucesso.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-[480px]">
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="O seu melhor e-mail"
                    className="w-full bg-white text-gray-900 text-xs px-4 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-400 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0B0F19] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md transition-all whitespace-nowrap active:scale-95"
                >
                  SUBSCREVER
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
