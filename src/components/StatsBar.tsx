const stats = [
  { number: "$12M+", label: "Grants Secured" },
  { number: "22+", label: "Years in Education" },
  { number: "7+", label: "Years Executive Leadership" },
];

export default function StatsBar() {
  return (
    <div className="bg-mid-navy py-[48px] px-[24px] md:py-[60px] md:px-[80px] grid grid-cols-2 md:flex md:justify-center">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`text-center px-4 md:px-[90px] py-6 md:py-0 ${
            i === 0
              ? "border-r border-b md:border-b-0 border-[rgba(255,255,255,0.1)]"
              : i === 1
              ? "border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]"
              : ""
          }`}
        >
          <span className="font-cormorant text-[3.8rem] font-semibold text-gold-light block leading-none mb-[10px]">
            {stat.number}
          </span>
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.6)]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
