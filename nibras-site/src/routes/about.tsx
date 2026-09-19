import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="app-hero">
        <div className="app-hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-stagger max-w-3xl">
            <div className="eyebrow mt-2">
              <i />
              {t("about_eyebrow")}
            </div>
            <h1 className="mt-4">
              {t("about_h2_lead")}
              <span className="hero-accent"> {t("about_h2_em")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              {t("about_desc")}
            </p>
            <p className="about-quote mt-6">“{t("about_quote")}”</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  {t("nav_contact")}
                  <ArrowUpRight className="rtl-flip size-3.5" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/">
                  <ArrowLeft className="rtl-flip size-3.5" />
                  {t("btn_back")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="feat-grid">
            {(
              [
                ["about_design", "about_design_d"],
                ["about_dev", "about_dev_d"],
                ["about_exp", "about_exp_d"],
              ] as const
            ).map(([k, d], idx) => (
              <article
                key={k}
                className="feat-card"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <small className="mb-3 block text-2xs font-bold tracking-widest text-brand">
                  {t(k)}
                </small>
                <p className="text-sm leading-relaxed text-muted">{t(d)}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="cta-band">
          <div className="eyebrow justify-center">
            <i />
            {t("cta_kicker")}
          </div>
          <h2>{t("cta_h2")}</h2>
          <p>{t("cta_desc")}</p>
          <Button asChild>
            <Link to="/" hash="apps">
              {t("cta_btn")}
              <ArrowUpRight className="rtl-flip size-3.5" />
            </Link>
          </Button>
        </section>
      </Reveal>
    </main>
  );
}
