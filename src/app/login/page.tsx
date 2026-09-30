"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import AuthShell from "@/components/auth/AuthShell";
import Field from "@/components/auth/Field";
import styles from "./login.module.css";

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
      <div className={styles.content}>
        <form onSubmit={onSubmit} className={styles.block}>
          <div className={styles.head}>
            <span>Sign In</span>
            <h2>Welcome Back</h2>
          </div>
          <div className={styles.fields}>
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" labelColor="#242528" borderColor="#e5e6e8" placeholderColor="#82868E" autoComplete="email" />
            <Field label="Password" name="password" type="password" placeholder="********" labelColor="#242528" borderColor="#e5e6e8" placeholderColor="#82868E" autoComplete="current-password" />
          </div>
          <button type="submit" className={styles.btn}>Sign In</button>
        </form>

        <div className={styles.social}>
          <div className={styles.or}>
            <i />
            <span>or</span>
            <i />
          </div>
          <div className={styles.buttons}>
            <button type="button" aria-label="Continue with Facebook">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/social-1.svg" alt="" width={40} height={40} />
            </button>
            <button type="button" aria-label="Continue with Google">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/social-2.svg" alt="" width={40} height={40} />
            </button>
          </div>
        </div>

        <p className={styles.switch}>
          New user? <Link href="/register">Create an account</Link>
        </p>
      </div>
    </AuthShell>
  );
}
