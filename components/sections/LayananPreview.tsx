import RevealSection from "@/components/ui/RevealSection";
import { SERVICES } from "@/lib/constants";

const PREVIEW_CODES = ["WO-01", "WO-02", "WO-05"] as const;

const PREVIEW_DESCRIPTIONS: Record<string, string> = {
  "WO-01":
    "Bongkar total sampai rangka, rebuild mesin, dan finishing sesuai basis motor aslinya.",
  "WO-02":
    "Ganti oli, cek karburator/injeksi, setel rantai dan rem. Buat perawatan berkala.",
  "WO-05": "Dari matte solid sampai skema custom sesuai referensi kamu.",
};

const PREVIEW_SPAN_EXTRA: Record<string, string> = {
  "WO-05": "md:col-span-2 lg:col-span-1",
};

const servicePreviews = PREVIEW_CODES.map((code) => {
  const service = SERVICES.find((item) => item.code === code)!;
  return {
    code: service.code,
    icon: service.icon,
    title: service.title,
    price: service.priceLabel,
    description: PREVIEW_DESCRIPTIONS[code],
    spanExtra: PREVIEW_SPAN_EXTRA[code],
  };
});

export default function LayananPreview() {
  return (
    <section
      id="layanan"
      className="relative py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep grain"
    >
      <div className="max-w-7xl mx-auto relative">
        <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <span className="font-mono text-base text-cobalt-bright tracking-tight uppercase block mb-3 font-semibold">
              Daftar Pekerjaan
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-paper font-semibold">
              LAYANAN KAMI
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-steel max-w-md">
            Harga di bawah kisaran awal — biaya pasti tergantung kondisi motor
            pas dicek langsung.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {servicePreviews.map((service) => (
            <RevealSection
              key={service.code}
              className={`ticket bg-plate pt-8 pb-7 px-7 flex flex-col gap-4 border border-steel-dim/15 ${
                service.spanExtra ?? ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="material-symbols-outlined text-3xl text-cobalt-bright">
                  {service.icon}
                </span>
                <span className="font-mono text-[14px] text-steel">
                  {service.code}
                </span>
              </div>
              <h3 className="font-display text-2xl text-paper uppercase">
                {service.title}
              </h3>
              <p className="font-body text-lg text-steel leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-steel-dim/20 pt-4">
                <span className="font-mono text-base text-chrome">
                  {service.price}
                </span>
                <a
                  href="/layanan"
                  className="text-cobalt-bright hover:text-cobalt-dim transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="flex justify-center mt-10 md:mt-12">
          <a
            href="/layanan"
            className="border border-steel-dim text-paper font-mono text-xs md:text-sm font-semibold px-7 md:px-8 py-3.5 md:py-4 hover:border-cobalt-bright hover:text-cobalt-bright transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            Lihat Semua Layanan
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </RevealSection>
      </div>
    </section>
  );
}