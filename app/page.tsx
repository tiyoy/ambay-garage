import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LayananPreview from "@/components/sections/LayananPreview";
// import Stats from "@/components/sections/Stats"; // Nonaktif: section Statistik
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import ProjectHighlight from "@/components/sections/ProjectHighlight"; // Nonaktif: section Sorotan Proyek
import CalculatorPointer from "@/components/sections/CalculatorPointer";
// import Testimonials from "@/components/sections/Testimonials"; // Nonaktif: section Papan Cerita
import FinalCta from "@/components/sections/FinalCta";
import LocationMap from "@/components/sections/tentang/LocationMap";
import HazardDivider from "@/components/ui/HazardDivider";

export const metadata: Metadata = {
  title: "Beranda | AMBAY GARAGE",
  description:
    "Bengkel motor custom & restorasi klasik di Cibinong, Bogor. Restorasi penuh, servis rutin, turun mesin, kelistrikan, dan pengecatan custom sejak 2022.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HazardDivider withRide />
      <LayananPreview />
      {/* Nonaktif: section Statistik <Stats /> */}
      <WhyChooseUs />
      <HazardDivider />
      {/* Nonaktif: section Sorotan Proyek <ProjectHighlight /> */}
      <CalculatorPointer />
      {/* Nonaktif: section Papan Cerita <Testimonials /> */}
      <HazardDivider />
      <FinalCta variant="home" />
      <LocationMap />
    </>
  );
}