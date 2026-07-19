import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

type Project = {
  title: string;
  category: string;
  result: string;
  accent: string;
  visual: "dashboard" | "mobile" | "commerce" | "ai";
};

/** Abstract UI mockup drawn in pure CSS — keeps the site asset-free and crisp. */
function Visual({ kind }: { kind: Project["visual"] }) {
  if (kind === "mobile") {
    return (
      <div className="mx-auto mt-6 h-44 w-24 rounded-2xl border border-white/15 bg-navy-950/60 p-2 shadow-2xl transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded bg-white/20" />
        <div className="space-y-1.5">
          <div className="h-8 rounded-lg bg-cyan-500/30" />
          <div className="h-2 w-3/4 rounded bg-white/15" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="h-10 rounded-lg bg-white/8" />
            <div className="h-10 rounded-lg bg-cyan-400/20" />
            <div className="h-10 rounded-lg bg-cyan-400/20" />
            <div className="h-10 rounded-lg bg-white/8" />
          </div>
        </div>
      </div>
    );
  }
  if (kind === "commerce") {
    return (
      <div className="mt-6 grid grid-cols-3 gap-2 px-6 transition-transform duration-700 group-hover:-translate-y-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-navy-950/50 p-2">
            <div className={`h-10 rounded-md ${i % 2 ? "bg-cyan-500/25" : "bg-white/10"}`} />
            <div className="mt-1.5 h-1.5 w-3/4 rounded bg-white/15" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-cyan-400/30" />
          </div>
        ))}
      </div>
    );
  }
  if (kind === "ai") {
    return (
      <div className="mt-6 space-y-2 px-6 transition-transform duration-700 group-hover:-translate-y-3">
        <div className="ms-auto w-2/3 rounded-2xl rounded-br-sm bg-cyan-500/25 p-2.5">
          <div className="h-1.5 w-full rounded bg-white/25" />
          <div className="mt-1 h-1.5 w-2/3 rounded bg-white/15" />
        </div>
        <div className="w-3/4 rounded-2xl rounded-bl-sm border border-white/10 bg-navy-950/60 p-2.5">
          <div className="h-1.5 w-full rounded bg-cyan-300/30" />
          <div className="mt-1 h-1.5 w-5/6 rounded bg-white/12" />
          <div className="mt-1 h-1.5 w-1/2 rounded bg-white/12" />
        </div>
        <div className="ms-auto w-1/2 rounded-2xl rounded-br-sm bg-cyan-500/25 p-2.5">
          <div className="h-1.5 w-full rounded bg-white/25" />
        </div>
      </div>
    );
  }
  // dashboard
  return (
    <div className="mx-6 mt-6 rounded-xl border border-white/10 bg-navy-950/60 p-3 shadow-2xl transition-transform duration-700 group-hover:-translate-y-3 group-hover:-rotate-1">
      <div className="flex gap-1.5 pb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 space-y-2">
          <div className="flex h-16 items-end gap-1 rounded-lg bg-white/5 p-2">
            {[35, 55, 40, 70, 60, 85, 75, 95].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/60 to-cyan-300/60"
              />
            ))}
          </div>
          <div className="h-2 w-2/3 rounded bg-white/15" />
        </div>
        <div className="space-y-2">
          <div className="h-8 rounded-lg bg-cyan-500/25" />
          <div className="h-8 rounded-lg bg-white/8" />
          <div className="h-2 w-full rounded bg-white/12" />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { t } = useTranslation();

  const projects = t("work.projects", { returnObjects: true }) as Array<{
    title: string;
    category: string;
    result: string;
  }>;

  const visuals: Project["visual"][] = ["dashboard", "mobile", "commerce", "ai"];
  const accents = [
    "from-cyan-500/30 via-navy-600/40 to-navy-800/60",
    "from-emerald-400/25 via-cyan-500/20 to-navy-800/60",
    "from-indigo-400/25 via-cyan-500/20 to-navy-800/60",
    "from-cyan-300/25 via-blue-500/20 to-navy-800/60",
  ];

  return (
    <section id="work" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow={t("work.eyebrow")}
        title={t("work.title")}
        highlight={t("work.highlight")}
        description={t("work.description")}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12}>
            <article className="group glass glow-border relative overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-2">
              {/* visual area */}
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${accents[i]}`}>
                <div className="absolute inset-0 bg-grid opacity-40" />
                <Visual kind={visuals[i]} />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-900/90 to-transparent" />
              </div>

              {/* meta */}
              <div className="flex items-start justify-between gap-4 p-7">
                <div>
                  <p className="font-mono text-xs tracking-wider text-cyan-400/80">{p.category}</p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-ice">{p.title}</h3>
                  <p className="mt-2 text-sm text-ice/55">{p.result}</p>
                </div>
                <span
                  aria-hidden
                  className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500/25 text-cyan-300 transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400 group-hover:bg-cyan-500/10"
                >
                  ↗
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
