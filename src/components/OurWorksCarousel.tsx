import React from 'react';
import { Sparkles } from 'lucide-react';

const modules = import.meta.glob('../assets/Image_*.*', { eager: true });
const images = Object.values(modules).map((mod: any) => mod.default);

export const OurWorksCarousel: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Our Works</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          Visual Evidence of Our Quality
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-3">
          Take a look at some of the facilities we maintain across Pune and PCMC.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col group">
        <div className="flex w-max animate-infinite-scroll gap-4 sm:gap-6 px-4">
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="w-[280px] h-[200px] sm:w-[380px] sm:h-[260px] shrink-0 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-200"
            >
              <img
                src={src as string}
                alt={`Our work ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Gradient fades for edge smoothing */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
};
