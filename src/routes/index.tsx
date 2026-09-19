import { createFileRoute, Link } from "@tanstack/react-router";
import { APPS } from "@/lib/apps";
import { MARQUEE } from "i18n";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const marquee = [...MARQUEE[lang], ...MARQUEE[lang]];

  return (
    <main>
      <section className="home-screen">
        <div className="home-screen-inner">
          <div className="eyebrow justify-center">
            <i />
            NIBRAS CODE
            <span className="text-faint">·</span>
            <span>{t("eyebrow_studio")}</span>
          </div>
          <h1>
            {t("hero_line1")}
            <span className="hero-accent">{t("hero_accent")}</span>
          </h1>
          <p>{t("hero_desc")}</p>

          <nav id="apps" className="app-dock" aria-label={t("nav_apps")}>
            {APPS.map((app) => (
              <Link
                key={app.slug}
                to="/apps/$slug"
                params={{ slug: app.slug }}
                className="app-tile"
              >
                <span className="app-tile-icon">
                  <img src={app.icon} alt="" />
                  {app.comingSoon ? (
                    <em className="soon-dot">{t("dl_soon_badge")}</em>
                  ) : null}
                </span>
                <span className="app-tile-name">{app.name}</span>
                <span className={cn("app-tile-tag")}>{t(app.tag)}</span>
              </Link>
            ))}
          </nav>
          <p className="home-hint">{t("home_hint")}</p>
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
    </main>
  );
}
