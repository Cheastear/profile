import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#1a1a1a] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.15] transition-all duration-300"
            >
              <h3 className="font-heading font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-white/55">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="/contact"
            className="text-sm text-white/40 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            Discuss your project with me →
          </a>
        </div>
      </div>
    </section>
  );
}
