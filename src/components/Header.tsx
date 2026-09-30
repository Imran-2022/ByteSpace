import Link from "next/link";
import Logo from "./ui/Logo";
import { ShoppingBagIcon } from "./icons/material";
import styles from "./Header.module.css";

type Props = {
  /** "full" shows nav + actions (home). "logo" only shows the logo (auth pages). */
  variant?: "full" | "logo";
  markColor?: string;
};

export default function Header({ variant = "full", markColor }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo markColor={markColor} />
        </div>
        {variant === "full" && (
          <>
            <nav className={styles.nav} aria-label="Primary">
              <Link href="/" className={styles.active}>
                Home
              </Link>
              <Link href="#courses">Courses</Link>
              <Link href="#creators">Creators</Link>
            </nav>
            <div className={styles.actions}>
              <Link href="/login">Sign In</Link>
              <Link href="/register">Join Us</Link>
              <button type="button" className={styles.bag} aria-label="Cart">
                <ShoppingBagIcon width={24} height={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

