import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kyrylo Vitoshkin — Full-Stack Developer specializing in React, Next.js, Node.js, NestJS & React Native. Based in Valencia, Spain.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <Nav />
      <main>
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
