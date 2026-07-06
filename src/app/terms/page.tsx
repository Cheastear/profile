import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for kyrylovitoshkin.dev — conditions for visiting and engaging with this personal portfolio.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="border-t border-white/[0.05]">
          <div className="mx-auto max-w-3xl px-6 py-20 space-y-10">
            <div>
              <h1 className="font-heading font-bold text-4xl text-white mb-4">
                Terms of Use
              </h1>
              <p className="text-sm text-white/40">Last updated: July 2026</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Acceptance
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                By accessing this portfolio website, you agree to these terms.
                This site is operated by Kyrylo Vitoshkin, based in Valencia,
                Spain.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Intellectual property
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                All content on this site — including text, code samples, and
                design — is the property of Kyrylo Vitoshkin unless otherwise
                noted. You may not reproduce, distribute, or use it
                commercially without prior written permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Acceptable use
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                You agree not to use this site for any unlawful purpose, attempt
                to gain unauthorized access, or disrupt its normal operation.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Disclaimer
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This site is provided "as is" without warranties of any kind.
                Project descriptions reflect past work and results; individual
                outcomes may vary depending on project scope and context.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Governing law
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                These terms are governed by the laws of Spain. Any disputes
                shall be resolved in the courts of Valencia, Spain.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Contact
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                For any questions regarding these terms, contact{" "}
                <a
                  href="mailto:mr.cheesteer@gmail.com"
                  className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  mr.cheesteer@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
