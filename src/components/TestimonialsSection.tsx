import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const prev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveSlide((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            O QUE OS NOSSOS <span className="text-brand-red">CLIENTES</span> DIZEM
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Controls */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-brand-red hover:border-brand-red transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-brand-red hover:border-brand-red transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-gray-50/80 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-brand-red/30 hover:shadow-lg transition-all"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-gray-700 italic leading-relaxed mb-6 relative">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200/80">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-red"
                  />
                  <div>
                    <h4 className="font-extrabold text-xs text-gray-900">{item.name}</h4>
                    <p className="text-[10px] font-medium text-gray-500">{item.role}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
