import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GenreBadge } from "@/components/GenreBadge";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, formatDate } from "@/data/articles";

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artikel tidak ditemukan — Centory Press" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Centory Press` },
        { name: "description", content: article.excerpt.slice(0, 155) },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <div className="relative h-64 w-full overflow-hidden border-b border-border sm:h-80 lg:h-96">
        <img
          src={article.cover}
          alt={`Sampul artikel ${article.title}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      </div>

      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <div className="-mt-16 relative space-y-4">
          <Link
            to="/artikel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Semua artikel
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <GenreBadge genre={article.genre} />
            <span className="text-xs text-muted-foreground">
              {formatDate(article.publishedAt)} · {article.author}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{article.title}</h1>
          <p className="font-script text-2xl text-primary">{article.excerpt}</p>
        </div>

        <div className="mt-8 space-y-5 border-t border-border pt-8">
          {article.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-8 text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-border bg-surface px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold">Bacaan lain</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}