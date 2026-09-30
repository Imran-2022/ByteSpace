import styles from "./LogoStrip.module.css";

const logos = [
  { file: "partner-1.svg", w: 167, h: 41, x: 0, y: 1 },
  { file: "partner-2.svg", w: 168, h: 41, x: 239, y: 1 },
  { file: "partner-3.svg", w: 170, h: 41, x: 479, y: 1 },
  { file: "partner-4.svg", w: 170, h: 41, x: 721, y: 1 },
  { file: "partner-5.svg", w: 169, h: 42, x: 963, y: 0 },
];

export default function LogoStrip() {
  return (
    <section className={styles.strip} aria-label="Trusted by">
      <div className={styles.row}>
        {logos.map((l) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={l.file}
            src={`/logos/${l.file}`}
            alt="Partner logo"
            width={l.w}
            height={l.h}
            style={{ left: l.x, top: l.y }}
          />
        ))}
      </div>
    </section>
  );
}
