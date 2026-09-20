import { B as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as useI18n, t as Button } from "./_ssr/apps-Dzd54FaI.mjs";
import { u as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as Route$1 } from "./_ssr/router-v4acVVKx.mjs";
import { t as AppDownload } from "./_ssr/app-download-DkDliIcu.mjs";
import { t as Reveal } from "./_ssr/reveal-CTzFqcXK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CybXqMCh.js
var import_jsx_runtime = require_jsx_runtime();
function StudioAppPage() {
	const { app } = Route$1.useLoaderData();
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "app-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "soon-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-stagger",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: app.icon,
						alt: app.name,
						className: "app-icon-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("app_kicker_n").replace("{n}", app.index)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4",
						children: ["Nibras", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hero-accent",
							children: [app.shortName, "."]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "status-pill",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), t("soon")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted",
						children: t(app.blurbKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-faint",
						children: t("soon_body")
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, { app }) })]
		})
	}) });
}
//#endregion
export { StudioAppPage as component };
