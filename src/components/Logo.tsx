import { Link } from "@tanstack/react-router";
import mark from "@/assets/centory-mark.png.asset.json";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={mark.url}
      alt="Ikon logo Centory Press"
      className={cn("object-contain", className)}
      loading="lazy"
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Centory Press — Beranda">
      <img src={mark.url} alt="" aria-hidden className="h-9 w-9 object-contain" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-extrabold tracking-tight text-brand-gradient">
          CENTORY
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
          Press
        </span>
      </span>
    </Link>
  );
}