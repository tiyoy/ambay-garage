import RevealSection from "@/components/ui/RevealSection";
import { CONTACT } from "@/lib/constants";

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.90273987643!2d106.81772033180668!3d-6.461258345654431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebe5395b6acd%3A0x22f9b7a02bb3e2c0!2sAmbay%20Garage!5e0!3m2!1sid!2sid!4v1791462899635!5m2!1sid!2sid";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Ambay+Garage+GRRQ299+Harapan+Jaya+Cibinong+Bogor";

export default function LocationMap() {
  return (
    <section className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="mb-10 md:mb-14 text-center md:text-left">
          <span className="font-mono text-base text-cobalt-bright tracking-tight uppercase block mb-3 font-semibold">
            Kunjungi Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-paper font-semibold">
            LOKASI KAMI
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          <RevealSection className="lg:col-span-3 border border-steel-dim/20 overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            <iframe
              src={MAPS_EMBED_SRC}
              className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Lokasi Ambay Garage"
            />
          </RevealSection>

          <RevealSection className="lg:col-span-2 bg-plate border border-steel-dim/20 p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-cobalt-bright text-xl shrink-0">
                  location_on
                </span>
                <div>
                  <p className="font-mono text-[13px] uppercase text-steel mb-1 font-semibold tracking-tight">
                    Alamat
                  </p>
               
                    <p className="font-body text-base text-paper leading-relaxed">
                      {CONTACT.address}
                    </p>
                 
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-cobalt-bright text-xl shrink-0">
                  schedule
                </span>
                <div>
                  <p className="font-mono text-[13px] uppercase text-steel mb-1 font-semibold tracking-tight">
                    Jam Operasional
                  </p>
                  <p className="font-body text-base text-paper leading-relaxed">
                    {CONTACT.operatingHours}
                  </p>
                  <p className="font-body text-base text-steel leading-relaxed">
                    {CONTACT.operatingHoursClosed}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-cobalt-bright text-xl shrink-0">
                  call
                </span>
                <div>
                  <p className="font-mono text-[13px] uppercase text-steel mb-1 font-semibold tracking-tight">
                    Kontak
                  </p>
                  <p className="font-body text-base text-paper leading-relaxed">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-cobalt text-paper font-mono text-sm font-semibold px-6 py-3.5 hover:bg-cobalt-bright transition-all flex items-center justify-center gap-2 uppercase tracking-tight rounded-sm"
            >
              <span className="material-symbols-outlined text-base">
                directions
              </span>
              Buka di Google Maps
            </a>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}