export const advantages = [
  {
    icon: "Compass",
    title: "Positioning isu yang jelas",
    description:
      "Kami tidak menerbitkan apa saja. Empat fokus kami — ekologi, feminisme, soshum, teologi & spiritual — membuat buku Anda berada di rak yang tepat, di hadapan pembaca yang benar-benar mencarinya.",
  },
  {
    icon: "PenLine",
    title: "Editor yang membaca serius",
    description:
      "Setiap naskah melewati pembacaan isu, struktur, dan bahasa. Anda mendapat catatan editorial, bukan sekadar koreksi ejaan.",
  },
  {
    icon: "Palette",
    title: "Desain sampul orisinal",
    description:
      "Sampul dirancang dari isi buku, bukan dari template. Tata letak isi dibuat nyaman dibaca dari halaman pertama sampai akhir.",
  },
  {
    icon: "BadgeCheck",
    title: "Legalitas & ISBN diurus",
    description:
      "Pengurusan ISBN/QRCBN, hak cipta, dan barcode kami tangani sehingga Anda bisa fokus pada tulisan.",
  },
  {
    icon: "Megaphone",
    title: "Distribusi & promosi terarah",
    description:
      "Buku dipasarkan lewat kanal kami, komunitas pembaca isu, marketplace, serta program bedah buku dan diskusi.",
  },
  {
    icon: "HeartHandshake",
    title: "Pendampingan sampai terbit",
    description:
      "Satu penanggung jawab mendampingi Anda dari naskah mentah sampai buku fisik di tangan, dengan jadwal yang transparan.",
  },
] as const;

export const packages = [
  {
    name: "Paket Reguler",
    priceDisplay: "Rp 2.500.000",
    summary: "Untuk penulis pertama yang ingin naskahnya terbit rapi dan legal.",
    benefits: [
      "Editing dasar (ejaan, tata bahasa, konsistensi)",
      "Desain sampul (2 alternatif, 1 revisi)",
      "Layout isi standar + ISBN/QRCBN",
      "5 eksemplar bukti cetak",
      "E-book PDF siap edar",
      "Terbit di katalog Centory Press",
    ],
    terms:
      "Naskah minimal 60 halaman A5. Estimasi proses 30-45 hari kerja setelah naskah final. Pembayaran 50% di muka, 50% sebelum cetak.",
    featured: false,
  },
  {
    name: "Paket Plus",
    priceDisplay: "Rp 4.750.000",
    summary: "Pilihan terpopuler: naskah digarap lebih dalam plus dorongan promosi.",
    benefits: [
      "Semua benefit Paket Reguler",
      "Editing substantif + catatan editorial tertulis",
      "Desain sampul kustom (3 alternatif, 2 revisi)",
      "15 eksemplar cetak",
      "Kit promosi digital (poster, caption, kutipan)",
      "Publikasi profil penulis di halaman Artikel & Esai",
      "Distribusi ke marketplace & reseller mitra",
    ],
    terms:
      "Naskah minimal 80 halaman A5. Estimasi proses 45-60 hari kerja. Termasuk satu sesi konsultasi editorial daring 60 menit.",
    featured: true,
  },
  {
    name: "Paket Premium",
    priceDisplay: "Hubungi kami",
    summary: "Untuk lembaga, komunitas, atau naskah riset yang butuh penanganan khusus.",
    benefits: [
      "Semua benefit Paket Plus",
      "Pendampingan penulisan & restrukturisasi naskah",
      "Proofread akhir oleh editor kedua",
      "50 eksemplar cetak + kualitas kertas pilihan",
      "Peluncuran buku (daring atau bedah buku terbatas)",
      "Strategi distribusi khusus & kerja sama institusi",
    ],
    terms:
      "Lingkup dan biaya disesuaikan setelah asesmen naskah. Cocok untuk buku riset, antologi komunitas, dan penerbitan institusional.",
    featured: false,
  },
] as const;

export const termsSections = [
  {
    title: "1. Pengiriman Naskah",
    items: [
      "Naskah dikirim dalam format .doc/.docx atau Google Docs melalui WhatsApp atau email resmi Centory Press.",
      "Sertakan judul, sinopsis maksimal 300 kata, profil singkat penulis, dan target pembaca.",
      "Naskah harus karya asli penulis, belum pernah diterbitkan penerbit lain, dan bebas dari plagiarisme.",
      "Genre yang kami prioritaskan: ekologi, feminisme, sosial-humaniora (politik), serta teologi & spiritual.",
    ],
  },
  {
    title: "2. Proses Seleksi & Penilaian",
    items: [
      "Redaksi membaca naskah dalam 7-14 hari kerja dan memberi keputusan tertulis.",
      "Keputusan dapat berupa diterima, diterima dengan revisi, atau belum dapat diterbitkan.",
      "Bila diterima dengan revisi, penulis mendapat catatan editorial dan tenggat revisi yang disepakati bersama.",
    ],
  },
  {
    title: "3. Hak Cipta & Perjanjian",
    items: [
      "Hak cipta karya tetap milik penulis. Centory Press memperoleh hak terbit sesuai perjanjian.",
      "Perjanjian penerbitan memuat lingkup pekerjaan, jadwal, jumlah cetak, harga jual, dan skema royalti atau bagi hasil.",
      "Penulis wajib menjamin bahwa karya tidak melanggar hak pihak lain.",
    ],
  },
  {
    title: "4. Jadwal & Produksi",
    items: [
      "Estimasi waktu produksi 30-60 hari kerja tergantung paket dan kompleksitas naskah.",
      "Setiap tahap (editing, layout, sampul) dikonfirmasi ke penulis sebelum lanjut ke tahap berikutnya.",
      "Keterlambatan revisi dari penulis akan menggeser jadwal terbit.",
    ],
  },
  {
    title: "5. Pembayaran",
    items: [
      "Pembayaran paket dilakukan dua tahap: 50% saat perjanjian ditandatangani, 50% sebelum naik cetak.",
      "Biaya tambahan (penambahan halaman, revisi di luar kuota, cetak tambahan) diinformasikan sebelum dikerjakan.",
      "Pembayaran hanya melalui rekening resmi atas nama CV Centory Press.",
    ],
  },
  {
    title: "6. Distribusi & Royalti",
    items: [
      "Buku didistribusikan melalui kanal Centory Press, marketplace, reseller mitra, dan program komunitas.",
      "Laporan penjualan dan royalti diberikan setiap tiga bulan.",
      "Penulis berhak membeli buku sendiri dengan harga khusus penulis.",
    ],
  },
] as const;

export const milestones = [
  { label: "Buku & e-book terbit", value: "40+" },
  { label: "Penulis bekerja sama", value: "35+" },
  { label: "Fokus isu utama", value: "4" },
  { label: "Rata-rata proses terbit", value: "45 hari" },
] as const;

export const processSteps = [
  { step: "01", title: "Kirim naskah", text: "Konsultasi awal via WhatsApp, lalu kirim naskah dan sinopsis." },
  { step: "02", title: "Pembacaan redaksi", text: "Naskah dibaca dan dinilai; Anda menerima catatan editorial." },
  { step: "03", title: "Editing & desain", text: "Editing, layout, dan perancangan sampul dikerjakan bertahap." },
  { step: "04", title: "Terbit & edar", text: "ISBN, cetak, distribusi, dan promosi buku Anda dijalankan." },
] as const;