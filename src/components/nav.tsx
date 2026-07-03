import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";
import { socials } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <span className="font-heading font-extrabold text-lg text-white tracking-wide">
          KV
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/55 font-medium">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors duration-200"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm font-semibold px-4 py-2 rounded-lg text-[#111] bg-white hover:bg-gray-100 transition-all duration-200 hover:-translate-y-px"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
