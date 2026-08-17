import React, { useState } from 'react';
import pizza1Img from '../assets/pizza1.png';
import potatoImg from '../assets/potato.png';
import chickenImg from '../assets/chicken.png';
import cheeseburgerImg from '../assets/cheeseburger.png';

const CATEGORY_TABS = [
  { id: 'chicken', label: 'Chicken Fry' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burger', label: 'Burger' },
  { id: 'deserts', label: 'Deserts' },
];

const DISH_ITEMS = [
  {
    id: 'd-1',
    category: 'pizza',
    name: 'Chicago Deep Pizza.',
    description: 'Its the perfect dining experience where Experience quick and efficient',
    image: pizza1Img,
  },
  {
    id: 'd-2',
    category: 'chicken',
    name: 'FAST FOOD COMBO',
    description: 'Its the perfect dining experience where Experience quick and efficient',
    image: potatoImg,
  },
  {
    id: 'd-3',
    category: 'chicken',
    name: 'GRILLED CHICKEN',
    description: 'Its the perfect dining experience where Experience quick and efficient',
    image: chickenImg,
  },
  {
    id: 'd-4',
    category: 'burger',
    name: 'WHOPPER BURGER KING',
    description: 'Its the perfect dining experience where Experience quick and efficient',
    image: cheeseburgerImg,
  },
];

export default function CategoryItems() {
  const [activeTab, setActiveTab] = useState('chicken');

  const filteredItems = DISH_ITEMS.filter(
    (item) => activeTab === 'chicken' || item.category === activeTab || activeTab === 'all'
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F8F7] relative overflow-hidden border-t border-stone-200/60">
      
      {/* Background SVG Food Doodle Pattern Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 20h20v5H15zM20 10a10 10 0 0 1 10 10H10a10 10 0 0 1 10-10zM60 15a15 15 0 1 1 30 0 15 15 0 0 1-30 0zM15 65l10-25 10 25zM65 60h20v30H65z' stroke='%20000' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Subtitle & Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#22C55E] font-sans text-sm sm:text-base font-bold tracking-wide block mb-2">
            About Our Food
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 uppercase tracking-tight">
            Hot Delicious Item
          </h2>
        </div>

        {/* Pill Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-14 overflow-x-auto pb-2 px-2 no-scrollbar w-full">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 sm:px-7 py-2 sm:py-3 rounded-full font-sans text-xs sm:text-base font-bold whitespace-nowrap shrink-0 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#FFC72C] text-stone-950 shadow-md scale-105'
                    : 'bg-white/80 text-stone-700 border border-stone-200/80 hover:bg-white hover:border-stone-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4 Dish Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Dish Image PNG Cutout Container */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              {/* Dish Title */}
              <h3 className="font-heading font-black text-xl sm:text-2xl text-stone-900 uppercase tracking-tight mb-2 group-hover:text-[#FFC72C] transition-colors">
                {item.name}
              </h3>

              {/* Dish Description */}
              <p className="text-stone-500 font-sans text-xs sm:text-sm leading-relaxed max-w-[220px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


