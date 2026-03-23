export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-[rgba(250,247,242,0.92)] backdrop-blur-[16px] border-b border-[rgba(184,134,11,0.18)] px-5 md:px-[60px] flex items-center justify-between h-[76px]">
      <a
        href="/"
        className="font-cormorant font-semibold text-[1.25rem] text-navy tracking-[0.02em] no-underline"
      >
        Sommer Caldwell-Carruthers
      </a>

      <ul className="hidden md:flex gap-[40px] list-none">
        {[
          { href: "/#about", label: "About" },
          { href: "/#speaking", label: "Speaking" },
          { href: "/#consulting", label: "Consulting" },
          { href: "/#book", label: "Contact" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-sans font-normal text-[0.78rem] tracking-[0.1em] uppercase text-navy no-underline transition-colors duration-200 hover:text-gold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/#book"
        className="ml-[40px] bg-navy text-white font-sans font-normal text-[0.75rem] tracking-[0.12em] uppercase px-[18px] py-[10px] md:px-[28px] md:py-[12px] no-underline transition-all duration-200 hover:bg-mid-navy hover:-translate-y-px inline-block"
      >
        Book Sommer
      </a>
    </nav>
  );
}
