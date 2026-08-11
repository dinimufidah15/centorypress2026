import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Instagram, Linkedin, ShoppingBag, Music2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navItems, site, waDefault } from "@/lib/site";

const socials = [
  { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: waDefault },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Instagram, label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
  { icon: Linkedin, label: "LinkedIn", value: site.linkedin.handle, href: site.linkedin.url },
  { icon: ShoppingBag, label: "Shopee", value: site.shopee.handle, href: site.shopee.url },
  { icon: Music2, label: "TikTok", value: site.tiktok.handle, href: site.tiktok.url },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="blob -bottom-32 -left-24 h-72 w-72" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.name} adalah penerbit buku dan e-book independen. Kami merawat gagasan tentang
            ekologi, feminisme, sosial-humaniora, serta teologi &amp; spiritual — dari naskah mentah
            sampai buku di tangan pembaca.
          </p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {site.address}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Navigasi</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Hubungi &amp; Ikuti</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {socials.map((s) => {
              const disabled = !s.href;
              const Inner = (
                <>
                  <s.icon className="size-4 shrink-0 text-primary transition-transform group-hover:scale-115" />
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="block truncate text-sm font-medium">{s.value}</span>
                  </span>
                </>
              );
              const base =
                "group flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5 transition-colors";
              return (
                <li key={s.label}>
                  {disabled ? (
                    <span className={`${base} opacity-60`}>{Inner}</span>
                  ) : (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${base} hover:border-primary`}
                    >
                      {Inner}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}