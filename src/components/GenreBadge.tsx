import { genreMeta, type Genre } from "@/data/genres";
import { cn } from "@/lib/utils";

export function GenreBadge({ genre, className }: { genre: Genre; className?: string }) {
  const meta = genreMeta(genre);
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ring-1",
        meta.className,
        className,
      )}
    >
      {meta.label}
    </span>
  );
}