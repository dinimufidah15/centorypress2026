import coverEkologi from "@/assets/cover-ekologi.jpg";
import coverFeminisme from "@/assets/cover-feminisme.jpg";
import coverSoshum from "@/assets/cover-soshum.jpg";
import coverTeologi from "@/assets/cover-teologi.jpg";
import type { Genre } from "./genres";

export type Article = {
  slug: string;
  title: string;
  genre: Genre;
  excerpt: string;
  author: string;
  publishedAt: string;
  cover: string;
  paragraphs: string[];
};

const lorem = (topic: string) => [
  `Tulisan ini berangkat dari satu pertanyaan sederhana: apa yang sebenarnya kita bicarakan ketika kita membicarakan ${topic}? Pertanyaan itu terdengar mudah, tetapi jawabannya menuntut kesabaran — dan kesediaan untuk mendengar hal-hal yang tidak nyaman.`,
  "Di ruang penerbitan, kami sering menemukan naskah yang berangkat dari kemarahan. Kemarahan itu penting, tetapi ia perlu diolah menjadi argumen. Editor bertugas menjaga agar api tidak membakar rumahnya sendiri.",
  "Karena itu setiap naskah yang masuk ke Centory Press melewati pembacaan berlapis: pembacaan isu, pembacaan struktur, lalu pembacaan bahasa. Tiga lapis ini yang membuat sebuah gagasan bertahan lebih lama dari tren perbincangan di media sosial.",
  "Kami percaya buku bukan produk sekali pakai. Ia arsip. Sepuluh tahun dari sekarang, seseorang akan membuka halaman ini dan menemukan cara berpikir sebuah generasi. Itu alasan kami bekerja dengan lambat dan teliti.",
];

export const articles: Article[] = [
  {
    slug: "membaca-musim-yang-berubah",
    title: "Membaca Musim yang Berubah",
    genre: "ekologi",
    excerpt:
      "Krisis iklim bukan hanya soal angka emisi, tapi soal hilangnya kemampuan kita membaca tanda-tanda alam di sekitar rumah.",
    author: "Redaksi Centory",
    publishedAt: "2026-05-18",
    cover: coverEkologi,
    paragraphs: lorem("krisis ekologi"),
  },
  {
    slug: "kerja-perawatan-yang-tak-dihitung",
    title: "Kerja Perawatan yang Tak Dihitung",
    genre: "feminisme",
    excerpt:
      "Ekonomi kita berdiri di atas jutaan jam kerja yang tidak pernah masuk laporan keuangan siapa pun.",
    author: "Nadia Ratri",
    publishedAt: "2026-04-02",
    cover: coverFeminisme,
    paragraphs: lorem("kerja perawatan"),
  },
  {
    slug: "politik-di-loket-pelayanan",
    title: "Politik di Loket Pelayanan",
    genre: "soshum",
    excerpt:
      "Negara paling sering menyapa warganya bukan lewat pidato, melainkan lewat antrean dan formulir.",
    author: "Hendra Kusuma",
    publishedAt: "2026-03-11",
    cover: coverSoshum,
    paragraphs: lorem("relasi negara dan warga"),
  },
  {
    slug: "keheningan-sebagai-disiplin",
    title: "Keheningan sebagai Disiplin",
    genre: "teologi_spiritual",
    excerpt:
      "Di kota yang penuh notifikasi, memilih diam menjadi latihan spiritual yang paling sulit dan paling perlu.",
    author: "Sri Handayani",
    publishedAt: "2026-02-08",
    cover: coverTeologi,
    paragraphs: lorem("spiritualitas urban"),
  },
  {
    slug: "menerbitkan-gagasan-bukan-sekadar-buku",
    title: "Menerbitkan Gagasan, Bukan Sekadar Buku",
    genre: "soshum",
    excerpt:
      "Catatan dapur redaksi: bagaimana kami memilih naskah, dan mengapa kami menolak beberapa yang bagus.",
    author: "Redaksi Centory",
    publishedAt: "2026-01-20",
    cover: coverSoshum,
    paragraphs: lorem("kerja editorial"),
  },
  {
    slug: "hutan-di-halaman-belakang",
    title: "Hutan di Halaman Belakang",
    genre: "ekologi",
    excerpt:
      "Tentang kebun kecil, benih lokal, dan kemungkinan merawat keanekaragaman dari ruang paling dekat.",
    author: "Bagas Prawira",
    publishedAt: "2025-12-05",
    cover: coverEkologi,
    paragraphs: lorem("keanekaragaman hayati"),
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}