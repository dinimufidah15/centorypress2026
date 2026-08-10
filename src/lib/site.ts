export const site = {
  name: "CV Centory Press",
  shortName: "Centory Press",
  tagline: "Rumah bagi gagasan yang layak dibukukan",
  description:
    "Penerbit buku dan e-book independen dengan fokus pada ekologi, feminisme, sosial-humaniora, serta teologi & spiritual.",
  address:
    "Jl. Permata Pamulang 2, Blok G 10 No. 3, Kel. Bakti Jaya, Kec. Setu, Kota Tangerang Selatan",
  phoneDisplay: "+62 812-8271-1559",
  whatsappNumber: "6281282711559",
  email: "centorypress@gmail.com",
  instagram: { handle: "@Centory_press", url: "https://www.instagram.com/centory_press" },
  linkedin: { handle: "Centory Press", url: "https://www.linkedin.com/company/centory-press/" },
  shopee: { handle: "Segera hadir", url: "" },
  tiktok: { handle: "Segera hadir", url: "" },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waDefault = waLink(
  "Halo Centory Press, saya ingin bertanya/konsultasi mengenai penerbitan buku.",
);

export const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/katalog", label: "Katalog" },
  { to: "/paket-penerbitan", label: "Paket Penerbitan" },
  { to: "/kenapa-centory", label: "Kenapa Centory" },
  { to: "/artikel", label: "Artikel & Esai" },
  { to: "/tentang", label: "Tentang" },
  { to: "/syarat-ketentuan", label: "S&K" },
] as const;