import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Faq } from "@/components/sections/faq";
import { Explore } from "@/components/sections/explore";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Faq />
        <Explore />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
