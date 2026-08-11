import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import heroReading from "@/assets/hero-reading.jpg";
import { genres } from "@/data/genres";
import { site, waDefault } from "@/lib/site";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang CV Centory Press — Penerbit Buku & E-book" },
      {
        name: "description",
        content:
          "Profil CV Centory Press: sejarah singkat, visi-misi, bidang usaha, dan alasan kami fokus pada empat isu utama.",
      },
      { property: "og:title", content: "Tentang CV Centory Press" },
      {
        property: "og:description",
        content: "Rumah bagi gagasan tentang ekologi, feminisme, soshum, dan spiritualitas.",
      },
    ],
  }),
  component: TentangPage,
});

function TentangPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border marble">
        <div className="blob -left-24 top-0 h-80 w-80" aria-hidden />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-20">
          <LogoMark className="h-28 w-28 animate-[var(--animate-float)] sm:h-36 sm:w-36" />
          <p className="mt-6 font-script text-2xl text-primary">Tentang kami</p>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Rumah bagi gagasan, bukan sekadar toko buku
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {site.name} adalah penerbit buku dan e-book independen yang bekerja dengan penulis untuk
            merawat gagasan dari naskah pertama sampai buku beredar.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="space-y-5">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Sejarah singkat</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Centory Press tumbuh dari kebiasaan sederhana: membaca bersama, lalu berdebat panjang
            soal apa yang layak dibukukan. Dari lingkaran diskusi kecil itu lahir keyakinan bahwa
            penerbitan bukan sekadar mencetak, melainkan menjaga agar sebuah gagasan sampai kepada
            pembaca yang tepat dalam bentuk yang layak.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Kini kami bekerja sebagai badan usaha resmi di Tangerang Selatan, mendampingi penulis
            perorangan maupun komunitas untuk menerbitkan buku cetak dan e-book.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-bold">Visi</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Menjadi penerbit independen yang dipercaya sebagai rumah gagasan kritis dan reflektif
                di Indonesia.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-bold">Misi</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                <li>· Mendampingi penulis dengan kerja editorial yang jujur.</li>
                <li>· Menerbitkan buku bermutu di empat fokus isu.</li>
                <li>· Membangun ekosistem pembaca melalui diskusi dan esai.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={heroReading}
            alt="Suasana membaca di ruang yang tenang"
            loading="lazy"
            width={1280}
            height={1600}
            className="h-full w-full rounded-2xl border border-border object-cover shadow-soft"
          />
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Mengapa empat isu ini?</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Empat isu ini saling bertaut: cara kita memperlakukan alam, tubuh, kuasa, dan yang ilahi.
            Fokus membuat kami bisa membaca naskah dengan sungguh-sungguh, bukan sekadar meloloskan.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {genres.map((g, i) => (
              <Reveal key={g.value} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ring-1 ${g.className}`}
                  >
                    {g.label}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {
                      {
                        ekologi:
                          "Tulisan tentang tanah, air, dan cara manusia hidup berdampingan dengan yang bukan manusia.",
                        feminisme:
                          "Naskah yang membaca relasi kuasa gender dari pengalaman sehari-hari sampai kebijakan.",
                        soshum:
                          "Kajian sosial-politik yang membumi: negara, warga, dan tawar-menawar di antaranya.",
                        teologi_spiritual:
                          "Refleksi iman dan spiritualitas yang terbuka, jujur, dan tidak menghakimi.",
                      }[g.value]
                    }
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Kontak & lokasi</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <MapPin className="size-5 text-primary" />
            <h3 className="mt-3 text-base font-bold">Alamat</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{site.address}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <MessageCircle className="size-5 text-primary" />
            <h3 className="mt-3 text-base font-bold">WhatsApp</h3>
            <a
              href={waDefault}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-primary"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Mail className="size-5 text-primary" />
            <h3 className="mt-3 text-base font-bold">Email</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm font-semibold text-primary"
            >
              {site.email}
            </a>
          </div>
        </div>
        <div className="mt-8">
          <Button asChild variant="brand" size="lg">
            <a href={waDefault} target="_blank" rel="noreferrer">
              <MessageCircle /> Hubungi tim redaksi
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}