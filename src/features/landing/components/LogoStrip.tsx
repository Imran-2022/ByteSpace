const logos = [
  { file: "partner-1.svg", w: 167, h: 41, x: 0, y: 1 },
  { file: "partner-2.svg", w: 168, h: 41, x: 239, y: 1 },
  { file: "partner-3.svg", w: 170, h: 41, x: 479, y: 1 },
  { file: "partner-4.svg", w: 170, h: 41, x: 721, y: 1 },
  { file: "partner-5.svg", w: 169, h: 42, x: 963, y: 0 },
];

export default function LogoStrip() {
  return (
    <section className="bg-surface py-8 lg:h-[202px] lg:py-0" aria-label="Trusted by">
      <div className="mx-auto flex max-w-[1132px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:relative lg:top-[80px] lg:h-[42px] lg:justify-start lg:px-0">
        {logos.map((l) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={l.file}
            src={`/logos/${l.file}`}
            alt="Partner logo"
            width={l.w}
            height={l.h}
            className="h-[41px] w-auto brightness-[0.62]"
          />
        ))}
      </div>
    </section>
  );
}
