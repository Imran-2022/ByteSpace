import Header from "./Header";
import GridBackground from "@/components/ui/GridBackground";
import TintedShape from "@/components/ui/TintedShape";
import AvatarStack from "@/components/ui/AvatarStack";
import { SearchIcon, StarRateIcon } from "@/components/icons/material";

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
    <section className="relative overflow-hidden bg-brand-blue pb-10 pt-20 lg:h-[1024px] lg:pb-0 lg:pt-0">
      <GridBackground />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:h-[1024px] lg:px-0">
        <div className="pointer-events-none absolute left-1/2 top-[500px] box-border h-[1100px] w-[1100px] -translate-x-1/2 rounded-full border-[150px] border-solid border-brand-lime-ring lg:left-[-15px] lg:top-[570px] lg:h-[1469px] lg:w-[1469px] lg:-translate-x-0 lg:border-[320px]" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 pt-[32px] text-center lg:gap-[60px] lg:pt-[169px]">
          <div className="flex w-full max-w-[935px] flex-col items-center gap-4 lg:gap-8">
            <h1 className="font-poppins text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-white sm:text-[48px] lg:text-[72px]">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="max-w-[819px] text-[16px] leading-7 text-grey-300 lg:text-[18px]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>
          </div>
          <form className="flex w-full max-w-[581px] flex-col gap-4 sm:flex-row sm:items-start" role="search" action="#courses">
            <label className="flex h-[52px] flex-1 items-center gap-2 rounded-[24px] bg-white px-6 py-3">
              <SearchIcon width={24} height={24} className="flex-none text-[#003be2]" />
              <input className="min-w-0 flex-1 border-0 bg-transparent text-[18px] leading-7 text-ink outline-0 placeholder:text-grey-300" type="search" name="q" placeholder="Course, topic, creator" />
            </label>
            <button type="submit" className="h-[46px] w-full cursor-pointer rounded-[24px] border-0 bg-brand-lime text-[18px] font-medium leading-7 text-ink sm:w-[104px]">
              Search
            </button>
          </form>
        </div>

        <div className="absolute inset-x-0 top-0 h-[120px]">
          <Header />
        </div>

        <div className="relative z-10 mt-10 flex flex-col items-center gap-6 lg:mt-0 lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="mx-auto h-auto w-full max-w-[578px] object-cover lg:absolute lg:left-[431px] lg:top-[512px] lg:max-w-none"
            style={{ filter: "drop-shadow(10px 14px 16px rgba(0, 0, 0, 0.08)) drop-shadow(26px 37px 36px rgba(0, 0, 0, 0.1)) drop-shadow(51px 73px 72px rgba(0, 0, 0, 0.13))" }}
            src="/images/29a52a24.webp"
            alt="Smiling student with headphones holding a laptop"
            width={578}
            height={541}
          />

          <aside className="mx-auto flex h-[131px] w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 text-[#242528] shadow-[0_20px_40px_rgba(20,20,40,0.12)] lg:absolute lg:left-[842px] lg:top-[651px] lg:mx-0">
            <span className="text-[14px] font-medium leading-[17px]">Learning Progress</span>
            <strong className="font-poppins text-[48px] font-bold leading-[58px] tracking-[-1px] text-[#101828]">55%</strong>
            <span className="relative block h-2 w-[200px] overflow-hidden rounded-[24px] bg-[#f6f6f6]">
              <span className="absolute inset-y-0 left-0 w-[112px] rounded-[24px] bg-brand-lime-bright" />
            </span>
          </aside>

          <aside className="mx-auto flex h-[121px] w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 text-[#242528] shadow-[0_20px_40px_rgba(20,20,40,0.12)] lg:absolute lg:left-[328px] lg:top-[837px] lg:mx-0">
            <div className="flex flex-col">
              <span className="text-[16px] font-medium leading-[19px]">Happy Students</span>
              <span className="flex items-center text-[10px] leading-[19px] text-grey-200">
                4.5 (240)
                <StarRateIcon width={16} height={16} className="mt-[2px] text-[#d4fb20]" />
              </span>
            </div>
            <AvatarStack
              images={studentAvatars}
              size={43}
              overlap={16}
              badge={{ label: "2K+", background: "#D4FB20", color: "#242528" }}
            />
          </aside>
        </div>

        {shapes.map((s, i) => (
          <TintedShape key={i} src={s.src} width={s.w} height={s.h} x={s.x} y={s.y} />
        ))}

        <aside className="relative z-10 mx-auto mt-4 flex h-[70px] w-[208px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 text-ink lg:absolute lg:left-[404px] lg:top-[639px] lg:mx-0 lg:mt-0">
          <span className="text-[16px] font-medium leading-[19px]">UI/UX Design</span>
          <span className="flex gap-2 text-[10px] leading-[19px] text-grey-500">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </span>
        </aside>
      </div>
    </section>
  );
}
