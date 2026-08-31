import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  UtensilsCrossed,
  BellRing,
  Sparkles,
  Accessibility,
  BedDouble,
  Mountain,
  HeartHandshake,
} from "lucide-react";
import loungeGlass from "@/assets/lounge-glass.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Zephyr House CASA Stay, Kufri Homestay" },
      {
        name: "description",
        content:
          "Free Wi-Fi, on-site dining, room service, daily housekeeping, wheelchair access, comfortable rooms and mountain views at Zephyr House CASA Stay in Kufri, Shimla.",
      },
      { property: "og:title", content: "Amenities — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content:
          "Wi-Fi, dining, room service, housekeeping, accessibility and Himalayan views at our Kufri homestay.",
      },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

const ITEMS = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    body: "High-speed wireless internet across the rooms, lounge and dining area — reliable enough to work from the mountains.",
  },
  {
    icon: UtensilsCrossed,
    title: "On-site Dining",
    body: "Home-cooked Himachali and Indian meals served at the long valley-facing table, with vegetarian and Jain options.",
  },
  {
    icon: BellRing,
    title: "Room Service",
    body: "Chai, snacks and full meals delivered to your room or balcony whenever the weather keeps you inside.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    body: "Rooms refreshed every day with clean linen, fresh towels and 24x7 hot water.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair Accessibility",
    body: "Step-free access to the main level rooms and dining area, with staff assistance available on request.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    body: "King beds, layered winter bedding, heating, wardrobes and warm lighting designed for cold Kufri nights.",
  },
  {
    icon: Mountain,
    title: "Mountain Views",
    body: "Valley and ridge views from the rooms, terrace, swing lounge and glass sunroom.",
  },
  {
    icon: HeartHandshake,
    title: "Local Hospitality",
    body: "Resident hosts who arrange taxis, guides, bonfires and honest local recommendations.",
  },
];

function AmenitiesPage() {
  return (
    <>
      <PageHero
        image={loungeGlass}
        eyebrow="Amenities"
        title="Small comforts that make a mountain stay easy"
        subtitle="Everything at Zephyr House CASA Stay is arranged around warmth, quiet and the view."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} variant="scale">
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <Reveal variant="left">
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-secondary/70 lg:grid-cols-2">
            <img
              src={roomDeluxe}
              alt="Deluxe room interior with warm lighting at Zephyr House CASA Stay"
              loading="lazy"
              className="h-full max-h-[420px] w-full object-cover"
            />
            <div className="p-8 lg:p-12">
              <p className="eyebrow">Good to know</p>
              <h2 className="mt-3 font-display text-3xl">Stay details</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground/80">
                <li>· Check-in from {SITE.checkIn}</li>
                <li>· Check-out by {SITE.checkOut}</li>
                <li>· Guest rating approximately {SITE.rating}/5</li>
                <li>· Parking and taxi assistance on request</li>
                <li>· Extra mattresses available for families</li>
              </ul>
              <WhatsAppCta className="mt-8" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
