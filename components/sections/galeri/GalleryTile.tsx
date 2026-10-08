import Image from "next/image";
import type { GalleryItem } from "@/lib/constants";

type GalleryTileProps = {
  item: GalleryItem;
  onClick: () => void;
  priority?: boolean;
};

export default function GalleryTile({ item, onClick, priority = false }: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="gallery-tile aspect-square relative text-left"
      aria-label={`Lihat foto ${item.caption}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="gallery-caption">
        <p className="font-display text-lg text-paper uppercase">
          {item.caption.split(" — ")[0]}
        </p>
        <p className="font-mono text-xs text-steel-light">
          {item.caption.split(" — ")[1]}
        </p>
      </div>
    </button>
  );
}