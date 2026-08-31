import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, Clock, Star, MessageCircle } from "lucide-react";
import suiteLounge from "@/assets/suite-lounge.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Zephyr House CASA Stay, Kufri" },
      {
        name: "description",
        content:
          "Call +91 90150 27711 or WhatsApp Zephyr House CASA Stay, Main Market, Kufri, Shimla 171012. Check-in 2:00 PM, check-out 12:00 PM. Book direct.",
      },
      { property: "og:title", content: "Contact & Booking — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content: "Call, WhatsApp or get directions to our Kufri Main Market homestay.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={suiteLounge}
        eyebrow="Contact"
        title="Talk to your hosts directly"
        subtitle="No booking agents, no waiting — we answer WhatsApp messages personally, all day."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="eyebrow">Reach us</p>
            <h2 className="mt-3 font-display text-3xl">Zephyr House CASA Stay</h2>

            <ul className="mt-7 space-y-5">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Address</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Phone & WhatsApp</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-muted-foreground">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Check-in / Check-out</p>
                  <p className="text-sm text-muted-foreground">
                    Check-in {SITE.checkIn} · Check-out {SITE.checkOut}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Guest rating</p>
                  <p className="text-sm text-muted-foreground">Approximately {SITE.rating} / 5</p>
                </div>
              </li>
            </ul>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <img
              src={roomDeluxe}
              alt="Warmly lit guest room at Zephyr House CASA Stay, Kufri"
              loading="lazy"
              className="h-full max-h-[560px] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-pine py-20 text-cream">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal variant="scale">
            <h2 className="font-display text-3xl sm:text-4xl">
              Ready when you are — book your Kufri stay
            </h2>
            <p className="mt-4 text-cream/80">
              Send us your dates and number of guests on WhatsApp and we'll confirm right away.
            </p>
            <WhatsAppCta className="mt-8 px-8 py-4 text-base" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
