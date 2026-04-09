import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-cream px-5 pt-[72px] pb-[60px] md:px-[80px] md:pt-[110px] md:pb-[90px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[80px] items-center md:min-h-[92vh]"
    >
      {/* Left: content */}
      <div>
        <p className="font-sans font-medium text-[0.65rem] md:text-[1rem] tracking-[0.3em] uppercase text-gold mb-[28px]">
          Educator · Leader · Entrepreneur
        </p>

        <h1 className="font-cormorant font-semibold text-[clamp(1.8rem,6vw,3.6rem)] leading-[1.12] text-navy mb-[32px] tracking-[-0.01em]">
          When <em className="italic text-gold">Mindset</em> Meets{" "}
          <em className="italic text-gold">Strategy,</em> Everything in the Room Shifts.
        </h1>

        <p className="font-cormorant text-[clamp(1.3rem,3vw,2rem)] leading-[1.45] text-muted mb-[48px] w-full font-normal text-center">
          Bringing Strategy, Innovation, and Transformation to Every Stage,
          Summit, and Leadership Room.
        </p>

        <div className="flex gap-[16px] flex-wrap">
          <a
            href="#book"
            className="bg-navy text-white font-sans text-[0.75rem] font-medium tracking-[0.12em] uppercase px-[34px] py-[17px] border-2 border-navy no-underline transition-all duration-200 hover:bg-mid-navy hover:border-mid-navy hover:-translate-y-0.5 inline-block"
          >
            Book Sommer to Speak
          </a>
        </div>
      </div>

      {/* Right: photo */}
      <div className="w-full flex justify-end items-center">
        <div className="relative w-full md:w-[400px] h-[380px] md:h-[520px]">
          <Image
            src="/headshot1.jpg"
            alt="Sommer Caldwell Carruthers"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Badge */}
          <div className="absolute -bottom-5 -left-5 bg-gold text-white px-[22px] py-[16px] font-sans text-[0.65rem] font-medium tracking-[0.14em] uppercase leading-[1.6] max-w-[170px] z-10">
            <strong className="block font-cormorant text-[1.6rem] font-semibold text-navy leading-none mb-1">
              22+
            </strong>
            Years Transforming Education
          </div>
        </div>
      </div>
    </section>
  );
}
