import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Sommer Caldwell Carruthers",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream min-h-screen">
        <div className="max-w-[780px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <h1 className="font-cormorant font-semibold text-[2.4rem] md:text-[3.2rem] text-navy leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-[0.78rem] tracking-[0.08em] uppercase font-sans mb-12 border-b border-[rgba(184,134,11,0.2)] pb-8">
            Effective Date: March 23, 2026 &nbsp;·&nbsp; sommercaldwellcarruthers.com
            <br />
            Business: Summershine LLC | Radiant Capital Holdings LLC
          </p>

          <div className="space-y-10 text-navy">

            <p>
              At sommercaldwellcarruthers.com, your privacy is important to us. This Privacy
              Policy explains what information we collect, how we use it, and how we protect it
              when you visit our website or submit an inquiry.
            </p>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                1. Information We Collect
              </h2>
              <p>
                We collect information you voluntarily provide when you submit an inquiry through
                our contact form. This may include:
              </p>
              <ul className="mt-3 space-y-1 list-none pl-4 border-l-2 border-gold">
                <li>Your full name</li>
                <li>Your organization or school name</li>
                <li>Your email address</li>
                <li>Your engagement type and message</li>
              </ul>
              <p className="mt-4">
                We do not collect payment information, social security numbers, or any other
                sensitive personal data through this website.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide through our contact form is used solely to:
              </p>
              <ul className="mt-3 space-y-1 list-none pl-4 border-l-2 border-gold">
                <li>Respond to your inquiry about speaking or consulting services</li>
                <li>Communicate with you about potential engagements</li>
                <li>Follow up on services you have requested</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, trade, or share your personal information with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                3. How We Store Your Information
              </h2>
              <p>
                Inquiry submissions are processed through Resend, a secure email delivery
                service. Your information is transmitted securely and is only accessed by
                authorized personnel at Summershine LLC for the purpose of responding to your
                inquiry.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                4. Cookies
              </h2>
              <p>
                This website does not currently use tracking cookies or analytics tools that
                collect personal data. Basic session cookies may be used to ensure proper website
                functionality. These cookies do not identify you personally and are not used for
                advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                5. Third-Party Links
              </h2>
              <p>
                Our website may contain links to external websites. We are not responsible for
                the privacy practices or content of those sites. We encourage you to review the
                privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                6. Children&apos;s Privacy
              </h2>
              <p>
                This website is not directed at children under the age of 13. We do not knowingly
                collect personal information from children. If you believe a child has submitted
                personal information through our website, please contact us immediately so we can
                remove it.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                7. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-3 space-y-1 list-none pl-4 border-l-2 border-gold">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Opt out of any future communications from us</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@sommercaldwellcarruthers.com"
                  className="text-gold hover:text-gold-light transition-colors duration-200"
                >
                  info@sommercaldwellcarruthers.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                8. Data Security
              </h2>
              <p>
                We take reasonable precautions to protect your personal information from
                unauthorized access, use, or disclosure. However, no method of transmission over
                the internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be
                posted on this page with an updated effective date. Your continued use of this
                website after any changes constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                10. Governing Law
              </h2>
              <p>
                This Privacy Policy is governed by the laws of the State of Michigan.
              </p>
            </section>

            <section className="border-t border-[rgba(184,134,11,0.2)] pt-10">
              <h2 className="font-cormorant font-semibold text-[1.5rem] md:text-[1.75rem] text-navy mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how your information is
                handled, please contact us:
              </p>
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
