import React, { useState } from 'react';
import footer1 from '../assets/footer-1.png';
import footer2 from '../assets/footer-2.png';
import logo from '../assets/logo.png';

export default function Footer({ onSubscribeNewsletter }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      if (onSubscribeNewsletter) {
        onSubscribeNewsletter(email);
      }
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#F4F6FC] text-stone-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Left Side Illustration Asset (footer-1.png) - Framed on left edge */}
      <img
        src={footer1}
        alt="Footer Left Illustration"
        className="hidden md:block absolute left-0 bottom-0 max-h-[85%] w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] pointer-events-none select-none z-0 object-contain object-left-bottom"
      />

      {/* Right Side Illustration Asset (footer-2.png) - Framed on right edge */}
      <img
        src={footer2}
        alt="Footer Right Illustration"
        className="hidden md:block absolute right-0 bottom-0 max-h-[85%] w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] pointer-events-none select-none z-0 object-contain object-right-bottom"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          
          {/* Red Brand Info Card Box (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#FF2A54] text-white rounded-[28px] p-7 shadow-md flex flex-col justify-between h-[310px] w-full max-w-[320px] mx-auto lg:mx-0">
            <div>
              {/* Logo */}
              <div className="mb-6">
                <img
                  src={logo}
                  alt="TasteNest Logo"
                  className="h-9 w-auto object-contain filter brightness-0 invert"
                />
              </div>

              {/* Hours */}
              <div className="space-y-2 text-sm font-semibold">
                <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
                <p className="font-bold underline underline-offset-4 decoration-white/40">
                  Closed on Sunday
                </p>
              </div>
            </div>

            {/* Rating Tag */}
            <div className="pt-3 border-t border-white/20">
              <p className="font-bold text-sm">
                5 star rated on TripAdvisor
              </p>
            </div>
          </div>

          {/* About Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3 pt-2">
            <div>
              <h4 className="font-heading text-xl font-bold text-stone-900">
                About
              </h4>
              <div className="w-10 h-1 bg-[#FFC72C] mt-1" />
            </div>

            <ul className="space-y-2.5 text-sm font-semibold text-stone-800 pt-2">
              <li><a href="#about" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Fredoka One</a></li>
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Special Dish</a></li>
              <li><a href="#reservation" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Reservation</a></li>
              <li><a href="#contact" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Contact</a></li>
            </ul>
          </div>

          {/* Menu Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3 pt-2">
            <div>
              <h4 className="font-heading text-xl font-bold text-stone-900">
                Menu
              </h4>
              <div className="w-10 h-1 bg-[#FFC72C] mt-1" />
            </div>

            <ul className="space-y-2.5 text-sm font-semibold text-stone-800 pt-2">
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Steaks</a></li>
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Burgers</a></li>
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Coctails</a></li>
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Bar B Q</a></li>
              <li><a href="#menu" className="hover:text-[#FF2A54] transition-colors flex items-center gap-1.5"><span className="text-[#FF2A54]">›</span> Desserts</a></li>
            </ul>
          </div>

          {/* Newsletter Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3 pt-2">
            <div>
              <h4 className="font-heading text-xl font-bold text-stone-900">
                Newsletter
              </h4>
              <div className="w-12 h-1 bg-[#FFC72C] mt-1" />
            </div>

            <p className="text-stone-600 text-sm font-medium pt-1">
              Get recent news and updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 max-w-xs pt-1">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-stone-900 placeholder-stone-400 text-sm py-3 px-4 rounded-xl border border-stone-200 shadow-sm focus:outline-none focus:border-[#FF2A54]"
              />
              
              {/* Outer Border Ring Box around Subscribe Button matching Figma */}
              <div className="inline-block p-1 border-2 border-stone-300/80 rounded-2xl bg-white shadow-sm">
                <button
                  type="submit"
                  className="bg-[#FF2A54] hover:bg-[#e0244b] text-white px-7 py-2.5 rounded-xl font-heading text-sm font-bold tracking-wide transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Yellow Bottom Border Line */}
        <div className="border-t-4 border-[#FFC72C] my-8" />

        {/* Copyright & Social Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-stone-900">
          <p>© 2025 TasteNest | All shawonetc3 Themes</p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-[#FF2A54] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#FF2A54] transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
}


