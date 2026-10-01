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
    <div className="flex items-center" style={{ height: size }}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          width={size}
          height={size}
          className="flex-none rounded-full object-cover"
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -overlap }}
        />
      ))}
      {badge && (
        <span
          className="grid flex-none place-items-center rounded-full font-satoshi text-center font-medium leading-normal"
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
