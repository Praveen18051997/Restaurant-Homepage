import React from 'react';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';
import burgerOutline from '../assets/burger1.png';
import friesOutline from '../assets/fries.png';

const BLOG_ITEMS = [
  {
    id: "b-1",
    date: "15 Feb 2024",
    comments: "Comments (0)",
    category: "Burger",
    title: "Quick Cravings: Unraveling Fast Food Delights",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: blog1
  },
  {
    id: "b-2",
    date: "15 Feb 2024",
    comments: "Comments (0)",
    category: "Hot Dog",
    title: "Veggie Vibes: Garden Fresh Delightful Creations",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: blog2
  },
  {
    id: "b-3",
    date: "15 Feb 2024",
    comments: "Comments (2)",
    category: "Pasta",
    title: "Bold Bite: Exotic Flavors, Global Adventure",
    description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage...",
    image: blog3
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Floating Side Outline Decorative Assets */}
      <img
        src={burgerOutline}
        alt="Burger Outline"
        className="absolute left-2 sm:left-6 lg:left-12 top-1/3 w-16 sm:w-20 lg:w-24 opacity-60 pointer-events-none select-none"
      />
      <img
        src={friesOutline}
        alt="Fries Outline"
        className="absolute right-2 sm:right-6 lg:right-12 bottom-6 sm:bottom-10 w-14 sm:w-16 lg:w-20 opacity-60 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold text-xs sm:text-sm tracking-wide uppercase mb-2">
            NEWS & BLOG
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 tracking-tight">
            Update News & Blog
          </h2>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ITEMS.map((post) => (
            <div
              key={post.id}
              className="bg-[#F6F4EE] rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
            >
              {/* Image & Bottom-Right Category Badge */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Yellow Category Badge at Bottom-Right */}
                <div className="absolute bottom-0 right-0 bg-[#FFB800] text-stone-950 px-6 py-2 rounded-tl-2xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Date & Comments */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-stone-900">
                    <span>{post.date}</span>
                    <span>{post.comments}</span>
                  </div>

                  {/* Green Underline Divider */}
                  <div className="border-b border-emerald-400/40 my-3" />

                  {/* Post Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>

                  {/* Post Description */}
                  <p className="text-stone-500 text-xs sm:text-sm font-normal leading-relaxed mt-2 line-clamp-4">
                    {post.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


