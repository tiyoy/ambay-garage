import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Dev via LAN (http://192.168.1.9:3000): izinkan HP/laptop lain satu WiFi
  // memuat JS dev. Tanpa ini, chunk diblokir -> halaman tampil tapi
  // tidak ada interaksi/animasi (hidrasi mati).
  allowedDevOrigins: ["192.168.1.9"],
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
