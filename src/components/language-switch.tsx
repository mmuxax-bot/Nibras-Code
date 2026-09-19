import { LANGS, LANG_META } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("lang_label")}
      className={cn(
        "flex items-center rounded-full border border-line bg-white/4 p-1",
        compact ? "gap-0" : "gap-0.5",
      )}
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            data-lang={code}
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={cn(
              "min-h-9 min-w-9 rounded-full px-2.5 text-2xs font-bold tracking-wide",
              "transition-[background-color,color,box-shadow] duration-150 ease-out",
              active
                ? "bg-fg text-ink shadow-[0_6px_18px_rgb(109_132_255_/_0.28)]"
                : "text-muted hover:text-fg",
            )}
          >
            {LANG_META[code].label}
          </button>
        );
      })}
    </div>
  );
}
