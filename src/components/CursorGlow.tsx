import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

/** A soft cyan blob that trails the cursor for a premium, alive feel. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    // Skip on touch / coarse pointers.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-cursor-glow
      className={`pointer-events-none fixed left-0 top-0 z-[45] hidden h-[500px] w-[500px] rounded-full blur-[90px] md:block ${
        isLight
          ? "opacity-45 mix-blend-multiply"
          : "opacity-60 mix-blend-screen"
      }`}
      style={{
        background: isLight
          ? "radial-gradient(circle, rgba(2,132,199,0.30) 0%, rgba(2,132,199,0.10) 40%, transparent 70%)"
          : "radial-gradient(circle, rgba(43,184,240,0.22) 0%, rgba(43,184,240,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
