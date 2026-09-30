import Link from "next/link";
import styles from "./Logo.module.css";

type Props = {
  markColor?: string;
  textColor?: string;
};

/** ByteSpace logo: mark (from the Figma vector) + Clash Display wordmark. */
export default function Logo({ markColor = "#C1E338", textColor = "#F5F5F6" }: Props) {
  return (
    <Link href="/" className={styles.logo} aria-label="ByteSpace home">
      <svg
        className={styles.mark}
        width="28.875"
        height="31.5"
        viewBox="0 0 28.875 31.5"
        fill={markColor}
        aria-hidden
      >
        <path d="M10.5 10.5C10.5 4.701 5.799 0 0 0V21C0 26.799 4.701 31.5 10.5 31.5V10.5Z" />
        <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z" />
        <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z" />
      </svg>
      <span className={styles.word} style={{ color: textColor }}>
        ByteSpace
      </span>
    </Link>
  );
}
