import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Editorial policy and content transparency statement for kirillvitoshkin.dev — a personal portfolio by Kyrylo Vitoshkin.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen text-white">
      <Nav />
      <main>
        <section className="border-t border-white/[0.05]">
          <div className="mx-auto max-w-3xl px-6 py-20 space-y-10">
            <div>
              <h1 className="font-heading font-bold text-4xl text-white mb-4">
                Editorial Policy
              </h1>
              <p className="text-sm text-white/40">Last updated: July 2026</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Authorship
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                All content on this portfolio — including project descriptions,
                case studies, and skills — is written and maintained by Kyrylo
                Vitoshkin. No content is AI-generated or ghost-written.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Accuracy
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                Project details, metrics, and achievements described on this site
                reflect real work. Figures (e.g. performance improvements, user
                counts) are based on actual measurements or client data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                No sponsored content
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This portfolio contains no sponsored posts, paid placements, or
                affiliate links. Technology preferences and opinions expressed
                here are personal and independent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Corrections
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                If you spot an error or inaccuracy, please reach out at{" "}
                <a
                  href="mailto:mr.cheesteer@gmail.com"
                  className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  mr.cheesteer@gmail.com
                </a>
                . Corrections are made promptly.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-semibold text-lg text-white/80">
                Privacy
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                This site uses Vercel Analytics for anonymous, aggregate traffic
                data. No personal data is collected, stored, or sold.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
