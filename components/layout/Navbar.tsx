"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import useScrollHeader from "@/hooks/useScrollHeader";
import { CONTACT } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  // Nonaktif: tab Galeri { label: "Galeri", href: "/galeri" },
  { label: "Tentang kami", href: "/tentang" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";  
  const scrolledByPosition = useScrollHeader(20);
  const isScrolled = isHomepage ? scrolledByPosition : true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = "mobile-menu";

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      id="site-header"
      className={`fixed top-0 w-full z-50 ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="nav-row flex items-center w-full px-[24px] md:px-[48px] lg:px-[80px]">
        <Link href="/" className="brand-col shrink-0 flex items-center">
          <Image
            src="/img/logo_ag2.png"
            alt="Logo Ambay Garage"
            width={64}
            height={64}
            className="w-18 h-18 object-contain"
          />
        </Link>

        <nav className="nav-links hidden lg:flex items-center whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono uppercase font-medium tracking-wider text-steel hover:text-paper transition-all duration-300 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="actions-col ml-auto flex items-center justify-end gap-3 md:gap-4">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-cobalt text-paper font-mono text-[11px] leading-none font-semibold border border-cobalt hover:bg-cobalt-bright transition-all px-3.5 py-2 items-center gap-1.5 uppercase tracking-wider rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">event_available</span>
            Booking Servis
          </a>

          <button
            type="button"
            className="lg:hidden text-paper p-2 -mr-2 cursor-pointer"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <MobileMenu
        id={menuId}
        isOpen={isMenuOpen}
        navItems={NAV_ITEMS}
        whatsappUrl={CONTACT.whatsappUrl}
        onLinkClick={closeMenu}
      />
    </header>
  );
}