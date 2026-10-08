import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri hasil kerja Ambay Garage — restorasi total, pengecatan custom, dan turun mesin motor klasik di Cibinong, Bogor.",
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}