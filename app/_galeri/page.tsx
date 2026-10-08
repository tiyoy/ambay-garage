"use client";

import { useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import GalleryGrid from "@/components/sections/galeri/GalleryGrid";
import Lightbox from "@/components/sections/galeri/Lightbox";
import HazardDivider from "@/components/ui/HazardDivider";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/constants";

const VISIBLE_COUNT = 6;

export default function GaleriPage() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const hasMoreItems = GALLERY_ITEMS.length > VISIBLE_COUNT;
  const visibleItems = showAll
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.slice(0, VISIBLE_COUNT);

  return (
    <div className="pt-[68px]">
      <PageHeader
        eyebrow="Hasil Kerja"
        title="Galeri"
        description="Beberapa motor yang udah kelar kami tangani — dari restorasi total sampai pengecatan custom. Klik foto buat lihat lebih besar."
      />

      <HazardDivider />

      <section className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid items={visibleItems} onTileClick={setActiveItem} />

          {hasMoreItems && (
            <div className="flex justify-center mt-10 md:mt-12">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="font-mono text-sm text-cobalt-bright hover:text-cobalt-dim 
                transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{showAll ? "Sembunyikan" : "Lihat Selengkapnya"}</span>
                <span className="material-symbols-outlined text-lg">
                  {showAll ? "expand_less" : "expand_more"}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}