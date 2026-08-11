import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { termsSections } from "@/data/content";
import { site, waDefault } from "@/lib/site";

export const Route = createFileRoute("/syarat-ketentuan")({
  head: () => ({
    meta: [
      { title: "Syarat & Ketentuan Penerbitan — Centory Press" },
      {
        name: "description",
        content:
          "Syarat dan ketentuan menerbitkan buku di Centory Press: pengiriman naskah, seleksi, hak cipta, jadwal produksi, pembayaran, dan royalti.",
      },
      { property: "og:title", content: "Syarat & Ketentuan Penerbitan — Centory Press" },
      {
        property: "og:description",
        content: "Ketentuan lengkap proses penerbitan buku di Centory Press.",
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
        title="Syarat & Ketentuan Menerbitkan Buku"
        description="Ketentuan berikut berlaku untuk seluruh naskah yang diterbitkan bersama Centory Press."
        breadcrumb={[{ label: "Syarat & Ketentuan" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-10">
          {termsSections.map((section, i) => (
            <Reveal key={section.title} delay={i * 70}>
              <h2 className="text-xl font-extrabold">{section.title}</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                {section.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-7">
          <h2 className="text-lg font-bold">Ada yang ingin ditanyakan?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Hubungi kami di {site.phoneDisplay} atau {site.email}. Tim redaksi akan menjawab pada
            hari kerja.
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