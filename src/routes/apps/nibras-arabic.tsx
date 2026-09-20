import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Languages, PanelsTopLeft, Timer } from "lucide-react";
import { AppDownload } from "@/components/app-download";
import { PhoneMock } from "@/components/phone-mock";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getAppBySlug } from "@/lib/apps";
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

const APP = getAppBySlug("nibras-arabic")!;

function NibrasArabicPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="app-hero">
        <div className="app-hero-grid">
          <div className="hero-stagger">
            <img src={APP.icon} alt="Nibras Arabic" className="app-icon-lg" />
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
              <article key={feat.title} className="feat-card" style={{ transitionDelay: `${idx * 60}ms` }}>
                <feat.icon className="mb-4 size-5 text-brand" strokeWidth={1.6} />
                <h3>{t(feat.title)}</h3>
                <p>{t(feat.desc)}</p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <AppDownload app={APP} />
        </Reveal>
      </section>
    </main>
  );
}
