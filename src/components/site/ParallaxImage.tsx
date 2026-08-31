import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * ParallaxImage — a full-bleed background image that drifts on scroll.
 * The image is taller than the section so it can translate without exposing gaps.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  speed = 0.18,
  children,
  overlayClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  children?: ReactNode;
  overlayClassName?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      el.style.transform = `translate3d(0, ${progress * speed * 100}px, 0) scale(1.12)`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-[118%] w-full -top-[9%] object-cover will-change-transform",
          imgClassName,
        )}
      />
      <div className={cn("absolute inset-0", overlayClassName)} />
      {children ? <div className="relative z-10">{children}</div> : null}
    </section>
  );
}
