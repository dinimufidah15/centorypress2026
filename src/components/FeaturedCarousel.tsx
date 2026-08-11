import { GenreBadge } from "./GenreBadge";
import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { books, formatPrice } from "@/data/books";

export function FeaturedCarousel() {
  const featured = books.filter((b) => b.featured);

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {featured.map((book) => (
          <CarouselItem key={book.slug} className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4">
            <Link
              to="/katalog/$slug"
              params={{ slug: book.slug }}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-2/3 overflow-hidden bg-muted">
                <img
                  src={book.cover}
                  alt={`Sampul buku ${book.title}`}
                  loading="lazy"
                  width={800}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-2 p-4">
                <GenreBadge genre={book.genre} />
                <h3 className="text-base font-bold leading-snug group-hover:text-primary">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <p className="text-sm font-semibold text-primary">{formatPrice(book.price)}</p>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}