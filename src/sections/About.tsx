import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: 50, suffix: "+", label: t("about.stats.products") },
    { value: 99, suffix: "%", label: t("about.stats.retention") },
    { value: 10, suffix: "+", label: t("about.stats.engineers") },
    { value: 6, suffix: "+", label: t("about.stats.years") },
  ];

  const values = t("about.values", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left: narrative */}
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
            highlight={t("about.highlight")}
            description={t("about.description")}
          />

          <div className="space-y-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 font-mono text-sm text-cyan-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_-4px_rgba(43,184,240,0.6)]">
                      0{i + 1}
                    </span>
                    {i < values.length - 1 && (
                      <span className="mt-2 h-full w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-semibold text-ice">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ice/55">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} y={40}>
              <SpotlightCard className="p-8 text-center">
                <p className="font-display text-4xl font-bold md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} className="text-gradient" />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ice/50">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
