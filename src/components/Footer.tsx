export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-[rgba(255,255,255,0.05)] px-5 py-[28px] md:px-[80px] md:py-[40px] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <span className="font-cormorant font-semibold text-[0.95rem] md:text-[1.15rem] text-[rgba(255,255,255,0.85)]">
        Sommer Caldwell-Carruthers
      </span>
      <div className="flex items-center gap-5">
        <a
          href="/privacy"
          className="text-[0.65rem] md:text-[0.75rem] text-white font-light tracking-[0.06em] uppercase hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200 no-underline"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="text-[0.65rem] md:text-[0.75rem] text-white font-light tracking-[0.06em] uppercase hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200 no-underline"
        >
          Terms &amp; Conditions
        </a>
        <span className="text-[0.65rem] md:text-[0.75rem] text-white font-light">
          © 2026 sommercaldwellcarruthers.com
        </span>
      </div>
    </footer>
  );
}
