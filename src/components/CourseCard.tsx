import AvatarStack from "./ui/AvatarStack";
import { SignalCellularAltIcon, StarRateRoundIcon } from "./icons/material";
import styles from "./CourseCard.module.css";

export type Course = {
  title: string;
  image: string;
  author?: string;
  level?: string;
  price?: string;
  rating?: string;
};

const learnerAvatars = ["b44979e1", "3fe55918", "0577f0e9", "d0cd3adb"].map(
  (h) => `/images/${h}.webp`,
);

type Props = {
  course: Course;
  borderColor?: string;
  priceColor?: string;
  className?: string;
};

export default function CourseCard({ course, borderColor, priceColor, className }: Props) {
  const {
    title,
    image,
    author = "by purepearl studio",
    level = "Beginner",
    price = "$25",
    rating = "4.5",
  } = course;

  return (
    <article className={`${styles.card} ${className ?? ""}`} style={{ borderColor }}>
      <div className={styles.media} style={{ backgroundImage: `url(${image})` }}>
        <ul className={styles.chips}>
          <li>17 Lessons</li>
          <li>2 hours 16 mins</li>
          <li>59 Comments</li>
        </ul>
      </div>

      <div className={styles.body}>
        <div className={styles.head}>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>

        <div className={styles.meta}>
          <span className={styles.level}>
            <SignalCellularAltIcon width={20} height={20} />
            {level}
          </span>
          <AvatarStack
            images={learnerAvatars}
            size={32}
            overlap={8}
            badge={{ label: "26+", background: "#D4FB20", color: "#242528" }}
          />
        </div>

        <div className={styles.price}>
          <strong style={{ color: priceColor ?? "#003BE2" }}>{price}</strong>
          <span>/lifetime</span>
        </div>
      </div>

      <div className={styles.rating}>
        <span>{rating}</span>
        <StarRateRoundIcon width={24} height={24} className={styles.star} />
      </div>
    </article>
  );
}
