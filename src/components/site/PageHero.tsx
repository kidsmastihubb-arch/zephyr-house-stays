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
  return (
    <section className="relative flex h-[62vh] min-h-[420px] items-end overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full slow-zoom object-cover"
      />
      <div className="ink-scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise mt-3 max-w-3xl font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="rise mt-4 max-w-xl text-base leading-relaxed text-cream/75">{subtitle}</p>
      </div>
    </section>
  );
}
