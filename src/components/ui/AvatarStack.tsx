import styles from "./AvatarStack.module.css";

type Badge = { label: string; background: string; color: string };

type Props = {
  images: string[];
  size: number;
  overlap: number;
  badge?: Badge;
  badgeFontSize?: number;
};

export default function AvatarStack({ images, size, overlap, badge, badgeFontSize = 12 }: Props) {
  return (
    <div className={styles.stack} style={{ height: size }}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          width={size}
          height={size}
          className={styles.avatar}
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -overlap }}
        />
      ))}
      {badge && (
        <span
          className={styles.badge}
          style={{
            width: size,
            height: size,
            marginLeft: -overlap,
            background: badge.background,
            color: badge.color,
            fontSize: badgeFontSize,
          }}
        >
          {badge.label}
        </span>
      )}
    </div>
  );
}
