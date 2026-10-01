import {
  BusinessIcon,
  ComputerIcon,
  ConnectWithoutContactIcon,
  DeveloperModeIcon,
  PhotoCameraFrontIcon,
} from "@/components/icons/material";

const size = { width: 36, height: 36, color: "#242528" };

const items = [
  {
    label: "Design",
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/logos/palette.svg" alt="" width={36} height={36} />,
  },
  { label: "Development", icon: <DeveloperModeIcon {...size} /> },
  { label: "IT & Software", icon: <ComputerIcon {...size} /> },
  { label: "Business", icon: <BusinessIcon {...size} /> },
  { label: "Marketing", icon: <ConnectWithoutContactIcon {...size} /> },
  { label: "Photography", icon: <PhotoCameraFrontIcon {...size} /> },
];

export default function Categories() {
  return (
    <section className="relative h-[472px] bg-white" id="creators">
      <div className="absolute left-[261px] top-0 flex w-[917px] flex-col gap-4 text-center">
        <h2 className="font-poppins text-[36px] font-medium leading-[1.2] tracking-[-1px] text-[#040819]">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="text-[18px] leading-[1.5] text-grey-500">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
          courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>
      </div>

      <ul className="absolute left-[119px] top-[185px] flex list-none gap-10">
        {items.map((item) => (
          <li key={item.label} className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-solid border-grey-100 bg-white">
            <span className="grid h-[60px] w-[60px] place-items-center rounded-[40px] bg-brand-lime-bright text-ink">{item.icon}</span>
            <span className="whitespace-nowrap text-[20px] font-medium leading-6 text-ink">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
