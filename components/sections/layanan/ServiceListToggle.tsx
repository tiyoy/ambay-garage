"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/lib/constants";

type ServiceListToggleProps = {
  services: Service[];
};

export default function ServiceListToggle({ services }: ServiceListToggleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultServices = services.filter((service) => service.visibleByDefault);
  const extraServices = services.filter((service) => !service.visibleByDefault);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div id="work-orders" className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
      {defaultServices.map((service) => (
        <ServiceCard key={service.code} service={service} />
      ))}

      {isExpanded &&
        extraServices.map((service) => (
          <ServiceCard key={service.code} service={service} />
        ))}

      {extraServices.length > 0 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={toggleExpanded}
            aria-expanded={isExpanded}
            className="font-mono text-sm text-cobalt-bright hover:text-cobalt-dim 
            transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>{isExpanded ? "Sembunyikan" : "Lihat selengkapnya"}</span>
            <span className="material-symbols-outlined text-lg">
              {isExpanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}