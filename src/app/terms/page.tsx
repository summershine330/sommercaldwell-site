import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sommer Caldwell Carruthers",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream min-h-screen">
        <div className="max-w-[780px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <h1 className="font-cormorant font-semibold text-[2.4rem] md:text-[3.2rem] text-navy leading-tight mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted text-[0.78rem] tracking-[0.08em] uppercase font-sans mb-12 border-b border-[rgba(184,134,11,0.2)] pb-8">
            Effective Date: March 23, 2026 &nbsp;·&nbsp; sommercaldwellcarruthers.com
            <br />
            Business: Summershine LLC | Radiant Capital Holdings LLC
          </p>

          <div className="space-y-10 text-navy">

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using sommercaldwellcarruthers.com, you agree to be bound by
                these Terms and Conditions. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                2. Services
              </h2>
              <p>
                Sommer Caldwell-Carruthers, operating through Summershine LLC, offers
                professional speaking, consulting, leadership development, and training services
                including but not limited to keynotes, workshops, MTSS architecture, school
                turnaround strategy, grant writing, program design, and AI and technology
                integration for schools and nonprofits. All service agreements, pricing, and
                deliverables are established through separate written contracts between the client
                and Summershine LLC.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                3. Inquiry Form
              </h2>
              <p>
                The contact form on this website is for inquiry purposes only. Submitting a form
                does not constitute a binding agreement or guarantee of services. All engagements
                must be confirmed through a signed agreement.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                4. No Refund Policy
              </h2>
              <p>
                All fees associated with speaking engagements, consulting services, workshops,
                and any other professional services rendered by Sommer Caldwell-Carruthers and
                Summershine LLC are non-refundable. Once a service agreement is signed, no
                refunds will be issued under any circumstances. Cancellations by the client do not
                entitle the client to a refund of any deposits or payments made.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website including but not limited to text, graphics, logos,
                images, and written content are the intellectual property of Radiant Capital
                Holdings LLC. No content may be copied, reproduced, distributed, or used without
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                6. Website Content
              </h2>
              <p>
                The information on this website is provided for general informational purposes
                only. Sommer Caldwell-Carruthers and Summershine LLC make no warranties about
                the completeness, accuracy, or reliability of any information on this site.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Summershine LLC and Radiant Capital
                Holdings LLC shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of this website or services rendered.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                8. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of the State of Michigan.
                Any disputes arising from these terms shall be resolved in the courts of Michigan.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these Terms and Conditions at any time. Changes
                will be posted on this page with an updated effective date. Continued use of the
                website constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="border-t border-[rgba(184,134,11,0.2)] pt-10">
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                10. Contact
              </h2>
              <p>For questions regarding these Terms and Conditions, contact:</p>
              <p className="mt-3">
                Summershine LLC
                <br />
                <a
                  href="mailto:info@sommercaldwellcarruthers.com"
                  className="text-gold hover:text-gold-light transition-colors duration-200"
                >
                  info@sommercaldwellcarruthers.com
                </a>
                <br />
                sommercaldwellcarruthers.com
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
