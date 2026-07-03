import { Mail, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.05] bg-[#151515]">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <h2 className="font-heading font-extrabold text-5xl sm:text-6xl text-white mb-4 tracking-tight">
          Let&apos;s work <span className="text-white/50">together</span>
        </h2>
        <p className="text-white/30 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
          Available for freelance, contract work, and full-time positions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:mr.cheesteer@gmail.com"
            className="inline-flex items-center gap-2.5 text-[#111] bg-white hover:bg-gray-100 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            mr.cheesteer@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/kirill-vitoshkin-a9420a288"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.09] hover:border-white/20 text-white/55 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            LinkedIn
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
