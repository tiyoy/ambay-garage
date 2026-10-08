"use client";

import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ICONS: Record<string, string> = {
  Beranda: "home",
  Layanan: "build",
  Galeri: "photo_library",
  "Tentang kami": "info",
};

type MobileMenuProps = {
  id: string;
  isOpen: boolean;
  navItems: NavItem[];
  whatsappUrl: string;
  onLinkClick: () => void;
};

export default function MobileMenu({
  id,
  isOpen,
  navItems,
  whatsappUrl,
  onLinkClick,
}: MobileMenuProps) {
  return (
    <nav
      id={id}
      className={`lg:hidden border-t border-steel-dim/30 bg-oil-black px-[8px] md:px-[30px] lg:px-[80px] ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="flex flex-col px-margin-mobile gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className="font-mono uppercase font-medium text-steel hover:text-paper transition-colors py-3 border-b border-steel-dim/10 flex items-center gap-3 text-xs"
          >
            <span className="material-symbols-outlined text-lg">
              {NAV_ICONS[item.label]}
            </span>
            {item.label}
          </Link>
        ))}

        <div className="pb-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="self-start mt-4 bg-cobalt text-paper font-mono text-xs font-semibold px-4 py-3 uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm"
          >
            <span className="material-symbols-outlined text-lg">event_available</span>
            Booking Servis
          </a>
        </div>
      </div>
    </nav>
  );
}