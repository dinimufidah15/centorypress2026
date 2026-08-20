export const advantages = [
  {
    icon: "Compass",
    title: "Fokus yang Membawa Gagasan Lebih Jauh",
    description:
      "Kami percaya bahwa buku yang baik membutuhkan ruang yang tepat. Karena itu, Centory Press berfokus pada empat ranah utama—ekologi, feminisme, sosial-humaniora, serta teologi & spiritualitas—agar setiap karya menemukan pembaca yang relevan dan percakapan yang bermakna.",
  },
  {
    icon: "PenLine",
    title: "Kurasi dan Penyuntingan yang Mendalam",
    description:
      "Setiap naskah kami baca dengan serius—mulai dari gagasan, struktur, alur, hingga penggunaan bahasa. Kami tidak sekadar memperbaiki kesalahan, tetapi membantu mempertajam naskah agar gagasanmu tersampaikan dengan lebih kuat.",
  },
  {
    icon: "Palette",
    title: "Desain yang Merepresentasikan Gagasan",
    description:
      "Kami percaya sampul adalah pintu pertama menuju sebuah buku. Setiap desain dikembangkan berdasarkan karakter dan isi karya, didukung tata letak yang rapi, nyaman, dan konsisten hingga halaman terakhir.",
  },
  {
    icon: "BadgeCheck",
    title: "Penerbitan yang Profesional",
    description:
      "Kami membantu menangani kebutuhan penerbitan, mulai dari ISBN, barcode, hingga kelengkapan administrasi penerbitan. Kamu dapat berfokus pada gagasan, sementara kami memastikan proses penerbitannya berjalan dengan baik.",
  },
  {
    icon: "Megaphone",
    title: "Menemukan Pembaca yang Tepat",
    description:
      "Kami tidak hanya menerbitkan buku, tetapi membantu mempertemukannya dengan pembaca. Buku diperkenalkan melalui kanal digital Centory Press, marketplace, komunitas, serta berbagai ruang diskusi dan literasi yang relevan.",
  },
  {
    icon: "HeartHandshake",
    title: "Didampingi dari Naskah hingga Terbit",
    description:
      "Setiap penulis mendapatkan pendampingan selama proses penerbitan. Mulai dari naskah awal, penyuntingan, desain, hingga buku siap terbit—dengan alur kerja dan jadwal yang jelas.",
  },
] as const;

export const packages = [
  {
    name: "Paket Tunas",
    priceDisplay: "Harga menyusul",
    summary: "Langkah pertama menerbitkan naskah dengan tata letak rapi dan promosi dasar.",
    benefits: [
      "Free konsultasi",
      "Layout basic (maks. 100 halaman, A4, TNR 12, spasi 1,5, margin kiri 4 cm; kanan, atas, bawah 3 cm)",
      "Bukti cetak 2 eks",
      "Masa PO 7 hari",
      "Display di website & Instagram",
      "Flyer promosi di Instagram Story",
      "1 minggu highlight promosi (IG Story & 1× Reel IG)",
      "3 kolaborasi konten",
      "1 video content sederhana",
      "Masa pengerjaan estimasi ±2 minggu (tidak termasuk antrean & ISBN)",
    ],
    featured: false,
  },
  {
    name: "Paket Tumbuh",
    priceDisplay: "Harga menyusul",
    summary: "Naskah disunting lebih jauh dan didorong lewat promosi kolaboratif.",
    benefits: [
      "Free konsultasi",
      "Editing basic (maks. 100 halaman, A4, TNR 12, spasi 1,5)",
      "Layout basic (maks. 100 halaman, A4, TNR 12, spasi 1,5, margin kiri 4 cm; kanan, atas, bawah 3 cm)",
      "Bukti cetak 2 eks",
      "Masa PO 7 hari",
      "1 minggu highlight promosi (IG Story & 1× Reel IG)",
      "3 kolaborasi konten",
      "1 video content sederhana",
      "1× live Instagram dengan penulis",
    ],
    featured: true,
  },
  {
    name: "Paket Rimbun",
    priceDisplay: "Harga menyusul",
    summary: "Penanganan editorial profesional dengan promosi paling intens.",
    benefits: [
      "Editing profesional",
      "Layout standar",
      "Bukti cetak 5 eks",
      "Free ISBN",
      "Masa PO 10 hari + Pin Feed Instagram (10 hari)",
      "Display di website & Instagram",
      "Flyer promosi di Instagram",
      "Highlight Story promosi",
      "3 kolaborasi konten",
      "Promosi intens",
      "Masa pengerjaan 2–4 minggu tanpa antrian (tidak termasuk ISBN)",
      "1 video content sederhana & 1× live kolaborasi dengan penulis",
    ],
    featured: false,
  },
] as const;

export const manuscriptTerms = [
  "Naskah harus orisinil/asli.",
  "Kategori naskah yang kami terima adalah seputar sosial-humaniora (sosiologi, antropologi, politik, komunikasi, ekonomi, sejarah, filsafat, sastra & bahasa, seni), feminisme, teologi & spiritual, ekologi.",
  "Naskah dikirim dalam bentuk softcopy.",
  "Belum pernah dipublikasikan di penerbit lain.",
  "Tulisan harus rapi, utuh, padu dan sesuai dengan EYD (Ejaan Yang Disempurnakan).",
  "Tidak sedang dikirim ke penerbit lain secara bersamaan.",
  "Sertakan data diri singkat dan sinopsis utuh.",
  "Naskah akan dikonfirmasi selambat-lambatnya 1 bulan. Naskah yang diterima atau tidak tetap akan mendapatkan konfirmasi.",
  "Naskah yang sudah lengkap dapat dikirimkan melalui email centorypress@gmail.com dengan subjek JUDUL NASKAH_NAMA PENULIS_(KATEGORI NASKAH).",
] as const;

export const formatTerms = [
  "Naskah ditulis dalam format MS Word dan dikirim dalam format PDF.",
  "Isi naskah harus terdiri dari daftar isi, kata pengantar, isi, profil penulis, dan blurb.",
  "Jumlah halaman min. 120 halaman.",
  "Naskah diketik dalam ukuran kertas A4, font 12 pt, dan spasi 1,5.",
  "Sertakan sumber/daftar pustaka (jika diperlukan).",
  "Naskah tidak menyinggung SARA dan tidak vulgar.",
] as const;

export const milestones = [
  { label: "Buku & e-book terbit", value: "40+" },
  { label: "Penulis bekerja sama", value: "35+" },
  { label: "Fokus isu utama", value: "4" },
  { label: "Rata-rata proses terbit", value: "45 hari" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Kirim naskah",
    text: "Naskah dan sinopsis dikirim melalui email penerbit.",
  },
  {
    step: "02",
    title: "Pembacaan redaksi",
    text: "Naskah dibaca dan dinilai, kamu hanya perlu menerima catatan editorial.",
  },
  {
    step: "03",
    title: "Editing & desain",
    text: "Penyuntingan, tata letak, dan desain sampul dikerjakan secara bertahap.",
  },
  {
    step: "04",
    title: "Terbit & beredar",
    text: "ISBN, cetak, distribusi, dan promosi bukumu dijalankan.",
  },
] as const;

export const publishingFlow = [
  {
    step: "01",
    title: "Kirim Naskah",
    text: "Kirimkan naskah dan informasi karyamu kepada tim Centory Press untuk memulai proses penerbitan.",
  },
  {
    step: "02",
    title: "Kurasi Naskah",
    text: "Tim editorial membaca dan menilai naskah berdasarkan tema, kualitas, dan kesesuaiannya dengan fokus Centory Press.",
  },
  {
    step: "03",
    title: "Edit Naskah",
    text: "Naskah disunting untuk memperkuat struktur, bahasa, alur, dan keterbacaan tanpa menghilangkan karakter penulis.",
  },
  {
    step: "04",
    title: "Desain Cover & Layout",
    text: "Kami merancang sampul dan tata letak yang sesuai dengan karakter serta isi buku.",
  },
  {
    step: "05",
    title: "Proof Naskah",
    text: "Naskah akhir diperiksa kembali untuk memastikan tidak ada kesalahan sebelum masuk tahap produksi.",
  },
  {
    step: "06",
    title: "Pembuatan Dummy",
    text: "Kami membuat contoh fisik buku untuk memastikan hasil desain dan tata letak sesuai sebelum dicetak.",
  },
  {
    step: "07",
    title: "Pencetakan Buku",
    text: "Setelah dummy disetujui, buku masuk ke proses pencetakan sesuai jumlah yang telah disepakati.",
  },
  {
    step: "08",
    title: "Buku Siap Terbit!",
    text: "Buku resmi terbit dan siap dipasarkan serta dipertemukan dengan pembacanya.",
  },
] as const;

export const vision =
  "Menjadi penerbit independen yang terpercaya dan berpengaruh dalam menghadirkan karya-karya berkualitas di bidang sosial-humaniora, teologi, feminisme, dan ekologi guna memperkaya khazanah pengetahuan serta mendorong terciptanya masyarakat yang kritis, inklusif, dan berkelanjutan.";

export const missions = [
  "Menerbitkan buku-buku berkualitas dan memiliki value yang tinggi.",
  "Memberikan ruang bagi penulis, peneliti, akademisi, aktivis, dan pemikir muda untuk mempublikasikan gagasan mereka.",
  "Mendukung pengembangan budaya literasi dan tradisi intelektual di Indonesia.",
  "Menyediakan layanan penerbitan yang profesional, terjangkau, dan berorientasi pada kualitas.",
  "Membangun jaringan kolaborasi dengan komunitas, perguruan tinggi, organisasi masyarakat sipil, dan lembaga keagamaan.",
  "Mendorong dialog publik mengenai isu-isu sosial, keagamaan, gender, dan lingkungan melalui publikasi yang bertanggung jawab dan berbasis pengetahuan.",
] as const;

export const historyParagraphs = [
  "Centory Press berawal dari sesuatu yang sederhana: kebiasaan membaca, berdiskusi, dan bertukar gagasan. Dari buku-buku yang dibaca bersama, muncul percakapan tentang berbagai persoalan yang dekat dengan kehidupan—tentang manusia dan masyarakat, iman dan spiritualitas, relasi gender, hingga hubungan manusia dengan alam.",
  "Percakapan tersebut sering kali berlanjut menjadi pertanyaan-pertanyaan yang lebih panjang: Gagasan seperti apa yang perlu dibagikan? Siapa yang perlu membacanya? Dan bagaimana sebuah pemikiran dapat hadir dalam bentuk yang lebih utuh dan dapat diakses oleh lebih banyak orang?",
  "Dari ruang-ruang diskusi tersebut, tumbuh sebuah keyakinan bahwa penerbitan bukan sekadar proses mencetak dan menjual buku. Penerbitan adalah bagian dari perjalanan sebuah gagasan—bagaimana sebuah pemikiran dirawat, disunting, dikemas dengan baik, kemudian dipertemukan dengan pembaca yang tepat. Keyakinan inilah yang kemudian menjadi dasar lahirnya Centory Press.",
  "Kami hadir sebagai penerbit independen yang memberikan ruang bagi karya-karya yang reflektif, kritis, dan relevan dengan kehidupan masyarakat. Fokus kami berada pada sosial-humaniora, teologi & spiritualitas, feminisme & kajian gender, serta ekologi. Kami percaya bahwa bidang-bidang tersebut memiliki peran penting dalam membantu kita memahami dunia, mempertanyakan berbagai persoalan, sekaligus membayangkan kemungkinan-kemungkinan baru.",
  "Dalam perjalanannya, Centory Press membuka diri untuk bekerja bersama penulis pemula, mahasiswa, akademisi, peneliti, aktivis, komunitas, maupun penulis independen yang memiliki gagasan untuk dibagikan. Kami berupaya menghadirkan proses penerbitan yang terjangkau, transparan, dan tetap memperhatikan kualitas editorial maupun visual setiap karya.",
  "Bagi kami, sebuah buku bukanlah akhir dari sebuah tulisan. Buku adalah awal dari sebuah percakapan. Ia dapat mempertemukan pemikiran yang berbeda, membuka perspektif baru, dan menumbuhkan gagasan-gagasan berikutnya.",
  "Karena itu, Centory Press ingin terus menjadi ruang tempat gagasan yang ditulis, dirawat, diterbitkan, dibaca, dan terus bertumbuh.",
] as const;

export const issueReasons: { genre: string; label: string; text: string; className: string }[] = [
  {
    genre: "ekologi",
    label: "Ekologi",
    text: "Karena cara kita memperlakukan bumi mencerminkan cara kita memahami kehidupan dan masa depan bersama.",
    className: "bg-ekologi/12 text-ekologi ring-ekologi/30",
  },
  {
    genre: "feminisme",
    label: "Feminisme",
    text: "Karena memahami relasi gender berarti memahami bagaimana kuasa, tubuh, dan keadilan bekerja dalam kehidupan sehari-hari.",
    className: "bg-feminisme/12 text-feminisme ring-feminisme/30",
  },
  {
    genre: "soshum",
    label: "Sosial-Humaniora & Politik",
    text: "Karena memahami masyarakat berarti berani membaca bagaimana manusia, negara, budaya, dan kuasa membentuk kehidupan bersama.",
    className: "bg-soshum/12 text-soshum ring-soshum/30",
  },
  {
    genre: "teologi_spiritual",
    label: "Teologi & Spiritualitas",
    text: "Karena cara kita memaknai iman dan yang ilahi turut membentuk cara kita memahami diri, sesama, dan dunia.",
    className: "bg-teologi/12 text-teologi ring-teologi/30",
  },
];

export const testimonials = [
  {
    name: "Lila Wainardi",
    role: "Penulis, Akar yang Tak Terlihat",
    quote:
      "Catatan editorialnya membuat saya menulis ulang dua bab—dan buku ini jauh lebih kuat karenanya. Rasanya seperti punya pembaca pertama yang benar-benar peduli.",
  },
  {
    name: "Meera Joshi",
    role: "Penulis, Tubuh yang Berbicara",
    quote:
      "Prosesnya transparan dari awal. Saya tahu di tahap mana naskah saya berada, dan sampulnya benar-benar lahir dari isi buku.",
  },
  {
    name: "Bagas Prawira",
    role: "Peneliti & penulis lepas",
    quote:
      "Yang saya cari adalah penerbit yang paham isu, bukan sekadar percetakan. Centory Press membaca naskah saya dengan konteksnya.",
  },
  {
    name: "Komunitas Rumah Baca Setu",
    role: "Penerbitan antologi komunitas",
    quote:
      "Untuk komunitas kecil seperti kami, pendampingannya sangat membantu. Dari naskah berserakan menjadi buku yang layak dipajang.",
  },
  {
    name: "Sri Handayani",
    role: "Penulis, Doa yang Tidak Selesai",
    quote:
      "Penyuntingannya menjaga suara saya. Tidak ada kalimat yang terasa bukan milik saya setelah proses editing.",
  },
  {
    name: "Hendra Kusuma",
    role: "Penulis, Republik Antrean",
    quote:
      "Promosinya terarah ke pembaca yang memang mencari isu ini. Buku saya sampai ke ruang diskusi yang tepat.",
  },
] as const;
