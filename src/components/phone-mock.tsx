import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { TKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const APP_SCREENS: ReadonlyArray<{ src: string; altKey: TKey }> = [
  { src: "/screens/splash.jpg", altKey: "screen_splash" },
  { src: "/screens/home.jpg", altKey: "screen_home" },
  { src: "/screens/learn.jpg", altKey: "screen_learn" },
  { src: "/screens/verb.jpg", altKey: "screen_verb" },
];

export function PhoneMock({
  className,
  screen,
}: {
  className?: string;
  screen?: number;
}) {
  const { t } = useI18n();
  const pinned = typeof screen === "number";
  const [i, setI] = useState(() => (pinned ? screen : 0));
  const active = APP_SCREENS[i] ?? APP_SCREENS[0];

  useEffect(() => {
    if (pinned) {
      setI(screen);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % APP_SCREENS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [pinned, screen]);

  return (
    <div className={cn("phone-shell", pinned && "is-pinned", className)}>
      <div className="phone-bezel">
        <div className="phone-notch" />
        <div className="phone-screen">
          {pinned ? (
            <img
              src={active.src}
              alt={t(active.altKey)}
              className="phone-shot is-active"
              width={720}
              height={1452}
              loading="lazy"
              draggable={false}
            />
          ) : (
            APP_SCREENS.map((shot, idx) => (
              <img
                key={shot.src}
                src={shot.src}
                alt=""
                className={cn("phone-shot", idx === i && "is-active")}
                width={720}
                height={1452}
                draggable={false}
              />
            ))
          )}
        </div>
      </div>
      {!pinned ? (
        <div className="phone-dots" aria-hidden="true">
          {APP_SCREENS.map((shot, idx) => (
            <span
              key={shot.src}
              className={cn("phone-dot", idx === i && "is-on")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
