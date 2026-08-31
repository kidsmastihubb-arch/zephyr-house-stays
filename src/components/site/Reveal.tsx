import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

const INIT_CLASS: Record<RevealVariant, string> = {
  up: "reveal-init",
  left: "reveal-init-left",
  right: "reveal-init-right",
  scale: "reveal-init-scale",
  blur: "reveal-init",
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  threshold = 0.14,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(INIT_CLASS[variant], shown && "reveal-visible", className)}
    >
      {children}
    </div>
  );
}
