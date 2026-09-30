import styles from "./Testimonials.module.css";

const items = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: "0577f0e9",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: "63c4be83",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    img: "728c3b1d",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <span className={`${styles.blob} ${styles.b1}`} />
      <span className={`${styles.blob} ${styles.b2}`} />
      <span className={`${styles.blob} ${styles.b3}`} />
      <div className={styles.head}>
        <h2>Discover What Our Community Is Saying</h2>
        <p>
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we
          do. Hear directly from those who have experienced the transformative journey of learning
          and creating on our platform. Explore testimonials that reflect the diverse perspectives
          of enthusiastic learners and accomplished creators.
        </p>
      </div>
      <div className={styles.cards}>
        {items.map((t) => (
          <figure key={t.name} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/${t.img}.webp`} alt={t.name} width={80} height={80} />
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
