import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#apps", key: "nav_apps" as const },
  { href: "/#craft", key: "nav_craft" as const },
  { href: "/#about", key: "nav_about" as const },
];

export function SiteHeader() {
  const { t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="site-header-inner">
        <Link to="/" className="brand-mark" aria-label="Nibras Code">
          <img src="/nibras-icon.png" alt="" className="brand-icon" />
          <span>
            NIBRAS <em>CODE</em>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch compact />
          <Button asChild variant="nav" size="sm" className="hidden sm:inline-flex">
            <a href="/#apps">
              {t("btn_discover")}
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white/4 text-fg md:hidden"
            aria-expanded={open}
            aria-label={open ? t("menu_close") : t("menu_open")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mobile-sheet md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2 px-6 pt-4" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-4 font-display text-2xl font-semibold text-fg"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="/#apps"
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-fg px-5 text-2xs font-bold tracking-widest text-ink uppercase"
            onClick={() => setOpen(false)}
          >
            {t("btn_discover")}
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <Link to="/" className="brand-mark">
        <img src="/nibras-icon.png" alt="" className="brand-icon" />
        <span>
          NIBRAS <em>CODE</em>
        </span>
      </Link>
      <span>© 2026 Nibras Code</span>
      <span>{t("footer_tag")}</span>
    </footer>
  );
}
