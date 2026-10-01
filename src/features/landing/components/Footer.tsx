import Link from "next/link";
import Logo from "@/components/ui/Logo";

const browse1 = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const browse2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const platform = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export default function Footer() {
  return (
    <footer className="box-border h-[566px] border-t border-solid border-[#e7e7e7] bg-white pt-[40px] text-ink">
      <div className="relative mx-auto h-[525px] w-[1200px]">
        <div className="absolute left-0 top-[31px] w-[528px]">
          <Logo markColor="#C1E338" textColor="#242528" />
          <p className="mt-4 text-[14px] leading-5 text-grey-700">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="mt-8 flex gap-6" action="#">
            <input className="h-[52px] w-[376px] rounded-full border border-solid border-grey-200 bg-white px-6 text-[16px] text-ink outline-none placeholder:text-grey-500" type="email" placeholder="Enter your email" aria-label="Email address" />
            <button className="h-[46px] w-[104px] cursor-pointer rounded-[24px] border-0 bg-brand-lime-bright text-[18px] font-medium text-ink" type="submit">Search</button>
          </form>
          <p className="mt-6 w-[504px] text-[10px] leading-[1.5] text-grey-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className="absolute left-[620px] top-[31px]">
          <h3 className="mb-4 text-[16px] font-normal leading-6 text-ink">Browse</h3>
          <div className="flex gap-10">
            <ul className="w-[167px] list-none">{browse1.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
            <ul className="w-[167px] list-none">{browse2.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
          </div>
        </div>

        <div className="absolute left-[1034px] top-[31px]">
          <h3 className="mb-4 text-[16px] font-normal leading-6 text-ink">Platform</h3>
          <ul className="w-[167px] list-none">{platform.map((l) => <li className="h-[38px] text-[14px] leading-5" key={l}><Link className="text-grey-700" href="#">{l}</Link></li>)}</ul>
        </div>

        <hr className="absolute left-0 top-[395px] w-[1200px] border-0 border-t border-solid border-[#e7e7e7]" />
        <p className="absolute left-0 top-[418px] text-[12px] leading-[1.5] text-grey-700">@ 2023 ByteSpace. All rights reserved.</p>
        <div className="absolute right-0 top-[418px] flex gap-6 text-[12px] leading-[1.5] text-grey-700">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
