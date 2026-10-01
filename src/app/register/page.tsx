"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import AuthShell from "@/features/auth/components/AuthShell";
import Field from "@/features/auth/components/Field";

export default function RegisterPage() {
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="absolute left-[63px] top-[61px] flex w-[453px] flex-col gap-[122px]">
        <form onSubmit={onSubmit} className="relative flex min-h-[500px] flex-col gap-10">
          <div className="flex flex-col gap-px">
            <span className="text-[18px] font-medium leading-7 text-[#003be2]">Create an Account</span>
            <h2 className="w-[453px] font-poppins text-[44px] font-medium leading-[52px] tracking-[-1px] text-black">Welcome to ByteSpace</h2>
          </div>
          <div className="flex flex-col gap-6">
            <Field label="Full Name" name="name" placeholder="Jamie Davis" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="name" />
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="email" />
            <Field label="Password" name="password" type="password" placeholder="********" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="new-password" />
          </div>
          <button type="submit" className="h-[46px] w-[123px] cursor-pointer self-end rounded-[24px] border-0 bg-brand-lime-bright text-[18px] font-medium text-[#242528]">Continue</button>
        </form>
        <p className="text-center text-[16px] leading-6 text-[#888]">
          Already have an account? <Link className="ml-1 font-medium text-[#003be2]" href="/login">Login</Link>
        </p>
      </div>
    </AuthShell>
  );
}
