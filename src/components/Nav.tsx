"use client";

import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#speaking", label: "Speaking" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/build-it-using-ai", label: "Build With AI" },
  { href: "/#book", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-[rgba(250,247,242,0.92)] backdrop-blur-[16px] border-b border-[rgba(184,134,11,0.18)]">
      <div className="px-5 md:px-[60px] flex items-center justify-between h-[76px]">
        <a
          href="/"
          className="font-cormorant font-semibold text-[1.25rem] text-navy tracking-[0.02em] no-underline"
        >
          Sommer Caldwell-Carruthers
        </a>

        <ul className="hidden md:flex gap-[40px] list-none">
          {navLinks.map(({ href, label }) => (
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

        <div className="flex items-center gap-3">
          <a
            href="/#book"
            className="hidden md:inline-block ml-[40px] bg-navy text-white font-sans font-normal text-[0.75rem] tracking-[0.12em] uppercase px-[28px] py-[12px] no-underline transition-all duration-200 hover:bg-mid-navy hover:-translate-y-px"
          >
            Book Sommer
          </a>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
          >
            <span
              className={`block h-[2px] w-6 bg-navy transition-all duration-300 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-navy transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-navy transition-all duration-300 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 border-t border-[rgba(184,134,11,0.18)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col list-none px-5 py-4 gap-1 bg-[rgba(250,247,242,0.98)]">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block font-sans font-normal text-[0.78rem] tracking-[0.1em] uppercase text-navy no-underline py-3 border-b border-[rgba(184,134,11,0.1)] last:border-0 transition-colors duration-200 hover:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="/#book"
              onClick={() => setOpen(false)}
              className="block bg-navy text-white font-sans font-normal text-[0.75rem] tracking-[0.12em] uppercase px-[18px] py-[12px] no-underline text-center transition-all duration-200 hover:bg-mid-navy"
            >
              Book Sommer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
