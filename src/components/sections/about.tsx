import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { socials } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-white/[0.05] bg-[#151515]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">
          About
        </h2>

        <div
          className="author flex flex-col sm:flex-row sm:items-start gap-6 mb-8 p-6 bg-[#1a1a1a] border border-white/[0.07] rounded-2xl"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="flex-1 min-w-0">
            <p
              className="font-heading font-semibold text-white text-lg leading-tight"
              itemProp="name"
            >
              Kyrylo Vitoshkin
            </p>
            <p className="text-sm text-white/40 mt-0.5" itemProp="jobTitle">
              Full-Stack Developer · Valencia, Spain
            </p>
            <p
              className="mt-3 text-sm text-white/55 leading-relaxed"
              itemProp="description"
            >
              Building scalable web and mobile apps with React, Next.js,
              Node.js, NestJS, and React Native. Open to freelance, contract,
              and full-time work.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={socials.github}
              target="_blank"
              rel="me noopener noreferrer"
              itemProp="url"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white bg-white/[0.05] border border-white/[0.08] hover:border-white/20 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="me author noopener noreferrer"
              itemProp="sameAs"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white bg-white/[0.05] border border-white/[0.08] hover:border-white/20 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-4 text-[15px] text-white/60 leading-relaxed max-w-3xl">
          <p>
            Full-Stack JavaScript Developer specializing in building scalable,
            high-performance web and mobile applications. I create end-to-end
            solutions using{" "}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">React</a>,{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">Next.js</a>,{" "}
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">Node.js</a>,{" "}
            <a href="https://nestjs.com" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">NestJS</a>,{" "}
            TypeScript, and React Native.
          </p>
          <p>
            With expertise in responsive UI design, REST APIs, GraphQL, and
            database architecture, I deliver clean, maintainable code that
            scales. I focus on solving real business problems through technical
            excellence — from optimizing API response times to implementing
            real-time systems handling millions of daily events.
          </p>
          <p>
            Currently self-employed and open to freelance projects, contract
            work, and consulting. Also open to full-time opportunities where I
            can contribute to impactful products and grow within a strong
            technical team.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/about#experience"
            className="text-sm text-white/40 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            View my full work experience →
          </a>
        </div>
      </div>
    </section>
  );
}
