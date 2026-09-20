import { Link } from "@tanstack/react-router";
import { STUDIO_APPS, type StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import type { ReactNode } from "react";

function AppLink({ app, className, children }: { app: StudioApp; className: string; children: ReactNode }) {
  if (app.slug === "nibras-arabic") {
    return (
      <Link to="/apps/nibras-arabic" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/apps/$slug" params={{ slug: app.slug }} className={className}>
      {children}
    </Link>
  );
}

export function AppsShelf() {
  const { t } = useI18n();

  return (
    <div className="apps-shelf">
      <div className="apps-shelf-head">
        <div className="eyebrow">
          <i />
          {t("shelf_kicker")}
        </div>
        <p>{t("shelf_hint")}</p>
      </div>
      <div className="apps-shelf-grid">
        {STUDIO_APPS.map((app) => (
          <AppLink key={app.slug} app={app} className="app-tile">
            <span className="app-tile-icon">
              <img src={app.icon} alt="" />
            </span>
            <b>{app.name}</b>
            {app.available ? (
              <small className="is-live">{t("tag_mobile")}</small>
            ) : (
              <small>{t("soon")}</small>
            )}
          </AppLink>
        ))}
      </div>
    </div>
  );
}
