"use client";

import Image from "next/image";
import { useRef } from "react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-oil-black"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt="Mekanik bekerja pada motor custom di dalam bengkel bernuansa gelap dan hangat"
          src="/img/beranda/hero.jpeg"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oil-black via-oil-black/60 to-oil-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-oil-black/80 via-oil-black/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full min-h-screen min-h-[100svh] px-6 md:px-20 flex items-center justify-center text-center">
        <div className="max-w-4xl w-full flex flex-col items-center py-16 md:py-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 bg-plate/80 border border-steel-dim/30 backdrop-blur-sm rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-bright shrink-0" />
            <span className="font-mono text-[12px] md:text-[14px] text-steel-light">
              CIBINONG, KAB. BOGOR — BUKA SEJAK 2022
            </span>
          </div>

          <h1 className="font-display text-[34px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px] text-paper uppercase tracking-tight mb-6 lg:mb-8 font-semibold">
            Bangun Motor,
            <span className="text-cobalt-bright"> Wujudkan Karakter.</span>
          </h1>

          <p className="font-body text-base md:text-lg lg:text-lg text-steel-light max-w-md mb-8 lg:mb-10 leading-relaxed font-medium">
            Restorasi dan servis motor custom dengan tangan yang sama, dari
            bongkar mesin sampai cat akhir.
          </p>

          <div className="flex flex-row gap-3 lg:gap-4 items-center justify-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cobalt text-paper font-mono text-[10px] xs:text-xs md:text-sm leading-none font-semibold px-4 md:px-8 py-3 md:py-4 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-1 md:gap-1.5 uppercase tracking-wider whitespace-nowrap rounded-sm"
            >
              <span className="material-symbols-outlined text-sm md:text-base">
                event_available
              </span>
              Booking Servis
            </a>
            {/* Nonaktif: galeri <a
              href="/galeri"
              className="border border-steel-dim text-paper font-mono text-[10px] xs:text-xs md:text-sm leading-none font-semibold px-4 md:px-8 py-3 md:py-4 hover:border-paper transition-all flex items-center justify-center gap-1 md:gap-1.5 uppercase tracking-wider whitespace-nowrap rounded-sm"
            >
              <span className="material-symbols-outlined text-sm md:text-base">
                photo_library
              </span>
              Lihat Hasil Karya
            </a> */}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll ke bagian berikutnya"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-steel hover:text-paper transition-colors cursor-pointer"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="material-symbols-outlined text-lg animate-bounce">
          south
        </span>
      </button>
    </section>
  );
}
