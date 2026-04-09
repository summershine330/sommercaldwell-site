"use client";

import { useState, FormEvent } from "react";

export default function BookSommer() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    engagementType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", organization: "", email: "", engagementType: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "bg-[rgba(255,255,255,0.055)] border border-[rgba(255,255,255,0.11)] text-white font-sans text-[1.1rem] md:text-[1.25rem] font-light px-[18px] py-[15px] outline-none transition-all duration-200 focus:border-gold focus:bg-[rgba(255,255,255,0.08)] placeholder:text-[rgba(255,255,255,0.25)]";
  const labelClass =
    "text-[1.1rem] md:text-[1.25rem] font-medium tracking-[0.16em] uppercase text-[rgba(255,255,255,0.45)]";

  return (
    <section
      id="book"
      className="bg-deep-navy px-5 py-[72px] md:px-[80px] md:py-[130px] grid grid-cols-1 md:grid-cols-2 gap-[90px] items-start"
    >
      {/* Left column */}
      <div>
        <div className="w-[48px] h-[2px] bg-gold mb-[20px]" />
        <span className="font-sans font-medium text-[0.68rem] tracking-[0.24em] uppercase text-gold-light mb-[20px] block">
          Book Sommer
        </span>
        <h2 className="font-cormorant font-semibold text-[clamp(1.7rem,4vw,2.9rem)] text-white leading-[1.18] mb-[24px]">
          Bring the Voice Your Organization Has Been Waiting For.
        </h2>
        <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.85] text-[rgba(255,255,255,0.55)] mb-[44px] font-light">
          Whether you need a keynote that shifts a culture, a workshop that
          builds capacity, or a consulting partner who stays until the work is
          done. This is where it begins.
        </p>

        {/* Testimonial */}
        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(184,134,11,0.25)] px-[36px] py-[40px]">
          <p className="font-cormorant italic text-[1.6rem] leading-[1.65] text-[rgba(255,255,255,0.85)] mb-[24px]">
            &ldquo;She doesn&apos;t just speak to an audience. She moves
            them.&rdquo;
          </p>
          <span className="text-[0.7rem] tracking-[0.14em] uppercase text-gold font-medium">
            — Workshop Attendee
          </span>
        </div>
      </div>

      {/* Right column: form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        {/* Name + Org row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          <div className="flex flex-col gap-[8px]">
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className={labelClass}>Organization</label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder="School or district name"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[8px]">
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className={inputClass}
          />
        </div>

        {/* Engagement Type */}
        <div className="flex flex-col gap-[8px]">
          <label className={labelClass}>Engagement Type</label>
          <select
            name="engagementType"
            value={form.engagementType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled className="bg-deep-navy">
              Select engagement type
            </option>
            {["Keynote", "Workshop", "Panel Appearance", "Other"].map((opt) => (
              <option key={opt} value={opt} className="bg-deep-navy">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-[8px]">
          <label className={labelClass}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your event and what you're hoping to accomplish..."
            rows={5}
            required
            className={`${inputClass} resize-y min-h-[110px]`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gold text-white font-sans text-[0.75rem] font-medium tracking-[0.12em] uppercase px-[34px] py-[18px] border-none cursor-pointer block w-full text-center transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === "sending" ? "Sending…" : "Send Inquiry"}
        </button>

        {status === "success" && (
          <p className="text-[1.1rem] md:text-[1.25rem] text-[rgba(255,255,255,0.6)] text-center font-light">
            Your inquiry was sent. Sommer will be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-[1.1rem] md:text-[1.25rem] text-[rgba(212,100,100,0.8)] text-center font-light">
            Something went wrong. Please try again or email directly.
          </p>
        )}
      </form>
    </section>
  );
}
