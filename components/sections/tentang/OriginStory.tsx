import RevealSection from "@/components/ui/RevealSection";
import PhotoCarousel from "@/components/ui/PhotoCarousel";

const ORIGIN_PHOTOS = [
  {
    src: "/img/tentang/bengkel_ambay_garage_1.png",
    alt: "Tampak depan bengkel Ambay Garage di siang hari",
  },
  {
    src: "/img/tentang/bengkel_ambay_garage_2.png.jpeg",
    alt: "Mekanik Ambay Garage mengerjakan rangka motor custom",
  },
  {
    src: "/img/tentang/bengkel_ambay_garage_3.jpeg",
    alt: "Suasana kerja malam hari di bengkel Ambay Garage",
  },
];

export default function OriginStory() {
  return (
    <section className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-plate-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div className="contents lg:block lg:order-2">
          <RevealSection className="order-1 lg:order-none">
            <h2 className="font-display text-3xl lg:text-4xl text-paper uppercase font-semibold lg:mb-6">
              Dimulai dari Garasi Rumah
            </h2>
          </RevealSection>

          <RevealSection className="order-3 lg:order-none">
            <p className="font-body text-lg text-steel leading-relaxed mb-4 font-medium">
              Bengkel sederhana yang dibangun atas dasar hobi dua bersaudara,
              selain dari ide usaha berawal dari hobi inilah menjadikan bengkel
              ini lahir dengan tujuan membuat hasil karya motor custom handmade
              bergaya klasik modern dan restorasi motor lawas. Kami hadir
              sebagai solusi kaum penggemar motor custom dengan tagline "Bangun
              Motor wujudkan karakter!" dengan budget pelajar dan selalu
              berkomitmen untuk terus berkembang.
            </p>
          </RevealSection>
        </div>

        <RevealSection className="order-2 lg:order-1">
          <PhotoCarousel items={ORIGIN_PHOTOS} />
        </RevealSection>
      </div>
    </section>
  );
}
