import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/data/articles";
import { genres, type Genre } from "@/data/genres";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/artikel/")({
  head: () => ({
    meta: [
      { title: "Artikel & Esai — Centory Press" },
      {
        name: "description",
        content:
          "Esai dan catatan redaksi Centory Press tentang ekologi, feminisme, sosial-humaniora, serta teologi & spiritual.",
      },
      { property: "og:title", content: "Artikel & Esai — Centory Press" },
      {
        property: "og:description",
        content: "Bacaan reflektif dari dapur redaksi Centory Press.",
      },
    ],
  }),
  component: ArtikelPage,
});

function ArtikelPage() {
  const [active, setActive] = useState<Genre | "semua">("semua");
  const filtered = useMemo(
    () => articles.filter((a) => active === "semua" || a.genre === active),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Ruang Baca"
        title="Artikel & Esai"
        description="Tulisan-tulisan pendek yang menemani buku-buku kami: catatan redaksi, refleksi isu, dan cerita dari proses menerbitkan."
        breadcrumb={[{ label: "Artikel & Esai" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {[{ value: "semua", label: "Semua" }, ...genres].map((g) => (
            <button
              key={g.value}
              type="button"
              onClick={() => setActive(g.value as Genre | "semua")}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
                active === g.value
                  ? "border-transparent bg-brand-gradient text-primary-foreground shadow-brand"
                  : "border-border bg-surface text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <Reveal key={article.slug} delay={i * 90}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}