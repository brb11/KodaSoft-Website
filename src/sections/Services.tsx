import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";


const SERVICE_ICONS = [
  <path key="cs" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />,
  <path key="wa" d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM8 21h8M12 17v4" />,
  <path key="ma" d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2" />,
  <g key="ec"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" /><path d="M16 10a4 4 0 01-8 0" /></g>,
  <g key="ai"><circle cx="12" cy="12" r="3" /><path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V11h3a3 3 0 013 3v1.5a3.5 3.5 0 11-2 0V14a1 1 0 00-1-1h-3v2.5a3.5 3.5 0 11-2 0V13H9a1 1 0 00-1 1v1.5a3.5 3.5 0 11-2 0V14a3 3 0 013-3h3V9.5A4 4 0 0112 2z" /></g>,
  <path key="cd" d="M6 19a4 4 0 01-.6-7.96 6 6 0 0111.7-1.7A4.5 4.5 0 0117.5 19H6z" />,
];

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    bullets: string[];
  }>;

  const guarantees = t("services.guarantees.items", { returnObjects: true }) as string[];

  return (
    <section id="services" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        highlight={t("services.highlight")}
        description={t("services.description")}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1}>
            <SpotlightCard className="group h-full p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-cyan-400/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {SERVICE_ICONS[i]}
                </svg>
                <span className="font-mono text-xs text-cyan-400/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-ice">{s.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-ice/45">{s.desc}</p>

              <div className="my-5 h-px w-full bg-white/5" />

              <ul className="space-y-2">
                {s.bullets.map((b: string) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-ice/40">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-16">
          <p className="mb-8 text-center font-display text-sm font-semibold uppercase tracking-widest text-ice/50">
            {t("services.guarantees.heading")}
          </p>
          <div className="relative border-y border-cyan-500/10 py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent sm:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent sm:w-40" />
            <div dir="ltr" className="overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[...guarantees, ...guarantees, ...guarantees].map((g, i) => (
                  <span key={`${g}-${i}`} className="flex shrink-0 items-center gap-4 px-6">
                    <span className="text-cyan-400/60">✦</span>
                    <span className="whitespace-nowrap font-display text-sm tracking-wide text-ice/50 transition-colors duration-300 hover:text-cyan-300 sm:text-base">
                      {g}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
