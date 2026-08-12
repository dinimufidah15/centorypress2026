import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border marble bg-genre-wash">
      <div className="blob -right-24 -top-28 h-72 w-72" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Beranda
          </Link>
          {breadcrumb.map((item) => (
            <span key={item.label} className="flex items-center gap-1">
              <ChevronRight className="size-3" />
              {item.to ? (
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="font-script text-2xl text-primary">{eyebrow}</p>}
        <h1 className="mt-1 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}