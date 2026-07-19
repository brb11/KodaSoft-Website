import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
};

/** Consistent section header: mono eyebrow, display title with gradient highlight. */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-14 md:mb-20`}>
      <Reveal>
        <p className={`font-mono text-sm tracking-[0.3em] uppercase text-cyan-400 ${alignCls}`}>
          {"// "}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-3xl font-bold leading-tight text-ice sm:text-4xl md:text-5xl ${alignCls}`}
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={`mt-5 text-base leading-relaxed text-ice/60 md:text-lg ${alignCls}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
