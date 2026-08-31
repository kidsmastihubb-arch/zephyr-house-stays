import { useEffect, useRef } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `scale(1.08) translate3d(0, ${progress * 24}px, 0)`;
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex h-[64vh] min-h-[440px] items-end overflow-hidden">
      <img
        ref={imgRef}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="ink-scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1
          className="rise mt-3 max-w-3xl font-display text-4xl text-cream sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.12s" }}
        >
          {title}
        </h1>
        <p
          className="rise mt-4 max-w-xl text-base leading-relaxed text-cream/80"
          style={{ animationDelay: "0.24s" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
