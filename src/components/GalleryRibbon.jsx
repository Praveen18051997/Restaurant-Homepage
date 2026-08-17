import React from 'react';
import { Instagram } from 'lucide-react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import blog1 from '../assets/blog-1.jpg';
import fc3 from '../assets/FC-3.png';

export default function GalleryRibbon() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    blog1,
    fc3
  ];

  return (
    <section className="w-full overflow-hidden bg-stone-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden group cursor-pointer"
          >
            <img
              src={imgUrl}
              alt={`Food Gallery ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Instagram className="w-8 h-8 text-[#FFB800]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

