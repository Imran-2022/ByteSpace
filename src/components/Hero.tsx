import Header from "./Header";
import GridBackground from "./ui/GridBackground";
import TintedShape from "./ui/TintedShape";
import AvatarStack from "./ui/AvatarStack";
import { SearchIcon, StarRateIcon } from "./icons/material";
import styles from "./Hero.module.css";

const studentAvatars = [
  "9ef8cb32",
  "b44979e1",
  "83fb3e04",
  "f3cf29a8",
  "5824acac",
  "7fdccc78",
  "1e078348",
].map((h) => `/images/${h}.webp`);

type ShapeSpec = { src: string; w: number; h: number; x: number; y: number };

/** Decorative 3D shapes, measured directly from Figma's rendered Hero_Frame.png export. */
const shapes: ShapeSpec[] = [
  { src: "/images/tinted/e3b55902_d4fb20.webp", w: 200, h: 300, x: -20, y: 260 },
  { src: "/images/tinted/f1057d71_d4fb20.webp", w: 170, h: 330, x: 1290, y: 230 },
  { src: "/images/tinted/cda676fe_f5f5f6.webp", w: 140, h: 150, x: 205, y: 495 },
  { src: "/images/tinted/24321b88_f5f5f6.webp", w: 260, h: 245, x: 55, y: 725 },
  { src: "/images/tinted/f9c0e0fd_f5f5f6.webp", w: 150, h: 165, x: 1115, y: 470 },
  { src: "/images/tinted/d5e9c4dc_f5f5f6.webp", w: 220, h: 280, x: 1180, y: 695 },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <GridBackground />
      <div className={styles.stage}>
        <div className={styles.ring} aria-hidden />

        <div className={styles.content}>
          <div className={styles.copy}>
            <h1>Get Access to Hundreds Courses Available</h1>
            <p>
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>
          </div>
          <form className={styles.search} role="search" action="#courses">
            <label className={styles.field}>
              <SearchIcon width={24} height={24} className={styles.searchIcon} />
              <input type="search" name="q" placeholder="Course, topic, creator" />
            </label>
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </form>
        </div>

        <div className={styles.headerSlot}>
          <Header />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.person}
          src="/images/29a52a24.webp"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
        />

        <aside className={`${styles.card} ${styles.progress}`}>
          <span className={styles.progressLabel}>Learning Progress</span>
          <strong className={styles.percent}>55%</strong>
          <span className={styles.track}>
            <span className={styles.fill} />
          </span>
        </aside>

        <aside className={`${styles.card} ${styles.students}`}>
          <div className={styles.studentsTop}>
            <span className={styles.studentsTitle}>Happy Students</span>
            <span className={styles.rating}>
              4.5 (240)
              <StarRateIcon width={16} height={16} className={styles.star} />
            </span>
          </div>
          <AvatarStack
            images={studentAvatars}
            size={43}
            overlap={16}
            badge={{ label: "2K+", background: "#D4FB20", color: "#242528" }}
          />
        </aside>

        {shapes.map((s, i) => (
          <TintedShape key={i} src={s.src} width={s.w} height={s.h} x={s.x} y={s.y} />
        ))}

        <aside className={`${styles.card} ${styles.topic}`}>
          <span className={styles.topicTitle}>UI/UX Design</span>
          <span className={styles.topicMeta}>
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </span>
        </aside>
      </div>
    </section>
  );
}
