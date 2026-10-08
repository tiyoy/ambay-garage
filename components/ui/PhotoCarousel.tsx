"use client";

import { useState } from "react";
import Image from "next/image";

type PhotoCarouselItem = {
  src: string;
  alt: string;
};

type PhotoCarouselProps = {
  items: PhotoCarouselItem[];
};

export default function PhotoCarousel({ items }: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="photo-frame relative overflow-hidden border border-steel-dim/20 aspect-[4/5] md:aspect-video lg:aspect-[4/3]">
        {items.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              alt={item.alt}
              src={item.src}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-oil-black/60 hover:bg-oil-black/85 text-paper transition-colors rounded-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-oil-black/60 hover:bg-oil-black/85 text-paper transition-colors rounded-full cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Lihat foto ${index + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                index === activeIndex
                  ? "w-6 bg-cobalt-bright"
                  : "w-1.5 bg-steel-dim hover:bg-steel"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
