import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import fc1 from '../assets/FC-1.png';
import fc2 from '../assets/FC-2.png';
import fc3 from '../assets/FC-3.png';

const CAROUSEL_ITEMS = [
  { id: 'fc-1', title: 'Black Brioche Gourmet Burger', image: fc1 },
  { id: 'fc-2', title: 'Extreme Cheese Pull Pizza', image: fc2 },
  { id: 'fc-3', title: 'Classic Cheeseburger & Crispy Fries', image: fc3 },
];

export default function FoodCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  // Get 3 consecutive slides wrapping around
  const visibleSlides = [
    CAROUSEL_ITEMS[startIndex],
    CAROUSEL_ITEMS[(startIndex + 1) % CAROUSEL_ITEMS.length],
    CAROUSEL_ITEMS[(startIndex + 2) % CAROUSEL_ITEMS.length],
  ];

  return (
    <section className="py-12 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 text-stone-600 hover:text-stone-900 transition-colors shrink-0 group focus:outline-none"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Carousel Images Container */}
          <div className="flex-1">
            {/* Mobile View: Single Active Slide */}
            <div className="block md:hidden">
              <div className="relative overflow-hidden h-[280px] sm:h-[360px] shadow-sm bg-stone-900 group rounded-2xl">
                <img
                  src={CAROUSEL_ITEMS[startIndex].image}
                  alt={CAROUSEL_ITEMS[startIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
              </div>
            </div>

            {/* Desktop View: 3 Tall Vertical Images */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {visibleSlides.map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  className="relative overflow-hidden h-[450px] lg:h-[480px] shadow-sm bg-stone-900 group rounded-none"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 text-stone-600 hover:text-stone-900 transition-colors shrink-0 group focus:outline-none"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>
    </section>
  );
}


