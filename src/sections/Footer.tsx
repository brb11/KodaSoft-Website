import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t("footer.columns.services"), href: "#services" },
    { label: t("footer.links.whoWeAre"), href: "#about" },
    { label: t("footer.links.ourStrategy"), href: "#process" },
  ];

  const socials = [
    { label: "Email", icon: <MailIcon className="h-5 w-5" />, href: `mailto:${t("contact.email")}` },
    { label: "Phone", icon: <PhoneIcon className="h-5 w-5" />, href: `tel:${t("contact.phone").replace(/[^\d+]/g, "")}` },
    { label: "WhatsApp", icon: <WhatsappIcon className="h-5 w-5" />, href: `https://wa.me/${t("contact.phone").replace(/[^\d]/g, "")}` },
  ];

  return (
    <footer className="relative border-t border-cyan-500/10 bg-navy-900/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Company name */}
          <a href="#top" aria-label="Back to top" className="font-display text-3xl font-bold tracking-tight text-ice">
            <span className="text-ice/80">Koda</span>
            <span className="text-cyan-500">Soft</span>
          </a>

          {/* Tagline */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ice/50">
            {t("footer.tagline")}
          </p>

          {/* Links row */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-ice/45 transition-colors duration-300 hover:text-cyan-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact icons */}
          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ice/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_8px_24px_-8px_rgba(43,184,240,0.5)]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-10 font-mono text-xs text-ice/35">
            &copy; {new Date().getFullYear()} KodaSoft. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
  );
}
