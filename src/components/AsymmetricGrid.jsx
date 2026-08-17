import React from 'react';
import { Truck } from 'lucide-react';
import assBg1 from '../assets/ass-bg-1.png';
import assBg2 from '../assets/ass-bg-2.png';
import assBg5 from '../assets/ass-bg-5.png';
import ass5 from '../assets/ass-5.png';
import promoBg1 from '../assets/promo-bg-1.png';
import promoBg2 from '../assets/promo-bg-2.png';
import promo1 from '../assets/promo-1.png';
import promo2 from '../assets/promo-2.png';
import promoDis1 from '../assets/promo-dis-1.png';
import promoDis3 from '../assets/promo-dis-3.png';

export default function AsymmetricGrid() {
  return (
    <section className="py-0 bg-white relative overflow-hidden w-full">
      <div className="w-full">
        
        {/* Full-Bleed 5-Card Grid with Zero Gap & Edge-to-Edge Margins */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch w-full">
          
          {/* Card 1: Left Tall Pizza Card (5 Cols, Full Height on Desktop, 0 Rounded Corners) */}
          <div 
            className="lg:col-span-5 relative rounded-none overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] p-5 sm:p-10 flex flex-col justify-between bg-[#121212] group cursor-pointer w-full"
          >
            {/* Background Texture & Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={assBg1}
                alt="Dark Stone Background"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Floating Top-Right Discount Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <img
                src={promoDis1}
                alt="Save 50% Off"
                className="w-20 sm:w-32 lg:w-36 h-auto object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 space-y-1 pt-2 max-w-[70%]">
              <span className="text-white/90 font-sans text-xs sm:text-sm font-semibold block">
                Today
              </span>
              <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight">
                Special Delicious
              </h3>
              <p className="font-heading text-base sm:text-xl font-black text-[#FFC72C] tracking-wide pt-1">
                Beef chiness Pizza
              </p>
            </div>

            {/* Bottom Pizza Image Asset */}
            <div className="relative z-10 pt-4 sm:pt-8 flex justify-center">
              <img
                src={promo1}
                alt="Special Pizza"
                className="w-56 sm:w-96 lg:w-[420px] h-auto object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 2 & 3 Grid Wrapper (7 Cols, Zero Gap) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0 w-full">
            
            {/* Card 2: Middle Top (Burger Combo - Red Ember Background) */}
            <div 
              className="relative rounded-none overflow-hidden min-h-[220px] sm:min-h-[290px] p-5 sm:p-8 flex flex-col justify-between bg-stone-950 group cursor-pointer w-full"
            >
              {/* Background Red Ember Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={assBg2}
                  alt="Red Ember Background"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-red-900/40 to-transparent" />
              </div>

              <div className="relative z-10 space-y-1">
                <span className="text-[#FFC72C] font-sans text-xs font-bold block uppercase tracking-wider">
                  Delicious
                </span>
                <h3 className="font-heading text-2.5xl sm:text-4xl font-black text-white uppercase leading-none tracking-tight">
                  Burger Combo
                </h3>
                <p className="text-white/80 font-sans text-xs font-medium pt-0.5">
                  This Weekend Only
                </p>
                <div className="pt-2">
                  <span className="font-sans text-xs text-white/90 font-bold">Limited Offer / </span>
                  <span className="font-heading text-xl sm:text-2xl font-black text-white">$5</span>
                </div>
              </div>

              <div className="relative z-10 pt-3 sm:pt-4">
                <a href="#menu" className="bg-[#FFC72C] text-stone-950 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans text-xs font-extrabold uppercase tracking-wide inline-flex items-center gap-2 shadow-lg hover:bg-amber-400 transition-colors">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <span>Order Now</span>
                </a>
              </div>
            </div>

            {/* Card 3: Right Top (Super Delicious) */}
            <div 
              className="relative rounded-none overflow-hidden min-h-[220px] sm:min-h-[290px] p-5 sm:p-8 flex flex-col justify-between bg-stone-900 group cursor-pointer w-full"
            >
              {/* Background Promo 1 Texture */}
              <div className="absolute inset-0 z-0">
                <img
                  src={promoBg1}
                  alt="Super Delicious Background"
                  className="w-full h-full object-cover filter brightness-75"
                />
              </div>

              {/* Text Copy */}
              <div className="relative z-10 space-y-1">
                <span className="text-[#FFC72C] font-sans text-xs font-bold block uppercase tracking-wider">
                  Crispy, Every Bite Taste
                </span>
                <h3 className="font-heading text-2.5xl sm:text-4xl font-black text-white uppercase leading-tight tracking-tight">
                  SUPER <br />
                  DELICIOUS
                </h3>
              </div>

              {/* Bottom Sketched 50% OFF Badge */}
              <div className="relative z-10 pt-3 sm:pt-4 flex justify-start">
                <img
                  src={promoDis3}
                  alt="50% OFF Badge"
                  className="w-16 sm:w-24 h-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </div>
            </div>

            {/* Card 4: Middle Bottom (Fash Food Meal - Orange + French Fries) */}
            <div 
              className="relative rounded-none overflow-hidden min-h-[230px] sm:min-h-[290px] p-5 sm:p-8 flex flex-col justify-between bg-[#EA580C] group cursor-pointer w-full"
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={promoBg2}
                  alt="Orange Pattern Background"
                  className="w-full h-full object-cover filter brightness-105"
                />
              </div>

              {/* Copy */}
              <div className="relative z-10 space-y-1 max-w-[65%]">
                <span className="text-white/90 font-sans text-xs font-bold block uppercase tracking-wider">
                  Crispy, Every Bite Taste
                </span>
                <h3 className="font-heading text-2.5xl sm:text-4xl font-black text-white uppercase leading-none tracking-tight">
                  FASH FOOD <br />
                  MEAL
                </h3>
                <p className="text-white/90 font-sans text-[11px] leading-tight pt-1">
                  The mouth-watering aroma of sizzling burgers
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-3">
                <a href="#menu" className="bg-[#FFC72C] text-stone-950 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans text-xs font-extrabold uppercase tracking-wide inline-flex items-center gap-2 shadow-lg hover:bg-amber-400 transition-colors">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <span>Order Now</span>
                </a>
              </div>

              {/* French Fries Image */}
              <div className="absolute bottom-0 right-0 z-10 w-28 sm:w-44 h-28 sm:h-44 pointer-events-none">
                <img
                  src={promo2}
                  alt="French Fries Box"
                  className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 5: Right Bottom (Delicious Fried Chicken - Dark Wood Table) */}
            <div 
              className="relative rounded-none overflow-hidden min-h-[270px] sm:min-h-[290px] p-6 sm:p-8 flex flex-col justify-between bg-stone-950 group cursor-pointer w-full"
            >
              {/* Background Wood Texture (ass-bg-5) */}
              <div className="absolute inset-0 z-0">
                <img
                  src={assBg5}
                  alt="Dark Wood Texture"
                  className="w-full h-full object-cover filter brightness-75"
                />
              </div>

              {/* Title Overlay */}
              <div className="relative z-10 space-y-0.5">
                <span className="text-white font-sans text-xs font-bold block">
                  Delicious <span className="text-[#FFC72C] font-serif italic text-sm">Fried</span>
                </span>
                <h3 className="font-heading text-4xl sm:text-5xl font-black text-[#FFC72C] uppercase leading-none tracking-tight">
                  CHICKEN
                </h3>
                <span className="text-white/80 font-serif italic text-xs block pt-0.5">
                  Limited Offer
                </span>
              </div>

              {/* Chicken Platter Image (ass-5) */}
              <div className="relative z-10 pt-4 flex justify-end">
                <img
                  src={ass5}
                  alt="Fried Chicken Platter"
                  className="w-44 sm:w-52 h-32 sm:h-36 object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


