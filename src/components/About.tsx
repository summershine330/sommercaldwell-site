import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream px-[80px] py-[130px] grid grid-cols-2 gap-[90px] items-start"
    >
      {/* Photo column */}
      <div className="relative pb-[28px] pr-0 pl-[28px]">
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
        <h2 className="font-cormorant font-semibold text-[clamp(2rem,3vw,2.9rem)] text-navy leading-[1.18] mb-[36px]">
          The vision is already in the room. I just build the system around it.
        </h2>
        <blockquote className="border-l-[3px] border-gold pl-[26px] mb-[36px] font-cormorant italic text-[1.2rem] leading-[1.65] text-navy opacity-90">
          &ldquo;The funding exists. The talent is there. The will is strong.
          What&apos;s missing is alignment. That&apos;s my specialty.&rdquo;
        </blockquote>
        <p className="text-[1.1rem] leading-[1.85] text-muted mb-[20px] font-light">
          Sommer Caldwell-Carruthers is an author, educator, and strategist who
          blends personal truth with professional insight. Her message is rooted
          in one belief: When mindset and purpose align, everything else flows.
        </p>
        <p className="text-[1.1rem] leading-[1.85] text-muted mb-[20px] font-light">
          Sommer brings over two decades of experience in education. She serves
          as a strategist, grant architect, and systems builder. Her work sits
          at the rare intersection of operational rigor and human-centered
          vision. From designing MTSS frameworks to securing millions in
          competitive funding, Sommer&apos;s impact is measurable, lasting, and
          built to scale.
        </p>
        <p className="text-[1.1rem] leading-[1.85] text-muted mb-[20px] font-light">
          Sommer brings a dynamic and grounded presence to K-12 events,
          empowerment events, leadership, entrepreneurship, and technology
          spaces. She&apos;s known for her ability to hold real conversations
          that guide audiences from reflection to action. Whether delivering a
          keynote at a women&apos;s conference, facilitating a tech workshop,
          leading a DISC/Take Flight® session, or driving strategic professional
          development for schools and districts, Sommer helps people shift how
          they think, lead, and live.
        </p>
      </div>
    </section>
  );
}
