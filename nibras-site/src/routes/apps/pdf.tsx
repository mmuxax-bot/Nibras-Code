import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/apps/pdf")({
  component: AppPage,
});

function AppPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="app-hero">
        <div className="app-hero-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-stagger max-w-2xl">
            <img src="/apps/pdf.png" alt="Nibras PDF" className="app-icon-lg" />
            <div className="eyebrow mt-7">
              <i />
              {t("app_pdf_kicker")}
            </div>
            <h1 className="mt-4">
              Nibras
              <span className="hero-accent"> PDF.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {t("app_pdf_desc")}
            </p>
            <div className="status-pill coming-soon-pill">
              <Sparkles className="size-3.5 text-brand" />
              {t("app_coming_soon")}
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-faint">
              {t("app_coming_soon_d")}
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
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="feat-grid">
            <article className="feat-card">
              <h3>{t("app_pdf_f1_t")}</h3>
              <p>{t("app_pdf_f1_d")}</p>
            </article>
            <article className="feat-card">
              <h3>{t("app_pdf_f2_t")}</h3>
              <p>{t("app_pdf_f2_d")}</p>
            </article>
            <article className="feat-card">
              <h3>{t("app_pdf_f3_t")}</h3>
              <p>{t("app_pdf_f3_d")}</p>
            </article>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
