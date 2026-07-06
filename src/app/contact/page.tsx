import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact & Hire Me",
  description:
    "Get in touch with Kyrylo Vitoshkin. Available for freelance, contract, and full-time work. Based in Valencia, Spain — remote-friendly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="flex-1 flex flex-col">
        <Contact />
        <div className="flex-1 bg-[#151515]" />
      </main>
      <Footer />
    </div>
  );
}
