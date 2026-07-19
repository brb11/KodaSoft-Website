import type { ReactNode } from "react";
import Magnetic from "./Magnetic";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
};

/** Magnetic CTA button with a sheen sweep on hover. */
export default function Button({
  children,
  href = "#",
  onClick,
  variant = "primary",
  className = "",
  as = "a",
  type,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-navy-950 shadow-[0_10px_40px_-10px_rgba(43,184,240,0.7)] hover:shadow-[0_14px_50px_-8px_rgba(43,184,240,0.9)]"
      : "border border-cyan-500/30 bg-white/[0.02] text-ice hover:border-cyan-400/60 hover:bg-white/[0.05]";

  return (
    <Magnetic as={as} type={type} href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </Magnetic>
  );
}
