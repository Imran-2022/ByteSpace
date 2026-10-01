import Link from "next/link";
import GridBackground from "@/components/ui/GridBackground";
import TintedShape from "@/components/ui/TintedShape";

type Shape = { src: string; w: number; h: number; x: number; y: number };

/** Measured directly from Figma's rendered CTA_Frame.png export. */
const shapes: Shape[] = [
  { src: "/images/tinted/e3b55902_d4fb20.webp", w: 220, h: 230, x: -60, y: -60 },
  { src: "/images/tinted/cda676fe_f5f5f6.webp", w: 120, h: 135, x: 205, y: 30 },
  { src: "/images/tinted/f9c0e0fd_d4fb20.webp", w: 150, h: 165, x: 1105, y: -10 },
  { src: "/images/tinted/8670b841_d4fb20.webp", w: 260, h: 250, x: 20, y: 320 },
  { src: "/images/tinted/f9c0e0fd_f5f5f6.webp", w: 200, h: 280, x: -90, y: 200 },
  { src: "/images/tinted/92fc70a3_f5f5f6.webp", w: 220, h: 330, x: 1265, y: -30 },
  { src: "/images/tinted/d5e9c4dc_d4fb20.webp", w: 210, h: 190, x: 1160, y: 310 },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-16 lg:h-[488px] lg:py-0">
      <GridBackground />
      {shapes.map((s, i) => (
        <TintedShape key={i} src={s.src} width={s.w} height={s.h} x={s.x} y={s.y} />
      ))}
      <div className="relative mx-auto flex max-w-[964px] flex-col items-center gap-6 px-4 pt-[60px] text-center sm:px-6 lg:pt-[85px]">
        <h2 className="max-w-[710px] font-poppins text-[32px] font-medium leading-[1.2] text-[#f5f5f6] sm:text-[44px] lg:text-[52px] lg:leading-[64px]">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="max-w-[864px] text-[16px] leading-7 text-grey-200 lg:text-[18px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link href="/register" className="mt-2 inline-flex h-[46px] w-[172px] items-center justify-center rounded-[24px] bg-brand-lime-bright text-[18px] font-medium leading-7 text-ink">
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
