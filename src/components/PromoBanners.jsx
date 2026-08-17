import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import promoBg1 from '../assets/promo-bg-1.png';
import promoBg2 from '../assets/promo-bg-2.png';
import promoBg3 from '../assets/promo-bg-3.png';
import promo1 from '../assets/promo-1.png';
import promo2 from '../assets/promo-2.png';
import promo3 from '../assets/promo-3.png';
import promoDis1 from '../assets/promo-dis-1.png';
import promoDis3 from '../assets/promo-dis-3.png';
import burgerImg from '../assets/burger.png';
import leavesImg from '../assets/leaves.png';

export default function PromoBanners() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      
      {/* Decorative Blurry Leaves Accent in Bottom-Left (Reduced size & cropped to leaves) */}
      <div className="absolute -bottom-4 -left-4 z-10 w-28 sm:w-34 h-24 sm:h-28 overflow-hidden pointer-events-none">
        <img
          src={leavesImg}
          alt="Blurry Leaves Accent"
          className="w-full h-auto object-cover object-top filter blur-[2px] opacity-75"
        />
      </div>

      {/* Decorative Crisp Burger Accent in Bottom-Right (Reduced size & NOT blurred) */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 z-10 w-16 sm:w-20 lg:w-24 pointer-events-none opacity-80">
        <img
          src={burgerImg}
          alt="Burger Accent"
          className="w-full h-auto object-contain filter-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Delicious & Hot Pizza */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[360px] p-5 sm:p-8 flex flex-col justify-between shadow-xl border border-stone-100 group">
            {/* Background Image: promo-bg-1.png */}
            <div className="absolute inset-0 z-0">
              <img
                src={promoBg1}
                alt="Pizza Background"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Large Top-Right Discount Badge Asset */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-6 z-10">
              <img
                src={promoDis1}
                alt="Save 50% Off"
                className="w-20 sm:w-36 lg:w-40 h-auto object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Copy */}
            <div className="relative z-10 space-y-1.5 max-w-[70%] sm:max-w-[65%]">
              <span className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FFC72C]">
                Crispy, Every Bite Taste
              </span>
              <h3 className="font-heading text-2.5xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-[0.95] tracking-tight">
                Delicious & <br />
                Hot Pizza
              </h3>
            </div>

            {/* Bottom Content & Food Image: promo-1.png */}
            <div className="relative z-10 pt-4 flex items-end justify-between">
              <a
                href="#menu"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-white hover:text-[#FFC72C] transition-colors group/btn"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              {/* Pizza Image Asset: promo-1.png */}
              <div className="absolute -bottom-6 -right-6 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none">
                <img
                  src={promo1}
                  alt="Hot Pizza"
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Card 2: French Fry */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[360px] p-5 sm:p-8 flex flex-col justify-between shadow-xl border border-orange-200 group">
            {/* Background Image: promo-bg-2.png */}
            <div className="absolute inset-0 z-0">
              <img
                src={promoBg2}
                alt="French Fry Background"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Top Copy */}
            <div className="relative z-10 space-y-1">
              <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Todays <span className="text-[#FFC72C] italic font-serif text-xs sm:text-base">Delicious</span>
              </p>
              <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
                French Fry
              </h3>
              <p className="font-sans text-xs font-bold text-white/90">
                This Weekend Only
              </p>
            </div>

            {/* Yellow Button & French Fries Image: promo-2.png */}
            <div className="relative z-10 pt-4 flex items-end justify-between">
              <a
                href="#menu"
                className="bg-[#FFC72C] hover:bg-amber-400 text-stone-950 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-sans font-extrabold text-xs tracking-wide shadow-lg flex items-center gap-2 active:scale-95 transition-all inline-flex"
              >
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                <span>Order Now</span>
              </a>

              {/* French Fries Box Image Asset: promo-2.png */}
              <div className="absolute -bottom-4 -right-4 w-36 sm:w-52 h-36 sm:h-52 pointer-events-none">
                <img
                  src={promo2}
                  alt="French Fries Box"
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Chiken & French Fry */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[360px] p-5 sm:p-8 flex flex-col justify-between shadow-xl border border-red-900 group">
            {/* Background Image: promo-bg-3.png */}
            <div className="absolute inset-0 z-0">
              <img
                src={promoBg3}
                alt="Chicken & Fries Background"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Large Top-Right Discount Badge Asset */}
            <div className="absolute top-3 right-4 sm:top-5 sm:right-9 z-10">
              <img
                src={promoDis3}
                alt="50% Off"
                className="w-18 sm:w-28 lg:w-32 h-auto object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Copy */}
            <div className="relative z-10 space-y-1.5 max-w-[70%] sm:max-w-[65%]">
              <span className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FFC72C]">
                Crispy, Every Bite Taste
              </span>
              <h3 className="font-heading text-2.5xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-[0.95] tracking-tight">
                Chiken & <br />
                French Fry
              </h3>
            </div>

            {/* Bottom Content & Food Image: promo-3.png */}
            <div className="relative z-10 pt-4 flex items-end justify-between">
              <a
                href="#menu"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-white hover:text-[#FFC72C] transition-colors group/btn"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              {/* Chicken & Fries Platter Image Asset: promo-3.png */}
              <div className="absolute -bottom-6 -right-6 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none">
                <img
                  src={promo3}
                  alt="Fried Chicken & Fries Platter"
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
