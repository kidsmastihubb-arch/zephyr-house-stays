import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppCta } from "./WhatsAppCta";

export function SiteFooter() {
  return (
    <footer className="bg-pine-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="eyebrow">Kufri · Himachal Pradesh</p>
          <h2 className="mt-3 font-display text-3xl">Zephyr House CASA Stay</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            A cozy, family-hosted mountain homestay in Kufri Main Market — deodar-scented air,
            wide Himalayan views and warm Himachali hospitality, minutes from the Himalayan
            Nature Park and Mahasu Peak.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCta />
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-cream hover:text-pine-deep"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            {[
              ["/rooms", "Rooms"],
              ["/about", "About"],
              ["/amenities", "Amenities"],
              ["/gallery", "Gallery"],
              ["/location", "Location"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Stay Details</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                Check-in {SITE.checkIn} · Check-out {SITE.checkOut}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Guest rating ~{SITE.rating}/5</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Zephyr House CASA Stay, Kufri. All rights reserved.
      </div>
    </footer>
  );
}
