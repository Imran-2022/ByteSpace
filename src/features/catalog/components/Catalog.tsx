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
    <section className="bg-white py-16 lg:h-[1422px] lg:py-0" id="courses">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-0">
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 pt-[72px] text-center">
          <h2 className="max-w-[588px] font-poppins text-[32px] font-medium leading-[1.2] tracking-[-1px] text-black sm:text-[40px] lg:text-[44px]">Discover Your Passion, Build Your Skills</h2>
          <p className="text-[16px] leading-[1.5] text-grey-700 lg:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
            courses across different fields, from technology to the arts, and make a difference in
            your career and life.
          </p>
        </div>

        <div className="mt-10 lg:mt-[294px]">
          <CategoryTabs />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
