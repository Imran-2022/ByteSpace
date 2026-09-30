import CourseCard from "./CourseCard";
import TintedShape from "./ui/TintedShape";
import AvatarStack from "./ui/AvatarStack";
import { CheckCircleIcon, StarRateIcon } from "./icons/material";
import styles from "./Features.module.css";

const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];
const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
const avatars = ["9ef8cb32", "b44979e1", "83fb3e04", "f3cf29a8", "5824acac", "7fdccc78", "1e078348"].map(
  (h) => `/images/${h}.webp`,
);

export default function Features() {
  return (
    <section className={styles.section}>
      <span className={`${styles.blob} ${styles.b1}`} />
      <span className={`${styles.blob} ${styles.b2}`} />
      <span className={`${styles.blob} ${styles.b3}`} />
      <span className={`${styles.blob} ${styles.b4}`} />
      <span className={`${styles.blob} ${styles.b5}`} />

      {/* Row 1 */}
      <div className={styles.copy1}>
        <h2>Your Path to Professional Growth Starts Here!</h2>
        <p>
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className={styles.stats}>
          {stats.map(([n, l]) => (
            <div key={l}>
              <dt>{n}</dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.mock1}>
        <div className={styles.mockCard}>
          <CourseCard
            course={{ title: "Learn Figma from Basic", image: "/images/93ad9f9e.jpg" }}
            borderColor="#ced0d3"
           
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.person1} src="/images/29a52a24.webp" alt="" width={577} height={540} />
        <TintedShape src="/images/tinted/cda676fe_d4fb20.webp" width={130} height={200} x={442} y={50} />
        <aside className={styles.progress}>
          <span>Learning Progress</span>
          <strong>55%</strong>
          <span className={styles.track}>
            <span />
          </span>
        </aside>
      </div>

      {/* Row 2 */}
      <div className={styles.mock2}>
        <div className={styles.woman}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/0d6596fb.webp" alt="" width={435} height={596} />
        </div>
        <TintedShape src="/images/tinted/e3b55902_d4fb20.webp" width={140} height={149} x={339} y={150} />
        <aside className={`${styles.glass} ${styles.revenue}`}>
          <div>
            <b>Total Revenue</b>
            <small>July 1-28</small>
          </div>
          <div className={styles.amount}>
            <strong>$120.29</strong>
            <em>+12$</em>
          </div>
          <span className={styles.track2}>
            <span />
          </span>
        </aside>
        <aside className={`${styles.glass} ${styles.ytd}`}>
          <div>
            <b>Year to Date</b>
            <small>2023</small>
          </div>
          <div className={styles.amount}>
            <strong>$1,200.38</strong>
            <em>+12$</em>
          </div>
        </aside>
        <aside className={styles.happy}>
          <div>
            <b>Happy Students</b>
            <span className={styles.rating}>
              4.5 (240) <StarRateIcon width={16} height={16} />
            </span>
          </div>
          <AvatarStack
            images={avatars}
            size={43}
            overlap={16}
            badge={{ label: "2K+", background: "#D4FB20", color: "#242528" }}
          />
        </aside>
      </div>

      <div className={styles.copy2}>
        <h2>Create &amp; Manage Courses Easily.</h2>
        <p>
          ByteSpace supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul>
          {perks.map((p) => (
            <li key={p}>
              <CheckCircleIcon width={24} height={24} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
