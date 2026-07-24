import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Particles from "../components/Particles";
import Button from "../components/Button";

const CODE_LINES = [
  { text: "const product = await kodasoft.create({", cls: "text-ice/80" },
  { text: "  strategy,", cls: "text-cyan-300" },
  { text: "  design,", cls: "text-cyan-300" },
  { text: "  engineering,", cls: "text-cyan-300" },
  { text: "});", cls: "text-ice/80" },
  { text: "await product.launch();", cls: "text-ice/80" },
  { text: "", cls: "" },
  { text: "while (business.grows()) {", cls: "text-ice/80" },
  { text: "  product.evolve();", cls: "text-cyan-300" },
  { text: "}", cls: "text-ice/80" },
];

/** Typewriter that reveals the code block line by line. */
function TypedCode() {
  const [progress, setProgress] = useState(0); // total chars revealed
  const reduce = useReducedMotion();
  const total = CODE_LINES.reduce((n, l) => n + Math.max(l.text.length, 1), 0);

  useEffect(() => {
    if (reduce) {
      setProgress(total);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setProgress(i);
      if (i >= total) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [reduce, total]);

  let used = 0;
  return (
    <pre dir="ltr" className="text-left font-mono text-[13px] leading-7 sm:text-sm">
      {CODE_LINES.map((line, idx) => {
        const budget = Math.max(0, progress - used);
        used += Math.max(line.text.length, 1);
        const visible = line.text.slice(0, budget);
        const isTyping = budget > 0 && budget < line.text.length;
        return (
          <div key={idx} className="flex">
            <span className="mr-4 w-5 select-none text-right text-ice/25">{idx + 1}</span>
            <span className={line.cls}>
              {visible}
              {isTyping && <span className="animate-pulse text-cyan-300">▌</span>}
            </span>
          </div>
        );
      })}
    </pre>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  const onCardMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const headline = [t("hero.headline1"), t("hero.headline2"), t("hero.headline3"), t("hero.headline4")];

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <Particles />

      {/* glow behind headline */}
      <div
        aria-hidden
        data-hero-glow
        className="absolute left-1/2 top-1/3 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(43,184,240,0.13), transparent 65%)" }}
      />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2"
      >
        {/* ------- Left: copy ------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="whitespace-nowrap font-mono text-[10px] tracking-wide text-ice/70 sm:text-xs sm:tracking-wider">
              {t("hero.badge")}
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl xl:text-6xl">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                className={`me-4 inline-block${i === 2 ? " text-cyan-400" : ""}`}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
            {t("hero.headline5") && (
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.25 + headline.length * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {t("hero.headline5")}
              </motion.span>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ice/60"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact">
              {t("hero.startProject")} <span aria-hidden className="rtl-flip">→</span>
            </Button>
            <Button href="#services" variant="ghost">
              {t("hero.exploreServices")}
            </Button>
          </motion.div>

          {/* mini metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-10"
          >
            {[
              ["50+", t("hero.stats.products")],
              ["99%", t("hero.stats.retention")],
              ["6+", t("hero.stats.years")],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-xl font-bold text-ice sm:text-2xl">{num}</p>
                <p className="text-[10px] uppercase tracking-widest text-ice/45 sm:text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ------- Right: floating code editor ------- */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          dir="ltr"
          className="relative hidden lg:block"
        >
          <motion.div
            onMouseMove={onCardMove}
            onMouseLeave={() => {
              mx.set(0.5);
              my.set(0.5);
            }}
            style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass animate-float rounded-2xl p-1 shadow-[0_40px_100px_-20px_rgba(5,13,24,0.9)]"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 rounded-t-xl border-b border-white/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ms-3 font-mono text-xs text-ice/40">kodasoft.ts — your next product</span>
            </div>
            <div className="px-6 py-6">
              <TypedCode />
            </div>
          </motion.div>

          {/* floating badges */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute -left-8 -bottom-8 flex items-center gap-3 rounded-2xl px-5 py-4"
            style={{ transform: "translateZ(60px)" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ice">{t("hero.floating.badge1Title")}</p>
              <p className="text-xs text-ice/50">{t("hero.floating.badge1Desc")}</p>
            </div>
          </motion.div>
          <motion.div
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="glass absolute -right-6 -top-8 flex items-center gap-3 rounded-2xl px-5 py-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ice">{t("hero.floating.badge2Title")}</p>
              <p className="text-xs text-ice/50">{t("hero.floating.badge2Desc")}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#services"
        aria-label={t("scrollToServices")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ice/25 p-1.5">
          <motion.span
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-cyan-400"
          />
        </div>
      </motion.a>
    </section>
  );
}
