import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { HeroStage } from "@/components/hero-stage";
import { PhoneMock } from "@/components/phone-mock";
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
                <a href="#about">{t("btn_about_nibras")}</a>
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
          <Link to="/apps/nibras-arabic" className="featured">
            <div className="featured-copy">
              <div className="eyebrow">
                <i />
                {t("featured_label")}
              </div>
              <h3>{t("featured_title")}</h3>
              <p>{t("featured_desc")}</p>
              <div className="tag-row">
                <span className="tag">{t("tag_lang")}</span>
                <span className="tag">{t("tag_mobile")}</span>
                <span className="tag">{t("tag_year")}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-2xs font-bold tracking-widest text-fg uppercase">
                {t("featured_explore")}
                <ArrowUpRight className="rtl-flip size-3.5 text-brand" />
              </span>
            </div>
            <div className="featured-visual">
              <PhoneMock />
            </div>
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="next-project">
            <span className="font-display text-xs tracking-widest">02</span>
            <div>
              <small>{t("next_label")}</small>
              <b>{t("next_desc")}</b>
            </div>
            <span className="next-plus" aria-hidden="true">
              <Plus className="size-4" />
            </span>
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

      <section id="about" className="about section scroll-mt-24">
        <Reveal>
          <div className="about-label">
            <span>04</span>
            <small className="mt-3 block leading-relaxed">
              {t("about_label_word")}
              <br />
              NIBRAS CODE
            </small>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="about-main">
            <div className="eyebrow">
              <i />
              {t("about_eyebrow")}
            </div>
            <h2>
              {t("about_h2_lead")}
              <br />
              <em>{t("about_h2_em")}</em>
            </h2>
            <p>{t("about_desc")}</p>
            <p className="about-quote">“{t("about_quote")}”</p>
          </div>
        </Reveal>
        <div className="about-side">
          {(
            [
              ["about_design", "about_design_d"],
              ["about_dev", "about_dev_d"],
              ["about_exp", "about_exp_d"],
            ] as const
          ).map(([k, d], idx) => (
            <Reveal key={k} delay={120 + idx * 70}>
              <article>
                <small>{t(k)}</small>
                <p>{t(d)}</p>
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
