import RevealSection from "@/components/ui/RevealSection";
import { CONTACT } from "@/lib/constants";

type FinalCtaProps = {
  variant?: "home" | "tentang";
};

export default function FinalCta({ variant = "home" }: FinalCtaProps) {
  if (variant === "tentang") {
    return (
      <section className="relative py-20 md:py-28 px-[24px] md:px-[48px] lg:px-[80px] bg-oil-black">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="rivet-plate w-14 h-14 mb-6 flex items-center justify-center text-cobalt-bright">
            <span className="material-symbols-outlined text-3xl">handyman</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-paper uppercase mb-4 font-semibold">
            Mau Motor Lo Kami Tangani?
          </h2>
          <p className="font-body text-lg text-steel mb-8 max-w-md font-medium">
            Kirim foto dan ceritain kondisi motornya — kami balas dengan
            rencana kerja dan estimasi.
          </p>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cobalt text-paper font-mono text-sm font-semibold px-8 py-4 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 uppercase tracking-tight font-medium"
          >
            Chat via WhatsApp
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-28 px-[24px] md:px-[48px] overflow-hidden bg-oil-black">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1723042292166-c2f16ddae337?fm=jpg&q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oil-black via-oil-black/95 to-oil-black/70" />
      </div>

      <RevealSection className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="rivet-plate w-14 h-14 mb-6 flex items-center justify-center text-cobalt-bright">
          <span className="material-symbols-outlined text-3xl">handyman</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-paper uppercase mb-6 tracking-tight font-semibold">
          Motor Lo Gimana Kabarnya?
        </h2>
        <p className="font-body text-lg md:text-xl text-steel max-w-2xl mb-12 leading-relaxed font-medium">
          Mangkrak, bermasalah, atau cuma butuh servis rutin — kirim foto dan
          ceritain kondisinya, kami balas dengan perkiraan dan jadwal.
        </p>

        <div className="w-full max-w-xl bg-plate p-6 sm:p-8 md:p-10 border border-steel-dim/25 shadow-2xl">
          <h3 className="font-display text-2xl text-paper uppercase mb-3 font-semibold">
            Mulai Konsultasi
          </h3>
          <p className="font-body text-lg text-steel mb-6 font-medium">
            Kirim foto dan keluhan motor lo — kami balas dengan rencana
            kerja dan estimasi biaya.
          </p>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-cobalt text-paper font-mono text-sm font-semibold px-10 py-4 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 mx-auto uppercase tracking-tight font-medium"
          >
            Chat via WhatsApp
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </a>
        </div>
      </RevealSection>
    </section>
  );
}