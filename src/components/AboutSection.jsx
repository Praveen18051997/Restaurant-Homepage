import React from 'react';
import pizzaImg from '../assets/pizza.png';
import peopleImg from '../assets/people.png';
import signatureImg from '../assets/signature.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white relative overflow-hidden w-full">
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Cheesy Pizza Pull Image - Flush to left screen edge with zero margin */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative overflow-hidden bg-[#0E0D12] h-[300px] sm:h-[480px] lg:h-[600px] xl:h-[640px] group shadow-xl">
              
              {/* FAST FOOD Watermark behind pizza */}
              <span className="absolute inset-0 flex items-center justify-center font-heading font-black text-5xl sm:text-8xl lg:text-9xl text-white/10 uppercase tracking-widest select-none pointer-events-none">
                FAST FOOD
              </span>

              {/* Pizza Image Asset */}
              <img
                src={pizzaImg}
                alt="Cheesy Melt Pizza Pull"
                className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom-Right Yellow Card matching Figma screenshot */}
              <div className="absolute bottom-0 right-0 z-20 bg-[#FFC72C] text-stone-950 p-4 sm:p-7 max-w-[200px] sm:max-w-[280px]">
                <h4 className="font-heading text-base sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tight text-stone-950">
                  We Cook <br />
                  Sandwiches For You
                </h4>
              </div>

            </div>
          </div>

          {/* Right Column: About Copy, 3 Stats, Signature & Foundation Pill */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 px-5 sm:px-10 lg:pl-4 lg:pr-12 xl:pr-20">
            
            {/* Green Subtitle Tag */}
            <span className="text-[#22C55E] font-sans text-xs sm:text-sm font-bold tracking-wide block">
              About Our Food
            </span>

            {/* Main Headline */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-stone-900 uppercase leading-[1.08] sm:leading-[1.05] tracking-tight">
              The Best Delicious Food <br className="hidden sm:inline" />
              Made From Us...
            </h2>

            {/* Paragraph Copy */}
            <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base font-medium leading-relaxed max-w-2xl">
              Its the perfect dining experience where every dish is crafted with fresh, high-quality dining experience. Experience quick and efficient service that ensures your food is servead fresh. Its the where every dining experience where every dish is crafted with fresh, high-quality ingredients fresh, high-quality.
            </p>

            {/* 3 Stat Counters with Background Letter Watermarks & Dividers */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-6 border-t border-stone-200/80">
              
              {/* Stat 1 */}
              <div className="relative border-r border-stone-200 pr-2 sm:pr-4">
                <span className="absolute -top-3 sm:-top-4 left-0 font-heading font-black text-3xl sm:text-6xl text-stone-200/60 select-none -z-10">
                  O
                </span>
                <span className="block font-heading text-[10px] sm:text-sm font-bold uppercase text-stone-800 tracking-tight sm:tracking-wide leading-tight break-words">
                  Satisfied Clients
                </span>
                <span className="font-heading text-xl sm:text-4xl lg:text-5xl font-black text-[#FFC72C] mt-0.5 sm:mt-1 block">
                  250+
                </span>
              </div>

              {/* Stat 2 */}
              <div className="relative border-r border-stone-200 px-2 sm:px-4">
                <span className="absolute -top-3 sm:-top-4 left-1 sm:left-2 font-heading font-black text-3xl sm:text-6xl text-stone-200/60 select-none -z-10">
                  F
                </span>
                <span className="block font-heading text-[10px] sm:text-sm font-bold uppercase text-stone-800 tracking-tight sm:tracking-wide leading-tight break-words">
                  Total Food Categories
                </span>
                <span className="font-heading text-xl sm:text-4xl lg:text-5xl font-black text-[#FFC72C] mt-0.5 sm:mt-1 block">
                  153+
                </span>
              </div>

              {/* Stat 3 */}
              <div className="relative pl-2 sm:pl-4">
                <span className="absolute -top-3 sm:-top-4 left-1 sm:left-2 font-heading font-black text-3xl sm:text-6xl text-stone-200/60 select-none -z-10">
                  A
                </span>
                <span className="block font-heading text-[10px] sm:text-sm font-bold uppercase text-stone-800 tracking-tight sm:tracking-wide leading-tight break-words">
                  Award Win
                </span>
                <span className="font-heading text-xl sm:text-4xl lg:text-5xl font-black text-[#FFC72C] mt-0.5 sm:mt-1 block">
                  25+
                </span>
              </div>

            </div>

            {/* Bottom Row: People Image, Signature Image & Black Foundation Pill */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* People Image Asset */}
                <img
                  src={peopleImg}
                  alt="People Avatar"
                  className="w-10 sm:w-14 h-10 sm:h-14 rounded-full object-cover border border-stone-200 shadow-sm shrink-0"
                />

                {/* Signature Image Asset */}
                <img
                  src={signatureImg}
                  alt="Signature"
                  className="h-7 sm:h-10 w-auto object-contain shrink-0"
                />
              </div>

              {/* Foundation Pill Badge */}
              <div className="bg-[#1C1C1E] text-white px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-heading text-[11px] sm:text-sm font-bold uppercase tracking-wide shadow-md whitespace-normal sm:whitespace-nowrap">
                Foundation, Since <span className="text-[#FFC72C] font-extrabold">21st Oct, 2019</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

