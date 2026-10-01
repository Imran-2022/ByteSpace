import type { ReactNode } from "react";
import Header from "@/features/landing/components/Header";
import GridBackground from "@/components/ui/GridBackground";
import TintedShape from "@/components/ui/TintedShape";
import CourseCard from "@/components/course/CourseCard";
import AvatarStack from "@/components/ui/AvatarStack";
import { StarRateIcon } from "@/components/icons/material";

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
    <div className="relative overflow-hidden bg-brand-blue pb-10 lg:h-[1024px] lg:pb-0">
      <GridBackground />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:h-[1024px] lg:px-0">
        <Header variant="logo" markColor="#D4FB20" />

        <div className="relative z-10 pt-[150px] text-center lg:absolute lg:left-[122px] lg:top-[120px] lg:w-[475px] lg:text-left">
          <h1 className="font-poppins text-[28px] font-semibold leading-[1.25] tracking-[-1px] text-[#f5f5f6] sm:text-[32px]">{title}</h1>
          <p className="mt-4 text-[16px] leading-7 text-[#f5f5f6] lg:text-[18px]">{description}</p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center gap-6 lg:absolute lg:left-[122px] lg:top-[394px] lg:mt-0 lg:block">
          <div className="lg:absolute lg:left-0 lg:top-0">
            <CourseCard course={{ title: "Build Digital Asset", image: "/images/c8826419.jpg" }} borderColor="#ced0d3" />
          </div>
          <div className="lg:absolute lg:left-[111px] lg:top-[-89px]">
            <CourseCard course={{ title: "the Power of Big Data", image: "/images/4f3bdea5.jpg" }} borderColor="#ced0d3" />
          </div>
        </div>

        <TintedShape src="/images/tinted/24321b88_d4fb20.webp" width={100} height={92} x={172} y={345} />
        <TintedShape src="/images/tinted/f9c0e0fd_d4fb20.webp" width={124} height={136} x={122} y={725} />
        <TintedShape src="/images/tinted/e3b55902_f5f5f6.webp" width={130} height={110} x={445} y={635} />

        <aside className="relative z-10 mx-auto mt-8 flex h-[123px] w-[258px] flex-col justify-center gap-2 rounded-2xl bg-brand-lime-bright p-4 text-[#242528] lg:absolute lg:left-[348px] lg:top-[740px] lg:mx-0 lg:mt-0">
          <div>
            <b className="block text-[16px] font-medium leading-6">Happy Students</b>
            <span className="flex items-center text-[10px] leading-[15px] text-[#242528]">
              4.5 (240) <StarRateIcon width={16} height={16} className="text-[#242528]" />
            </span>
          </div>
          <AvatarStack images={avatars} size={43} overlap={16} badge={{ label: "2K+", background: "#242528", color: "#F5F5F6" }} />
        </aside>

        <section className="relative z-10 mx-auto mt-8 w-full max-w-[579px] rounded-[24px] bg-white p-4 shadow-lg lg:absolute lg:left-[741px] lg:top-[120px] lg:h-[784px] lg:w-[579px] lg:p-0 lg:shadow-none">{children}</section>
      </div>
    </div>
  );
}
