import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { formatTerms, manuscriptTerms } from "@/data/content";
import { site, waDefault } from "@/lib/site";

export const Route = createFileRoute("/syarat-ketentuan")({
  head: () => ({
    meta: [
      { title: "Syarat & Ketentuan Naskah — Centory Press" },
      {
        name: "description",
        content:
          "Syarat & ketentuan naskah Centory Press: orisinalitas, kategori naskah, pengiriman softcopy, serta format dan teknis penulisan.",
      },
      { property: "og:title", content: "Syarat & Ketentuan Naskah — Centory Press" },
      {
        property: "og:description",
        content: "Ketentuan naskah dan format teknis untuk menerbitkan buku di Centory Press.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparan sejak awal"
        title="Syarat & Ketentuan Naskah Centory Press"
        description="Ketentuan berikut berlaku untuk seluruh naskah yang dikirimkan ke Centory Press."
        breadcrumb={[{ label: "Syarat & Ketentuan" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="text-xl font-extrabold">Syarat &amp; Ketentuan Naskah</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {manuscriptTerms.map((item, i) => (
              <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                {i === manuscriptTerms.length - 1 ? (
                  <>
                    Naskah yang sudah lengkap dapat dikirimkan melalui email berikut{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-primary underline underline-offset-4"
                    >
                      {site.email}
                    </a>{" "}
                    dengan subjek{" "}
                    <strong className="text-foreground">
                      JUDUL NASKAH_NAMA PENULIS_(KATEGORI NASKAH).
                    </strong>
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={90} className="mt-10">
          <h2 className="text-xl font-extrabold">Format &amp; Teknis</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {formatTerms.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-7">
          <h2 className="text-lg font-bold">Ada yang ingin ditanyakan?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Hubungi kami di {site.phoneDisplay} atau{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-primary underline underline-offset-4"
            >
              {site.email}
            </a>
            . Tim redaksi akan menjawab pada hari kerja.
          </p>
          <Button asChild variant="brand" size="lg" className="mt-5">
            <a href={waDefault} target="_blank" rel="noreferrer">
              Tanya via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
