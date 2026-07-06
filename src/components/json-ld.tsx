import { faqs } from "@/lib/data";

export function JsonLd() {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const dateCreated = process.env.SITE_DATE_CREATED ?? "2024-06-01T00:00:00Z";
  const dateModified = process.env.SITE_DATE_MODIFIED ?? "2026-07-06T00:00:00Z";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#profilepage`,
        dateCreated,
        dateModified,
        name: "Kyrylo Vitoshkin — Full-Stack React & Next.js Developer",
        description:
          "Full-Stack Developer — React, Next.js, Node.js, NestJS & React Native. Designing web UIs, REST APIs & PostgreSQL systems. Open to freelance work.",
        url: baseUrl,
        mainEntity: { "@id": `${baseUrl}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Kyrylo Vitoshkin — Full-Stack React & Next.js Developer",
        datePublished: dateCreated,
        dateModified,
        author: { "@id": `${baseUrl}/#person` },
        about: { "@id": `${baseUrl}/#person` },
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faqpage`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Kyrylo Vitoshkin",
        jobTitle: "Full-Stack Developer",
        description:
          "Full-Stack JavaScript Developer specializing in scalable web and mobile apps with React, Next.js, Node.js, NestJS, TypeScript, and React Native.",
        url: baseUrl,
        email: "mr.cheesteer@gmail.com",
        telephone: ["+34674458478", "+380977798199"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
        sameAs: [
          "https://github.com/Cheastear",
          "https://linkedin.com/in/kirill-vitoshkin-a9420a288",
          "https://t.me/Cheesteer",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "TypeScript",
          "React Native",
          "PostgreSQL",
          "GraphQL",
          "REST APIs",
          "UI Design",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
