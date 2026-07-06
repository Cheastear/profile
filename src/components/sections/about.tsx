export function About() {
  return (
    <section id="about" className="border-t border-white/[0.05] bg-[#151515]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">
          About
        </h2>
        <div
          itemScope
          itemType="https://schema.org/Person"
          className="space-y-4 text-[15px] text-white/60 leading-relaxed max-w-3xl"
        >
          <meta itemProp="name" content="Kirill Vitoshkin" />
          <meta itemProp="jobTitle" content="Full-Stack Developer" />
          <p itemProp="description">
            Full-Stack JavaScript Developer specializing in building scalable,
            high-performance web and mobile applications. I create end-to-end
            solutions using modern tech stacks: React, Next.js, Node.js, NestJS,
            TypeScript, and React Native.
          </p>
          <p>
            With expertise in responsive UI design, REST APIs, GraphQL, and
            database architecture, I deliver clean, maintainable code that
            scales. I focus on solving real business problems through technical
            excellence — from optimizing API response times to implementing
            real-time systems handling millions of daily events.
          </p>
          <p>
            Currently self-employed and open to freelance projects, contract
            work, and consulting. Also open to full-time opportunities where I
            can contribute to impactful products and grow within a strong
            technical team.
          </p>
        </div>
      </div>
    </section>
  );
}
