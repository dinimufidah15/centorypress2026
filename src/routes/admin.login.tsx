import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/Logo";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Login Admin — Centory Press" },
      { name: "description", content: "Halaman masuk untuk admin Centory Press." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Login Admin — Centory Press" },
      { property: "og:description", content: "Akses panel admin Centory Press." },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const [notice, setNotice] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden marble px-4 py-16">
      <div className="blob -left-20 top-0 h-72 w-72" aria-hidden />
      <div className="blob -right-24 bottom-0 h-72 w-72" aria-hidden />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Kembali ke situs
        </Link>
        <div className="mt-6 flex flex-col items-center text-center">
          <LogoMark className="h-14 w-14" />
          <h1 className="mt-4 text-2xl font-extrabold">Login Admin</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Panel pengelolaan konten Centory Press.
          </p>
        </div>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setNotice("Mode demo: autentikasi belum aktif, membuka panel admin…");
            navigate({ to: "/admin" });
          }}
        >
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="admin@centorypress.com"
              className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <Button type="submit" variant="brand" size="lg" className="w-full">
            <Lock /> Masuk
          </Button>
          {notice && (
            <p className="rounded-lg border border-border bg-surface p-3 text-xs leading-relaxed text-muted-foreground">
              {notice}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}