import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream px-5 py-[72px] md:px-[80px] md:py-[130px] grid grid-cols-1 md:grid-cols-2 gap-[90px] items-start"
    >
      {/* Photo column */}
      <div className="relative pb-[20px] pl-[20px] md:pb-[28px] md:pl-[28px] pr-0">
        {/* Gold offset border — anchored to outer div, sits behind and to the bottom-left */}
        <div className="absolute top-[28px] left-0 right-[28px] bottom-0 border-2 border-gold opacity-35 pointer-events-none z-0" />
        {/* Photo frame */}
        <div className="relative w-full pt-[115%] z-[1]">
          <Image
            src="/headshot2.jpg"
            alt="Sommer Caldwell Carruthers"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Content column */}
      <div>
        <div className="w-[48px] h-[2px] bg-gold mb-[20px]" />
        <span className="font-sans font-medium text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-[20px] block">
          About Sommer
        </span>
        <h2 className="font-cormorant font-semibold text-[clamp(1.7rem,4vw,2.9rem)] text-navy leading-[1.18] mb-[36px]">
          Real Talk. Real Strategy. Real Results.
        </h2>
        <blockquote className="border-l-[3px] border-gold pl-[26px] mb-[36px] font-cormorant italic text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.5] text-navy opacity-90">
          &ldquo;Every audience I stand before already has the answers. My job
          is to help them see it, claim it, and act on it.&rdquo;
        </blockquote>
        <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.85] text-muted mb-[20px] font-light">
          Sommer Caldwell Carruthers is an author, educator, and sought-after
          speaker who brings over two decades of experience to every stage she
          steps on. Her message is rooted in one belief: When mindset and
          strategy align, everything in the room shifts.
        </p>
        <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.85] text-muted mb-[20px] font-light">
          With 22+ years in education and 7+ years of executive leadership, she
          has spent her career inside the rooms where change is supposed to
          happen and knows exactly what it takes to make it actually happen.
          That hard-earned insight shows up in every keynote, workshop, and
          session she delivers.
        </p>
        <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.85] text-muted mb-[20px] font-light">
          Known for her dynamic and grounded presence, Sommer speaks at K-12
          leadership events, women&apos;s conferences, entrepreneurship summits,
          empowerment events, and technology spaces across the country. Her gift
          is holding real conversations that move audiences from reflection to
          action. Whether on the keynote stage, facilitating a DISC/Take
          Flight® workshop, or leading a strategic session, she helps people
          shift how they think, lead, and live.
        </p>
      </div>
    </section>
  );
}
