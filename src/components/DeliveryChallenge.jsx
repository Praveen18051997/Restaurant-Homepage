import React, { useState } from 'react';
import { Play, Bike, X } from 'lucide-react';
import deliveryManImg from '../assets/delivery-man.png';
import dc1 from '../assets/dc-1.jpg';

export default function DeliveryChallenge() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-stone-950">
      
      {/* 1. Top Video Showcase Section - Dark Banner with Centered Dashed Play Button */}
      <div className="relative h-64 sm:h-80 lg:h-[360px] xl:h-[400px] w-full bg-black overflow-hidden">
        <img
          src={dc1}
          alt="Gourmet Food Video Showcase"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-105"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          {/* Dashed Circular Play Video Button */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-white/80 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group bg-black/20 backdrop-blur-[2px] shadow-2xl"
            aria-label="Play kitchen video"
          >
            <Play className="w-8 h-8 sm:w-12 sm:h-12 fill-[#FFC72C] text-[#FFC72C] ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>


      {/* 2. Bottom Crimson Red Delivery Challenge Banner */}
      <div className="bg-[#FF2A54] py-10 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        
        {/* Soft Background Accent Blurs */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-red-400/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 relative z-10">
          
          {/* Left Text Column */}
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#FFC72C] font-heading font-extrabold text-xs sm:text-sm uppercase tracking-widest block">
              Crispy, Every Bite Taste
            </span>
            
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.05] tracking-tight">
              30 Minutes Fast <br />
              <span className="text-[#FFC72C]">Delivery</span> Challenge
            </h2>
          </div>

          {/* Center Scooter Delivery Graphic */}
          <div className="flex justify-center items-center my-2 lg:my-0">
            <div className="relative w-52 h-44 sm:w-64 sm:h-52 lg:w-72 lg:h-60 flex items-center justify-center">
              <img
                src={deliveryManImg}
                alt="3D Scooter Delivery Rider"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>


          {/* Right Action Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="#menu"
              className="bg-white text-stone-900 hover:bg-[#FFC72C] px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-heading text-sm sm:text-base font-black uppercase tracking-wider shadow-xl flex items-center gap-2.5 transition-all duration-300 active:scale-95 whitespace-nowrap block"
            >
              <Bike className="w-5 h-5 text-[#22C55E]" />
              <span>Order Now</span>
            </a>
          </div>

        </div>
      </div>

      {/* Video Popup Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-stone-950/90 backdrop-blur-md" onClick={() => setVideoModalOpen(false)} />
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden z-10 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#FFC72C] bg-black/60 p-2 rounded-full z-20"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Kitchen Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
}

