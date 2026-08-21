import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { packages, publishingFlow } from "@/data/content";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/paket-penerbitan")({
  head: () => ({
    meta: [
      { title: "Pilihan Paket Penerbitan — Centory Press" },
      {
        name: "description",
        content:
          "Tiga pilihan paket penerbitan Centory Press: Paket Tunas, Paket Tumbuh, dan Paket Rimbun — fleksibel, transparan, dengan pendampingan di setiap tahap.",
      },
      {
        property: "og:title",
        content: "Pilihan Paket Penerbitan untuk Setiap Gagasan — Centory Press",
      },
      {
        property: "og:description",
        content: "Paket Tunas, Tumbuh, dan Rimbun dengan proses transparan dan pendampingan penuh.",
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
        title="Pilihan Paket Penerbitan untuk Setiap Gagasan"
        description="Apa pun tahap dan kebutuhan karyamu, Centory Press menyediakan tiga pilihan penerbitan yang fleksibel dengan proses yang transparan dan pendampingan di setiap tahap."
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
                <h2 className="text-xl font-extrabold uppercase">{pkg.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.summary}</p>
                <p className="mt-5 text-lg font-bold text-brand-gradient">{pkg.priceDisplay}</p>
                <ol className="mt-6 space-y-3">
                  {pkg.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ol>
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

      <section className="border-t border-border bg-surface px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-script text-2xl text-primary">Tahap demi tahap</p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Alur Kerja Penerbitan</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publishingFlow.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <span className="text-sm font-extrabold text-brand-gradient">{s.step}</span>
                  <h3 className="mt-2 text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
