import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useI18n } from "./apps-Dzd54FaI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-download-DkDliIcu.js
var import_jsx_runtime = require_jsx_runtime();
function PlayMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.5 3.2c-.7-.4-1.5.1-1.5.9v15.8c0 .8.8 1.3 1.5.9l14.5-7.9c.7-.4.7-1.4 0-1.8L4.5 3.2Z"
		})
	});
}
function AppDownload({ app }) {
	const { t } = useI18n();
	const ready = Boolean(app.playStoreUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "download-panel",
		"aria-label": t("download_title"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("download_kicker")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("download_title") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ready ? t("download_ready_d") : t("download_wait") })
		] }), ready && app.playStoreUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "play-btn",
			href: app.playStoreUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayMark, { className: "play-btn-mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("download_android") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("download_cta") })] })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "play-btn is-wait",
			"aria-disabled": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayMark, { className: "play-btn-mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("download_android") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("soon") })] })]
		})]
	});
}
//#endregion
export { AppDownload as t };
