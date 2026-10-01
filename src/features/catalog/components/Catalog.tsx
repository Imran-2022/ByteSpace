import CourseCard, { type Course } from "@/components/course/CourseCard";
import CategoryTabs from "./CategoryTabs";

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
    <section className="relative h-[1422px] bg-white" id="courses">
      <div className="absolute left-[261px] top-[72px] flex w-[917px] flex-col items-center gap-4 text-center">
        <h2 className="w-[588px] font-poppins text-[44px] font-medium leading-[1.2] tracking-[-1px] text-black">Discover Your Passion, Build Your Skills</h2>
        <p className="text-[18px] leading-[1.5] text-grey-700">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
          courses across different fields, from technology to the arts, and make a difference in
          your career and life.
        </p>
      </div>

      <div className="absolute inset-x-0 top-[294px]">
        <CategoryTabs />
      </div>

      <div className="absolute left-[120px] top-[542px] grid w-[1199px] grid-cols-[repeat(3,373px)] gap-10">
        {courses.map((c) => (
          <CourseCard key={c.title} course={c} />
        ))}
      </div>
    </section>
  );
}
