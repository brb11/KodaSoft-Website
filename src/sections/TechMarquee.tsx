const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "PHP",
  "Laravel",
  "C#",
  "C++",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "MinIO",
  "Supabase",
  "PocketBase",
  "Prisma",
  "Sequelize",
  "GraphQL",
  "REST API",
  "JWT",
  "OAuth 2.0",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Nginx",
  "Git",
  "GitHub Actions",
  "VMware",
  "OpenAI",
  "n8n",
  "Anthropic",
  "Google Gemini",
  "Odoo ERP"
];

function MarqueeSet() {
  return (
    <div className="flex shrink-0 gap-12 pr-12">
      {TECH.map((t) => (
        <span
          key={t}
          className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-ice/40 transition-colors hover:text-cyan-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/50" />
          {t}
        </span>
      ))}
    </div>
  );
}

/** Infinite dual-row marquee of the technologies KodaSoft works with. */
export default function TechMarquee() {
  return (
    <section aria-label="Technologies we use" className="relative border-y border-cyan-500/10 bg-navy-900/40 py-8 backdrop-blur-sm">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-950 to-transparent" />

      <div dir="ltr" className="overflow-hidden">
        <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: `marquee ${Math.max(32, TECH.length * 1.4)}s linear infinite` }}>
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </section>
  );
}
