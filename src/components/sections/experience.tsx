import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.05] bg-[#151515]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading font-bold text-3xl text-white mb-12">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group bg-[#1a1a1a] border border-white/[0.07] rounded-2xl p-6 sm:p-8 hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-white/90">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-white/55 mt-1">
                    Freelance · {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs text-white/55 bg-white/[0.05] border border-white/[0.07] rounded-md px-2.5 py-1">
                    {exp.duration}
                  </span>
                  <span className="text-xs text-white/55 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/60 mb-5 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-white/30" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-white/60 bg-white/[0.05] border border-white/[0.07] rounded-md px-2.5 py-1 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
