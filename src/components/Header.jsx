import React, { useState, useEffect } from 'react';
import { ShoppingBasket, ChevronDown, X, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", hasDropdown: true },
    { name: "About Us", href: "#about", hasDropdown: false },
    { name: "Shop", href: "#menu", hasDropdown: true },
    { name: "Blog", href: "#blog", hasDropdown: true },
    { name: "Pages", href: "#experience", hasDropdown: true },
    { name: "Contact", href: "#contact", hasDropdown: false }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white text-stone-900 shadow-sm border-b border-stone-100 transition-all duration-300 ${
      scrolled ? 'py-2.5 shadow-md' : 'py-3.5'
    }`}>
      {/* Full Width Edge-to-Edge Container matching Figma Header */}
      <div className="w-full px-6 sm:px-12 md:px-16 flex items-center justify-between">
        
        {/* Brand Logo Image */}
        <a href="#hero" className="flex items-center group shrink-0">
          <img
            src={logo}
            alt="TasteNest Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Nav Links - Title Case, font-sans, bold */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="font-sans text-sm font-extrabold text-stone-800 hover:text-orange-600 tracking-tight flex items-center gap-1 py-1 transition-colors"
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-stone-500 group-hover:text-orange-600 group-hover:rotate-180 transition-transform stroke-[2.5]" />
                )}
              </a>

              {/* Dropdown Menu Preview */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-2xl border border-stone-100 p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  <a href="#menu" className="block px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 hover:text-orange-600 rounded-lg">
                    Popular Items
                  </a>
                  <a href="#specials" className="block px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 hover:text-orange-600 rounded-lg">
                    Special Deals
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Green Shopping Basket Icon with Black Badge Counter */}
          <button
            className="relative p-1.5 text-emerald-600 hover:text-emerald-700 transition-colors"
            aria-label="Shopping Basket"
          >
            <ShoppingBasket className="w-6 h-6 stroke-[2.2]" />
            {/* Figma dark circle badge with white 0 */}
            <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-stone-950 text-white text-[10px] font-extrabold flex items-center justify-center shadow-sm px-1.5 py-0.5">
              {cartCount}
            </span>
          </button>

          {/* Vibrant Yellow "Contact Us" Button */}
          <a
            href="#contact"
            className="bg-[#FFC72C] hover:bg-amber-400 text-stone-950 px-7 py-2.5 rounded-xl font-sans text-sm font-extrabold tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all block"
          >
            Contact Us
          </a>

          {/* Menu Drawer Icon: Two horizontal dark lines */}
          <button
            onClick={() => setSidePanelOpen(true)}
            className="p-1.5 text-stone-800 hover:text-orange-600 transition-colors flex flex-col gap-1.5 justify-center group"
            aria-label="Toggle Side Info Drawer"
          >
            <span className="block h-[2.5px] w-5 bg-stone-800 rounded-full group-hover:bg-orange-600 transition-colors" />
            <span className="block h-[2.5px] w-3.5 bg-stone-800 rounded-full ml-auto group-hover:bg-orange-600 transition-colors" />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            className="relative p-1.5 text-emerald-600"
          >
            <ShoppingBasket className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-stone-950 text-white text-[9px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>
          <a
            href="#contact"
            className="bg-[#FFC72C] text-stone-950 px-3.5 py-1.5 rounded-lg font-sans text-xs font-bold block"
          >
            Contact Us
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : (
              <div className="space-y-1 w-5">
                <span className="block h-[2px] w-full bg-stone-900 rounded-full" />
                <span className="block h-[2px] w-3/4 bg-stone-900 rounded-full ml-auto" />
              </div>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-100 p-6 shadow-2xl space-y-3">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-stone-800 hover:text-orange-600 tracking-tight border-b border-stone-100 pb-2 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-stone-400" />}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Slide-Out Side Info Panel Overlay */}
      {sidePanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSidePanelOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative z-10 w-full max-w-md bg-stone-900 text-white h-full shadow-2xl p-8 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300">
            <div>
              {/* Header with Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <img src={logo} alt="TasteNest Logo" className="h-9 w-auto filter brightness-0 invert" />
                <button
                  onClick={() => setSidePanelOpen(false)}
                  className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Close side panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* About Brief */}
              <div className="mt-8 space-y-3">
                <span className="text-[#FFC72C] font-heading font-extrabold text-xs uppercase tracking-widest block">
                  About TasteNest
                </span>
                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-tight">
                  The Best Food Collection
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed font-medium">
                  TasteNest is the ultimate culinary destination offering handcrafted artisanal pizzas, sizzling burgers, and gourmet fast food experience since 2019.
                </p>
              </div>

              {/* Opening Hours Box */}
              <div className="mt-8 bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3">
                <div className="flex items-center gap-2.5 text-[#FFC72C]">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wide">Opening Hours</h4>
                </div>
                <div className="space-y-1.5 text-xs text-stone-300 font-medium">
                  <div className="flex justify-between border-b border-stone-800/80 pb-1.5">
                    <span>Tuesday – Saturday:</span>
                    <span className="font-bold text-white">12:00pm – 23:00pm</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday & Monday:</span>
                    <span className="font-bold text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="mt-8 space-y-4">
                <span className="text-[#22C55E] font-heading font-extrabold text-xs uppercase tracking-widest block">
                  Contact Info
                </span>

                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <MapPin className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                  <span>123 Gourmet Avenue, Culinary District, NY 10001</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <Phone className="w-4 h-4 text-[#FFC72C] shrink-0" />
                  <span>+1 (555) 234-5678</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <Mail className="w-4 h-4 text-[#FFC72C] shrink-0" />
                  <span>info@tastenest.com</span>
                </div>
              </div>
            </div>

            {/* Bottom Rating & CTA */}
            <div className="pt-8 border-t border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-[#FFC72C]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC72C] stroke-none" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-300">5-Star Rated on TripAdvisor</span>
              </div>

              <a
                href="#menu"
                onClick={() => setSidePanelOpen(false)}
                className="w-full bg-[#FF2A54] hover:bg-[#e0244b] text-white py-3 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-center block shadow-lg transition-colors"
              >
                Order Online Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
