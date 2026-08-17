import React from 'react';
import { Sparkles, Award } from 'lucide-react';
import qualityImg from '../assets/quality.png';

export default function QualityService() {
  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden w-full">
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Features with inner padding */}
          <div className="lg:col-span-6 space-y-8 px-6 sm:px-10 lg:pl-12 xl:pl-20 lg:pr-6">
            
            <div>
              <p className="text-[#FF2A54] font-bold text-sm tracking-wide uppercase mb-2">
                About Our Food
              </p>

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.1]">
                Where Quality Meet <br />
                <span className="text-[#FF2A54]">Excellent Service.</span>
              </h2>
            </div>

            <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-xl">
              Its the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. Experience quick and efficient service that ensures your food is served fresh.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-stone-900 uppercase">
                    Fast Foods
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed mt-1">
                    A team of dreamers and doers building unique interactive music and art
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-stone-900 uppercase">
                    Healthy Foods
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed mt-1">
                    A team of dreamers and doers building unique interactive music and art
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button & Customer Quote */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#about"
                className="bg-[#FF2A54] hover:bg-[#e0244b] text-white px-8 py-4 rounded-xl font-heading text-sm uppercase font-bold tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all inline-block"
              >
                More About Us
              </a>

              <div>
                <p className="text-amber-500 font-bold text-xs tracking-wider uppercase">
                  BRENDON GARREY
                </p>
                <p className="font-heading font-black text-stone-900 text-xs sm:text-sm uppercase tracking-wide mt-0.5">
                  CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: quality.png - Flush to right screen edge with zero margin */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative overflow-hidden h-[360px] sm:h-[500px] lg:h-[600px] xl:h-[640px] group shadow-xl rounded-l-[50px] sm:rounded-l-[70px] lg:rounded-l-[80px] rounded-r-none">
              
              {/* Quality Asset Image */}
              <img
                src={qualityImg}
                alt="Where Quality Meets Excellent Service"
                className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Green Tilted "Since /1985" Badge */}
              <div className="absolute bottom-8 right-8 z-20 bg-[#00B050] text-white px-6 py-3.5 rounded-2xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform cursor-pointer border-2 border-white/20">
                <span className="font-heading text-xl sm:text-2xl font-black italic tracking-wide">
                  Since /1985
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


