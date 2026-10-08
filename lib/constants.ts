export const CONTACT = {
  whatsappNumber: "628999121586",
  whatsappUrl: "https://wa.me/628999121586",
  email: "ambaygarage66@gmail.com",
  address:
    "GRRQ+299, RT.3/RW.7 No. 13, Harapan Jaya, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16914",
  phoneDisplay: "+62 899 9121 586",
  operatingHours: "Senin–Sabtu: 10:00–20:00",
  operatingHoursClosed: "Minggu & hari libur: Tutup",
} as const;

export type ConditionKey = "normal" | "bermasalah" | "mangkrak";

export type ServiceEstimate = Partial<
  Record<ConditionKey, { min: number; max: number }>
>;

export type Service = {
  code: string;
  icon: string;
  title: string;
  description: string;
  priceLabel: string;
  estimate: ServiceEstimate;
  checklist: string[];
  duration: string;

  visibleByDefault: boolean;
};

export const SERVICES: Service[] = [
  {
    code: "WO-01",
    icon: "history",
    title: "Restorasi Penuh",
    description:
      "Bongkar total sampai ke rangka, rebuild mesin dari nol, dan finishing sesuai basis motor aslinya. Cocok buat motor yang lama nganggur di gudang atau kondisinya udah jauh dari standar pabrik.",
    priceLabel: "Mulai Rp 2.000.000",
    estimate: {
      normal: { min: 4_000_000, max: 8_000_000 },
      bermasalah: { min: 2_000_000, max: 3_000_000 },
      mangkrak: { min: 6_000_000, max: 8_000_000 },
    },
    checklist: [
      "Bongkar & blasting rangka",
      "Rebuild mesin total",
      "Kelistrikan diganti baru",
      "Finishing cat & jok",
    ],
    duration: "1–4 Minggu",
    visibleByDefault: true,
  },
  {
    code: "WO-02",
    icon: "settings_suggest",
    title: "Servis Rutin",
    description:
      "Perawatan berkala buat motor yang masih jalan normal. Ganti oli, cek karburator/injeksi, setel rantai dan rem — biar motor tetap enak dipakai harian.",
    priceLabel: "Mulai Rp 50.000",
    estimate: {
      normal: { min: 100_000, max: 150_000 },
      bermasalah: { min: 50_000, max: 100_000 },
      mangkrak: { min: 250_000, max: 400_000 },
    },
    checklist: [
      "Ganti oli mesin",
      "Setel karburator/injeksi",
      "Setel rantai & rem",
      "Cek tekanan ban & aki",
    ],
    duration: "Selesai hari yang sama",
    visibleByDefault: true,
  },
  {
    code: "WO-03",
    icon: "precision_manufacturing",
    title: "Turun Mesin",
    description:
      "Bongkar blok mesin, ukur ulang toleransi komponen, ganti part yang udah aus. Buat mesin yang ngempos, bocor kompresi, atau bunyi kasar.",
    priceLabel: "Mulai Rp 150.000",
    estimate: {
      normal: { min: 350_000, max: 400_000 },
      bermasalah: { min: 150_000, max: 250_000 },
      mangkrak: { min: 250_000, max: 600_000 },
    },
    checklist: [
      "Bongkar blok mesin",
      "Ukur toleransi komponen",
      "Ganti part yang aus",
      "Tes jalan setelah rakit",
    ],
    duration: "1 Minggu",
    visibleByDefault: true,
  },
  {
    code: "WO-04",
    icon: "electric_bolt",
    title: "Kelistrikan",
    description:
      "Rewiring jalur kabel yang rapi, ganti aki/koil, perbaikan lampu dan starter. Termasuk cek konsleting yang suka bikin motor mogok mendadak.",
    priceLabel: "Mulai Rp 50.000",
    estimate: {
      normal: { min: 50_000, max: 150_000 },
      bermasalah: { min: 100_000, max: 200_000 },
      mangkrak: { min: 150_000, max: 250_000 },
    },
    checklist: [
      "Rewiring jalur kabel",
      "Cek & perbaiki konsleting",
      "Ganti aki/koil bila perlu",
      "Perbaikan lampu & starter",
    ],
    duration: "2-7 hari",
    visibleByDefault: false,
  },
  {
    code: "WO-05",
    icon: "format_paint",
    title: "Pengecatan Custom",
    description:
      "Dari matte solid sampai skema custom sesuai referensi. Termasuk dempul, primer, dan clear coat — bukan cat semprot kalengan.",
    priceLabel: "Mulai Rp 150.000",
    estimate: {
      normal: { min: 150_000, max: 500_000 },
      bermasalah: { min: 200_000, max: 600_000 },
    },
    checklist: [
      "Dempul & primer",
      "Warna sesuai referensi",
      "Clear coat finishing",
      "Pemasangan ulang body",
    ],
    duration: "3-7 hari",
    visibleByDefault: false,
  },
];

export type GalleryItem = {
  src: string;
  fullSrc: string;
  alt: string;
  caption: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/img/galeri/HONDA GL MAX 15 - JAPSTYLE.png",
    fullSrc: "/img/galeri/HONDA GL MAX 15 - JAPSTYLE.png",
    alt: "Honda GL Max 125 custom japstyle warna abu-abu hitam",
    caption: "Honda GL Max 125 — Japstyle",
  },
  {
    src: "/img/galeri/HONDA GL MAX UP - BRATCAFE.png",
    fullSrc: "/img/galeri/HONDA GL MAX UP - BRATCAFE.png",
    alt: "Honda GL Max custom bratcafe abu-abu",
    caption: "Honda GL Max — Bratcafe",
  },
  {
    src: "/img/galeri/THUNDER 125 - CAFERACER.png",
    fullSrc: "/img/galeri/THUNDER 125 - CAFERACER.png",
    alt: "Suzuki Thunder 125 custom caferacer hitam",
    caption: "Thunder 125 — Caferacer",
  },
  {
    src: "/img/galeri/YAMAHA R15 X XSR 150.png",
    fullSrc: "/img/galeri/YAMAHA R15 X XSR 150.png",
    alt: "Yamaha R15 X XSR 150 custom warna hitam",
    caption: "Yamaha R15 X XSR 150 — Scrambler",
  },
  {
    src: "/img/galeri/HONDA GL PRO 145 - BRATCAFE.png",
    fullSrc: "/img/galeri/HONDA GL PRO 145 - BRATCAFE.png",
    alt: "HONDA GL PRO 145 bratcafe custom warna cream",
    caption: "HONDA GL PRO 145 — Bratcafe",
  },
  {
    src: "/img/galeri/HONDA GL PRO 1983 - JAPSTYLE.png",
    fullSrc: "/img/galeri/HONDA GL PRO 1983 - JAPSTYLE.png",
    alt: "HONDA GL PRO 1983 japstyle custom warna putih",
    caption: "HONDA GL PRO 1983 - Japstyle",
  },
  {
    src: "/img/galeri/TB RIDE 160 - BRATCAFE.png",
    fullSrc: "/img/galeri/TB RIDE 160 - BRATCAFE.png",
    alt: "TB RIDE 160 bratcafe custom warna abu-abu",
    caption: "TB RIDE 160 — Bratcafe",
  },
];
