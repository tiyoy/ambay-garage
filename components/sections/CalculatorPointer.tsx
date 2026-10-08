import RevealSection from "@/components/ui/RevealSection";

export default function CalculatorPointer() {
  return (
    <section className="py-16 md:py-20 px-[24px] md:px-[48px] bg-plate-low border-y border-steel-dim/15">
      <RevealSection className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <span 
  className="material-symbols-outlined text-cobalt-bright mb-4"
  style={{ fontSize: '48px' }}
>
  calculate
</span>
        <h2 className="font-display text-3xl md:text-4xl text-paper uppercase mb-4 font-semibold">
          Mau Tahu Kisaran Biaya?
        </h2>
        <p className="font-body text-base md:text-lg text-steel mb-6 max-w-md font-medium">
          Cek detail tiap layanan dan hitung estimasi biaya sesuai kondisi motor
          lu di halaman Layanan.
        </p>
        <a
          href="/layanan#kalkulator"
          className="bg-cobalt text-paper font-mono text-sm font-semibold px-5 md:px-6 py-3.5 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 uppercase tracking-tight rounded-sm font-medium"
        >
          Buka Kalkulator Estimasi
          <span className="material-symbols-outlined text-base">
            arrow_forward
          </span>
        </a>
      </RevealSection>
    </section>
  );
}