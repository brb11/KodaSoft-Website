import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nPhone: ${phone}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:kodasoft.dev@gmail.com?subject=New Project From ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    
    // Use an anchor tag to prevent browser from navigating/reloading
    const anchor = document.createElement("a");
    anchor.href = mailtoLink;
    anchor.click();

    setSent(true);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      {/* glowing CTA band */}
      <div className="glass glow-border relative overflow-hidden rounded-3xl p-8 md:p-14">
        <div
          aria-hidden
          data-contact-glow
          className="absolute -end-20 -top-24 h-72 w-72 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(43,184,240,0.25), transparent 70%)" }}
        />

        <div className="relative grid gap-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
                {t("contact.comment")}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ice sm:text-4xl md:text-5xl">
                {t("contact.title")} <span className="text-gradient">{t("contact.highlight")}</span>
              </h2>
              <p className="mt-5 max-w-md text-ice/60">
                {t("contact.subtitle")}
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                [<MailIcon key="mail" className="h-5 w-5" />, t("contact.email"), `mailto:${t("contact.email")}`],
                [<PhoneIcon key="phone" className="h-5 w-5" />, t("contact.phone"), `tel:${t("contact.phone").replace(/[^\d+]/g, '')}`],
                [<WhatsappIcon key="wa" className="h-5 w-5" />, t("contact.whatsapp"), `https://wa.me/${t("contact.phone").replace(/[^\d]/g, '')}`],
              ].map(([icon, val, href], idx) => (
                <a key={idx} href={href as string} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-ice ring-1 ring-white/10 transition-colors group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:ring-cyan-500/30">
                    {icon}
                  </span>
                  <span className="text-ice/80 transition-colors group-hover:text-cyan-100">{val as string}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-10 text-center"
              >
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-3xl">
                  ✓
                </span>
                <h3 className="font-display text-2xl font-bold text-ice">{t("contact.success.title")}</h3>
                <p className="mt-2 text-ice/60">
                  {t("contact.success.subtitle")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("contact.form.name")} name="name" placeholder={t("contact.form.namePlaceholder")} required />
                  <Field label={t("contact.form.email")} name="email" type="email" placeholder={t("contact.form.emailPlaceholder")} required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("contact.form.company")} name="company" placeholder={t("contact.form.companyPlaceholder")} />
                  <Field label={t("contact.form.phone")} name="phone" type="tel" placeholder={t("contact.form.phonePlaceholder")} required />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ice/70">
                    {t("contact.form.details")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t("contact.form.detailsPlaceholder")}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-ice placeholder:text-ice/30 transition-colors focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <Button as="button" type="submit" className="w-full sm:w-auto">
                  {t("contact.form.send")} <span aria-hidden>→</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ice/70">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-ice placeholder:text-ice/30 transition-colors focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
      />
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
  );
}

