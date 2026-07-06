import { skillsRow1, skillsRow2 } from "@/lib/data";

const badgeClass =
  "inline-block text-sm text-white/65 bg-white/[0.05] border border-white/[0.07] rounded-lg px-3 py-1.5 mr-3 shrink-0 whitespace-nowrap hover:text-white hover:border-white/20 transition-colors duration-200";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.05] py-20">
      <div className="mx-auto max-w-5xl px-6 mb-10">
        <h2 className="font-heading font-bold text-3xl text-white">
          Tech Stack
        </h2>
      </div>
      <div className="marquee-fade overflow-hidden space-y-3">
        <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
          {[...skillsRow1, ...skillsRow1].map((skill, i) =>
            skill.url ? (
              <a
                key={i}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className={badgeClass}
              >
                {skill.name}
              </a>
            ) : (
              <span key={i} className={badgeClass}>
                {skill.name}
              </span>
            )
          )}
        </div>
        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {[...skillsRow2, ...skillsRow2].map((skill, i) =>
            skill.url ? (
              <a
                key={i}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className={badgeClass}
              >
                {skill.name}
              </a>
            ) : (
              <span key={i} className={badgeClass}>
                {skill.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
