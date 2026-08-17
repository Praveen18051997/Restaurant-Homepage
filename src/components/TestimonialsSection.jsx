import React, { useState } from 'react';
import { Star } from 'lucide-react';
import testimonialImg from '../assets/testimonial.jpg';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Piter Bowman',
    role: 'Business CEO & Co Founder',
    quote: '“Thank You For Dinner Last Night. It Was Amazing!! I Have Say It’s The Best Meal I Have Had In Quite Some Time. Will Definitely Be Seeing More Eating Next Year.”',
    rating: 5,
    chefImage: testimonialImg
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Lead Food Critic & Writer',
    quote: '“The food arrived steaming hot, incredibly fresh, and delivered in less than 25 minutes! Best gourmet burgers and crispy French fries in the city.”',
    rating: 5,
    chefImage: testimonialImg
  },
  {
    id: 3,
    name: 'Michael Ross',
    role: 'Executive Event Planner',
    quote: '“Sensational dining experience! The artisanal pizzas and signature sauces exceeded all expectations for our corporate dinner party.”',
    rating: 5,
    chefImage: testimonialImg
  },
  {
    id: 4,
    name: 'Emily Watson',
    role: 'Gourmet Restrateur',
    quote: '“Top notch organic ingredients and exceptional taste! Every dish feels like it was crafted by a master executive chef.”',
    rating: 5,
    chefImage: testimonialImg
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chef Image with Green "Feedback" Tab */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            
            {/* Green Vertical Feedback Tab */}
            <div className="hidden lg:block absolute lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[#00B050] text-white px-2 py-4 rounded-l-md font-heading font-bold text-xs uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 shadow-md select-none">
              Feedback
            </div>

            {/* Main Chef Portrait */}
            <div className="relative z-10 w-full max-w-[340px] h-[300px] sm:h-[460px] bg-stone-900 shadow-xl overflow-hidden group rounded-2xl sm:rounded-none">
              <img
                src={current.chefImage}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

          {/* Right Column: Review Text & Details */}
          <div className="lg:col-span-7 text-center space-y-6">
            
            {/* Reviewer Name & Title */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-wide">
                {current.name}
              </h3>
              <p className="text-[#FFB800] font-bold text-xs sm:text-sm uppercase tracking-wider mt-1">
                {current.role}
              </p>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-stone-900 leading-snug tracking-tight max-w-2xl mx-auto">
              {current.quote}
            </blockquote>

            {/* 5 Gold Stars */}
            <div className="flex justify-center gap-1.5 text-[#FFB800]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFB800] stroke-none" />
              ))}
            </div>

            {/* Carousel Navigation Dots Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-white border border-stone-300 rounded-full px-5 py-2 shadow-sm">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="focus:outline-none p-1 transition-all"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {idx === activeIndex ? (
                      <div className="w-4 h-4 rounded-full border-2 border-[#00B050] flex items-center justify-center p-0.5">
                        <div className="w-1.5 h-1.5 bg-[#00B050] rounded-full" />
                      </div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-stone-300 hover:bg-stone-500 transition-colors" />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

