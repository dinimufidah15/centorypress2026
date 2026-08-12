import { Link } from "@tanstack/react-router";
import { GenreBadge } from "./GenreBadge";
import { formatDate, type Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/artikel/$slug"
      params={{ slug: article.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
    >
      <div className="aspect-16/9 overflow-hidden bg-muted">
        <img
          src={article.cover}
          alt={`Sampul artikel ${article.title}`}
          loading="lazy"
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <GenreBadge genre={article.genre} />
          <span className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="text-lg font-bold leading-snug group-hover:text-primary">{article.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-primary">Baca selengkapnya →</span>
      </div>
    </Link>
  );
}