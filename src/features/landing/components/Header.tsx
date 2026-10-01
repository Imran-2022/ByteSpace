import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ShoppingBagIcon } from "@/components/icons/material";

type Props = {
  /** "full" shows nav + actions (home). "logo" only shows the logo (auth pages). */
  variant?: "full" | "logo";
  markColor?: string;
};

export default function Header({ variant = "full", markColor }: Props) {
  return (
    <header className="absolute left-0 right-0 top-0 z-[5] h-[120px]">
      <div className="relative mx-auto h-[120px] w-[1440px]">
        <div className="absolute left-[122px] top-[35px]">
          <Logo markColor={markColor} />
        </div>
        {variant === "full" && (
          <>
            <nav className="absolute left-[614px] top-[47px] flex gap-6 text-[16px] leading-6 text-grey-100" aria-label="Primary">
              <Link href="/" className="font-bold text-[#f5f5f6]">
                Home
              </Link>
              <Link href="#courses">Courses</Link>
              <Link href="#creators">Creators</Link>
            </nav>
            <div className="absolute left-[1146px] top-[48px] flex h-6 w-[174px] items-center gap-6 text-[16px] leading-6 text-grey-100">
              <Link href="/login">Sign In</Link>
              <Link href="/register">Join Us</Link>
              <button type="button" className="ml-auto grid h-6 w-6 cursor-pointer place-items-center border-0 bg-transparent text-[#b0b0b0]" aria-label="Cart">
                <ShoppingBagIcon width={24} height={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

