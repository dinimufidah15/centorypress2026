import { Link } from "@tanstack/react-router";
import { GenreBadge } from "./GenreBadge";
import { formatPrice, type Book } from "@/data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/katalog/$slug"
      params={{ slug: book.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-2/3 overflow-hidden bg-muted">
        <img
          src={book.cover}
          alt={`Sampul buku ${book.title}`}
          loading="lazy"
          width={800}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {book.status === "sold_out" && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground/85 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-background">
            Stok habis
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <GenreBadge genre={book.genre} className="self-start" />
        <h3 className="text-base font-bold leading-snug group-hover:text-primary">{book.title}</h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <p className="mt-auto pt-2 text-sm font-semibold text-primary">{formatPrice(book.price)}</p>
      </div>
    </Link>
  );
}