import {
  BusinessIcon,
  ComputerIcon,
  ConnectWithoutContactIcon,
  DeveloperModeIcon,
  PhotoCameraFrontIcon,
} from "./icons/material";
import styles from "./Categories.module.css";

const size = { width: 36, height: 36, color: "#242528" };

const items = [
  {
    label: "Design",
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/logos/palette.svg" alt="" width={36} height={36} />,
  },
  { label: "Development", icon: <DeveloperModeIcon {...size} /> },
  { label: "IT & Software", icon: <ComputerIcon {...size} /> },
  { label: "Business", icon: <BusinessIcon {...size} /> },
  { label: "Marketing", icon: <ConnectWithoutContactIcon {...size} /> },
  { label: "Photography", icon: <PhotoCameraFrontIcon {...size} /> },
];

export default function Categories() {
  return (
    <section className={styles.section} id="creators">
      <div className={styles.heading}>
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
          courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>
      </div>

      <ul className={styles.cards}>
        {items.map((item) => (
          <li key={item.label} className={styles.card}>
            <span className={styles.circle}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
