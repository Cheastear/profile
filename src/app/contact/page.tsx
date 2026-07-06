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
        <div className="mx-auto max-w-5xl w-full px-6 pt-14 pb-10">
          <h1 className="font-heading font-bold text-5xl text-white tracking-tight">
            Contact & Hire Kyrylo Vitoshkin
          </h1>
        </div>
        <Contact />
        <div className="flex-1 bg-[#151515]" />
      </main>
      <Footer />
    </div>
  );
}
