import RevealSection from "@/components/ui/RevealSection";
import type { Service } from "@/lib/constants";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <RevealSection className="ticket bg-plate border border-steel-dim/15 p-7 md:p-10">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
        <div className="flex lg:flex-col items-center justify-between lg:justify-start lg:items-start gap-4 lg:gap-3 shrink-0 lg:w-40">
          <span className="material-symbols-outlined text-4xl text-cobalt-bright">
            {service.icon}
          </span>
          <span className="font-mono text-[14px] text-steel font-medium">
            {service.code}
          </span>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h2 className="font-display text-2xl md:text-3xl text-paper uppercase">
              {service.title}
            </h2>
            <span className="font-mono text-base text-chrome">
              {service.priceLabel}
            </span>
          </div>

          <p className="font-body text-lg text-steel leading-relaxed mb-6 max-w-2xl">
            {service.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {service.checklist.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-cobalt-bright text-lg mt-0.5">
                  check_circle
                </span>
                <span className="font-body text-base text-steel-light self-center">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-steel-dim/20 pt-5">
            <span className="font-mono text-base text-steel tracking-tight flex items-center gap-1.5 self-center">
              <span className="material-symbols-outlined text-base">
                schedule
              </span>
              {service.duration}
            </span>

            <a
              href="#kalkulator"
              className="font-mono text-sm text-cobalt-bright hover:text-cobalt-dim transition-colors flex items-center gap-1.5 ml-auto"
            >
              Cek estimasi
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}