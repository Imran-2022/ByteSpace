import AvatarStack from "../ui/AvatarStack";
import { SignalCellularAltIcon, StarRateRoundIcon } from "../icons/material";

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
    <article className={`relative h-[384px] w-[373px] flex-none overflow-hidden rounded-[24px] border border-solid border-grey-100 bg-white ${className ?? ""}`} style={{ borderColor }}>
      <div className="absolute left-4 top-4 h-[195px] w-[341px] overflow-hidden rounded-xl bg-[#443131] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <ul className="absolute bottom-[13px] left-[13px] flex list-none gap-3">
          <li className="whitespace-nowrap rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-[6px] text-[12px] font-medium leading-5 text-grey-700 backdrop-blur-[8px]">17 Lessons</li>
          <li className="whitespace-nowrap rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-[6px] text-[12px] font-medium leading-5 text-grey-700 backdrop-blur-[8px]">2 hours 16 mins</li>
          <li className="whitespace-nowrap rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-[6px] text-[12px] font-medium leading-5 text-grey-700 backdrop-blur-[8px]">59 Comments</li>
        </ul>
      </div>

      <div className="absolute left-4 top-[232px] flex h-[136px] w-[341px] flex-col justify-between">
        <div>
          <h3 className="w-[275px] font-poppins text-[20px] font-semibold leading-6 tracking-[-1px] text-black">{title}</h3>
          <p className="mt-1 text-[12px] leading-5 text-grey-700">{author}</p>
        </div>

        <div className="flex h-8 items-center gap-3">
          <span className="inline-flex h-8 items-center gap-1 rounded-[24px] bg-surface px-3 text-[12px] font-medium leading-5 text-[#4b4c53]">
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

        <div className="flex h-6 items-end">
          <strong className="font-poppins text-[20px] font-semibold leading-6 tracking-[-1px]" style={{ color: priceColor ?? "#003BE2" }}>{price}</strong>
          <span className="text-[12px] leading-5 text-grey-700">/lifetime</span>
        </div>
      </div>

      <div className="absolute left-[306px] top-[232px] flex items-center text-[18px] font-medium leading-7 text-grey-700">
        <span>{rating}</span>
        <StarRateRoundIcon width={24} height={24} className="mt-[2px] text-grey-100" />
      </div>
    </article>
  );
}
