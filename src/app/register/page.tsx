"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import AuthShell from "@/components/auth/AuthShell";
import Field from "@/components/auth/Field";
import styles from "./register.module.css";

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
      <div className={styles.content}>
        <form onSubmit={onSubmit} className={styles.block}>
          <div className={styles.head}>
            <span>Create an Account</span>
            <h2>Welcome to ByteSpace</h2>
          </div>
          <div className={styles.fields}>
            <Field label="Full Name" name="name" placeholder="Jamie Davis" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="name" />
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="email" />
            <Field label="Password" name="password" type="password" placeholder="********" labelColor="#000" borderColor="#e7e7e7" placeholderColor="#888" autoComplete="new-password" />
          </div>
          <button type="submit" className={styles.btn}>Continue</button>
        </form>
        <p className={styles.switch}>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </AuthShell>
  );
}
