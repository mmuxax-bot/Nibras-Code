import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useI18n, s as cn } from "./apps-Dzd54FaI.mjs";
import { l as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phone-mock-ChjEmG_F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LETTERS = [
	{
		ar: "ا",
		la: "Alif",
		ipa: "ā"
	},
	{
		ar: "ب",
		la: "Bā",
		ipa: "b"
	},
	{
		ar: "ت",
		la: "Tā",
		ipa: "t"
	},
	{
		ar: "ث",
		la: "Thā",
		ipa: "th"
	},
	{
		ar: "ن",
		la: "Nūn",
		ipa: "n"
	}
];
function PhoneMock({ className }) {
	const { t } = useI18n();
	const [i, setI] = (0, import_react.useState)(0);
	const letter = LETTERS[i] ?? LETTERS[0];
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setI((n) => (n + 1) % LETTERS.length);
		}, 2400);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("phone-shell", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "phone-bezel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "phone-notch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "phone-screen",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 pt-7 text-micro font-semibold tracking-widest text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NIBRAS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: "9:41"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-micro font-bold tracking-[0.22em] text-ice/80",
							children: t("app_lesson")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "letter-stage mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "letter-glyph",
								children: letter.ar
							}, letter.ar)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold text-fg",
								children: letter.la
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: letter.ipa
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1",
								children: LETTERS.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1 w-4 rounded-full", idx === i ? "bg-ice" : "bg-white/15") }, item.ar))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 h-1 overflow-hidden rounded-full bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-linear-to-r from-brand to-ice",
								style: { width: `${(i + 1) / LETTERS.length * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-fg text-2xs font-bold tracking-widest text-ink uppercase",
							children: [t("app_next"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { PhoneMock as t };
