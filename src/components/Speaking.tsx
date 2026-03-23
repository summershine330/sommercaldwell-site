const cards = [
  {
    title: "Education & Technology",
    text: "Helping organizations navigate learning and innovation without leaving people behind.",
  },
  {
    title: "Purpose to Power",
    text: "Activating the potential already in the room. A methodology for translating vision into execution.",
  },
  {
    title: "Systems That Serve People",
    text: "Why outdated structures fail and how to build ones that don't.",
  },
];

const tags = [
  "Women's Conferences",
  "K–12 Leadership Events",
  "DISC / Take Flight® Workshops",
  "Entrepreneurship Summits",
  "Empowerment Events",
  "Technology & Artificial Intelligence",
  "Professional Development",
  "Strategic Planning Retreats",
];

export default function Speaking() {
  return (
    <section id="speaking" className="bg-ivory px-5 py-[72px] md:px-[80px] md:py-[130px]">
      {/* Header */}
      <div className="mb-[40px] md:mb-[64px]">
        <div className="w-[48px] h-[2px] bg-gold mb-[20px]" />
        <span className="font-sans font-medium text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-[20px] block">
          Speaking
        </span>
        <h2 className="font-cormorant font-semibold text-[clamp(1.7rem,4vw,3.48rem)] text-navy leading-[1.18]">
          Talks That Move Rooms To Action.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px] mb-[56px]">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-[rgba(13,27,62,0.09)] border-t-[3px] border-t-navy pt-[44px] px-[36px] pb-[44px] transition-all duration-[250ms] cursor-pointer hover:-translate-y-[6px] hover:shadow-[0_20px_56px_rgba(13,27,62,0.13)]"
          >
            <p className="font-cormorant text-[1.5rem] font-semibold text-navy mb-[18px] leading-[1.25]">
              {card.title}
            </p>
            <p className="text-[1.1rem] leading-[1.75] text-muted font-light">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <a
        href="#book"
        className="bg-navy text-white font-sans text-[0.75rem] font-medium tracking-[0.12em] uppercase px-[34px] py-[17px] border-2 border-navy no-underline transition-all duration-200 hover:bg-mid-navy hover:border-mid-navy hover:-translate-y-0.5 inline-block"
      >
        Inquire About Speaking
      </a>

      {/* Tag cloud */}
      <div className="mt-[56px]">
        <span className="font-sans font-medium text-[0.65rem] tracking-[0.24em] uppercase text-gold block mb-[20px]">
          I Speak At
        </span>
        <div className="flex flex-wrap gap-[12px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[0.7rem] font-medium tracking-[0.1em] uppercase text-navy border border-navy px-[18px] py-[9px] rounded-full bg-transparent cursor-default transition-all duration-200 hover:bg-gold hover:border-gold hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
