import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for kyrylovitoshkin.dev — how visitor data is handled on this personal portfolio.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="border-t border-white/[0.05]">
          <div className="mx-auto max-w-3xl px-6 py-20 space-y-10">
            <div>
              <h1 className="font-heading font-bold text-4xl text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-white/40">Last updated: July 2026</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Who is responsible
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This website is operated by Kyrylo Vitoshkin, based in Valencia,
                Spain. For any privacy-related questions, contact{" "}
                <a
                  href="mailto:mr.cheesteer@gmail.com"
                  className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  mr.cheesteer@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Data collected
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This site does not collect any personal data directly. No
                registration, forms, or login exist on this portfolio. When you
                contact me via email or social links, your message is handled
                solely by the respective platform (Gmail, Telegram, LinkedIn).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Analytics
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This site uses Vercel Analytics to collect anonymous, aggregate
                traffic data (page views, referrers, device type). No cookies
                are set, no personal data is stored, and no data is sold or
                shared with third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Third-party links
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This site contains links to GitHub, LinkedIn, and Telegram.
                These platforms have their own privacy policies, which govern
                any data collected when you visit them.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Your rights
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                Under GDPR, if you believe any data relating to you is held,
                you have the right to access, correct, or request deletion. As
                this site does not store personal data, no such data exists. For
                questions, email{" "}
                <a
                  href="mailto:mr.cheesteer@gmail.com"
                  className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  mr.cheesteer@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Changes
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This policy may be updated occasionally. The "last updated" date
                at the top reflects the most recent revision.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
