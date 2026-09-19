import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroStage } from "@/components/hero-stage";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { MARQUEE } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const marquee = [...MARQUEE[lang], ...MARQUEE[lang]];

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy hero-stagger">
            <div className="eyebrow">
              <i />
              <span className="hidden items-center gap-2 sm:inline-flex">
                <span className="live-dot" />
                {t("live_label")}
                <span className="text-faint">·</span>
              </span>
              NIBRAS CODE
              <span className="text-faint">·</span>
              <span>{t("eyebrow_studio")}</span>
            </div>
            <h1>
              {t("hero_line1")}
              <span className="hero-accent">{t("hero_accent")}</span>
            </h1>
            <p>{t("hero_desc")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#apps">
                  {t("btn_explore_apps")}
                  <ArrowUpRight className="rtl-flip size-3.5" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/about">{t("btn_about_nibras")}</Link>
              </Button>
            </div>
            <div className="stats">
              <div>
                <b>01</b>
                <span>{t("stat_simple")}</span>
              </div>
              <div>
                <b>02</b>
                <span>{t("stat_premium")}</span>
              </div>
              <div>
                <b>03</b>
                <span>{t("stat_useful")}</span>
              </div>
            </div>
          </div>
          <HeroStage />
        </div>
        <div className="scroll-hint">
          <span>{t("scroll_text")}</span>
          <ArrowDown className="chev size-3.5" />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((item, i) => (
            <span key={`${item}-${i}`}>
              {item} <em>·</em>
            </span>
          ))}
        </div>
      </div>

      <section id="apps" className="section scroll-mt-24">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i />
                {t("apps_eyebrow")}
              </div>
              <h2>
                {t("apps_h2_lead")} <em>{t("apps_h2_em")}</em>
              </h2>
            </div>
            <p>{t("apps_desc")}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="apps-icon-grid">
            {(
              [
                {
                  to: "/apps/nibras-arabic" as const,
                  icon: "/apps/arabic.png",
                  title: "Nibras Arabic",
                  descKey: "card_arabic_d" as const,
                  statusKey: "card_status_live" as const,
                },
                {
                  to: "/apps/pdf" as const,
                  icon: "/apps/pdf.png",
                  title: "Nibras PDF",
                  descKey: "card_pdf_d" as const,
                  statusKey: "card_status_soon" as const,
                },
                {
                  to: "/apps/plans" as const,
                  icon: "/apps/plans.jpg",
                  title: "Nibras Plans",
                  descKey: "card_plans_d" as const,
                  statusKey: "card_status_soon" as const,
                },
                {
                  to: "/apps/docs" as const,
                  icon: "/apps/docs.jpg",
                  title: "Nibras Docs",
                  descKey: "card_docs_d" as const,
                  statusKey: "card_status_soon" as const,
                },
              ] as const
            ).map((app, idx) => (
              <Link
                key={app.to}
                to={app.to}
                className="app-icon-card"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <img src={app.icon} alt={app.title} className="app-icon-card-img" />
                <div className="app-icon-card-body">
                  <h3>{app.title}</h3>
                  <p>{t(app.descKey)}</p>
                  <span className="app-icon-card-status">{t(app.statusKey)}</span>
                </div>
                <ArrowUpRight className="app-icon-card-arrow rtl-flip" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="craft" className="section scroll-mt-24 pt-4">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i />
                {t("craft_eyebrow")}
              </div>
              <h2>
                {t("craft_h2_lead")} <em>{t("craft_h2_em")}</em>
              </h2>
            </div>
            <p>{t("craft_desc")}</p>
          </div>
        </Reveal>
        <div className="craft-grid">
          {(
            [
              ["01", "craft1_t", "craft1_d"],
              ["02", "craft2_t", "craft2_d"],
              ["03", "craft3_t", "craft3_d"],
            ] as const
          ).map(([n, title, desc], idx) => (
            <Reveal key={n} delay={idx * 90}>
              <article className="craft-card">
                <span className="num">{n}</span>
                <h3>{t(title)}</h3>
                <p>{t(desc)}</p>
              </article>
            </Reveal>
          ))}
        </div>
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
            <a href="#apps">
              {t("cta_btn")}
              <ArrowUpRight className="rtl-flip size-3.5" />
            </a>
          </Button>
        </section>
      </Reveal>
    </main>
  );
}
