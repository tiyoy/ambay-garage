import RevealSection from "@/components/ui/RevealSection";

type ReasonItem = {
  number: string;
  title: string;
  description: string;
};

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "Satu Tangan, Semua Proses",
    description:
      "Motor yang masuk ditangani mekanik yang sama dari awal sampai selesai — nggak dioper-oper ke pihak ketiga.",
  },
  {
    number: "02",
    title: "Boleh Pantau Progress",
    description:
      "Mau mampir tengah pengerjaan buat lihat rangka atau mesin dibongkar? Silakan, kami nggak sembunyiin proses.",
  },
  {
    number: "03",
    title: "Part Dikasih Tahu Dulu",
    description:
      "Sebelum ganti part, kami kabari dulu dan kasih pilihan — bukan tiba-tiba nongol di tagihan akhir.",
  },
  {
    number: "04",
    title: "Garansi Servis 30 Hari",
    description:
      "Ada keluhan yang berhubungan sama pekerjaan kami dalam 30 hari, kami cek dan benerin lagi tanpa biaya jasa.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="tentang"
      className="py-16 md:py-24 px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep"
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection className="mb-14 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-paper uppercase mb-4 font-semibold">
            Kenapa Ke Sini ?
          </h2>
          <p className="font-body text-base md:text-lg text-steel max-w-2xl font-medium">
            Bukan janji manis — ini yang bikin pelanggan balik lagi tiap
            servis rutin.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {REASONS.map((reason, index) => (
            <RevealSection
              key={reason.number}
              className={`flex gap-6 items-start border-b border-steel-dim/15 pb-8 ${
                index === REASONS.length - 1
                  ? "md:pb-0"
                  : index === REASONS.length - 2
                    ? "md:border-b-0"
                    : ""
              }`}
            >
              <span className="font-mono text-cobalt-bright text-xl shrink-0 pt-1">
                {reason.number}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-paper uppercase mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-lg text-steel leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}