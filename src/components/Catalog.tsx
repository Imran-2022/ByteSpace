import CourseCard, { type Course } from "./CourseCard";
import CategoryTabs from "./CategoryTabs";
import styles from "./Catalog.module.css";

const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/images/93ad9f9e.jpg" },
  { title: "Build Digital Asset", image: "/images/c8826419.jpg" },
  { title: "the Power of Big Data", image: "/images/4f3bdea5.jpg" },
  { title: "Balancing Productivity and Self-Care", image: "/images/72e18d90.jpg" },
  { title: "Mastering Money Management", image: "/images/a8978945.jpg" },
  { title: "From Idea to Startup Success", image: "/images/69362b02.jpg" },
];

export default function Catalog() {
  return (
    <section className={styles.section} id="courses">
      <div className={styles.heading}>
        <h2>Discover Your Passion, Build Your Skills</h2>
        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
          courses across different fields, from technology to the arts, and make a difference in
          your career and life.
        </p>
      </div>

      <div className={styles.tabs}>
        <CategoryTabs />
      </div>

      <div className={styles.grid}>
        {courses.map((c) => (
          <CourseCard key={c.title} course={c} />
        ))}
      </div>
    </section>
  );
}
