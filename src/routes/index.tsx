import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi,
  UtensilsCrossed,
  BellRing,
  Sparkles,
  Accessibility,
  BedDouble,
  Mountain,
  HeartHandshake,
  Star,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import terrace from "@/assets/terrace.png";
import diningView from "@/assets/dining-view.png";
import loungeGlass from "@/assets/lounge-glass.png";
import loungeSwing from "@/assets/lounge-swing.png";
import corridor from "@/assets/corridor.png";
import roomValley from "@/assets/room-valley.png";
import { ROOMS } from "@/lib/rooms";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zephyr House CASA Stay — Best Homestay in Kufri, Shimla" },
      {
        name: "description",
        content:
          "Zephyr House CASA Stay is a cozy mountain-view homestay in Kufri Main Market, Shimla — steps from the Himalayan Nature Park and Mahasu Peak. Book direct on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Zephyr House CASA Stay — Best Homestay in Kufri, Shimla",
      },
      {
        property: "og:description",
        content:
          "Cozy Himalayan homestay in Kufri with valley views, on-site dining and warm Himachali hospitality. Direct WhatsApp booking.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHY = [
  {
    icon: Mountain,
    title: "Uninterrupted Himalayan views",
    body: "Ridge after ridge from every terrace, window and swing seat — sunrise over the valley and sunsets that change colour for an hour.",
  },
  {
    icon: HeartHandshake,
    title: "Hosted by locals",
    body: "A Kufri family lives on the property. Expect chai when you arrive, honest directions and quiet help whenever you need it.",
  },
  {
    icon: MapPin,
    title: "Right at Kufri Main Market",
    body: "Walk to cafés, taxis and the Himalayan Nature Park in minutes; Mahasu Peak trails start just up the hill.",
  },
  {
    icon: Star,
    title: "Consistently loved",
    body: `Guests rate the stay around ${SITE.rating}/5 for cleanliness, warmth and the views from the rooms.`,
  },
];

const AMENITIES = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: UtensilsCrossed, label: "On-site Dining" },
  { icon: BellRing, label: "Room Service" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Accessibility, label: "Wheelchair Access" },
  { icon: BedDouble, label: "Comfortable Rooms" },
  { icon: Mountain, label: "Mountain Views" },
  { icon: HeartHandshake, label: "Local Hospitality" },
];

const NEARBY = [
  {
    name: "Himalayan Nature Park / Kufri Zoo",
    distance: "approx. 0.66 km",
    note: "Snow leopards, Himalayan monal and shaded deodar walking trails.",
  },
  {
    name: "Mahasu Peak",
    distance: "approx. 1.5 km",
    note: "The highest point in Kufri — sweeping views across the greater Himalaya.",
  },
  {
    name: "Kufri sightseeing & horse-riding",
    distance: "walking distance",
    note: "Adventure park, pony rides and viewpoints along the ridge road.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={terrace}
          alt="Terrace seating overlooking the Himalayan ranges at Zephyr House CASA Stay, Kufri"
          className="absolute inset-0 h-full w-full slow-zoom object-cover"
        />
        <div className="ink-scrim absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8">
          <p className="eyebrow rise">Kufri · Shimla · Himachal Pradesh</p>
          <h1 className="rise mt-4 max-w-4xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Cozy Himalayan stays above the clouds of Kufri
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Zephyr House CASA Stay is a warm, family-run homestay in Kufri Main Market — pine
            interiors, glass-front lounges, home-cooked Himachali food and a valley that opens up
            the moment you step outside.
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-4">
            <WhatsAppCta className="px-8 py-4 text-base" />
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-pine-deep"
            >
              View Rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="rise mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-cream/20 pt-6 text-cream sm:grid-cols-4">
            {[
              ["Guest rating", `~${SITE.rating}/5`],
              ["Check-in", SITE.checkIn],
              ["Check-out", SITE.checkOut],
              ["Mahasu Peak", "1.5 km"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.62rem] font-semibold tracking-[0.2em] text-cream/60 uppercase">
                  {k}
                </dt>
                <dd className="mt-1 font-display text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Welcome to Zephyr House</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              A mountain home, not a hotel corridor
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Built into the hillside at Kufri Main Market, Zephyr House CASA Stay keeps things
              deliberately small and personal. Warm wood, brick and glass, lantern-lit walkways,
              and rooms that all reach toward the same thing — the Himalayan skyline.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mornings begin with parathas and hot chai on the terrace; evenings end wrapped in a
              blanket on the swing, watching Shimla's lights flicker far below. Everything is
              booked directly with us over WhatsApp — no agents, no hidden fees.
            </p>
            <WhatsAppCta className="mt-8" variant="outline">
              Check availability
            </WhatsAppCta>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src={corridor}
              alt="Lantern-lit stone corridor leading to the rooms"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover shadow-soft sm:h-80"
            />
            <img
              src={loungeSwing}
              alt="Indoor swing lounge with valley-facing glass windows"
              loading="lazy"
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-soft sm:h-80"
            />
          </Reveal>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Stay with us</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Rooms made for cold evenings</h2>
            <p className="mt-4 text-muted-foreground">
              Layered bedding, hot water round the clock and a window worth waking up for.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ROOMS.map((room, i) => (
              <Reveal key={room.slug} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{room.name}</h3>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-accent">
                      {room.tagline}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                      {room.description}
                    </p>
                    <Link
                      to="/rooms"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      Room details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Himalayan views */}
      <section className="relative overflow-hidden">
        <img
          src={roomValley}
          alt="Room window framing the blue Himalayan ridges at dusk"
          loading="lazy"
          className="h-[70vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-pine-deep/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-xl">
              <p className="eyebrow">Himalayan views</p>
              <h2 className="mt-3 font-display text-3xl text-cream sm:text-5xl">
                Ridgelines that fade into six shades of blue
              </h2>
              <p className="mt-5 leading-relaxed text-cream/80">
                At 2,600 metres the air is thin and clean, and the valley below Kufri stretches
                farther than a photograph can hold. Our terrace, dining room and every guest room
                face it — mist at dawn, gold at sunset, stars by nine.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Why guests choose Zephyr House</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-pine py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Amenities</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Everything a mountain stay needs</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-6 transition-colors hover:border-accent/60">
                  <a.icon className="h-6 w-6 text-accent" />
                  <span className="text-sm font-semibold">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/amenities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              See all amenities <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Dining */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={diningView}
              alt="Long wooden dining table facing the mountains at dusk"
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Dining</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Home-cooked Himachali food, served facing the valley
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              One long communal table, mountain light through the windows and food made in our own
              kitchen — siddu with ghee, rajma-chawal, hot aloo parathas, madra on request and
              endless chai. Vegetarian, Jain and mild options are always available.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>· Breakfast, lunch and dinner on request</li>
              <li>· In-room dining and evening snacks</li>
              <li>· Bonfire arrangements on clear nights (seasonal)</li>
            </ul>
            <WhatsAppCta
              className="mt-8"
              variant="outline"
              message="Hello Zephyr House CASA Stay, I would like to enquire about room availability and booking, and about your dining options."
            >
              Ask about meals
            </WhatsAppCta>
          </Reveal>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Around Kufri</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Nearby attractions</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NEARBY.map((n, i) => (
              <Reveal key={n.name} delay={i * 90}>
                <div className="h-full rounded-3xl bg-card p-7 shadow-soft">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                    {n.distance}
                  </p>
                  <h3 className="mt-3 font-display text-xl">{n.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/location"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Directions & map <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden">
        <img
          src={loungeGlass}
          alt="Glass-front lounge with swing seating at Zephyr House CASA Stay"
          loading="lazy"
          className="h-[80vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-pine-deep/70" />
        <div className="absolute inset-0 grid place-items-center px-5 text-center">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Direct booking</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Your room in the mountains is one message away
            </h2>
            <p className="mt-5 text-cream/80">
              Message us on WhatsApp for live availability, tariffs and a warm welcome at Kufri
              Main Market. Check-in {SITE.checkIn} · Check-out {SITE.checkOut}.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <WhatsAppCta className="px-8 py-4 text-base" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-pine-deep"
              >
                <Clock className="h-4 w-4" /> Contact & timings
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
