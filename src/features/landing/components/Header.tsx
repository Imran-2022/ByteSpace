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
      <div className="relative mx-auto h-[120px] w-full max-w-[1440px] px-4 sm:px-6 lg:px-0">
        <div className="absolute left-4 top-[35px] lg:left-[122px]">
          <Logo markColor={markColor} />
        </div>
        {variant === "full" && (
          <>
            <nav className="absolute left-1/2 top-[47px] hidden -translate-x-1/2 items-center gap-6 text-[16px] leading-6 text-grey-100 lg:flex" aria-label="Primary">
              <Link href="/" className="font-bold text-[#f5f5f6]">
                Home
              </Link>
              <Link href="#courses">Courses</Link>
              <Link href="#creators">Creators</Link>
            </nav>
            <div className="absolute right-4 top-[48px] flex h-6 items-center gap-4 text-[16px] leading-6 text-grey-100 sm:gap-6 lg:right-[122px] lg:w-[174px]">
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

