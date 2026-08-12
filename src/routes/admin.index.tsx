import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ImagePlus, LogOut, Newspaper, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/Logo";
import { GenreBadge } from "@/components/GenreBadge";
import { covers, type Book } from "@/data/books";
import { type Article } from "@/data/articles";
import { genres, type Genre } from "@/data/genres";
import { slugify, useAdminList } from "@/lib/adminStore";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Panel Admin — Centory Press" },
      { name: "description", content: "Kelola katalog buku dan artikel Centory Press." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Panel Admin — Centory Press" },
      { property: "og:description", content: "Pengelolaan konten Centory Press." },
    ],
  }),
  component: AdminPanel,
});

function CoverUpload({
  value,
  onChange,
  ratio,
}: {
  value: string;
  onChange: (v: string) => void;
  ratio: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold">Gambar sampul</span>
      <div className="flex items-start gap-4">
        <div className={cn("w-28 shrink-0 overflow-hidden rounded-lg border border-border bg-muted", ratio)}>
          {value ? (
            <img src={value} alt="Pratinjau sampul" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              <ImagePlus className="size-5" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => onChange(String(reader.result));
              reader.readAsDataURL(file);
            }}
          />
          <Button type="button" variant="brandOutline" onClick={() => inputRef.current?.click()}>
            <ImagePlus /> Unggah gambar
          </Button>
          <p className="max-w-xs text-xs text-muted-foreground">
            JPG/PNG, sisi terpanjang ideal 1200px. Gambar disimpan lokal di peramban selama backend
            belum aktif.
          </p>
        </div>
      </div>
    </div>
  );
}

const field =
  "mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function BooksPanel() {
  const { items, upsert, remove, reset } = useAdminList<Book>("books");
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "ekologi" as Genre,
    synopsis: "",
    price: "",
    pages: "",
    year: String(new Date().getFullYear()),
    cover: "",
  });

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
      <form
        className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          upsert({
            slug: slugify(form.title),
            title: form.title,
            author: form.author,
            genre: form.genre,
            synopsis: form.synopsis,
            cover: form.cover || covers[form.genre],
            price: form.price ? Number(form.price) : null,
            status: "available",
            pages: Number(form.pages) || 0,
            year: Number(form.year) || new Date().getFullYear(),
          });
          setForm({ ...form, title: "", author: "", synopsis: "", price: "", pages: "", cover: "" });
        }}
      >
        <h2 className="text-lg font-bold">Tambah / perbarui buku</h2>
        <label className="block text-sm font-semibold">
          Judul buku
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={field}
            placeholder="Akar yang Tak Terlihat"
          />
        </label>
        <label className="block text-sm font-semibold">
          Penulis
          <input
            required
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className={field}
            placeholder="Nama penulis"
          />
        </label>
        <label className="block text-sm font-semibold">
          Genre
          <select
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value as Genre })}
            className={field}
          >
            {genres.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-3 gap-3">
          <label className="block text-sm font-semibold">
            Harga
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className={field}
              placeholder="89000"
            />
          </label>
          <label className="block text-sm font-semibold">
            Halaman
            <input
              type="number"
              value={form.pages}
              onChange={(e) => setForm({ ...form, pages: e.target.value })}
              className={field}
              placeholder="236"
            />
          </label>
          <label className="block text-sm font-semibold">
            Tahun
            <input
              type="number"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              className={field}
            />
          </label>
        </div>
        <label className="block text-sm font-semibold">
          Sinopsis
          <textarea
            required
            rows={4}
            value={form.synopsis}
            onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-input bg-background p-3.5 text-sm outline-none transition-colors focus:border-primary"
            placeholder="Ringkasan isi buku..."
          />
        </label>
        <CoverUpload
          value={form.cover}
          ratio="aspect-2/3"
          onChange={(v) => setForm({ ...form, cover: v })}
        />
        <Button type="submit" variant="brand" size="lg" className="w-full">
          <Plus /> Simpan buku
        </Button>
      </form>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Katalog ({items.length})</h2>
          <Button type="button" variant="ghost" onClick={reset}>
            <RotateCcw /> Kembalikan awal
          </Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((b) => (
            <li
              key={b.slug}
              className="flex gap-3 rounded-xl border border-border bg-card p-3 shadow-soft"
            >
              <img
                src={b.cover}
                alt={`Sampul ${b.title}`}
                className="h-24 w-16 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <GenreBadge genre={b.genre} />
                <p className="mt-1.5 truncate font-bold">{b.title}</p>
                <p className="truncate text-sm text-muted-foreground">{b.author}</p>
              </div>
              <button
                type="button"
                aria-label={`Hapus ${b.title}`}
                onClick={() => remove(b.slug)}
                className="self-start rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ArticlesPanel() {
  const { items, upsert, remove, reset } = useAdminList<Article>("articles");
  const [form, setForm] = useState({
    title: "",
    author: "Redaksi Centory",
    genre: "soshum" as Genre,
    excerpt: "",
    body: "",
    cover: "",
  });

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
      <form
        className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          upsert({
            slug: slugify(form.title),
            title: form.title,
            genre: form.genre,
            excerpt: form.excerpt,
            author: form.author,
            publishedAt: new Date().toISOString().slice(0, 10),
            cover: form.cover || covers[form.genre],
            paragraphs: form.body.split(/\n{2,}/).filter(Boolean),
          });
          setForm({ ...form, title: "", excerpt: "", body: "", cover: "" });
        }}
      >
        <h2 className="text-lg font-bold">Tambah / perbarui artikel</h2>
        <label className="block text-sm font-semibold">
          Judul
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={field}
            placeholder="Membaca Musim yang Berubah"
          />
        </label>
        <label className="block text-sm font-semibold">
          Penulis
          <input
            required
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold">
          Genre
          <select
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value as Genre })}
            className={field}
          >
            {genres.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Kutipan singkat
          <textarea
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-input bg-background p-3.5 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block text-sm font-semibold">
          Isi artikel
          <textarea
            required
            rows={7}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-input bg-background p-3.5 text-sm outline-none focus:border-primary"
            placeholder="Pisahkan paragraf dengan satu baris kosong."
          />
        </label>
        <CoverUpload
          value={form.cover}
          ratio="aspect-16/10"
          onChange={(v) => setForm({ ...form, cover: v })}
        />
        <Button type="submit" variant="brand" size="lg" className="w-full">
          <Plus /> Simpan artikel
        </Button>
      </form>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Artikel ({items.length})</h2>
          <Button type="button" variant="ghost" onClick={reset}>
            <RotateCcw /> Kembalikan awal
          </Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((a) => (
            <li
              key={a.slug}
              className="flex gap-3 rounded-xl border border-border bg-card p-3 shadow-soft"
            >
              <img
                src={a.cover}
                alt={`Sampul ${a.title}`}
                className="h-20 w-28 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <GenreBadge genre={a.genre} />
                <p className="mt-1.5 line-clamp-2 font-bold leading-snug">{a.title}</p>
                <p className="truncate text-sm text-muted-foreground">{a.author}</p>
              </div>
              <button
                type="button"
                aria-label={`Hapus ${a.title}`}
                onClick={() => remove(a.slug)}
                className="self-start rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AdminPanel() {
  const [tab, setTab] = useState<"buku" | "artikel">("buku");

  return (
    <main className="min-h-screen bg-genre-wash pb-16">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <LogoMark className="h-10 w-10" />
          <div className="mr-auto">
            <h1 className="text-lg font-extrabold leading-tight">Panel Admin</h1>
            <p className="text-xs text-muted-foreground">Kelola katalog buku & artikel</p>
          </div>
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-primary">
            Lihat situs
          </Link>
          <Link
            to="/admin/login"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-destructive"
          >
            <LogOut className="size-4" /> Keluar
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex rounded-full border border-border bg-card p-1 shadow-soft">
          {[
            { key: "buku" as const, label: "Katalog Buku", icon: BookOpen },
            { key: "artikel" as const, label: "Artikel & Esai", icon: Newspaper },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                tab === key
                  ? "bg-brand-gradient text-primary-foreground shadow-brand"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </div>

        <p className="mb-6 rounded-xl border border-border bg-surface p-3 text-xs leading-relaxed text-muted-foreground">
          Mode demo front end: seluruh perubahan (termasuk gambar sampul) tersimpan di peramban Anda
          dan langsung terlihat pada halaman katalog serta artikel.
        </p>

        {tab === "buku" ? <BooksPanel /> : <ArticlesPanel />}
      </div>
    </main>
  );
}
