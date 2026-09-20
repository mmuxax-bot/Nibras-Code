import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

const LETTERS = [
  { ar: "ا", la: "Alif", ipa: "ā" },
  { ar: "ب", la: "Bā", ipa: "b" },
  { ar: "ت", la: "Tā", ipa: "t" },
  { ar: "ث", la: "Thā", ipa: "th" },
  { ar: "ن", la: "Nūn", ipa: "n" },
] as const;

export function PhoneMock({ className }: { className?: string }) {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const letter = LETTERS[i] ?? LETTERS[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % LETTERS.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("phone-shell", className)}>
      <div className="phone-bezel">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="flex items-center justify-between px-4 pt-7 text-micro font-semibold tracking-widest text-muted">
            <span>NIBRAS</span>
            <span className="tabular-nums">9:41</span>
          </div>
          <div className="mt-5 px-4">
            <p className="text-micro font-bold tracking-[0.22em] text-ice/80">
              {t("app_lesson")}
            </p>
            <div className="letter-stage mt-3">
              <span key={letter.ar} className="letter-glyph">
                {letter.ar}
              </span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-fg">{letter.la}</p>
                <p className="text-xs text-muted">{letter.ipa}</p>
              </div>
              <div className="flex gap-1">
                {LETTERS.map((item, idx) => (
                  <span
                    key={item.ar}
                    className={cn(
                      "h-1 w-4 rounded-full",
                      idx === i ? "bg-ice" : "bg-white/15",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-brand to-ice"
                style={{ width: `${((i + 1) / LETTERS.length) * 100}%` }}
              />
            </div>
            <div className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-fg text-2xs font-bold tracking-widest text-ink uppercase">
              {t("app_next")}
              <ArrowUpRight className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
