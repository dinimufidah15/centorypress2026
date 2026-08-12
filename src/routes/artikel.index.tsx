import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ThumbsDown, ThumbsUp } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { GenreBadge } from "@/components/GenreBadge";
import { Reveal } from "@/components/Reveal";
import { articles as seedArticles, formatDate, type Article } from "@/data/articles";
import { genres, type Genre } from "@/data/genres";
import { useAdminList } from "@/lib/adminStore";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/artikel/")({
  head: () => ({
    meta: [
      { title: "Artikel & Esai — Centory Press" },
      {
        name: "description",
        content:
          "Kanal bacaan Centory Press: esai ekologi, feminisme, sosial-humaniora, serta teologi & spiritual dalam tata letak umpan berita.",
      },
      { property: "og:title", content: "Artikel & Esai — Centory Press" },
      {
        property: "og:description",
        content: "Umpan bacaan reflektif dari dapur redaksi Centory Press.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtikelPage,
});

function Reactions() {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1">
        <ThumbsUp className="size-3.5" /> {Math.floor(Math.random() * 20) + 1}
      </span>
      <ThumbsDown className="size-3.5" />
    </div>
  );
}

function ArtikelPage() {
  const { items } = useAdminList<Article>("articles");
  const list = items.length ? items : seedArticles;
  const [active, setActive] = useState<Genre | "semua">("semua");

  const filtered = useMemo(
    () => list.filter((a) => active === "semua" || a.genre === active),
    [list, active],
  );

  const lead = filtered[0];
  const side = filtered[1];
  const top = filtered.slice(2, 5);
  const rest = filtered.slice(1);

  return (
    <div className="bg-genre-wash">
      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">
        {/* Tab bar ala umpan berita */}
        <div className="mb-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card px-3 py-3 shadow-soft">
          <span className="mr-2 font-script text-2xl text-primary">Temukan</span>
          {[{ value: "semua", label: "Semua" }, ...genres].map((g) => (
            <button
              key={g.value}
              type="button"
              onClick={() => setActive(g.value as Genre | "semua")}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
                active === g.value
                  ? "bg-brand-gradient text-primary-foreground shadow-brand"
                  : "text-muted-foreground hover:bg-accent hover:text-primary",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Baris utama: hero + berita teratas + kartu samping */}
        <div className="grid gap-4 lg:grid-cols-12">
          {lead && (
            <Reveal className="lg:col-span-6">
              <Link
                to="/artikel/$slug"
                params={{ slug: lead.slug }}
                className="group relative block h-full min-h-[300px] overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={lead.cover}
                  alt={`Sampul artikel ${lead.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />
                <div className="relative flex h-full flex-col justify-end gap-3 p-5">
                  <div className="flex items-center gap-2">
                    <GenreBadge genre={lead.genre} className="bg-white/15 text-white ring-white/30" />
                    <span className="text-xs text-white/80">{formatDate(lead.publishedAt)}</span>
                  </div>
                  <h2 className="max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    {lead.title}
                  </h2>
                  <p className="max-w-xl text-sm text-white/80">{lead.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          )}

          <Reveal className="lg:col-span-3" delay={80}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-soft">
              <div className="mb-3 flex items-center gap-2">
                <Flame className="size-4 text-teologi" />
                <h3 className="text-sm font-bold">Bacaan teratas</h3>
              </div>
              <ul className="flex flex-1 flex-col divide-y divide-border">
                {top.map((a) => (
                  <li key={a.slug} className="py-3 first:pt-0">
                    <Link to="/artikel/$slug" params={{ slug: a.slug }} className="group block">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="rounded bg-brand-gradient px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-primary-foreground">
                          Terkini
                        </span>
                        <span className="truncate text-xs text-muted-foreground">{a.author}</span>
                      </div>
                      <p className="text-sm font-semibold leading-snug group-hover:text-primary">
                        {a.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {side && (
            <Reveal className="lg:col-span-3" delay={140}>
              <Link
                to="/artikel/$slug"
                params={{ slug: side.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={side.cover}
                    alt={`Sampul artikel ${side.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="text-xs font-semibold text-primary">{side.author}</span>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-primary">
                    {side.title}
                  </h3>
                  <div className="mt-auto pt-2">
                    <Reactions />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}
        </div>

        {/* Umpan lanjutan */}
        <h2 className="mt-10 mb-4 text-xl font-bold">Umpan bacaan</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
