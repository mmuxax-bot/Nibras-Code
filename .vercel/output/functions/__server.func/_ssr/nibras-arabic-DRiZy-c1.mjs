import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getAppBySlug, l as useI18n, t as Button } from "./apps-Dzd54FaI.mjs";
import { a as PanelsTopLeft, c as BookOpen, r as Timer, s as Languages, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as AppDownload } from "./app-download-DkDliIcu.mjs";
import { t as Reveal } from "./reveal-CTzFqcXK.mjs";
import { t as PhoneMock } from "./phone-mock-ChjEmG_F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nibras-arabic-DRiZy-c1.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Languages,
		title: "app_feat1_t",
		desc: "app_feat1_d"
	},
	{
		icon: Timer,
		title: "app_feat2_t",
		desc: "app_feat2_d"
	},
	{
		icon: PanelsTopLeft,
		title: "app_feat3_t",
		desc: "app_feat3_d"
	},
	{
		icon: BookOpen,
		title: "app_feat4_t",
		desc: "app_feat4_d"
	}
];
var APP = getAppBySlug("nibras-arabic");
function NibrasArabicPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "app-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "app-hero-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-stagger",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: APP.icon,
						alt: "Nibras Arabic",
						className: "app-icon-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("app_kicker")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4",
						children: ["Nibras", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-accent",
							children: "Arabic."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted",
						children: t("app_desc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "status-pill",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), t("app_status")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-faint",
						children: t("app_status_d")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "apps",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "rtl-flip size-3.5" }), t("app_back")]
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, {})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "feat-grid",
			children: FEATURES.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "feat-card",
				style: { transitionDelay: `${idx * 60}ms` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(feat.icon, {
						className: "mb-4 size-5 text-brand",
						strokeWidth: 1.6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(feat.title) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(feat.desc) })
				]
			}, feat.title))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 80,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, { app: APP })
		})]
	})] });
}
//#endregion
export { NibrasArabicPage as component };
