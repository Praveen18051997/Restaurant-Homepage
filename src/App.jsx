import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromoBanners from './components/PromoBanners';
import AboutSection from './components/AboutSection';
import CategoryItems from './components/CategoryItems';
import DeliveryChallenge from './components/DeliveryChallenge';
import AsymmetricGrid from './components/AsymmetricGrid';
import MenuSection from './components/MenuSection';
import FoodCarousel from './components/FoodCarousel';
import QualityService from './components/QualityService';
import HowWeServe from './components/HowWeServe';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import GalleryRibbon from './components/GalleryRibbon';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#FF2A54] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Promo Banners Grid */}
        <PromoBanners />

        {/* 4. About Showcase Section */}
        <AboutSection />

        {/* 5. Hot Delicious Item (Category Tabs) */}
        <CategoryItems />

        {/* 6. 30 Minutes Fast Delivery Challenge */}
        <DeliveryChallenge />

        {/* 7. Asymmetric Offer Grid */}
        <AsymmetricGrid />

        {/* 8. Trending Food Menu */}
        <MenuSection />

        {/* 9. 3-Image Food Carousel */}
        <FoodCarousel />

        {/* 10. Quality Service Section */}
        <QualityService />

        {/* 11. HOW WE SERVE YOU? */}
        <HowWeServe />

        {/* 12. Testimonials Section */}
        <TestimonialsSection />

        {/* 13. Update News & Blog */}
        <BlogSection />

        {/* 14. 5-Photo Instagram Gallery Ribbon */}
        <GalleryRibbon />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}

