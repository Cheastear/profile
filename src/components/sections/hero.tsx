import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { socials } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero-bg">
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-32">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900/80 rounded-full px-5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 bg-white/[0.05] border border-white/[0.08] rounded-full px-5 py-2">
              <MapPin className="h-3 w-3" />
              Spain
            </span>
          </div>

          <div>
            <h1 className="font-heading font-extrabold leading-none tracking-tight">
              <span className="block text-[72px] sm:text-[100px] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Kyrylo{" "}
              </span>
              <span className="block text-[72px] sm:text-[100px] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Vitoshkin{" "}
              </span>
              <span className="block mt-5 text-xs font-heading font-semibold tracking-[0.25em] uppercase text-white/25">
                Full-Stack React &amp; Next.js Developer
              </span>
            </h1>
          </div>

          <p className="text-base text-white/40 max-w-md leading-relaxed">
            Building scalable web and mobile apps with React, Next.js, Node.js,
            NestJS, and React Native. Available for freelance, contract, and
            full-time work.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2.5 text-[#111] bg-white hover:bg-gray-100 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.09] hover:border-white/20 text-white/55 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="me author noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.09] hover:border-white/20 text-white/55 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
