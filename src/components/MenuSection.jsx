import React from 'react';
import { TRENDING_MENU } from '../data/restaurantData';

export default function MenuSection() {
  // Pair items into 4 rows for left and right columns
  const leftCol = [TRENDING_MENU[0], TRENDING_MENU[2], TRENDING_MENU[4], TRENDING_MENU[6]];
  const rightCol = [TRENDING_MENU[1], TRENDING_MENU[3], TRENDING_MENU[5], TRENDING_MENU[7]];

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-500 font-bold text-sm tracking-wide mb-2 uppercase">
            About Our Food
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 tracking-tight">
            Trending Food Menu
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white border border-stone-300 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {leftCol.map((item) => (
                <div 
                  key={item.id} 
                  className="group pb-6 border-b border-stone-200 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 tracking-wide group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#FFB800] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {rightCol.map((item) => (
                <div 
                  key={item.id} 
                  className="group pb-6 border-b border-stone-200 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 tracking-wide group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#FFB800] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


