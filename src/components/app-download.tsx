import type { StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";

function PlayMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 3.2c-.7-.4-1.5.1-1.5.9v15.8c0 .8.8 1.3 1.5.9l14.5-7.9c.7-.4.7-1.4 0-1.8L4.5 3.2Z"
      />
    </svg>
  );
}

export function AppDownload({ app }: { app: StudioApp }) {
  const { t } = useI18n();
  const ready = Boolean(app.playStoreUrl);

  return (
    <section className="download-panel" aria-label={t("download_title")}>
      <div>
        <div className="eyebrow">
          <i />
          {t("download_kicker")}
        </div>
        <h3>{t("download_title")}</h3>
        <p>{ready ? t("download_ready_d") : t("download_wait")}</p>
      </div>
      {ready && app.playStoreUrl ? (
        <a
          className="play-btn"
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlayMark className="play-btn-mark" />
          <span>
            <small>{t("download_android")}</small>
            <b>{t("download_cta")}</b>
          </span>
        </a>
      ) : (
        <div className="play-btn is-wait" aria-disabled="true">
          <PlayMark className="play-btn-mark" />
          <span>
            <small>{t("download_android")}</small>
            <b>{t("soon")}</b>
          </span>
        </div>
      )}
    </section>
  );
}
