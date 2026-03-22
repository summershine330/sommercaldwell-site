const stats = [
  { number: "$12M+", label: "Grants Secured" },
  { number: "22+", label: "Years in Education" },
  { number: "7+", label: "Years Executive Leadership" },
];

export default function StatsBar() {
  return (
    <div className="bg-mid-navy py-[60px] px-[80px] flex justify-center">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`text-center px-[90px] ${
            i < stats.length - 1
              ? "border-r border-[rgba(255,255,255,0.1)]"
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
