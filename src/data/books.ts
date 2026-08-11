import coverEkologi from "@/assets/cover-ekologi.jpg";
import coverFeminisme from "@/assets/cover-feminisme.jpg";
import coverSoshum from "@/assets/cover-soshum.jpg";
import coverTeologi from "@/assets/cover-teologi.jpg";
import type { Genre } from "./genres";

export type Book = {
  slug: string;
  title: string;
  author: string;
  genre: Genre;
  synopsis: string;
  cover: string;
  price: number | null;
  status: "available" | "sold_out";
  pages: number;
  year: number;
  featured?: boolean;
};

export const covers: Record<Genre, string> = {
  ekologi: coverEkologi,
  feminisme: coverFeminisme,
  soshum: coverSoshum,
  teologi_spiritual: coverTeologi,
};

export const books: Book[] = [
  {
    slug: "akar-yang-tak-terlihat",
    title: "Akar yang Tak Terlihat",
    author: "Lila Wainardi",
    genre: "ekologi",
    synopsis:
      "Kumpulan esai tentang relasi manusia dan tanah: dari sawah yang menyusut, sungai yang berubah warna, hingga cara kita belajar kembali membaca musim. Ditulis dengan nada tenang, buku ini menolak alarmisme dan memilih ketekunan.",
    cover: coverEkologi,
    price: 89000,
    status: "available",
    pages: 236,
    year: 2025,
    featured: true,
  },
  {
    slug: "tubuh-yang-berbicara",
    title: "Tubuh yang Berbicara",
    author: "Meera Joshi",
    genre: "feminisme",
    synopsis:
      "Sepuluh esai personal-politis tentang tubuh, kerja, dan kebebasan. Penulis menelusuri pengalaman perempuan di ruang domestik dan ruang publik, tanpa meninggalkan ketajaman analisis.",
    cover: coverFeminisme,
    price: 95000,
    status: "available",
    pages: 208,
    year: 2025,
    featured: true,
  },
  {
    slug: "kerumunan-dan-sistem",
    title: "Kerumunan dan Sistem",
    author: "Arvind Narayan",
    genre: "soshum",
    synopsis:
      "Bagaimana sistem bekerja ketika kerumunan bersuara? Buku ini membaca politik keseharian: antrean, birokrasi, dan tawar-menawar kecil yang membentuk demokrasi kita.",
    cover: coverSoshum,
    price: 110000,
    status: "available",
    pages: 312,
    year: 2024,
    featured: true,
  },
  {
    slug: "menuju-cahaya",
    title: "Menuju Cahaya",
    author: "Matthew J. Elias",
    genre: "teologi_spiritual",
    synopsis:
      "Refleksi teologis tentang doa, keheningan, dan iman yang bertumbuh di tengah kota. Sebuah bacaan lambat untuk mereka yang sedang mencari.",
    cover: coverTeologi,
    price: 92000,
    status: "available",
    pages: 244,
    year: 2024,
    featured: true,
  },
  {
    slug: "sungai-yang-pulang",
    title: "Sungai yang Pulang",
    author: "Bagas Prawira",
    genre: "ekologi",
    synopsis:
      "Catatan perjalanan menyusuri daerah aliran sungai di Jawa: tentang warga yang merawat mata air, dan tentang apa yang hilang ketika hulu dijual.",
    cover: coverEkologi,
    price: 78000,
    status: "available",
    pages: 190,
    year: 2024,
  },
  {
    slug: "suara-suara-di-dapur",
    title: "Suara-Suara di Dapur",
    author: "Nadia Ratri",
    genre: "feminisme",
    synopsis:
      "Antologi cerita dan esai pendek dari sepuluh penulis perempuan tentang kerja perawatan yang jarang dihitung sebagai kerja.",
    cover: coverFeminisme,
    price: 85000,
    status: "sold_out",
    pages: 220,
    year: 2023,
  },
  {
    slug: "republik-antrean",
    title: "Republik Antrean",
    author: "Hendra Kusuma",
    genre: "soshum",
    synopsis:
      "Esai-esai satir namun serius tentang layanan publik, kelas menengah, dan cara negara menyapa warganya di loket.",
    cover: coverSoshum,
    price: null,
    status: "available",
    pages: 268,
    year: 2023,
  },
  {
    slug: "doa-yang-tidak-selesai",
    title: "Doa yang Tidak Selesai",
    author: "Sri Handayani",
    genre: "teologi_spiritual",
    synopsis:
      "Meditasi tentang kehilangan dan pengharapan, ditulis sebagai surat-surat pendek kepada seorang sahabat yang telah pergi.",
    cover: coverTeologi,
    price: 88000,
    status: "available",
    pages: 176,
    year: 2023,
  },
];

export function formatPrice(price: number | null) {
  if (price === null) return "Hubungi kami";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}