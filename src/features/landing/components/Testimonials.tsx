const items = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: "0577f0e9",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: "63c4be83",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    img: "728c3b1d",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 lg:h-[784px] lg:py-0">
      <span className="absolute left-[842px] top-[-241px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.5),rgba(212,251,32,.18)_60%,rgba(212,251,32,0))]" />
      <span className="absolute left-[395px] top-[-138px] h-[672px] w-[672px] rounded-full bg-[radial-gradient(closest-side,rgba(212,251,32,.4),rgba(212,251,32,.12)_60%,rgba(212,251,32,0))]" />
      <span className="absolute left-[-442px] top-[149px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgba(0,59,226,.22),rgba(0,59,226,.08)_60%,rgba(0,59,226,0))]" />
      <div className="relative mx-auto max-w-[1200px] px-4 lg:px-0">
        <div className="grid gap-6 pt-[60px] lg:grid-cols-[1fr_1.2fr] lg:items-start lg:pt-[74px]">
          <h2 className="font-poppins text-[30px] font-medium leading-[1.2] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">Discover What Our Community Is Saying</h2>
          <p className="text-[16px] leading-7 text-grey-700 lg:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:mt-[50px] lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex flex-col gap-6 rounded-[24px] border border-solid border-grey-100 bg-white p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="h-20 w-20 rounded-full object-cover" src={`/images/${t.img}.webp`} alt={t.name} width={80} height={80} />
              <figcaption className="flex flex-col">
                <strong className="font-poppins text-[20px] font-semibold leading-7 text-black">{t.name}</strong>
                <span className="text-[18px] leading-7 text-[#003be2]">{t.role}</span>
              </figcaption>
              <blockquote className="text-[16px] leading-7 text-grey-700 lg:text-[18px]">&ldquo;{t.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
