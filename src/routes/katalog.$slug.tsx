import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GenreBadge } from "@/components/GenreBadge";
import { BookCard } from "@/components/BookCard";
import { books, formatPrice } from "@/data/books";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/katalog/$slug")({
  loader: ({ params }) => {
    const book = books.find((b) => b.slug === params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Buku tidak ditemukan — Centory Press" }, { name: "robots", content: "noindex" }] };
    }
    const { book } = loaderData;
    return {
      meta: [
        { title: `${book.title} — Centory Press` },
        { name: "description", content: book.synopsis.slice(0, 155) },
        { property: "og:title", content: `${book.title} — ${book.author}` },
        { property: "og:description", content: book.synopsis.slice(0, 155) },
      ],
    };
  },
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const related = books.filter((b) => b.genre === book.genre && b.slug !== book.slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border marble">
        <div className="blob -left-20 -top-24 h-72 w-72" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-8 lg:py-16">
          <div>
            <Link
              to="/katalog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Kembali ke katalog
            </Link>
            <img
              src={book.cover}
              alt={`Sampul buku ${book.title}`}
              width={800}
              height={1200}
              className="w-full rounded-2xl border border-border object-cover shadow-soft"
            />
          </div>

          <div className="space-y-5">
            <GenreBadge genre={book.genre} />
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>
            <p className="text-lg text-muted-foreground">oleh {book.author}</p>

            <dl className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-5 sm:grid-cols-4">
              <Meta label="Harga" value={formatPrice(book.price)} />
              <Meta label="Halaman" value={`${book.pages}`} />
              <Meta label="Tahun" value={`${book.year}`} />
              <Meta label="Status" value={book.status === "available" ? "Tersedia" : "Stok habis"} />
            </dl>

            <div>
              <h2 className="mb-2 text-lg font-bold">Sinopsis</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{book.synopsis}</p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Tersedia versi cetak dan e-book", "Pengiriman dari Tangerang Selatan", "Pemesanan grosir & komunitas dilayani"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> {item}
                  </li>
                ),
              )}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="brand" size="lg">
                <a
                  href={waLink(
                    `Halo Centory Press, saya ingin membeli buku "${book.title}" karya ${book.author}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> Beli via WhatsApp
                </a>
              </Button>
              <Button asChild variant="brandOutline" size="lg">
                <Link to="/paket-penerbitan">Lihat paket penerbitan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Buku lain di isu serupa</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {related.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold">{value}</dd>
    </div>
  );
}