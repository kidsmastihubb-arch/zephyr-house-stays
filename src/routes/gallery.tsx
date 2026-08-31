import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import terrace from "@/assets/terrace.png";
import diningView from "@/assets/dining-view.png";
import corridor from "@/assets/corridor.png";
import loungeSwing from "@/assets/lounge-swing.png";
import loungeGlass from "@/assets/lounge-glass.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import roomValley from "@/assets/room-valley.png";
import suiteLounge from "@/assets/suite-lounge.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Zephyr House CASA Stay, Kufri Homestay Photos" },
      {
        name: "description",
        content:
          "Photo gallery of Zephyr House CASA Stay in Kufri, Shimla — mountain-view rooms, terrace, swing lounges, dining area and Himalayan sunsets.",
      },
      { property: "og:title", content: "Gallery — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content: "See the rooms, terraces and Himalayan views of our Kufri homestay.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: terrace, alt: "Open terrace with wooden benches overlooking the Himalayan valley" },
  { src: roomValley, alt: "Valley view room with king bed and panoramic window at dusk" },
  { src: corridor, alt: "Lantern-lit stone corridor leading to the guest rooms" },
  { src: loungeGlass, alt: "Glass-front lounge with swing bed and mountain views" },
  { src: roomDeluxe, alt: "Deluxe mountain room with glass ensuite bathroom" },
  { src: diningView, alt: "Long wooden dining table facing the mountains" },
  { src: loungeSwing, alt: "Swing lounge with cushions and floor-to-ceiling windows" },
  { src: suiteLounge, alt: "Family suite lounge with rope swing and framed artwork" },
];

function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <PageHero
        image={loungeSwing}
        eyebrow="Gallery"
        title="Inside Zephyr House CASA Stay"
        subtitle="Real photographs of the rooms, lounges, terrace and the Kufri skyline they look out on."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.alt} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft"
                aria-label={`Open photo: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <h2 className="font-display text-3xl">Like what you see?</h2>
          <p className="mt-3 text-muted-foreground">
            Rooms fill quickly during snowfall season — message us for live availability.
          </p>
          <WhatsAppCta className="mt-6" />
        </Reveal>
      </section>

      {index !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pine-deep/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={PHOTOS[index].src}
              alt={PHOTOS[index].alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">
              {PHOTOS[index].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </>
  );
}
