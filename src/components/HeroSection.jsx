import React, { useState } from 'react';
import { Truck, Send } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import discountImg from '../assets/discount.png';

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-64px)] pt-20 sm:pt-24 lg:pt-16 pb-12 sm:pb-16 flex items-center bg-[#141416] overflow-hidden">
      {/* Hero Background Image: assets/hero-bg.png */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Discount Image Asset */}
      <div className="absolute top-[38%] sm:top-[48%] -translate-y-1/2 right-4 sm:left-[50%] lg:left-[52%] xl:left-[54%] z-10 pointer-events-none opacity-90 sm:opacity-100">
        <img
          src={discountImg}
          alt="Upto 20% Discount"
          className="w-[180px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] max-w-none object-contain filter drop-shadow-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-12 md:px-16 w-full py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Order Button & Email Input */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Small text above title */}
            <p className="text-stone-400 font-sans font-semibold text-xs sm:text-sm tracking-wide">
              Starting at <span className="text-white font-bold">$24.00</span>
            </p>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-3.5xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
              The best Food <br />
              Collection 2024
            </h1>

            {/* Subtext */}
            <p className="text-stone-300 font-sans text-xs sm:text-base font-medium tracking-wide">
              Exclusive offer <span className="text-amber-400 font-extrabold border-b-2 border-amber-400 pb-0.5">-35%</span> off this week
            </p>

            {/* Order Now Button */}
            <div className="pt-1 sm:pt-2">
              <a
                href="#menu"
                className="bg-[#FF2A54] hover:bg-[#e0244b] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all inline-flex items-center gap-2.5"
              >
                <Truck className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
                <span>Order Now</span>
              </a>
            </div>

            {/* Email Address Subscription Input Bar */}
            <div className="pt-4 sm:pt-6 max-w-md w-full">
              <form onSubmit={handleSubscribe} className="bg-white rounded-full p-1 sm:p-1.5 flex items-center shadow-2xl border border-stone-100 w-full">
                <div className="pl-3 sm:pl-3.5 pr-1.5 sm:pr-2 text-stone-400">
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-stone-800 placeholder-stone-400 text-xs font-semibold bg-transparent border-none focus:outline-none pr-2 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#FF2A54] hover:bg-[#e0244b] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-bold text-xs tracking-wide transition-all shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
