import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

/**
 * Full-page ambient background: slow-drifting gradient blobs over a
 * blueprint grid. Sits behind all content (z -10).
 */
export default function Aurora() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const reduce = useReducedMotion();

  return (
    <div aria-hidden data-aurora className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Drifting blobs */}
      <motion.div
        className="absolute -left-40 -top-40 h-[24rem] w-[24rem] rounded-full blur-[130px] sm:h-[42rem] sm:w-[42rem]"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(14,165,233,0.35), transparent 65%)"
            : "radial-gradient(circle, rgba(43,184,240,0.20), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, 80, -30, 0], y: [0, 40, 90, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14rem] top-[16rem] h-[22rem] w-[22rem] rounded-full blur-[140px] sm:h-[38rem] sm:w-[38rem]"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(56,189,248,0.30), transparent 65%)"
            : "radial-gradient(circle, rgba(110,168,255,0.16), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, -70, 20, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/3 h-[24rem] w-[24rem] rounded-full blur-[150px] sm:h-[40rem] sm:w-[40rem]"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(3,105,161,0.22), transparent 65%)"
            : "radial-gradient(circle, rgba(18,58,99,0.55), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, 50, -60, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette: dark edges in dark mode, subtle soft edges in light mode */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 120% 80% at 50% 0%, transparent 50%, rgba(241,245,249,0.6) 100%)"
            : "radial-gradient(ellipse 120% 80% at 50% 0%, transparent 40%, rgba(5,13,24,0.7) 100%)",
        }}
      />
    </div>
  );
}
