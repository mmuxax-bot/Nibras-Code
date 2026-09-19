import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <section className="app-hero">
        <div className="app-hero-grid contact-grid">
          <div className="hero-stagger">
            <div className="eyebrow mt-2">
              <i />
              {t("contact_eyebrow")}
            </div>
            <h1 className="mt-4">
              {t("contact_h1_lead")}
              <span className="hero-accent"> {t("contact_h1_em")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {t("contact_desc")}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:hello@nibrascode.com"
                className="contact-info-row"
              >
                <Mail className="size-4 text-brand" strokeWidth={1.6} />
                <div>
                  <small>{t("contact_email_label")}</small>
                  <span>hello@nibrascode.com</span>
                </div>
              </a>
              <div className="contact-info-row">
                <MessageCircle className="size-4 text-brand" strokeWidth={1.6} />
                <div>
                  <small>{t("contact_response_label")}</small>
                  <span>{t("contact_response_d")}</span>
                </div>
              </div>
              <div className="contact-info-row">
                <MapPin className="size-4 text-brand" strokeWidth={1.6} />
                <div>
                  <small>{t("contact_location_label")}</small>
                  <span>{t("contact_location_d")}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild variant="ghost">
                <Link to="/">
                  <ArrowLeft className="rtl-flip size-3.5" />
                  {t("btn_back")}
                </Link>
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-success">
                  <div className="eyebrow">
                    <i />
                    {t("contact_sent_kicker")}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {t("contact_sent_title")}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{t("contact_sent_desc")}</p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setSent(false)}
                  >
                    {t("contact_send_another")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="contact-form">
                  <div className="eyebrow">
                    <i />
                    {t("contact_form_kicker")}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {t("contact_form_title")}
                  </h3>

                  <label className="contact-field">
                    <span>{t("contact_name")}</span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("contact_name_ph")}
                      autoComplete="name"
                    />
                  </label>

                  <label className="contact-field">
                    <span>{t("contact_email")}</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t("contact_email_ph")}
                      autoComplete="email"
                    />
                  </label>

                  <label className="contact-field">
                    <span>{t("contact_message")}</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contact_message_ph")}
                    />
                  </label>

                  <Button type="submit" className="mt-2 w-full sm:w-auto">
                    {t("contact_submit")}
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
