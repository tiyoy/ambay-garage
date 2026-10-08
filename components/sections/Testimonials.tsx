// components/sections/Testimonials.tsx
import RevealSection from "@/components/ui/RevealSection";

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  tilt: string;
  extraClass?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Gw pemula main motor custom, gak ngerti soal motor. Motor yang gw punya sebelumnya mati, gak bisa hidup, tampilannya juga jelek — bahkan dilihat dari belakang, ban gak presisi sama rangka. Tapi setelah gw coba servis mesin dan restorasi body di Ambay Garage, motor gw jadi sehat, starter hidup, tarikan enteng, dan tampilannya berubah jadi ganteng. Ban belakang sekarang juga udah presisi."',
    name: "Nathanael",
    detail: "Thunder, Restorasi penuh dan Servis Rutin",
    tilt: "-2deg",
  },
  {
    quote:
      '"Gw punya motor R15 yang udah dicustom, tapi tampilannya gak rapi dan menurut gw masih jelek. Akhirnya gw memutuskan untuk restorasi body full di Ambay Garage dengan pasang part/body asli XSR. Alhamdulillah, motor gw sekarang udah keliatan kayak XSR aslinya — walaupun bagian joknya dibikin sedikit beda dari XSR asli, tapi gw suka karena look-nya udah ganteng banget, mirip banget sama XSR aslinya."',
    name: "Robby",
    detail: "Scorpio, Restorasi penuh dan Pengecetan Custom",
    tilt: "1.5deg",
    extraClass: "lg:mt-4",
  },
  {
    quote:
      '"Gw punya motor Scorpio dengan model japstyle, baru beli dari Facebook. Tapi tampilannya menurut gw masih kurang, hingga akhirnya gw memutuskan untuk restorasi full di Ambay Garage. Awalnya gw mau ubah dari japstyle jadi bratcafe, tapi akhirnya gw putuskan tetap model japstyle aja, cuma dibikin lebih rapi dan elegan. Alhamdulillah, setelah jadi, motor gw bener-bener rapi, ganteng, dan elegan."',
    name: "Thiago",
    detail: "R15, Restorasi Penuh",
    tilt: "-1deg",
    extraClass: "sm:col-span-2 lg:col-span-1",
  },
];

export default function Testimonials() {
  return (
    <section className="py-section-gap px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16">
          <span className="font-mono text-base uppercase text-cobalt-bright block mb-3 tracking-tight font-semibold">
            Papan Cerita
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-paper mb-4 font-semibold">
            KATA PELANGGAN
          </h2>
          <p className="font-body text-base md:text-lg text-steel max-w-2xl mx-auto font-medium">
            Cuplikan dari chat WhatsApp pelanggan setelah motornya selesai.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-4">
          {TESTIMONIALS.map((testimonial) => (
            <RevealSection
              key={testimonial.name}
              className={`pin-card relative bg-plate p-7 sm:p-8 border border-steel-dim/15 shadow-xl flex flex-col ${
                testimonial.extraClass ?? ""
              }`}
              style={{ "--tilt": testimonial.tilt } as React.CSSProperties}
            >
              <span className="pin-dot" />
              <p className="font-body text-base text-steel-light italic mb-8 flex-grow leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-steel-dim/20 pt-6">
                <p className="font-display text-lg text-paper uppercase font-medium">
                  {testimonial.name}
                </p>
                <p className="font-mono text-[14px] text-steel mt-1 font-medium">
                  {testimonial.detail}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}