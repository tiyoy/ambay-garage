import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";

type SpecItem = {
  label: string;
  value: string;
};

const PROJECT_SPECS: SpecItem[] = [
  { label: "Durasi", value: "1 Bulan" },
  { label: "Jenis", value: "Restorasi Penuh" },
  { label: "Basis", value: "Honda GL PRO 145"},
];

const PROJECT_IMAGE = {
  src: "/img/beranda/HONDA GL PRO 145.png",
  alt: "Motor custom hasil restorasi Ambay Garage terparkir di dalam bengkel",
};

export default function ProjectHighlight() {
  return (
    <section
      id="sorotan-proyek"
      className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <RevealSection
          as="div"
          className="photo-frame relative overflow-hidden hidden lg:block border border-steel-dim/20 aspect-[4/3]"
        >
          <Image
            alt={PROJECT_IMAGE.alt}
            src={PROJECT_IMAGE.src}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealSection>

        <RevealSection className="flex flex-col items-start">
          <span className="font-mono text-base uppercase mb-4 flex items-center gap-2 text-cobalt-bright font-semibold tracking-tight">
            Sorotan Proyek
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-paper uppercase mb-6 font-semibold">
            Honda GL PRO 145
          </h2>

          <div className="photo-frame relative overflow-hidden block lg:hidden border border-steel-dim/20 w-full mb-6 aspect-[4/3]">
            <Image
              alt={PROJECT_IMAGE.alt}
              src={PROJECT_IMAGE.src}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="font-body text-lg text-steel mb-6 leading-relaxed">
            Sebulan penuh proses restorasi di 2025, motor dengan karakter lawas
            ini kita hidupkan lagi — bukan buat ngilangin jejak masa lalunya,
            tapi mempertahankan apa yang bikin dia spesial dengan gaya bratcafe
            berbalut warna cream. Tiap goresan dan detailnya jadi bagian dari
            cerita yang kita hidupkan lagi. Kenalin,{" "}
            <strong>&ldquo;BABUSKHA BOI&rdquo;</strong>.
          </p>

          <div className="grid grid-cols-3 md:flex lg:flex-wrap gap-3 md:gap-8 mb-8 border-y border-steel-dim/20 py-6 w-full items-start">
            {PROJECT_SPECS.map((spec) => (
              <div key={spec.label} className="flex flex-col">
                <span className="font-mono text-[14px] uppercase text-steel mb-1 flex items-center gap-1 font-semibold">
                  {spec.label}
                </span>
                <span className="font-body text-base text-paper">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Nonaktif: galeri <a
            href="/galeri"
            className="w-full sm:w-auto bg-cobalt text-paper font-mono text-sm font-semibold px-4 md:px-5 py-3.5 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 uppercase rounded-sm"
          >
            <span className="material-symbols-outlined text-base">
              photo_library
            </span>
            Lihat Galeri Penuh
          </a> */}
        </RevealSection>
      </div>
    </section>
  );
}