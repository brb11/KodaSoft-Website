const TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", ".NET", "Flutter",
  "React Native", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes",
  "GraphQL", "TensorFlow", "OpenAI",
];

/** Infinite dual-row marquee of the technologies KodaSoft works with. */
export default function TechMarquee() {
  const row = [...TECH, ...TECH]; // duplicated for a seamless loop
  return (
    <section aria-label="Technologies we use" className="relative border-y border-cyan-500/10 bg-navy-900/40 py-8 backdrop-blur-sm">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-950 to-transparent" />

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-ice/40 transition-colors hover:text-cyan-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/50" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
