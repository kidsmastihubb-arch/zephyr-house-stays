import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppCta({
  message,
  children = "Book Your Stay on WhatsApp",
  variant = "solid",
  className,
}: {
  message?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid:
      "bg-accent text-accent-foreground hover:brightness-105 shadow-soft relative overflow-hidden",
    outline:
      "border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground",
    light:
      "border border-cream/40 text-cream hover:bg-cream hover:text-pine-deep backdrop-blur-sm",
  }[variant];

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
        styles,
        className,
      )}
    >
      {variant === "solid" ? (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden
        />
      ) : null}
      <MessageCircle
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg]"
        aria-hidden
      />
      {children}
    </a>
  );
}
