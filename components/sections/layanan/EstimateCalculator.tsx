"use client";

import { useEffect, useMemo, useState } from "react";
import { SERVICES, type ConditionKey } from "@/lib/constants";

const CONDITION_LABELS: Record<ConditionKey, string> = {
  normal: "Masih Jalan Normal",
  bermasalah: "Ada Beberapa Masalah",
  mangkrak: "Mangkrak / Nggak Nyala",
};

const PENGECATAN_CUSTOM_CODE = "WO-05";

const CONDITION_ORDER: ConditionKey[] = ["normal", "bermasalah", "mangkrak"];

function formatIDR(value: number) {
  return "Rp " + Math.round(value).toLocaleString("id-ID");
}

export default function EstimateCalculator() {
  const [serviceCode, setServiceCode] = useState(SERVICES[0].code);
  const [condition, setCondition] = useState<ConditionKey>("normal");
  const [result, setResult] = useState<string | null>(null);

  const selectedService = useMemo(
    () => SERVICES.find((item) => item.code === serviceCode) ?? SERVICES[0],
    [serviceCode]
  );

  const availableConditions = useMemo(
    () =>
      CONDITION_ORDER.filter(
        (key) => selectedService.estimate[key] !== undefined
      ),
    [selectedService]
  );

  // Keep the selected condition valid whenever the service changes
  // (e.g. Pengecatan Custom has no "mangkrak" option).
  useEffect(() => {
    if (!availableConditions.includes(condition)) {
      setCondition(availableConditions[0]);
    }
  }, [availableConditions, condition]);

  const handleCalculate = () => {
    const range = selectedService.estimate[condition];
    if (!range) return;

    setResult(`${formatIDR(range.min)} — ${formatIDR(range.max)}`);
  };

  return (
    <div className="w-full bg-plate border border-steel-dim/25 p-6 sm:p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="est-service"
            className="font-mono text-sm text-steel tracking-tight flex items-center gap-1 font-medium"
          >
            Pilih Layanan
          </label>
          <div className="relative">
            <select
              id="est-service"
              value={serviceCode}
              onChange={(e) => {
                setServiceCode(e.target.value);
                setResult(null);
              }}
              className="appearance-none w-full bg-plate-low border border-steel-dim/50 text-paper text-base p-3 pr-10 focus:border-cobalt outline-none"
            >
              {SERVICES.map((service) => (
                <option key={service.code} value={service.code}>
                  {service.title}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-steel pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="est-condition"
            className="font-mono text-sm text-steel tracking-tight flex items-center gap-1 font-medium"
          >
            Kondisi Motor
          </label>
          <div className="relative">
            <select
              id="est-condition"
              value={condition}
              onChange={(e) => {
                setCondition(e.target.value as ConditionKey);
                setResult(null);
              }}
              className="appearance-none w-full bg-plate-low border border-steel-dim/50 text-paper text-base p-3 pr-10 focus:border-cobalt outline-none"
            >
              {availableConditions.map((key) => (
                <option key={key} value={key}>
                  {key === "normal" && serviceCode === PENGECATAN_CUSTOM_CODE
                    ? "Normal"
                    : CONDITION_LABELS[key]}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-steel pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="w-full bg-cobalt text-paper font-mono text-base font-semibold px-8 py-4 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 tracking-wider"
      >
        Hitung Estimasi
      </button>

      {result && (
        <p
          id="est-result"
          className="font-mono text-lg text-cobalt-bright text-center mt-6"
        >
          {result}
        </p>
      )}

      <p className="font-body text-sm text-steel text-center mt-4 italic">
        *Harga akhir ditentukan setelah inspeksi fisik
      </p>
    </div>
  );
}