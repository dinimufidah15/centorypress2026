import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { packages, processSteps } from "@/data/content";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/paket-penerbitan")({
  head: () => ({
    meta: [
      { title: "Paket Penerbitan Buku — Centory Press" },
      {
        name: "description",
        content:
          "Tiga paket penerbitan buku Centory Press: Reguler, Plus, dan Premium — lengkap dengan benefit, syarat, dan estimasi proses.",
      },
      { property: "og:title", content: "Paket Penerbitan Buku — Centory Press" },
      {
        property: "og:description",
        content: "Pilih paket penerbitan yang sesuai dengan naskah Anda.",
      },
    ],
  }),
  component: PaketPage,
});

function PaketPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terbitkan Bersama Kami"
        title="Paket Penerbitan"
        description="Tiga jalur untuk membawa naskah Anda menjadi buku. Semua paket termasuk pendampingan editorial dan legalitas terbit."
        breadcrumb={[{ label: "Paket Penerbitan" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 110} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
                  pkg.featured ? "border-primary shadow-brand" : "border-border",
                )}
              >
                {pkg.featured && (
                  <span className="mb-4 self-start rounded-full bg-brand-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground">
                    Paling dipilih
                  </span>
                )}
                <h2 className="text-xl font-extrabold">{pkg.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.summary}</p>
                <p className="mt-5 text-3xl font-extrabold text-brand-gradient">{pkg.priceDisplay}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pkg.featured ? "brand" : "brandOutline"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  <a
                    href={waLink(
                      `Halo Centory Press, saya ingin konsultasi mengenai ${pkg.name} untuk naskah saya.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle /> Konsultasi paket ini
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="font-script text-2xl text-primary">Perlu diketahui</p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Syarat &amp; ketentuan per paket</h2>
          <Accordion type="single" collapsible className="mt-6">
            {packages.map((pkg) => (
              <AccordionItem key={pkg.name} value={pkg.name}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {pkg.name}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {pkg.terms}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Alur kerja penerbitan</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="text-sm font-extrabold text-brand-gradient">{s.step}</span>
                <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}