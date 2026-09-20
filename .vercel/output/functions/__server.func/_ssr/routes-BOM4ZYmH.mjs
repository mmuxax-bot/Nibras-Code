import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MARQUEE, l as useI18n, o as STUDIO_APPS, t as Button } from "./apps-Dzd54FaI.mjs";
import { d as ArrowDown, i as Plus, l as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as HeroStage } from "./router-v4acVVKx.mjs";
import { t as Reveal } from "./reveal-CTzFqcXK.mjs";
import { t as PhoneMock } from "./phone-mock-ChjEmG_F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BOM4ZYmH.js
var import_jsx_runtime = require_jsx_runtime();
function AppLink({ app, className, children }) {
	if (app.slug === "nibras-arabic") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/apps/nibras-arabic",
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/apps/$slug",
		params: { slug: app.slug },
		className,
		children
	});
}
function AppsShelf() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "apps-shelf",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "apps-shelf-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("shelf_kicker")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("shelf_hint") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "apps-shelf-grid",
			children: STUDIO_APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				app,
				className: "app-tile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "app-tile-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: app.icon,
							alt: ""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: app.name }),
					app.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "is-live",
						children: t("tag_mobile")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("soon") })
				]
			}, app.slug))
		})]
	});
}
function Home() {
	const { t, lang } = useI18n();
	const marquee = [...MARQUEE[lang], ...MARQUEE[lang]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy hero-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden items-center gap-2 sm:inline-flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }),
										t("live_label"),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-faint",
											children: "·"
										})
									]
								}),
								"NIBRAS CODE",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-faint",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("eyebrow_studio") })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [t("hero_line1"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-accent",
							children: t("hero_accent")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("hero_desc") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#apps",
									children: [t("btn_explore_apps"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									children: t("btn_about_nibras")
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stats",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("stat_simple") })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("stat_premium") })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("stat_useful") })] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStage, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroll-hint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("scroll_text") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "chev size-3.5" })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: marquee.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					item,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "·" })
				] }, `${item}-${i}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "apps",
			className: "section scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("apps_eyebrow")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						t("apps_h2_lead"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("apps_h2_em") })
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("apps_desc") })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/apps/nibras-arabic",
					className: "featured",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "featured-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("featured_label")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("featured_title") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("featured_desc") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "tag-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: t("tag_lang")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: t("tag_mobile")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: t("tag_year")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-2xs font-bold tracking-widest text-fg uppercase",
								children: [t("featured_explore"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5 text-brand" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "featured-visual",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, {})
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppsShelf, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "next-project",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-widest",
								children: "02"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("next_label") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("next_desc") })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "next-plus",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "craft",
			className: "section scroll-mt-24 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("craft_eyebrow")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					t("craft_h2_lead"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("craft_h2_em") })
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("craft_desc") })]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "craft-grid",
				children: [
					[
						"01",
						"craft1_t",
						"craft1_d"
					],
					[
						"02",
						"craft2_t",
						"craft2_d"
					],
					[
						"03",
						"craft3_t",
						"craft3_d"
					]
				].map(([n, title, desc], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "craft-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "num",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(title) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(desc) })
						]
					})
				}, n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "about",
			className: "about section scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-label",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
						className: "mt-3 block leading-relaxed",
						children: [
							t("about_label_word"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"NIBRAS CODE"
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-main",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("about_eyebrow")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								t("about_h2_lead"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("about_h2_em") })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("about_desc") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "about-quote",
								children: [
									"“",
									t("about_quote"),
									"”"
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-side",
					children: [
						["about_design", "about_design_d"],
						["about_dev", "about_dev_d"],
						["about_exp", "about_exp_d"]
					].map(([k, d], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120 + idx * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(k) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(d) })] })
					}, k))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "cta-band",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("cta_kicker")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("cta_h2") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("cta_desc") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#apps",
						children: [t("cta_btn"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5" })]
					})
				})
			]
		}) })
	] });
}
//#endregion
export { Home as component };
