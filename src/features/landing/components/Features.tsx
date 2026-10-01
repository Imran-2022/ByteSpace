import CourseCard from "@/components/course/CourseCard";
import TintedShape from "@/components/ui/TintedShape";
import AvatarStack from "@/components/ui/AvatarStack";
import { CheckCircleIcon, StarRateIcon } from "@/components/icons/material";

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
    <section className="relative overflow-hidden bg-surface-alt py-16 lg:h-[1460px] lg:py-0">
      <span className="pointer-events-none absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.28),rgba(0,59,226,.1)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[-152px] top-[-466px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.5),rgba(212,251,32,.18)_60%,rgba(212,251,32,0))]" />
      <span className="pointer-events-none absolute left-[-508px] top-[183px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.28),rgba(0,59,226,.1)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[811px] top-[-458px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.22),rgba(0,59,226,.08)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[-287px] top-[946px] h-[672px] w-[672px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.5),rgba(212,251,32,.18)_60%,rgba(212,251,32,0))]" />

      <div className="relative mx-auto max-w-[1200px] px-4 lg:px-0">
        <div className="grid gap-10 pt-6 lg:pt-[194px] xl:grid-cols-[1fr_1.1fr] xl:items-start">
          <div className="flex max-w-[574px] flex-col">
            <h2 className="font-poppins text-[30px] font-medium leading-[1.2] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-6 text-[16px] leading-7 text-grey-700 lg:text-[18px]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex flex-wrap gap-8 sm:gap-14">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <dt className="font-poppins text-[28px] font-medium leading-[44px] text-[#003be2] sm:text-[36px]">{n}</dt>
                  <dd className="text-[16px] leading-7 text-grey-700 lg:text-[18px]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[621px] lg:h-[552px]">
            <div className="mb-6 lg:absolute lg:left-0 lg:top-0 lg:mb-0">
              <CourseCard
                course={{ title: "Learn Figma from Basic", image: "/images/93ad9f9e.jpg" }}
                borderColor="#ced0d3"
              />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mx-auto h-auto w-full max-w-[577px] object-cover lg:absolute lg:left-0 lg:top-3 lg:max-w-none" style={{ filter: "drop-shadow(10px 14px 16px rgba(0,0,0,.08)) drop-shadow(26px 37px 36px rgba(0,0,0,.1))" }} src="/images/29a52a24.webp" alt="" width={577} height={540} />
            <TintedShape src="/images/tinted/cda676fe_d4fb20.webp" width={130} height={200} x={442} y={50} />
            <aside className="mx-auto mt-4 flex h-[137px] w-[260px] flex-col gap-2 rounded-2xl bg-white p-4 text-[#242528] shadow-[0_20px_40px_rgba(20,20,40,.12)] lg:absolute lg:left-[327px] lg:top-[218px] lg:mx-0 lg:mt-0">
              <span className="text-[14px] font-medium leading-6">Learning Progress</span>
              <strong className="font-poppins text-[48px] font-bold leading-[1.2] tracking-[-1px] text-[#101828]">55%</strong>
              <span className="relative block h-2 w-[200px] overflow-hidden rounded-[24px] bg-[#f6f6f6]">
                <span className="absolute inset-y-0 left-0 w-[112px] rounded-[24px] bg-brand-lime-bright" />
              </span>
            </aside>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:pt-[96px]">
          <div className="relative mx-auto h-[596px] w-full max-w-[541px]">
            <div className="left-7 top-0 lg:absolute">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mx-auto h-auto w-full max-w-[435px] object-contain" src="/images/0d6596fb.webp" alt="" width={435} height={596} />
            </div>
            <TintedShape src="/images/tinted/e3b55902_d4fb20.webp" width={140} height={149} x={339} y={150} />
            <aside className="mt-4 flex h-[119px] w-[232px] flex-col justify-center gap-2 rounded-2xl bg-brand-blue p-4 text-white lg:absolute lg:left-0 lg:top-[44px] lg:mt-0">
              <div>
                <b className="block text-[16px] font-medium leading-[19px]">Total Revenue</b>
                <small className="block text-[10px] leading-3 text-grey-200">July 1-28</small>
              </div>
              <div className="flex items-center gap-2">
                <strong className="font-poppins text-[24px] font-semibold leading-8 text-white">$120.29</strong>
                <em className="rounded-[24px] bg-[#dafee9] px-2 text-[10px] font-medium leading-5 text-[#18cf6d] not-italic">+12$</em>
              </div>
              <span className="relative block h-2 w-[200px] overflow-hidden rounded-[24px] bg-[#f6f6f6]">
                <span className="absolute inset-y-0 left-0 w-[112px] rounded-[24px] bg-brand-lime-bright" />
              </span>
            </aside>
            <aside className="mt-4 flex h-[135px] w-[134px] flex-col justify-center gap-2 rounded-2xl bg-brand-blue p-4 text-white lg:absolute lg:left-0 lg:top-[194px] lg:mt-0">
              <div>
                <b className="block text-[16px] font-medium leading-[19px]">Year to Date</b>
                <small className="block text-[10px] leading-3 text-grey-200">2023</small>
              </div>
              <div className="flex items-center gap-2">
                <strong className="font-poppins text-[24px] font-semibold leading-8 text-white">$1,200.38</strong>
                <em className="rounded-[24px] bg-[#dafee9] px-2 text-[10px] font-medium leading-5 text-[#18cf6d] not-italic">+12$</em>
              </div>
            </aside>
            <aside className="mt-4 flex h-[123px] w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 text-[#242528] lg:absolute lg:left-[283px] lg:top-[413px] lg:mt-0">
              <div>
                <b className="block text-[16px] font-medium leading-6">Happy Students</b>
                <span className="flex items-center text-[10px] leading-[15px] text-grey-500">
                  4.5 (240) <StarRateIcon width={16} height={16} className="text-[#d4750b]" />
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

          <div className="max-w-[580px] lg:pt-[104px]">
            <h2 className="font-poppins text-[30px] font-medium leading-[1.2] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-6 text-[16px] leading-7 text-grey-700 lg:text-[18px]">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 flex list-none flex-col gap-4">
              {perks.map((p) => (
                <li className="flex items-center gap-2 text-[16px] leading-7 text-black lg:text-[18px]" key={p}>
                  <CheckCircleIcon width={24} height={24} className="flex-none text-[#003be2]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
