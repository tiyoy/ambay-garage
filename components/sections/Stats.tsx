import RevealSection from "@/components/ui/RevealSection";

type StatItem = {
  icon: string;
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { icon: "two_wheeler", value: "10+", label: "Motor Direstorasi" },
  { icon: "military_tech", value: "2", label: "Tahun Berjalan" },
  { icon: "handyman", value: "40+", label: "Motor Ditangani" },
  { icon: "format_paint", value: "10+", label: "Pengecatan Kustom" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 px-[24px] md:px-[48px] lg:px-[80px] bg-plate-low border-y border-steel-dim/15">
      <div className="max-w-7xl mx-auto">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x-2 divide-steel-dim/15">
          {STATS.map((stat) => (
            <RevealSection
              key={stat.label}
              className="flex flex-col items-center text-center py-4 md:py-0 md:px-6"
            >
              <span className="material-symbols-outlined text-3xl text-cobalt-bright mb-3">
                {stat.icon}
              </span>
              <span className="font-display text-5xl md:text-6xl text-paper mb-4">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] md:text-base text-steel">
                {stat.label}
              </span>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}