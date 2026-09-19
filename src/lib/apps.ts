import type { TKey } from "@/lib/i18n";

export type AppSlug = "nibras-arabic" | "nibras-pdf" | "nibras-plans" | "nibras-docs";

export type AppEntry = {
  slug: AppSlug;
  icon: string;
  name: string;
  titleLead: string;
  titleAccent: string;
  kicker: TKey;
  desc: TKey;
  tag: TKey;
  comingSoon: boolean;
  hasScreens: boolean;
  store: { ios: string; android: string };
  feats: ReadonlyArray<{ title: TKey; desc: TKey }>;
};

export const APPS: readonly AppEntry[] = [
  {
    slug: "nibras-arabic",
    icon: "/apps/nibras-arabic.jpg",
    name: "Nibras Arabic",
    titleLead: "Nibras",
    titleAccent: "Arabic.",
    kicker: "app_kicker",
    desc: "app_desc",
    tag: "arabic_tag",
    comingSoon: false,
    hasScreens: true,
    store: { ios: "", android: "" },
    feats: [
      { title: "app_feat1_t", desc: "app_feat1_d" },
      { title: "app_feat2_t", desc: "app_feat2_d" },
      { title: "app_feat3_t", desc: "app_feat3_d" },
      { title: "app_feat4_t", desc: "app_feat4_d" },
    ],
  },
  {
    slug: "nibras-pdf",
    icon: "/apps/nibras-pdf.jpg",
    name: "Nibras PDF",
    titleLead: "Nibras",
    titleAccent: "PDF.",
    kicker: "pdf_kicker",
    desc: "pdf_desc",
    tag: "pdf_tag",
    comingSoon: true,
    hasScreens: false,
    store: { ios: "", android: "" },
    feats: [
      { title: "pdf_feat1_t", desc: "pdf_feat1_d" },
      { title: "pdf_feat2_t", desc: "pdf_feat2_d" },
      { title: "pdf_feat3_t", desc: "pdf_feat3_d" },
      { title: "pdf_feat4_t", desc: "pdf_feat4_d" },
    ],
  },
  {
    slug: "nibras-plans",
    icon: "/apps/nibras-plans.jpg",
    name: "PLANS",
    titleLead: "Nibras",
    titleAccent: "Plans.",
    kicker: "plans_kicker",
    desc: "plans_desc",
    tag: "plans_tag",
    comingSoon: true,
    hasScreens: false,
    store: { ios: "", android: "" },
    feats: [
      { title: "plans_feat1_t", desc: "plans_feat1_d" },
      { title: "plans_feat2_t", desc: "plans_feat2_d" },
      { title: "plans_feat3_t", desc: "plans_feat3_d" },
      { title: "plans_feat4_t", desc: "plans_feat4_d" },
    ],
  },
  {
    slug: "nibras-docs",
    icon: "/apps/nibras-docs.jpg",
    name: "DOCS",
    titleLead: "Nibras",
    titleAccent: "Docs.",
    kicker: "docs_kicker",
    desc: "docs_desc",
    tag: "docs_tag",
    comingSoon: true,
    hasScreens: false,
    store: { ios: "", android: "" },
    feats: [
      { title: "docs_feat1_t", desc: "docs_feat1_d" },
      { title: "docs_feat2_t", desc: "docs_feat2_d" },
      { title: "docs_feat3_t", desc: "docs_feat3_d" },
      { title: "docs_feat4_t", desc: "docs_feat4_d" },
    ],
  },
];

export function getApp(slug: string): AppEntry | undefined {
  return APPS.find((app) => app.slug === slug);
}
