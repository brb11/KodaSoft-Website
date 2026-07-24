import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../components/Logo";
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const LINKS = [
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-cyan-500/10 bg-navy-950/70 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="KodaSoft home">
          <Logo className="h-9" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-sm font-medium text-ice/70 transition-colors hover:text-ice"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <button
            onClick={toggleLang}
            className="flex h-9 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-white/[0.03] px-3 text-xs font-medium text-ice/70 transition-all duration-300 hover:border-cyan-400/50 hover:text-ice"
            aria-label="Switch language"
          >
            <span className={`transition-opacity duration-200 ${i18n.language === "en" ? "opacity-100" : "opacity-40"}`}>EN</span>
            <span className="text-ice/30">/</span>
            <span className={`transition-opacity duration-200 ${i18n.language === "ar" ? "opacity-100" : "opacity-40"}`}>عربي</span>
          </button>
          <Button href="#contact">
            {t("nav.startProject")}
            <span aria-hidden className="rtl-flip">→</span>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-ice transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 rounded bg-ice transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded bg-ice transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-cyan-500/10 bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ice/80 transition-colors hover:bg-white/5 hover:text-ice"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-3 flex gap-2">
                <ThemeToggle className="shrink-0" />
                <button
                  onClick={toggleLang}
                  className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-ice/70 transition-all duration-300 hover:border-cyan-400/50 hover:text-ice"
                >
                  <span className={`transition-opacity duration-200 ${i18n.language === "en" ? "opacity-100" : "opacity-40"}`}>English</span>
                  <span className="text-ice/30">|</span>
                  <span className={`transition-opacity duration-200 ${i18n.language === "ar" ? "opacity-100" : "opacity-40"}`}>العربية</span>
                </button>
              </li>
              <li className="px-3 pb-2">
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full">
                  {t("nav.startProject")} <span aria-hidden className="rtl-flip">→</span>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
