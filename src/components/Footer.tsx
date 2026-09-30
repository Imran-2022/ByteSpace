import Link from "next/link";
import Logo from "./ui/Logo";
import styles from "./Footer.module.css";

const browse1 = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const browse2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const platform = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Logo markColor="#C1E338" textColor="#242528" />
          <p className={styles.lead}>
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className={styles.form} action="#">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit">Search</button>
          </form>
          <p className={styles.fine}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className={styles.browse}>
          <h3>Browse</h3>
          <div className={styles.lists}>
            <ul>{browse1.map((l) => <li key={l}><Link href="#">{l}</Link></li>)}</ul>
            <ul>{browse2.map((l) => <li key={l}><Link href="#">{l}</Link></li>)}</ul>
          </div>
        </div>

        <div className={styles.platform}>
          <h3>Platform</h3>
          <ul>{platform.map((l) => <li key={l}><Link href="#">{l}</Link></li>)}</ul>
        </div>

        <hr className={styles.rule} />
        <p className={styles.copy}>@ 2023 ByteSpace. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
