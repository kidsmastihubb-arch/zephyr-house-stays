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
      "bg-accent text-accent-foreground hover:brightness-105 shadow-soft",
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
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5",
        styles,
        className,
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </a>
  );
}
