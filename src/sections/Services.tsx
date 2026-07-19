import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

const SERVICE_ICONS = [
  <path key="cs" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />,
  <path key="wa" d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM8 21h8M12 17v4" />,
  <path key="ma" d="M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2" />,
  <path key="cd" d="M6 19a4 4 0 01-.6-7.96 6 6 0 0111.7-1.7A4.5 4.5 0 0117.5 19H6z" />,
  <path key="ai" d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V11h3a3 3 0 013 3v1.5a3.5 3.5 0 11-2 0V14a1 1 0 00-1-1h-3v2.5a3.5 3.5 0 11-2 0V13H9a1 1 0 00-1 1v1.5a3.5 3.5 0 11-2 0V14a3 3 0 013-3h3V9.5A4 4 0 0112 2z" />,
  <path key="sq" d="M12 3l7 4v5c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V7l7-4z" />,
];

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    tags: string[];
  }>;

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
            <SpotlightCard className="group h-full p-8 transition-transform duration-500 hover:-translate-y-2">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-navy-600/40 text-cyan-300 ring-1 ring-cyan-500/20 transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(43,184,240,0.5)] group-hover:ring-cyan-400/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {SERVICE_ICONS[i]}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-ice">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice/55">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan-500/15 bg-cyan-500/5 px-3 py-1 font-mono text-[11px] text-cyan-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
