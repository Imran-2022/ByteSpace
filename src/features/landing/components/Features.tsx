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
    <section className="relative h-[1460px] overflow-hidden bg-surface-alt">
      <span className="pointer-events-none absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.28),rgba(0,59,226,.1)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[-152px] top-[-466px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.5),rgba(212,251,32,.18)_60%,rgba(212,251,32,0))]" />
      <span className="pointer-events-none absolute left-[-508px] top-[183px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.28),rgba(0,59,226,.1)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[811px] top-[-458px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.22),rgba(0,59,226,.08)_60%,rgba(0,59,226,0))]" />
      <span className="pointer-events-none absolute left-[-287px] top-[946px] h-[672px] w-[672px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.5),rgba(212,251,32,.18)_60%,rgba(212,251,32,0))]" />

      {/* Row 1 */}
      <div className="absolute left-[121px] top-[194px] flex w-[574px] flex-col">
        <h2 className="w-[577px] font-poppins text-[44px] font-medium leading-[52px] tracking-[-1px] text-black">Your Path to Professional Growth Starts Here!</h2>
        <p className="mt-6 text-[18px] leading-7 text-grey-700">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="mt-10 flex gap-14">
          {stats.map(([n, l]) => (
            <div key={l}>
              <dt className="font-poppins text-[36px] font-medium leading-[44px] text-[#003be2]">{n}</dt>
              <dd className="text-[18px] leading-7 text-grey-700">{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute left-[758px] top-[120px] h-[552px] w-[621px]">
        <div className="absolute left-0 top-0">
          <CourseCard
            course={{ title: "Learn Figma from Basic", image: "/images/93ad9f9e.jpg" }}
            borderColor="#ced0d3"
           
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="absolute left-0 top-3 h-[540px] w-[577px] object-cover" style={{ filter: "drop-shadow(10px 14px 16px rgba(0,0,0,.08)) drop-shadow(26px 37px 36px rgba(0,0,0,.1))" }} src="/images/29a52a24.webp" alt="" width={577} height={540} />
        <TintedShape src="/images/tinted/cda676fe_d4fb20.webp" width={130} height={200} x={442} y={50} />
        <aside className="absolute left-[327px] top-[218px] flex h-[137px] w-[260px] flex-col gap-2 rounded-2xl bg-white p-4 text-[#242528] shadow-[0_20px_40px_rgba(20,20,40,.12)]">
          <span className="text-[14px] font-medium leading-6">Learning Progress</span>
          <strong className="font-poppins text-[48px] font-bold leading-[1.2] tracking-[-1px] text-[#101828]">55%</strong>
          <span className="relative block h-2 w-[200px] overflow-hidden rounded-[24px] bg-[#f6f6f6]">
            <span className="absolute inset-y-0 left-0 w-[112px] rounded-[24px] bg-brand-lime-bright" />
          </span>
        </aside>
      </div>

      {/* Row 2 */}
      <div className="absolute left-[121px] top-[744px] h-[596px] w-[541px]">
        <div className="absolute left-7 top-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-[596px] w-[435px] object-contain" src="/images/0d6596fb.webp" alt="" width={435} height={596} />
        </div>
        <TintedShape src="/images/tinted/e3b55902_d4fb20.webp" width={140} height={149} x={339} y={150} />
        <aside className="absolute left-0 top-[44px] flex h-[119px] w-[232px] flex-col justify-center gap-2 rounded-2xl bg-brand-blue p-4 text-white">
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
        <aside className="absolute left-0 top-[194px] flex h-[135px] w-[134px] flex-col justify-center gap-2 rounded-2xl bg-brand-blue p-4 text-white">
          <div>
            <b className="block text-[16px] font-medium leading-[19px]">Year to Date</b>
            <small className="block text-[10px] leading-3 text-grey-200">2023</small>
          </div>
          <div className="flex items-center gap-2">
            <strong className="font-poppins text-[24px] font-semibold leading-8 text-white">$1,200.38</strong>
            <em className="rounded-[24px] bg-[#dafee9] px-2 text-[10px] font-medium leading-5 text-[#18cf6d] not-italic">+12$</em>
          </div>
        </aside>
        <aside className="absolute left-[283px] top-[413px] flex h-[123px] w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 text-[#242528]">
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

      <div className="absolute left-[741px] top-[848px] w-[580px]">
        <h2 className="font-poppins text-[44px] font-medium leading-[52px] tracking-[-1px] text-black">Create &amp; Manage Courses Easily.</h2>
        <p className="mt-6 text-[18px] leading-7 text-grey-700">
          ByteSpace supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="mt-8 flex list-none flex-col gap-4">
          {perks.map((p) => (
            <li className="flex items-center gap-2 text-[18px] leading-7 text-black" key={p}>
              <CheckCircleIcon width={24} height={24} className="flex-none text-[#003be2]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
