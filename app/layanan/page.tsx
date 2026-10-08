import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ServiceListToggle from "@/components/sections/layanan/ServiceListToggle";
import EstimateCalculator from "@/components/sections/layanan/EstimateCalculator";
import HazardDivider from "@/components/ui/HazardDivider";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Lima jenis pekerjaan yang paling sering ditangani Ambay Garage: restorasi penuh, servis rutin, turun mesin, kelistrikan, dan pengecatan custom.",
};

export default function LayananPage() {
  return (
    <div className="pt-[68px]">
      <PageHeader
        eyebrow="Daftar Pekerjaan"
        title="Layanan Kami"
        description="Lima jenis pekerjaan yang paling sering kami tangani. Harga di bawah kisaran awal — biaya pasti tergantung kondisi motor pas dicek langsung di garasi."
        imageSrc="/img/beranda/hero.jpeg"
        imageAlt="Mekanik memperbaiki mesin motor close-up di bengkel"
      />

      <HazardDivider />

      <section className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-plate-low">
        <ServiceListToggle services={SERVICES} />
      </section>

      <HazardDivider />

      <section
        id="kalkulator"
        className="py-20 md:py-24 px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <span className="font-mono text-base uppercase text-cobalt-bright block mb-3 tracking-tight font-semibold">
              Kalkulator
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-paper uppercase mb-4 font-semibold">
              Cek Kisaran Biaya
            </h2>
            <p className="font-body text-base md:text-lg text-steel font-medium">
              Perkiraan awal — harga pasti ditentukan setelah motor dicek langsung.
            </p>
          </div>

          <EstimateCalculator />
        </div>
      </section>
    </div>
  );
}