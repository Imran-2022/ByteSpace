import type { ReactNode } from "react";
import Header from "../Header";
import GridBackground from "../ui/GridBackground";
import TintedShape from "../ui/TintedShape";
import CourseCard from "../CourseCard";
import AvatarStack from "../ui/AvatarStack";
import { StarRateIcon } from "../icons/material";
import styles from "./AuthShell.module.css";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

const avatars = ["9ef8cb32", "b44979e1", "83fb3e04", "f3cf29a8", "5824acac", "7fdccc78", "1e078348"].map(
  (h) => `/images/${h}.webp`,
);

/** Shared visual shell for the Login and Register pages — verified against Figma's own PNG exports. */
export default function AuthShell({ title, description, children }: Props) {
  return (
    <div className={styles.page}>
      <GridBackground />
      <div className={styles.stage}>
        <Header variant="logo" markColor="#D4FB20" />

        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.cardA}>
          <CourseCard course={{ title: "Build Digital Asset", image: "/images/c8826419.jpg" }} borderColor="#ced0d3" />
        </div>
        <div className={styles.cardB}>
          <CourseCard course={{ title: "the Power of Big Data", image: "/images/4f3bdea5.jpg" }} borderColor="#ced0d3" />
        </div>

        <TintedShape src="/images/tinted/24321b88_d4fb20.webp" width={100} height={92} x={172} y={345} />
        <TintedShape src="/images/tinted/f9c0e0fd_d4fb20.webp" width={124} height={136} x={122} y={725} />
        <TintedShape src="/images/tinted/e3b55902_f5f5f6.webp" width={130} height={110} x={445} y={635} />

        <aside className={styles.happy}>
          <div>
            <b>Happy Students</b>
            <span className={styles.rating}>
              4.5 (240) <StarRateIcon width={16} height={16} className={styles.star} />
            </span>
          </div>
          <AvatarStack images={avatars} size={43} overlap={16} badge={{ label: "2K+", background: "#242528", color: "#F5F5F6" }} />
        </aside>

        <section className={styles.form}>{children}</section>
      </div>
    </div>
  );
}
