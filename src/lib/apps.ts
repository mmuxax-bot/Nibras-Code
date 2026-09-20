export type AppSlug = "nibras-arabic" | "nibras-docs" | "nibras-plans" | "nibras-pdf";

export type StudioApp = {
  slug: AppSlug;
  name: string;
  shortName: string;
  icon: string;
  index: string;
  /** Paste the Play Store listing URL here when it is ready. */
  playStoreUrl: string | null;
  /** Only Nibras Arabic has a full product page today. */
  available: boolean;
  blurbKey: "arabic_blurb" | "docs_blurb" | "plans_blurb" | "pdf_blurb";
};

export const STUDIO_APPS: StudioApp[] = [
  {
    slug: "nibras-arabic",
    name: "Nibras Arabic",
    shortName: "Arabic",
    icon: "/apps/nibras-arabic.jpg",
    index: "01",
    playStoreUrl: null,
    available: true,
    blurbKey: "arabic_blurb",
  },
  {
    slug: "nibras-docs",
    name: "Nibras Docs",
    shortName: "Docs",
    icon: "/apps/nibras-docs.jpg",
    index: "02",
    playStoreUrl: null,
    available: false,
    blurbKey: "docs_blurb",
  },
  {
    slug: "nibras-plans",
    name: "Nibras Plans",
    shortName: "Plans",
    icon: "/apps/nibras-plans.jpg",
    index: "03",
    playStoreUrl: null,
    available: false,
    blurbKey: "plans_blurb",
  },
  {
    slug: "nibras-pdf",
    name: "Nibras PDF",
    shortName: "PDF",
    icon: "/apps/nibras-pdf.jpg",
    index: "04",
    playStoreUrl: null,
    available: false,
    blurbKey: "pdf_blurb",
  },
];

export function getAppBySlug(slug: string): StudioApp | undefined {
  return STUDIO_APPS.find((app) => app.slug === slug);
}
