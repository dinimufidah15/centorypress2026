import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { advantages, milestones } from "@/data/content";
import { waDefault } from "@/lib/site";

export const Route = createFileRoute("/kenapa-centory")({
  head: () => ({
    meta: [
      { title: "Kenapa Centory Press — 6 Keunggulan Kami" },
      {
        name: "description",
        content:
          "Enam alasan penulis memilih Centory Press: fokus isu yang jelas, editor yang membaca serius, desain orisinal, hingga pendampingan sampai terbit.",
      },
      { property: "og:title", content: "Kenapa Centory Press" },
      {
        property: "og:description",
        content: "Enam keunggulan menerbitkan buku bersama Centory Press.",
      },
    ],
  }),
  component: KenapaPage,
});

function KenapaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kenapa Centory"
        title="Enam alasan menerbitkan bersama kami"
        description="Kami bukan percetakan yang menerima apa saja. Kami penerbit yang memilih, membaca, dan merawat gagasan."
        breadcrumb={[{ label: "Kenapa Centory" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon];
            return (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-brand">
                    {Icon ? <Icon className="size-5" /> : null}
                  </span>
                  <h2 className="mt-5 text-lg font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-gradient sm:text-4xl">{m.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 text-center sm:px-6">
        <div className="blob -top-20 left-1/2 h-72 w-72 -translate-x-1/2" aria-hidden />
        <p className="relative font-script text-2xl text-primary">Naskah Anda menunggu</p>
        <h2 className="relative mt-1 text-2xl font-extrabold sm:text-3xl">
          Ceritakan gagasan Anda pada kami
        </h2>
        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="lg">
            <a href={waDefault} target="_blank" rel="noreferrer">
              Konsultasi via WhatsApp
            </a>
          </Button>
          <Button asChild variant="brandOutline" size="lg">
            <Link to="/paket-penerbitan">Lihat paket penerbitan</Link>
          </Button>
        </div>
      </section>
    </>
  );
}