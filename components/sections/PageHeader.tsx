import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeaderProps) {
  if (imageSrc) {
    return (
      <section className="relative py-16 md:py-20 px-[24px] md:px-[48px] lg:px-[80px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={imageAlt ?? ""}
            src={imageSrc}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-deep/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/90 via-charcoal-deep/50 to-charcoal-deep/20" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-base uppercase text-cobalt-bright block mb-3 font-semibold tracking-tight">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-paper uppercase mb-5 max-w-3xl font-semibold">
            {title}
          </h1>
          <p className="font-body text-base md:text-lg text-steel max-w-2xl leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-20 px-[24px] md:px-[48px] lg:px-[80px] bg-charcoal-deep">
      <div className="max-w-7xl mx-auto relative">
        <span className="font-mono text-base uppercase tracking-tight text-cobalt-bright block mb-3 font-semibold">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-paper uppercase mb-5 max-w-3xl font-semibold">
          {title}
        </h1>
        <p className="font-body text-base md:text-lg text-steel max-w-2xl leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </section>
  );
}