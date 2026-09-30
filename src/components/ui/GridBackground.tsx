import styles from "./GridBackground.module.css";

/** Faint 120px white grid used behind the hero, CTA and auth pages. */
export default function GridBackground() {
  return <div className={styles.grid} aria-hidden />;
}
