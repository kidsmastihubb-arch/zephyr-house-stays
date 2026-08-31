import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppCta } from "./WhatsAppCta";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 border-b border-border backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/50 font-display text-base text-accent">
            Z
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-lg leading-tight ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Zephyr House
            </span>
            <span className="block text-[0.6rem] font-semibold tracking-[0.3em] text-accent uppercase">
              Casa Stay · Kufri
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground/80" : "text-cream/85"
              }`}
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppCta className="px-5 py-2.5">Book Now</WhatsAppCta>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border lg:hidden ${
            scrolled ? "border-border text-foreground" : "border-cream/40 text-cream"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pt-3 pb-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border/70 py-3 text-sm font-medium text-foreground/85"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <WhatsAppCta className="w-full" />
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
