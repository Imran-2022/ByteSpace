import Link from "next/link";
import Logo from "@/components/ui/Logo";

const browse1 = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const browse2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const platform = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export default function Footer() {
  return (
    <footer className="box-border border-t border-solid border-[#e7e7e7] bg-white py-10 text-ink lg:h-[566px] lg:pt-[40px]">
      <div className="relative mx-auto max-w-[1200px] px-4 lg:h-[525px] lg:px-0">
        <div className="lg:absolute lg:left-0 lg:top-[31px] lg:w-[528px]">
          <Logo markColor="#C1E338" textColor="#242528" />
          <p className="mt-4 text-[14px] leading-5 text-grey-700">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row" action="#">
            <input className="h-[52px] w-full rounded-full border border-solid border-grey-200 bg-white px-6 text-[16px] text-ink outline-none placeholder:text-grey-500 sm:max-w-[376px]" type="email" placeholder="Enter your email" aria-label="Email address" />
            <button className="h-[46px] w-full cursor-pointer rounded-[24px] border-0 bg-brand-lime-bright text-[18px] font-medium text-ink sm:w-[104px]" type="submit">Search</button>
          </form>
          <p className="mt-6 max-w-[504px] text-[10px] leading-[1.5] text-grey-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className="mt-12 lg:absolute lg:left-[620px] lg:top-[31px] lg:mt-0">
          <h3 className="mb-4 text-[16px] font-normal leading-6 text-ink">Browse</h3>
          <div className="flex flex-wrap gap-10">
            <ul className="w-[167px] list-none">{browse1.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
            <ul className="w-[167px] list-none">{browse2.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
          </div>
        </div>

        <div className="mt-12 lg:absolute lg:left-[1034px] lg:top-[31px] lg:mt-0">
          <h3 className="mb-4 text-[16px] font-normal leading-6 text-ink">Platform</h3>
          <ul className="w-[167px] list-none">{platform.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
        </div>

        <hr className="mt-12 border-0 border-t border-solid border-[#e7e7e7] lg:absolute lg:left-0 lg:top-[395px] lg:mt-0 lg:w-[1200px]" />
        <div className="mt-6 flex flex-col gap-3 text-[12px] leading-[1.5] text-grey-700 lg:absolute lg:left-0 lg:right-0 lg:top-[418px] lg:mt-0 lg:flex-row lg:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
