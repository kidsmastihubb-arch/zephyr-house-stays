import { createFileRoute } from "@tanstack/react-router";
import { Check, Mountain } from "lucide-react";
import terrace from "@/assets/terrace.png";
import { ROOMS } from "@/lib/rooms";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Zephyr House CASA Stay, Kufri" },
      {
        name: "description",
        content:
          "Mountain-view rooms and family suites at Zephyr House CASA Stay, a homestay in Kufri Main Market, Shimla. Enquire and book directly on WhatsApp.",
      },
      { property: "og:title", content: "Rooms & Suites — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content:
          "Valley-view rooms, glass-front lounges and family suites in Kufri, Shimla. Direct WhatsApp booking.",
      },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <PageHero
        image={terrace}
        eyebrow="Rooms & Suites"
        title="Warm rooms with the Himalayas at the window"
        subtitle="Four distinct stays, each with mountain light, hot water round the clock and hosts who live on the property."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="space-y-20">
          {ROOMS.map((room, i) => (
            <Reveal key={room.slug}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src={room.image}
                    alt={`${room.name} at Zephyr House CASA Stay, Kufri`}
                    loading="lazy"
                    className="h-full max-h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </figure>
                <div>
                  <p className="eyebrow">{room.tagline}</p>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl">{room.name}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{room.description}</p>
                  <p className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-primary">
                    <Mountain className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {room.view}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {room.facilities.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppCta
                    className="mt-7"
                    message={`Hello Zephyr House CASA Stay, I would like to enquire about room availability and booking for the ${room.name}.`}
                  >
                    Enquire about this room
                  </WhatsAppCta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
            <h2 className="font-display text-2xl">Booking information</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Check-in {SITE.checkIn} · Check-out {SITE.checkOut} · Guest rating ~{SITE.rating}/5
            </p>
            <WhatsAppCta className="mt-6" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
