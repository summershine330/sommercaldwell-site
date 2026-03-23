const metrics = [
  { number: "$12M+", label: "Grants Secured" },
  { number: "22+", label: "Years in Education" },
  { number: "7+", label: "Executive Years" },
];

const services = [
  "MTSS Architecture & Implementation",
  "Leadership Development",
  "School Turnaround Strategy",
  "Grant Writing & Program Funding",
  "Program Design & Sustainability",
  "AI & Technology Integration for Schools",
];

export default function Consulting() {
  return (
    <section
      id="consulting"
      className="bg-navy px-5 py-[72px] md:px-[80px] md:py-[130px] grid grid-cols-1 md:grid-cols-2 gap-[90px] items-start"
    >
      {/* Left column */}
      <div>
        <div className="w-[48px] h-[2px] bg-gold mb-[20px]" />
        <span className="font-sans font-medium text-[0.68rem] tracking-[0.24em] uppercase text-gold-light mb-[20px] block">
          Consulting
        </span>
        <h2 className="font-cormorant font-semibold text-[clamp(1.7rem,4vw,3.48rem)] text-white leading-[1.18] mb-[36px]">
          Transform Underperforming Systems Into Living Achievement Engines.
        </h2>
        <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.85] text-[rgba(255,255,255,0.6)] mb-[44px] font-light">
          Executive-level strategy and implementation for schools, districts,
          and nonprofits ready to stop managing problems and start building
          solutions.
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-[16px]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[rgba(255,255,255,0.055)] border border-[rgba(255,255,255,0.1)] px-[26px] py-[30px] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.09)]"
            >
              <span className="font-cormorant text-[2.1rem] font-semibold text-gold-light block mb-[6px]">
                {m.number}
              </span>
              <span className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-[rgba(255,255,255,0.45)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div>
        <ul className="list-none mb-[48px]">
          {services.map((service) => (
            <li
              key={service}
              className="text-[1.1rem] md:text-[1.25rem] text-[rgba(255,255,255,0.72)] py-[22px] border-b border-[rgba(255,255,255,0.07)] flex items-center gap-[16px] font-light transition-colors duration-200 hover:text-white before:content-[''] before:w-[22px] before:h-[1px] before:bg-gold before:flex-shrink-0"
            >
              {service}
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="bg-gold text-white font-sans text-[0.75rem] font-medium tracking-[0.12em] uppercase px-[34px] py-[17px] no-underline inline-block transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Inquire About Consulting
        </a>
      </div>
    </section>
  );
}
