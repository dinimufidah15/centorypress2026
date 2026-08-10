import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { BookCard } from "@/components/BookCard";
import { Reveal } from "@/components/Reveal";
import { books } from "@/data/books";
import { genres, type Genre } from "@/data/genres";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/katalog/")({
  head: () => ({
    meta: [
      { title: "Katalog Buku — Centory Press" },
      {
        name: "description",
        content:
          "Jelajahi katalog buku dan e-book Centory Press: ekologi, feminisme, soshum & politik, serta teologi & spiritual.",
      },
      { property: "og:title", content: "Katalog Buku — Centory Press" },
      {
        property: "og:description",
        content: "Buku-buku terbitan Centory Press di empat fokus isu utama.",
      },
    ],
  }),
  component: KatalogPage,
});

function KatalogPage() {
  const [active, setActive] = useState<Genre | "semua">("semua");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((book) => {
      const byGenre = active === "semua" || book.genre === active;
      const byQuery =
        !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q);
      return byGenre && byQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHeader
        eyebrow="Koleksi Kami"
        title="Katalog Buku & E-book"
        description="Setiap judul di sini lahir dari pembacaan yang tekun. Pilih berdasarkan isu yang Anda geluti."
        breadcrumb={[{ label: "Katalog" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="Semua"
              activeChip={active === "semua"}
              onClick={() => setActive("semua")}
            />
            {genres.map((g) => (
              <FilterChip
                key={g.value}
                label={g.label}
                activeChip={active === g.value}
                onClick={() => setActive(g.value)}
              />
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul atau penulis…"
            className="h-10 w-full rounded-lg border border-input bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary lg:w-72"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-14 text-center text-sm text-muted-foreground">
            Belum ada buku yang cocok dengan pencarian Anda.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((book, i) => (
              <Reveal key={book.slug} delay={i * 80}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FilterChip({
  label,
  activeChip,
  onClick,
}: {
  label: string;
  activeChip: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
        activeChip
          ? "border-transparent bg-brand-gradient text-primary-foreground shadow-brand"
          : "border-border bg-surface text-muted-foreground hover:border-primary hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}