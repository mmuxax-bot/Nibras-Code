import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SCREENS = [
  { src: "/app-screens/splash.jpg", alt: "Nibras Arabic — Splash" },
  { src: "/app-screens/home.jpg", alt: "Nibras Arabic — Ana səhifə" },
  { src: "/app-screens/learn.jpg", alt: "Nibras Arabic — Öyrənməyə başla" },
  { src: "/app-screens/verb.jpg", alt: "Nibras Arabic — Feil öyrən" },
] as const;

export function PhoneMock({ className }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % SCREENS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("phone-shell", className)}>
      <div className="phone-bezel">
        <div className="phone-notch" />
        <div className="phone-screen phone-screen--shots">
          {SCREENS.map((screen, idx) => (
            <img
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              className={cn(
                "phone-shot",
                idx === i ? "phone-shot--active" : "phone-shot--idle",
              )}
              draggable={false}
            />
          ))}
          <div className="phone-shot-dots">
            {SCREENS.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "phone-shot-dot",
                  idx === i && "phone-shot-dot--active",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
