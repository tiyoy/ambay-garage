import GalleryTile from "./GalleryTile";
import type { GalleryItem } from "@/lib/constants";

type GalleryGridProps = {
  items: GalleryItem[];
  onTileClick: (item: GalleryItem) => void;
};

export default function GalleryGrid({ items, onTileClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => (
        <GalleryTile
          key={item.caption}
          item={item}
          onClick={() => onTileClick(item)}
          priority={index < 3}
        />
      ))}
    </div>
  );
}