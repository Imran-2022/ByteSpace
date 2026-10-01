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
    <section className="bg-white py-16" id="creators">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto flex max-w-[917px] flex-col gap-4 text-center">
          <h2 className="font-poppins text-[28px] font-medium leading-[1.2] tracking-[-1px] text-[#040819] sm:text-[32px] lg:text-[36px]">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="text-[16px] leading-[1.5] text-grey-500 lg:text-[18px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
            courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <ul className="mt-12 flex list-none flex-wrap justify-center gap-6 lg:gap-10">
          {items.map((item) => (
            <li key={item.label} className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-solid border-grey-100 bg-white">
              <span className="grid h-[60px] w-[60px] place-items-center rounded-[40px] bg-brand-lime-bright text-ink">{item.icon}</span>
              <span className="whitespace-nowrap text-[20px] font-medium leading-6 text-ink">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
