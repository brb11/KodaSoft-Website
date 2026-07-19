import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const STEPS = [
  {
    num: "01",
    titleKey: "process.steps.0.title",
    descKey: "process.steps.0.desc",
    monoKey: "process.steps.0.mono",
  },
  {
    num: "02",
    titleKey: "process.steps.1.title",
    descKey: "process.steps.1.desc",
    monoKey: "process.steps.1.mono",
  },
  {
    num: "03",
    titleKey: "process.steps.2.title",
    descKey: "process.steps.2.desc",
    monoKey: "process.steps.2.mono",
  },
  {
    num: "04",
    titleKey: "process.steps.3.title",
    descKey: "process.steps.3.desc",
    monoKey: "process.steps.3.mono",
  },
  {
    num: "05",
    titleKey: "process.steps.4.title",
    descKey: "process.steps.4.desc",
    monoKey: "process.steps.4.mono",
  },
];

export default function Process() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="process" className="relative mx-auto max-w-5xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        highlight={t("process.highlight")}
        description={t("process.description")}
      />

      <div ref={ref} className="relative">
        {/* rail + animated fill */}
        <div className="absolute start-5 top-0 h-full w-px bg-white/8 md:start-1/2" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute start-5 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-cyan-500 to-navy-500 shadow-[0_0_12px_rgba(43,184,240,0.8)] md:start-1/2"
        />

        <div className="space-y-14 md:space-y-20">
          {STEPS.map((step, i) => {
            const isStart = i % 2 === 0;
            return (
              <div
                key={step.num}
                className={`relative flex flex-col gap-4 ps-14 md:w-1/2 md:ps-0 ${
                  isStart ? "md:pe-16 ltr:md:text-right rtl:md:text-left" : "md:ms-auto md:ps-16"
                }`}
              >
                {/* node */}
                <div
                  className={`absolute start-5 top-1 z-10 ltr:-translate-x-1/2 rtl:translate-x-1/2 md:top-2 ${
                    isStart ? "md:start-full" : "md:start-0"
                  }`}
                >
                  <span className="block h-4 w-4 rounded-full border-2 border-cyan-400 bg-navy-950 process-node shadow-[0_0_16px_rgba(43,184,240,0.9)]" />
                </div>

                <Reveal y={40}>
                  <p className="font-mono text-sm text-cyan-400/70">{step.num}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ice md:text-3xl">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ice/55 md:text-base">{t(step.descKey)}</p>
                  <code
                    className={`mt-4 inline-block rounded-lg border border-cyan-500/15 bg-navy-900/70 px-4 py-2 font-mono text-xs text-cyan-300/90 ${
                      isStart ? "md:ms-auto" : "md:me-auto"
                    }`}
                  >
                    $ {t(step.monoKey)}
                  </code>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
