import React from 'react';

export default function HowWeServe() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4EE] text-stone-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-emerald-500 font-bold text-xs sm:text-sm tracking-wide uppercase mb-2">
            FOOD PROCESSING
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 uppercase tracking-tight">
            HOW WE SERVE YOU?
          </h2>
        </div>

        {/* 3 Step Layout with Dotted Lines and Center Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          
          {/* Step 1: Cooking With Care */}
          <div className="flex-1 text-center max-w-xs px-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 uppercase tracking-wide">
              Cooking With Care
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
              Its the perfect dining experience where Experience quick and efficient
            </p>
          </div>

          {/* Dotted Line Connector 1 */}
          <div className="hidden md:block w-16 lg:w-24 border-b border-dotted border-stone-400 shrink-0" />

          {/* Step 2: QUICKLY DELIVERY (Center Card Container) */}
          <div className="flex-1 max-w-sm w-full bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900 uppercase tracking-wide mb-3">
              QUICKLY DELIVERY
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-normal leading-relaxed">
              Its the perfect dining experience where Experience quick and efficient
            </p>
          </div>

          {/* Dotted Line Connector 2 */}
          <div className="hidden md:block w-16 lg:w-24 border-b border-dotted border-stone-400 shrink-0" />

          {/* Step 3: CHOOSE FOOD */}
          <div className="flex-1 text-center max-w-xs px-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 uppercase tracking-wide">
              CHOOSE FOOD
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-normal mt-2 leading-relaxed">
              Its the perfect dining experience where Experience quick and efficient
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

