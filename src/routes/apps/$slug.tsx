import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppDownload } from "@/components/app-download";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getAppBySlug } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/apps/$slug")({
  loader: ({ params }) => {
    if (params.slug === "nibras-arabic") {
      throw redirect({ to: "/apps/nibras-arabic" });
    }
    const app = getAppBySlug(params.slug);
    if (!app) throw notFound();
    return { app };
  },
  component: StudioAppPage,
});

function StudioAppPage() {
  const { app } = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <main>
      <section className="app-hero">
        <div className="soon-hero">
          <div className="hero-stagger">
            <img src={app.icon} alt={app.name} className="app-icon-xl" />
            <div className="eyebrow mt-7">
              <i />
              {t("app_kicker_n").replace("{n}", app.index)}
            </div>
            <h1 className="mt-4">
              Nibras
              <span className="hero-accent">{app.shortName}.</span>
            </h1>
            <div className="status-pill">
              <span className="live-dot" />
              {t("soon")}
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {t(app.blurbKey)}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-faint">
              {t("soon_body")}
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
          <Reveal>
            <AppDownload app={app} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
