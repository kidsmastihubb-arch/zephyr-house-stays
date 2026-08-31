import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Phone } from "lucide-react";
import roomValley from "@/assets/room-valley.png";
import terrace from "@/assets/terrace.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Homestay near Kufri Main Market & Mahasu Peak" },
      {
        name: "description",
        content:
          "Zephyr House CASA Stay is at Main Market, Kufri, Shimla 171012 — 0.66 km from the Himalayan Nature Park and 1.5 km from Mahasu Peak. Map and directions inside.",
      },
      { property: "og:title", content: "Location — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content:
          "Find us at Kufri Main Market, Shimla — near Kufri Zoo, Mahasu Peak and horse-riding areas.",
      },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const NEARBY = [
  {
    name: "Himalayan Nature Park / Kufri Zoo",
    distance: "approx. 0.66 km",
    note: "Home to snow leopards, Himalayan monal and shaded deodar trails — an easy walk from the house.",
  },
  {
    name: "Mahasu Peak",
    distance: "approx. 1.5 km",
    note: "Kufri's highest viewpoint, with sweeping views of the greater Himalayan ranges.",
  },
  {
    name: "Kufri sightseeing & horse-riding areas",
    distance: "walking distance",
    note: "Pony rides, the adventure park and ridge-road viewpoints all start near Main Market.",
  },
];

function LocationPage() {
  return (
    <>
      <PageHero
        image={roomValley}
        eyebrow="Location"
        title="In the middle of Kufri, above the whole valley"
        subtitle={SITE.address}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.2904822985606!2d77.25975241084933!3d31.101657467603353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390583ab1c21a36f%3A0x2a4eeaeca76d0a4f!2sZephyr%20House%20CASA%20Stay!5e0!3m2!1sen!2sin!4v1788152523075!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Map showing Zephyr House CASA Stay, Kufri"
                className="h-[450px] w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Find us</p>
            <h2 className="mt-3 font-display text-3xl">Zephyr House CASA Stay</h2>
            <p className="mt-4 flex gap-2.5 text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
              {SITE.address}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We're right on the Kufri Main Market stretch of the Shimla–Chail road: roughly 30–40
              minutes from Shimla town, 45 minutes from the Shimla railway station and about 2
              hours from Solan. Taxis stop at the market, a short walk from our gate.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <WhatsAppCta>WhatsApp</WhatsAppCta>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Nearby attractions</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">What's around the corner</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEARBY.map((n, i) => (
              <Reveal key={n.name} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                    {n.distance}
                  </p>
                  <h3 className="mt-3 font-display text-xl">{n.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxImage
        src={terrace}
        alt="Terrace overlooking the Kufri valley at blue hour"
        className="grid h-[60vh] min-h-[400px] place-items-center px-5 text-center"
        overlayClassName="bg-pine-deep/70"
        speed={0.16}
      >
        <Reveal className="max-w-xl" variant="scale">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Planning your Kufri trip?
          </h2>
          <p className="mt-4 text-cream/80">
            Tell us your dates and we'll confirm availability and the easiest route to our door.
          </p>
          <WhatsAppCta className="mt-7 px-8 py-4 text-base" />
        </Reveal>
      </ParallaxImage>
    </>
  );
}
