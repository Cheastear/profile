import { skillsRow1, skillsRow2 } from "@/lib/data";

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
          {[...skillsRow1, ...skillsRow1].map((skill, i) => (
            <span
              key={i}
              className="inline-block text-sm text-white/45 bg-white/[0.05] border border-white/[0.07] rounded-lg px-3 py-1.5 mr-3 shrink-0 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {[...skillsRow2, ...skillsRow2].map((skill, i) => (
            <span
              key={i}
              className="inline-block text-sm text-white/45 bg-white/[0.05] border border-white/[0.07] rounded-lg px-3 py-1.5 mr-3 shrink-0 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
