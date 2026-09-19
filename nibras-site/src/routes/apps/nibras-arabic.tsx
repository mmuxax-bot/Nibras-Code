import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, Download, Languages, PanelsTopLeft, Timer } from "lucide-react";
import { PhoneMock } from "@/components/phone-mock";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/apps/nibras-arabic")({
  component: NibrasArabicPage,
});

const FEATURES = [
  { icon: Languages, title: "app_feat1_t", desc: "app_feat1_d" },
  { icon: Timer, title: "app_feat2_t", desc: "app_feat2_d" },
  { icon: PanelsTopLeft, title: "app_feat3_t", desc: "app_feat3_d" },
  { icon: BookOpen, title: "app_feat4_t", desc: "app_feat4_d" },
] as const;

// Download link — will be updated when you provide the real URL
const DOWNLOAD_URL: string | null = null;

function NibrasArabicPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="app-hero">
        <div className="app-hero-grid">
          <div className="hero-stagger">
            <img
              src="/apps/arabic.png"
              alt="Nibras Arabic"
              className="app-icon-lg"
            />
            <div className="eyebrow mt-7">
              <i />
              {t("app_kicker")}
            </div>
            <h1 className="mt-4">
              Nibras
              <span className="hero-accent">Arabic.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {t("app_desc")}
            </p>
            <div className="status-pill">
              <span className="live-dot" />
              {t("app_status")}
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-faint">
              {t("app_status_d")}
            </p>

            <div className="download-box mt-8">
              <div className="download-box-head">
                <Download className="size-4 text-brand" strokeWidth={1.7} />
                <span>{t("app_download_label")}</span>
              </div>
              {DOWNLOAD_URL ? (
                <Button asChild className="mt-4 w-full sm:w-auto">
                  <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                    {t("app_download_btn")}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              ) : (
                <p className="mt-3 text-sm text-muted">{t("app_download_soon")}</p>
              )}
            </div>

            <div className="mt-8">
              <Button asChild variant="ghost">
                <Link to="/" hash="apps">
                  <ArrowLeft className="rtl-flip size-3.5" />
                  {t("app_back")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMock />
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="feat-grid">
            {FEATURES.map((feat, idx) => (
              <article
                key={feat.title}
                className="feat-card"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <feat.icon className="mb-4 size-5 text-brand" strokeWidth={1.6} />
                <h3>{t(feat.title)}</h3>
                <p>{t(feat.desc)}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
