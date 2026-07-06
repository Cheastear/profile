"use client";

import { useEffect, useState } from "react";
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
        <span className="font-heading font-extrabold text-lg text-white tracking-wide">
          KV
        </span>
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
