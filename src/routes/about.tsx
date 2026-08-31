import { createFileRoute } from "@tanstack/react-router";
import corridor from "@/assets/corridor.png";
import loungeSwing from "@/assets/lounge-swing.png";
import diningView from "@/assets/dining-view.png";
import suiteLounge from "@/assets/suite-lounge.png";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppCta } from "@/components/site/WhatsAppCta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zephyr House CASA Stay, Kufri Homestay" },
      {
        name: "description",
        content:
          "Meet Zephyr House CASA Stay: a locally hosted homestay in Kufri Main Market, Shimla, offering Himalayan views, Himachali hospitality and a peaceful mountain retreat.",
      },
      { property: "og:title", content: "About — Zephyr House CASA Stay, Kufri" },
      {
        property: "og:description",
        content:
          "A locally hosted, cozy homestay in Kufri Main Market with Himalayan views and traditional Himachali warmth.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={corridor}
        eyebrow="Our story"
        title="A quiet Himalayan house, kept warm by the family who runs it"
        subtitle="Zephyr House CASA Stay sits in the heart of Kufri Main Market — close to everything, yet far from the noise."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <Reveal variant="up">
          <p className="eyebrow">Cozy by design</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Built for slow mornings and cold, starry evenings
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Zephyr House began as a family home on the Kufri ridge and grew, room by room, into
              the homestay it is today. Everything you see was chosen for warmth rather than
              display: local pine and deodar wood, whitewashed brick, hand-picked Himachali
              textiles, soft lantern lighting along the stone corridor, and rope swings that catch
              the last of the evening light.
            </p>
            <p>
              There are only a handful of rooms, which is deliberate. It means our hosts know your
              name, remember how you take your chai, and can tell you which trail is clear after
              snowfall and which viewpoint the tour buses miss.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: loungeSwing,
              title: "Himalayan views from every corner",
              body: "Glass-front lounges, valley-facing rooms and an open terrace that looks straight across the ranges toward Shimla.",
            },
            {
              img: diningView,
              title: "Traditional Himachali hospitality",
              body: "Home-cooked meals at one long table, chai whenever you want it, and hosts who treat guests as visitors to their home.",
            },
            {
              img: suiteLounge,
              title: "A peaceful mountain retreat",
              body: "Only a few rooms, no crowds, and evenings quiet enough to hear the wind through the deodars.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100} variant="scale">
              <article className="h-full overflow-hidden rounded-3xl bg-card shadow-soft">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-60 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pine py-20 text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
          <Reveal variant="left">
            <h2 className="font-display text-3xl sm:text-4xl">
              Locally hosted. Directly booked. Genuinely Kufri.
            </h2>
            <p className="mt-4 max-w-2xl text-cream/80">
              Skip the agents and message the family directly for tariffs, availability and
              anything else you would like to know before you arrive.
            </p>
          </Reveal>
          <Reveal delay={100} variant="right">
            <WhatsAppCta className="px-8 py-4 text-base" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
