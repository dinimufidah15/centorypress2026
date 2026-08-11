import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { GenreMarquee } from "@/components/Marquee";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { ArticleCard } from "@/components/ArticleCard";
import heroReading from "@/assets/hero-reading.jpg";
import { articles } from "@/data/articles";
import { advantages, milestones, processSteps } from "@/data/content";
import { site, waDefault } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CV Centory Press — Penerbit Buku & E-book Independen" },
      {
        name: "description",
        content:
          "Centory Press menerbitkan buku dan e-book bertema ekologi, feminisme, soshum & politik, serta teologi & spiritual. Konsultasikan naskah Anda hari ini.",
      },
      { property: "og:title", content: "CV Centory Press — Rumah bagi gagasan" },
      {
        property: "og:description",
        content:
          "Penerbit independen yang mendampingi penulis dari naskah mentah sampai buku beredar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <GenreMarquee />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-script text-2xl text-primary">Koleksi Terbaru</p>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Buku pilihan redaksi</h2>
          </div>
          <Link
            to="/katalog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Lihat semua katalog <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={120} className="mt-8">
          <FeaturedCarousel />
        </Reveal>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-surface px-4 py-16 sm:px-6">
        <div className="blob -right-24 top-0 h-80 w-80" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-script text-2xl text-primary">Kenapa Centory</p>
            <h2 className="mt-1 max-w-2xl text-2xl font-extrabold sm:text-3xl">
              Enam hal yang membuat penulis memilih kami
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon];
              return (
                <Reveal key={item.title} delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-brand">
                      {Icon ? <Icon className="size-5" /> : null}
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={heroReading}
              alt="Pembaca menikmati buku di ruang yang tenang"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-4/3 w-full rounded-3xl border border-border object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <p className="font-script text-2xl text-primary">Alurnya sederhana</p>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Dari naskah di laptop Anda, sampai buku di tangan pembaca
            </h2>
            <ol className="space-y-4">
              {processSteps.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="text-sm font-extrabold text-brand-gradient">{s.step}</span>
                  <span>
                    <span className="block text-base font-bold">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild variant="brand" size="lg">
                <Link to="/paket-penerbitan">Lihat paket penerbitan</Link>
              </Button>
              <Button asChild variant="brandOutline" size="lg">
                <Link to="/syarat-ketentuan">Baca syarat &amp; ketentuan</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border marble px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.label} delay={i * 90} className="text-center">
              <p className="text-3xl font-extrabold text-brand-gradient sm:text-4xl">{m.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-script text-2xl text-primary">Ruang Baca</p>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Artikel &amp; esai terbaru</h2>
          </div>
          <Link
            to="/artikel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Semua tulisan <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article, i) => (
            <Reveal key={article.slug} delay={i * 100}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-surface px-4 py-16 sm:px-6">
        <div className="blob -bottom-24 left-1/3 h-80 w-80" aria-hidden />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-primary">Mari mulai</p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
            Punya naskah yang layak dibaca lebih banyak orang?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ceritakan gagasan Anda kepada tim redaksi {site.shortName}. Konsultasi awal gratis, tanpa
            komitmen.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={waDefault} target="_blank" rel="noreferrer">
                <MessageCircle /> Konsultasi Naskah
              </a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <Link to="/tentang">Kenali kami</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative overflow-hidden marble">
      <div
        className="blob -left-24 -top-24 h-96 w-96"
        style={{ transform: `translate3d(0, ${offset * 0.22}px, 0)` }}
        aria-hidden
      />
      <div
        className="blob -right-32 top-40 h-80 w-80"
        style={{ transform: `translate3d(0, ${offset * -0.16}px, 0)` }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-6">
          <p className="font-script text-3xl text-primary">Rumah bagi gagasan</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Naskah Anda pantas menjadi buku yang{" "}
            <span className="text-brand-gradient">dibaca serius</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.name} adalah penerbit buku dan e-book independen dengan fokus pada ekologi,
            feminisme, sosial-humaniora, serta teologi &amp; spiritual. Kami mendampingi penulis dari
            pembacaan pertama sampai buku beredar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl">
              <Link to="/katalog">
                Lihat Katalog <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href={waDefault} target="_blank" rel="noreferrer">
                <MessageCircle /> Konsultasi via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div
          className="relative"
          style={{ transform: `translate3d(0, ${offset * -0.06}px, 0)` }}
        >
          <img
            src={heroReading}
            alt="Perempuan membaca buku di dekat jendela pada pagi yang tenang"
            width={1280}
            height={1600}
            className="aspect-4/5 w-full rounded-[2rem] border border-border object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-5 backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="font-script text-xl text-primary">Kutipan hari ini</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              “Buku bukan produk sekali pakai. Ia arsip cara berpikir sebuah generasi.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
