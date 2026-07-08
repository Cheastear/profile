"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";
import { socials } from "@/lib/data";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a
          className="font-heading font-extrabold text-lg text-white tracking-wide"
          aria-label="Home"
        >
          KV
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`transition-colors duration-200 hover:text-white ${
                activeSection === href.slice(1) ? "text-white" : "text-white/55"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={`mailto:${socials.email}`}
            className="text-sm font-semibold px-4 py-2 rounded-lg text-[#111] bg-white hover:bg-gray-100 transition-all duration-200"
          >
            Hire me
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="text-white/55 hover:text-white transition-colors duration-200 p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-white/[0.06] transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto max-w-5xl px-6 py-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center py-3 text-sm font-medium border-b border-white/[0.05] last:border-0 transition-colors duration-200 hover:text-white ${
                    activeSection === href.slice(1) ? "text-white" : "text-white/55"
                  }`}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-4 py-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
