import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import OriginStory from "@/components/sections/tentang/OriginStory";
import LocationMap from "@/components/sections/tentang/LocationMap";
import FinalCta from "@/components/sections/FinalCta";
import HazardDivider from "@/components/ui/HazardDivider";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Bengkel motor custom di Cibinong, Bogor yang fokus di restorasi dan bikin ulang karakter motor lawas.",
};

export default function TentangPage() {
  return (
    <div className="pt-[68px]">
      <PageHeader
        eyebrow="Siapa Kami?"
        title="Tentang Kami"
        description="Bengkel motor custom di Cibinong, Bogor yang fokus di restorasi dan bikin ulang karakter motor lawas."
      />

      <HazardDivider />

      <OriginStory />

      <HazardDivider />

      <LocationMap />

      <FinalCta variant="tentang" />
    </div>
  );
}