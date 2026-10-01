"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import AuthShell from "@/features/auth/components/AuthShell";
import Field from "@/features/auth/components/Field";

export default function LoginPage() {
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="absolute left-[63px] top-[61px] flex w-[453px] flex-col gap-[73px]">
        <form onSubmit={onSubmit} className="relative flex h-[370px] flex-col gap-10">
          <div className="flex flex-col gap-px">
            <span className="text-[18px] font-medium leading-7 text-[#003be2]">Sign In</span>
            <h2 className="font-poppins text-[44px] font-medium leading-[52px] tracking-[-1px] text-[#242528]">Welcome Back</h2>
          </div>
          <div className="flex flex-col gap-6">
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" labelColor="#242528" borderColor="#e5e6e8" placeholderColor="#82868E" autoComplete="email" />
            <Field label="Password" name="password" type="password" placeholder="********" labelColor="#242528" borderColor="#e5e6e8" placeholderColor="#82868E" autoComplete="current-password" />
          </div>
          <button type="submit" className="absolute bottom-0 right-0 h-[46px] w-[104px] cursor-pointer rounded-[24px] border-0 bg-brand-lime-bright text-[18px] font-medium text-[#242528]">Sign In</button>
        </form>

        <div className="flex flex-col gap-10">
          <div className="flex h-[29px] items-center justify-center gap-[11px] text-[18px] leading-7 text-[#888]">
            <i className="h-px w-[200px] bg-[#e5e6e8]" />
            <span>or</span>
            <i className="h-px w-[200px] bg-[#e5e6e8]" />
          </div>
          <div className="flex justify-center gap-6">
            <button className="grid h-[72px] w-[72px] cursor-pointer place-items-center rounded-[24px] border border-solid border-grey-200 bg-white" type="button" aria-label="Continue with Facebook">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/social-1.svg" alt="" width={40} height={40} />
            </button>
            <button className="grid h-[72px] w-[72px] cursor-pointer place-items-center rounded-[24px] border border-solid border-grey-200 bg-white" type="button" aria-label="Continue with Google">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/social-2.svg" alt="" width={40} height={40} />
            </button>
          </div>
        </div>

        <p className="text-center text-[16px] leading-6 text-[#888]">
          New user? <Link className="ml-1 font-medium text-[#003be2]" href="/register">Create an account</Link>
        </p>
      </div>
    </AuthShell>
  );
}
