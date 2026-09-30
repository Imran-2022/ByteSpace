import Link from "next/link";
import GridBackground from "./ui/GridBackground";
import TintedShape from "./ui/TintedShape";
import styles from "./CTA.module.css";

type Shape = { src: string; w: number; h: number; x: number; y: number };

/** Measured directly from Figma's rendered CTA_Frame.png export. */
const shapes: Shape[] = [
  { src: "/images/tinted/e3b55902_d4fb20.webp", w: 220, h: 230, x: -60, y: -60 },
  { src: "/images/tinted/cda676fe_f5f5f6.webp", w: 120, h: 135, x: 205, y: 30 },
  { src: "/images/tinted/f9c0e0fd_d4fb20.webp", w: 150, h: 165, x: 1105, y: -10 },
  { src: "/images/tinted/8670b841_d4fb20.webp", w: 260, h: 250, x: 20, y: 320 },
  { src: "/images/tinted/f9c0e0fd_f5f5f6.webp", w: 200, h: 280, x: -90, y: 200 },
  { src: "/images/tinted/92fc70a3_f5f5f6.webp", w: 220, h: 330, x: 1265, y: -30 },
  { src: "/images/tinted/d5e9c4dc_d4fb20.webp", w: 210, h: 190, x: 1160, y: 310 },
];

export default function CTA() {
  return (
    <section className={styles.section}>
      <GridBackground />
      {shapes.map((s, i) => (
        <TintedShape key={i} src={s.src} width={s.w} height={s.h} x={s.x} y={s.y} />
      ))}
      <div className={styles.content}>
        <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link href="/register" className={styles.btn}>
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
