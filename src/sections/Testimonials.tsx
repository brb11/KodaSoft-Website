import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export default function Testimonials() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    role: string;
    initials: string;
  }>;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const item = testimonials[index];

  return (
    <section className="relative mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} highlight={t("testimonials.highlight")} />

      <div className="glass relative min-h-[280px] overflow-hidden rounded-3xl p-10 md:p-14">
        {/* big quote glyph */}
        <span aria-hidden className="absolute -top-4 start-8 font-display text-[120px] leading-none text-cyan-500/15">
          &#x201C;
        </span>

        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <blockquote className="text-lg leading-relaxed text-ice/85 md:text-xl">
              {item.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-600 font-display text-sm font-bold text-white">
                {item.initials}
              </span>
              <span>
                <p className="font-semibold text-ice">{item.name}</p>
                <p className="text-sm text-ice/50">{item.role}</p>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* dots */}
        <div className="absolute bottom-8 end-10 flex gap-2">
          {testimonials.map((_: unknown, i: number) => (
            <button
              key={i}
              aria-label={t("showTestimonial", { number: i + 1 })}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index ? "w-7 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
