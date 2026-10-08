import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/ui/SocialIcons";
import { CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  // Nonaktif: Galeri { label: "Galeri", href: "/galeri" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Pemesanan", href: CONTACT.whatsappUrl, external: true },
];

const SERVICE_LINKS = [
  { label: "Restorasi Penuh", href: "/layanan" },
  { label: "Servis Rutin", href: "/layanan" },
  { label: "Turun Mesin", href: "/layanan" },
  { label: "Kelistrikan", href: "/layanan" },
  { label: "Pengecatan Custom", href: "/layanan" },
];

const CONTACT_INFO = [
  { icon: "location_on", text: CONTACT.address },
  { icon: "call", text: CONTACT.phoneDisplay },
  { icon: "mail", text: CONTACT.email },
  { icon: "schedule", text: CONTACT.operatingHours },
];

export default function Footer() {
  return (
    <footer className="bg-plate-low text-paper py-10 px-[24px] md:px-[48px] lg:px-[80px] border-t border-steel-dim/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex flex-col gap-6 col-span-2 lg:col-span-1">
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/img/logo_ag.png"
                alt="Logo Ambay Garage"
                width={80}
                height={80}
                className="w-18 h-18 object-contain"
              />
            </Link>
            <p className="font-body text-lg text-steel leading-relaxed font-medium">
              Bengkel motor custom &amp; restorasi klasik di Cibinong, Bogor.
            </p>
            <SocialIcons />
          </div>

          <FooterLinkGroup title="Tautan Cepat" links={QUICK_LINKS} />
          <FooterLinkGroup title="Layanan" links={SERVICE_LINKS} />

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-display text-lg text-paper uppercase mb-6 font-semibold">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item) => (
                <div key={item.text} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-cobalt-bright text-base shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-body text-base text-steel font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-dim/20 text-center">
          <p className="font-mono text-[13px] md:text-[14px] text-steel uppercase tracking-tight font-semibold">
            &copy; {new Date().getFullYear()} AMBAY GARAGE - Dibuat Dengan ❤️
            Oleh{" "}
            <a
              href="https://www.instagram.com/cecep.maulana_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cecep Maulanaツ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkGroupProps = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h4 className="font-display text-lg text-paper uppercase mb-6 font-semibold">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((item) =>
          item.external ? (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-steel hover:text-cobalt-bright transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-body text-base text-steel hover:text-cobalt-bright transition-colors font-medium"
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
