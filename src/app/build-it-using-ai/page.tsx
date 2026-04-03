import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Build It Using AI — Sommer Caldwell Carruthers",
  description:
    "Live weekly Zoom classes for beginners. Learn how to use AI to build practical things for your life or business.",
};

export default function BuildItUsingAILandingPage() {
  const scheduleNote = "Every Saturday at 2:00 PM starting April 18";
  const pricingNote = "Founding rate for the first two classes only";

  const stripeLinks = {
    april18: "https://buy.stripe.com/7sY28sdmQ9XH2wD0DM4c800",
    april25: "https://buy.stripe.com/6oU7sM0A4c5P9Z5biq4c801",
    may2: "https://buy.stripe.com/8x2dRaciM0n75IPeuC4c802",
  };

  const upcomingClasses = [
    {
      title: "Build Your First AI Tool in 90 Minutes",
      link: stripeLinks.april18,
      subtitle: "Saturday • 2:00 PM",
      detail: "Create something useful with AI even if you have never coded before.",
      date: "April 18",
      price: "$67",
      badge: "Founding Price",
    },
    {
      title: "Build a Simple Website Using AI",
      link: stripeLinks.april25,
      subtitle: "Saturday • 2:00 PM",
      detail: "Learn how to go from idea to a polished page you can actually publish.",
      date: "April 25",
      price: "$67",
      badge: "Founding Price",
    },
    {
      title: "Create Your First Simple AI Agent",
      link: stripeLinks.may2,
      subtitle: "Saturday • 2:00 PM",
      detail: "Set up a beginner friendly AI workflow to save time in life or business.",
      date: "May 2",
      price: "$97",
      badge: "Standard Price",
    },
  ];

  return (
    <>
      <Nav />
      <main>
        <div className="min-h-screen bg-neutral-950 text-white">
          <section className="relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_25%)]" />
            <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
              <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                    Live weekly Zoom classes for beginners
                  </div>
                  <p className="mt-4 text-sm text-white/60">{scheduleNote}</p>
                  <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                    Build It Using AI
                    <span className="block text-white/70">Beginner Series</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                    Learn how to use AI to build practical things for your life or business, from websites and simple apps to resumes, workflows, and beginner friendly AI agents.
                  </p>
                  <div className="mt-6 inline-flex items-center rounded-full bg-emerald-400/15 px-4 py-2 text-sm text-emerald-300">
                    {pricingNote}
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href="#enroll" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-neutral-950 shadow-lg shadow-white/10 transition hover:scale-[1.01]">
                      Reserve Your Seat • Starting at $67
                    </a>
                    <a href="#classes" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                      View Upcoming Classes
                    </a>
                  </div>
                  <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 text-sm text-white/70 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-semibold text-white">90 min</div>
                      <div className="mt-1">Live guided class</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-semibold text-white">$67 → $97</div>
                      <div className="mt-1">Limited founding price</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-semibold text-white">90 seats</div>
                      <div className="mt-1">Limited live access</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                  <div className="rounded-[24px] border border-white/10 bg-neutral-900 p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="text-sm uppercase tracking-[0.18em] text-white/45">Featured class</div>
                        <div className="mt-2 text-2xl font-semibold">Build Your First AI Tool</div>
                        <div className="mt-1 text-sm text-white/60">Saturday • April 18 • 2:00 PM</div>
                      </div>
                      <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">
                        $67 Founding Price
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {[
                        "Use an AI chat model to map the idea",
                        "Use a beginner friendly build tool to create it live",
                        "Save the workflow so you can do it again on your own",
                        "Ask questions and get live help before class ends",
                      ].map((item) => (
                        <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-white" />
                          <p className="text-sm leading-6 text-white/75">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl bg-white p-4 text-neutral-950">
                      <div className="text-sm font-medium text-neutral-500">What you will leave with</div>
                      <div className="mt-2 text-lg font-semibold">A simple AI powered tool they built themselves</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="classes" className="border-y border-white/10 bg-white/[0.03]">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">Upcoming classes</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Every Saturday at 2:00 PM</h2>
                </div>
                <p className="max-w-xl text-white/65">First two sessions are offered at a founding price. Pricing increases after April 25.</p>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {upcomingClasses.map((course) => (
                  <div key={course.title} className="rounded-[28px] border border-white/10 bg-neutral-950 p-6 shadow-xl shadow-black/20">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-cyan-300/80">{course.subtitle}</div>
                      <div className="text-xs text-white/60">{course.badge}</div>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">{course.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{course.date} • 2:00 PM</p>
                    <p className="mt-4 text-sm leading-7 text-white/70">{course.detail}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-white/40">Live seat</div>
                        <div className="mt-1 text-lg font-semibold">{course.price}</div>
                      </div>
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
                        Reserve Seat
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">About Sommer</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">A practical guide for beginners</h2>
                <p className="mt-4 text-white/70 leading-8">
                  This series is designed to help everyday people use AI to build useful things for themselves without needing a technical background. The focus is clarity, action, and real outcomes.
                </p>
              </div>
              <div id="enroll" className="rounded-[32px] border border-white/10 bg-white p-8 text-neutral-950 shadow-2xl shadow-black/20 md:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">Reserve your seat</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Join a Saturday class</h2>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 px-4 py-2 text-white">Starting at $67</div>
                </div>
                <p className="mt-5 max-w-2xl text-neutral-600 leading-8">
                  Founding price available for April 18 and April 25 only. Regular price is $97 starting May 2.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First name" className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" />
                  <input type="email" placeholder="Email address" className="rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-950" />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
                  <select className="rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-700 outline-none transition focus:border-neutral-950">
                    <option>Select a class</option>
                    <option>April 18 • Build Your First AI Tool • $67</option>
                    <option>April 25 • Build a Simple Website • $67</option>
                    <option>May 2 • Create Your First AI Agent • $97</option>
                  </select>
                  <a href={stripeLinks.april18} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:opacity-90 inline-flex items-center justify-center">
                    Reserve Your Seat
                  </a>
                </div>
                <div className="mt-5 text-sm text-neutral-500">
                  After checkout, you will have the option to add lifetime access to the class recording.
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
