const links = [
  { href: "/about", label: "About & background", description: "Who I am and how I work" },
  { href: "#experience", label: "Work experience", description: "Projects I've shipped" },
  { href: "#services", label: "Services offered", description: "What I can build for you" },
  { href: "/contact", label: "Get in touch", description: "Start a conversation" },
];

export function Explore() {
  return (
    <section className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-heading font-bold text-xl text-white/60 mb-6">
          Explore more
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map(({ href, label, description }) => (
            <a
              key={href}
              href={href}
              className="group bg-[#1a1a1a] border border-white/[0.07] rounded-xl p-5 hover:border-white/[0.18] transition-all duration-200 hover:-translate-y-0.5"
            >
              <p className="font-heading font-semibold text-sm text-white/80 group-hover:text-white transition-colors duration-200 mb-1">
                {label}
              </p>
              <p className="text-xs text-white/40">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
