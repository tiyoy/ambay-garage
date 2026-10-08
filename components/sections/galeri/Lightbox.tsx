"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/constants";

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  const isOpen = item !== null;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="lightbox"
      className={isOpen ? "open" : ""}
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau foto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button id="lightbox-close" className="cursor-pointer" aria-label="Tutup pratinjau" onClick={onClose}>
        <span className="material-symbols-outlined text-paper">close</span>
      </button>
      {item && (
        <div className="relative">
          <div
            id="lightbox-img"
            className="relative w-[90vw] max-w-[1100px] aspect-[4/5] max-h-[80vh]"
          >
            <Image
              src={item.fullSrc}
              alt={item.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          
        </div>
      )}
    </div>
  );
}