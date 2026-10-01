/** Faint 120px white grid used behind the hero, CTA and auth pages. */
export default function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#fff_2px,transparent_2px),linear-gradient(to_bottom,#fff_2px,transparent_2px)] bg-[length:120px_120px] bg-[position:calc(50%_-_61px)_-1px] opacity-[0.12]"
      aria-hidden
    />
  );
}
