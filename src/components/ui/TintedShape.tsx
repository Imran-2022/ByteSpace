import type { CSSProperties } from "react";
import styles from "./TintedShape.module.css";

type Props = {
  /** Pre-tinted asset path, e.g. /images/tinted/e3b55902_d4fb20.webp */
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

/** Absolutely-positioned decorative 3D shape (already tinted at build time — see /home/claude/tools/tint.py). */
export default function TintedShape({ src, width, height, x, y }: Props) {
  const style: CSSProperties = { width, height, left: x, top: y };
  return (
    <div className={styles.shape} style={style} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={width} height={height} />
    </div>
  );
}
