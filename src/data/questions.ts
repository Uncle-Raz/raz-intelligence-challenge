import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ==========================================
  // KATEGORI 1: MATEMATIKA SEHARI-HARI (6 SOAL)
  // ==========================================
  {
    id: 1,
    category: 'Matematika',
    difficulty: 'Menengah',
    question: 'Sebuah kebun memiliki 2 hektare lahan dengan 5.000 pohon cabai. Setiap pohon menghasilkan rata-rata 1,2 kg cabai. Jika 15% hasil panen rusak dan sisanya dijual seharga Rp12.000/kg, berapa total pendapatan bersih dari penjualan cabai yang layak?',
    options: [
      { key: 'A', text: 'Rp51.000.000' },
      { key: 'B', text: 'Rp60.000.000' },
      { key: 'C', text: 'Rp61.200.000' },
      { key: 'D', text: 'Rp72.000.000' },
    ],
    correctAnswer: 'C',
    explanation: 'Total panen = 5.000 pohon × 1,2 kg = 6.000 kg. Hasil panen yang layak (85%) = 0,85 × 6.000 kg = 5.100 kg. Total pendapatan = 5.100 kg × Rp12.000 = Rp61.200.000.'
  },
  {
    id: 2,
    category: 'Matematika',
    difficulty: 'Menengah',
    question: 'Sebuah toko gawai menawarkan diskon beruntun (double discount) untuk sebuah laptop seharga Rp10.000.000. Diskon pertama sebesar 25%, kemudian saat checkout di aplikasi terdapat voucher diskon tambahan 10% dari sisa harga setelah diskon pertama. Berapa nominal akhir yang harus dibayar?',
    options: [
      { key: 'A', text: 'Rp6.500.000' },
      { key: 'B', text: 'Rp6.750.000' },
      { key: 'C', text: 'Rp7.000.000' },
      { key: 'D', text: 'Rp7.250.000' },
    ],
    correctAnswer: 'B',
    explanation: 'Diskon pertama 25%: sisa harga = 75% × Rp10.000.000 = Rp7.500.000. Diskon kedua 10% dihitung dari Rp7.500.000, yaitu potongan Rp750.000. Maka harga akhir yang dibayar = Rp7.500.000 - Rp750.000 = Rp6.750.000.'
  },
  {
    id: 3,
    category: 'Matematika',
    difficulty: 'Sulit',
    question: 'Seorang pengendara mobil menempuh rute dari Kota A ke Kota B sejauh 120 km dengan kecepatan rata-rata 60 km/jam. Saat kembali dari B ke A melalui jalur yang sama persis, kecepatan rata-ratanya menurun menjadi 40 km/jam akibat hujan. Berapa kecepatan rata-rata pengemudi untuk seluruh perjalanan pulang-pergi?',
    options: [
      { key: 'A', text: '48 km/jam' },
      { key: 'B', text: '50 km/jam' },
      { key: 'C', text: '52 km/jam' },
      { key: 'D', text: '54 km/jam' },
    ],
    correctAnswer: 'A',
    explanation: 'Waktu tempuh pergi = 120 / 60 = 2 jam. Waktu tempuh pulang = 120 / 40 = 3 jam. Total jarak pulang-pergi = 120 + 120 = 240 km. Total waktu = 2 + 3 = 5 jam. Kecepatan rata-rata = 240 km / 5 jam = 48 km/jam (menggunakan rata-rata harmonik, bukan rata-rata aritmatika 50 km/jam).'
  },
  {
    id: 4,
    category: 'Matematika',
    difficulty: 'Sulit',
    question: 'Sebuah proyek pembangunan kafe ditargetkan selesai dalam 24 hari oleh 15 orang pekerja. Setelah 8 hari berjalan, proyek terpaksa dihentikan selama 4 hari akibat cuaca ekstrem. Agar proyek tetap selesai tepat waktu dalam sisa waktu yang ada, berapa jumlah tambahan pekerja yang wajib dipekerjakan?',
    options: [
      { key: 'A', text: '3 orang' },
      { key: 'B', text: '5 orang' },
      { key: 'C', text: '7 orang' },
      { key: 'D', text: '10 orang' },
    ],
    correctAnswer: 'B',
    explanation: 'Sisa beban kerja normal = (24 - 8) hari × 15 pekerja = 16 × 15 = 240 hari-orang. Sisa hari yang tersedia setelah libur 4 hari = 16 - 4 = 12 hari. Jumlah pekerja yang dibutuhkan = 240 / 12 = 20 pekerja. Tambahan pekerja yang diperlukan = 20 - 15 = 5 orang.'
  },
  {
    id: 5,
    category: 'Matematika',
    difficulty: 'Menengah',
    question: 'Sebuah galeri seni berukuran 6 m × 8 m akan dipasangi ubin keramik berukuran 40 cm × 40 cm. Keramik dijual dalam kemasan dus berisi 6 keping ubin seharga Rp150.000 per dus. Untuk mengantisipasi ubin pecah dan potongan pinggir, diputuskan membeli ekstra 10% ubin. Berapa total biaya pembelian keramik?',
    options: [
      { key: 'A', text: 'Rp7.500.000' },
      { key: 'B', text: 'Rp8.250.000' },
      { key: 'C', text: 'Rp9.000.000' },
      { key: 'D', text: 'Rp9.750.000' },
    ],
    correctAnswer: 'B',
    explanation: 'Luas galeri = 600 cm × 800 cm = 480.000 cm². Luas 1 ubin = 40 cm × 40 cm = 1.600 cm². Jumlah ubin dasar = 480.000 / 1.600 = 300 keping. Ekstra 10% = 30 keping, sehingga total = 330 keping. Jumlah dus yang dibeli = 330 / 6 = 55 dus. Biaya = 55 dus × Rp150.000 = Rp8.250.000.'
  },
  {
    id: 6,
    category: 'Matematika',
    difficulty: 'Sulit',
    question: 'Raz menyimpan dana sebesar Rp20.000.000 dalam rekening deposito berjangka dengan bunga majemuk 6% per tahun yang dikapitalisasi setiap semester (3% per 6 bulan). Berapa total saldo simpanan Raz tepat setelah 1 tahun (2 periode bunga)?',
    options: [
      { key: 'A', text: 'Rp21.200.000' },
      { key: 'B', text: 'Rp21.218.000' },
      { key: 'C', text: 'Rp21.236.000' },
      { key: 'D', text: 'Rp21.400.000' },
    ],
    correctAnswer: 'B',
    explanation: 'Suku bunga per semester = 3% = 0,03. Periode 1 (setelah 6 bulan) = Rp20.000.000 × 1,03 = Rp20.600.000. Periode 2 (setelah 1 tahun) = Rp20.600.000 × 1,03 = Rp21.218.000.'
  },

  // ==========================================
  // KATEGORI 2: EKONOMI DAN KEUANGAN (5 SOAL)
  // ==========================================
  {
    id: 7,
    category: 'Ekonomi',
    difficulty: 'Menengah',
    question: 'Seseorang memiliki modal usaha Rp8.000.000. Ia menggunakan 35% modalnya untuk kulakan barang dagangan. Seluruh barang tersebut berhasil terjual habis dengan keuntungan bersih 20% dari harga beli. Berapa nominal keuntungan yang berhasil ia peroleh?',
    options: [
      { key: 'A', text: 'Rp480.000' },
      { key: 'B', text: 'Rp560.000' },
      { key: 'C', text: 'Rp1.120.000' },
      { key: 'D', text: 'Rp1.600.000' },
    ],
    correctAnswer: 'B',
    explanation: 'Modal yang dibelanjakan = 35% × Rp8.000.000 = Rp2.800.000. Keuntungan bersih = 20% × Rp2.800.000 = Rp560.000.'
  },
  {
    id: 8,
    category: 'Ekonomi',
    difficulty: 'Menengah',
    question: 'Dalam konsep ekonomi mikro, biaya peluang (opportunity cost) timbul karena adanya kelangkaan sumber daya. Jika seorang profesional melepaskan tawaran kerja bergaji Rp15.000.000/bulan demi membuka bisnis mandiri yang di bulan pertama menghasilkan laba Rp8.000.000, berapakah biaya peluang yang ia korbankan?',
    options: [
      { key: 'A', text: 'Rp7.000.000' },
      { key: 'B', text: 'Rp8.000.000' },
      { key: 'C', text: 'Rp15.000.000' },
      { key: 'D', text: 'Rp23.000.000' },
    ],
    correctAnswer: 'C',
    explanation: 'Biaya peluang (opportunity cost) adalah nilai dari alternatif terbaik yang dikorbankan ketika suatu pilihan diambil. Alternatif terbaik yang dilepas adalah gaji Rp15.000.000/bulan.'
  },
  {
    id: 9,
    category: 'Ekonomi',
    difficulty: 'Sulit',
    question: 'Sebuah kafe memiliki biaya operasional tetap (sewa tempat & listrik) sebesar Rp18.000.000 per bulan. Biaya variabel untuk membuat satu gelas kopi specialty adalah Rp10.000. Jika kopi dijual Rp25.000 per gelas, berapa jumlah gelas minimal yang harus terjual dalam sebulan agar kafe mencapai titik impas (Break-Even Point)?',
    options: [
      { key: 'A', text: '1.000 gelas' },
      { key: 'B', text: '1.200 gelas' },
      { key: 'C', text: '1.500 gelas' },
      { key: 'D', text: '1.800 gelas' },
    ],
    correctAnswer: 'B',
    explanation: 'Margin kontribusi per unit = Harga jual - Biaya variabel = Rp25.000 - Rp10.000 = Rp15.000 per gelas. BEP (unit) = Biaya Tetap / Margin Kontribusi = Rp18.000.000 / Rp15.000 = 1.200 gelas kopi.'
  },
  {
    id: 10,
    category: 'Ekonomi',
    difficulty: 'Sulit',
    question: 'Jika laju inflasi tahunan stabil di angka 5% per tahun selama 2 tahun berturut-turut, maka nilai riil daya beli (purchasing power) dari uang tunai Rp100.000.000 setelah 2 tahun mendekati angka:',
    options: [
      { key: 'A', text: 'Rp90.000.000' },
      { key: 'B', text: 'Rp90.703.000' },
      { key: 'C', text: 'Rp92.500.000' },
      { key: 'D', text: 'Rp95.000.000' },
    ],
    correctAnswer: 'B',
    explanation: 'Indeks kenaikan harga setelah 2 tahun = (1 + 0,05)² = 1,1025. Daya beli riil = Nilai Nominal / Indeks Harga = Rp100.000.000 / 1,1025 ≈ Rp90.702.948 (mendekati Rp90.703.000).'
  },
  {
    id: 11,
    category: 'Ekonomi',
    difficulty: 'Menengah',
    question: 'Suatu brand kosmetik premium menaikkan harga lip tint dari Rp100.000 menjadi Rp120.000 (kenaikan 20%). Hal ini menyebabkan permintaan turun drastis dari 1.000 botol menjadi 600 botol per minggu (penurunan 40%). Koefisien elastisitas harga permintaan barang tersebut adalah:',
    options: [
      { key: 'A', text: '0,5 (Inelastis)' },
      { key: 'B', text: '1,0 (Elastisitas Uniter)' },
      { key: 'C', text: '2,0 (Elastis)' },
      { key: 'D', text: '3,0 (Elastis Sempurna)' },
    ],
    correctAnswer: 'C',
    explanation: 'Koefisien Elastisitas Permintaan (Ed) = |% perubahan jumlah yang diminta / % perubahan harga| = |-40% / +20%| = 2,0. Karena Ed > 1, maka permintaan bersifat Elastis.'
  },

  // ==========================================
  // KATEGORI 3: LOGIKA DAN PENALARAN (7 SOAL)
  // ==========================================
  {
    id: 12,
    category: 'Logika',
    difficulty: 'Menengah',
    question: 'Premis 1: Semua kucing adalah mamalia.\nPremis 2: Sebagian mamalia adalah hewan peliharaan.\nBerdasarkan silogisme formal, manakah kesimpulan yang secara mutlak dan sah dapat ditarik?',
    options: [
      { key: 'A', text: 'Semua kucing adalah hewan peliharaan' },
      { key: 'B', text: 'Sebagian kucing adalah hewan peliharaan' },
      { key: 'C', text: 'Semua hewan peliharaan adalah kucing' },
      { key: 'D', text: 'Tidak dapat dipastikan apakah kucing adalah hewan peliharaan atau bukan' },
    ],
    correctAnswer: 'D',
    explanation: 'Istilah penengah (mamalia) tidak terdistribusi pada kedua premis (fallacy of undistributed middle). Mamalia yang dipelihara bisa saja anjing atau kelinci, sehingga tidak ada kesimpulan pasti yang menghubungkan kucing dan hewan peliharaan.'
  },
  {
    id: 13,
    category: 'Logika',
    difficulty: 'Sulit',
    question: 'Perhatikan pola barisan bilangan berikut:\n3, 5, 9, 17, 33, 65, ...\nBilangan berikutnya yang mengisi pola tersebut adalah:',
    options: [
      { key: 'A', text: '97' },
      { key: 'B', text: '113' },
      { key: 'C', text: '129' },
      { key: 'D', text: '131' },
    ],
    correctAnswer: 'C',
    explanation: 'Perhatikan selisih antar suku: (5-3)=2, (9-5)=4, (17-9)=8, (33-17)=16, (65-33)=32. Pola selisih adalah perpangkatan 2 (2, 4, 8, 16, 32). Selisih berikutnya adalah 64. Maka suku berikutnya = 65 + 64 = 129.'
  },
  {
    id: 14,
    category: 'Logika',
    difficulty: 'Sulit',
    question: 'Enam orang sahabat (A, B, C, D, E, F) duduk melingkar mengelilingi meja bundar:\n- A duduk tepat berhadapan dengan D.\n- C duduk di antara A dan E.\n- B duduk tepat di sebelah kanan D (dilihat dari arah hadap D ke pusat meja).\nSiapakah yang duduk tepat berhadapan dengan C?',
    options: [
      { key: 'A', text: 'B' },
      { key: 'B', text: 'E' },
      { key: 'C', text: 'F' },
      { key: 'D', text: 'D' },
    ],
    correctAnswer: 'A',
    explanation: 'Tentukan 6 posisi melingkar searah jarum jam (1 s.d 6). Jika A di posisi 1, maka D di posisi 4 (berhadapan). D menghadap ke pusat meja, sehingga sebelah kanannya adalah posisi 3 (B). Karena C duduk di antara A (1) dan E, maka C berada di posisi 6 dan E di posisi 5, atau C di 2 dan E di 3 (namun 3 sudah terisi B). Maka C di posisi 2 dan E di tempat lain yang konsisten. Lawan hadap posisi 2 (C) pada lingkaran 6 kursi adalah posisi 5 atau posisi kursi B (yang tepat berseberangan). Dari susunan geometris simetris 6 kursi, lawan hadap C adalah B.'
  },
  {
    id: 15,
    category: 'Logika',
    difficulty: 'Sulit',
    question: 'Di sebuah pulau terpencil, terdapat dua suku: Suku Terang yang selalu jujur dan Suku Gelap yang selalu berbohong. Anda bertemu dua penduduk asli, X dan Y. X berkata: "Setidaknya salah satu dari kami berdua berasal dari Suku Gelap." Apakah identitas suku dari X dan Y yang sebenarnya?',
    options: [
      { key: 'A', text: 'X dan Y keduanya berasal dari Suku Gelap' },
      { key: 'B', text: 'X berasal dari Suku Gelap dan Y berasal dari Suku Terang' },
      { key: 'C', text: 'X berasal dari Suku Terang dan Y berasal dari Suku Gelap' },
      { key: 'D', text: 'X dan Y keduanya berasal dari Suku Terang' },
    ],
    correctAnswer: 'C',
    explanation: 'Jika X berasal dari Suku Gelap (pembohong), maka pernyataannya harus salah. Kebalikan dari "setidaknya satu dari kami gelap" adalah "keduanya terang (jujur)", yang bertentangan dengan asumsi X pembohong. Jadi X tidak mungkin dari Suku Gelap. Maka X pasti jujur (Suku Terang). Karena X jujur, pernyataannya benar bahwa salah satu dari mereka dari Suku Gelap. Karena X bukan, maka Y lah yang dari Suku Gelap.'
  },
  {
    id: 16,
    category: 'Logika',
    difficulty: 'Menengah',
    question: 'Diberikan dua premis aturan lalu lintas:\n1. Jika hari hujan deras, maka jalan protokol mengalami genangan air.\n2. Jika jalan protokol mengalami genangan air, maka armada bus kota terlambat beroperasi.\nKenyataan di lapangan: Hari ini seluruh armada bus kota tiba tepat waktu (tidak terlambat). Kesimpulan yang sah berdasarkan kaidah logika adalah:',
    options: [
      { key: 'A', text: 'Hari ini hari tidak hujan deras' },
      { key: 'B', text: 'Hari ini hujan deras tetapi jalanan tidak tergenang' },
      { key: 'C', text: 'Jalan protokol tergenang air tetapi bus lewat jalan alternatif' },
      { key: 'D', text: 'Tidak ada kesimpulan yang sah' },
    ],
    correctAnswer: 'A',
    explanation: 'P → Q dan Q → R setara dengan P → R (Silogisme Hipotetis). Diketahui ~R (bus kota tidak terlambat). Berdasarkan aturan Modus Tollens: jika P → R dan ~R, maka kesimpulan sahnya adalah ~P (Hari ini tidak hujan deras).'
  },
  {
    id: 17,
    category: 'Logika',
    difficulty: 'Menengah',
    question: 'Perhatikan deret huruf berikut ini:\nB, E, I, N, T, ...\nHuruf berikutnya yang paling tepat untuk melanjutkan deret adalah:',
    options: [
      { key: 'A', text: 'Y' },
      { key: 'B', text: 'Z' },
      { key: 'C', text: 'A' },
      { key: 'D', text: 'B' },
    ],
    correctAnswer: 'C',
    explanation: 'Ubah huruf ke nomor urut abjad: B(2), E(5), I(9), N(14), T(20). Selisih antarsuku bertambah satu setiap langkah: +3, +4, +5, +6. Maka penambahan berikutnya adalah +7. 20 + 7 = 27. Karena alfabet ada 26 huruf, 27 melingkar kembali ke huruf ke-1 yaitu A.'
  },
  {
    id: 18,
    category: 'Logika',
    difficulty: 'Sulit',
    question: 'Terdapat 9 koin logam mulia yang memiliki rupa dan ukuran identik. Namun salah satu koin adalah tiruan yang bobotnya lebih ringan daripada 8 koin lainnya yang berbobot sama. Berapa kali jumlah penimbangan minimal menggunakan neraca dua lengan yang menjamin Anda pasti menemukan koin tiruan tersebut?',
    options: [
      { key: 'A', text: '1 kali' },
      { key: 'B', text: '2 kali' },
      { key: 'C', text: '3 kali' },
      { key: 'D', text: '4 kali' },
    ],
    correctAnswer: 'B',
    explanation: 'Bagi 9 koin menjadi 3 grup sama banyak: [3, 3, 3]. Timbang grup 1 vs grup 2 (Timbangan 1). Jika seimbang, koin palsu ada di grup 3; jika tidak, koin ada di grup yang lebih ringan. Ambil 3 koin yang dicurigai, timbang 1 koin vs 1 koin (Timbangan 2). Jika seimbang, koin ketiga palsu; jika miring, yang terangkat palsu. Cukup 2 kali penimbangan!'
  },

  // ==========================================
  // KATEGORI 4: ILMU PENGETAHUAN ALAM / IPA (5 SOAL)
  // ==========================================
  {
    id: 19,
    category: 'IPA',
    difficulty: 'Menengah',
    question: 'Mengapa langit di bumi pada siang hari yang cerah tampak berwarna biru, sedangkan saat senja matahari terbenam warnanya berubah menjadi kemerahan/jingga?',
    options: [
      { key: 'A', text: 'Karena pantulan warna air laut oleh lapisan ozon' },
      { key: 'B', text: 'Hamburan Rayleigh: cahaya gelombang pendek (biru) dihamburkan atmosfer lebih kuat daripada gelombang panjang' },
      { key: 'C', text: 'Adanya penyerapan seluruh spektrum cahaya merah oleh awan stratus di siang hari' },
      { key: 'D', text: 'Cahaya matahari berubah warna akibat perbedaan suhu antara siang dan sore' },
    ],
    correctAnswer: 'B',
    explanation: 'Fenomena ini dijelaskan oleh Hamburan Rayleigh (Rayleigh scattering). Molekul gas di atmosfer bumi menghamburkan cahaya dengan panjang gelombang pendek (biru dan ungu) jauh lebih efektif dibanding gelombang panjang (merah). Saat matahari terbenam, cahaya menempuh lapisan atmosfer yang lebih tebal sehingga warna biru terserap dan terhambur habis, menyisakan warna merah dan jingga.'
  },
  {
    id: 20,
    category: 'IPA',
    difficulty: 'Sulit',
    question: 'Pada manusia yang melakukan sprint atau aktivitas fisik berat mendadak, sel otot mengalami respirasi anaerob menghasilkan asam laktat. Apa fungsi biologis utama dari regenerasi molekul NAD+ dalam reaksi fermentasi asam laktat tersebut?',
    options: [
      { key: 'A', text: 'Menghasilkan gas oksigen di dalam jaringan otot' },
      { key: 'B', text: 'Memungkinkan proses glikolisis tetap berlangsung untuk memproduksi ATP' },
      { key: 'C', text: 'Menghancurkan timbunan glikogen dalam hati' },
      { key: 'D', text: 'Mencegah terjadinya kram pada jaringan tendon' },
    ],
    correctAnswer: 'B',
    explanation: 'Dalam kondisi anoksia (tanpa oksigen), rantai transpor elektron berhenti bekerja. Tanpa adanya NAD+, tahap glikolisis akan terhenti. Reduksi piruvat menjadi laktat mengoksidasi kembali NADH menjadi NAD+, sehingga glikolisis dapat terus berjalan memproduksi 2 ATP per molekul glukosa.'
  },
  {
    id: 21,
    category: 'IPA',
    difficulty: 'Sulit',
    question: 'Sebanyak 10 mL larutan asam kuat HCl dengan konsentrasi 0,001 M (10⁻³ M) diencerkan dengan akuades di laboratorium hingga volume total larutan menjadi 1.000 mL (1 Liter). Berapakah nilai pH larutan setelah proses pengenceran tersebut?',
    options: [
      { key: 'A', text: 'pH = 3' },
      { key: 'B', text: 'pH = 4' },
      { key: 'C', text: 'pH = 5' },
      { key: 'D', text: 'pH = 7' },
    ],
    correctAnswer: 'C',
    explanation: 'Rumus pengenceran: M1 × V1 = M2 × V2. (10⁻³ M) × (10 mL) = M2 × (1.000 mL) → M2 = 10⁻⁵ M. Karena HCl asam kuat bervalensi 1, [H+] = 10⁻⁵ M. pH = -log[H+] = -log(10⁻⁵) = 5.'
  },
  {
    id: 22,
    category: 'IPA',
    difficulty: 'Menengah',
    question: 'Mengapa tubuh seseorang akan merasa kedinginan dan menggigil jauh lebih cepat saat diterpa angin kencang ketika pakaiannya basah dibandingkan saat pakaiannya kering pada suhu udara yang sama?',
    options: [
      { key: 'A', text: 'Karena air basah membekukan pori-pori kulit secara instan' },
      { key: 'B', text: 'Angin mempercepat penguapan (evaporasi) air yang menyerap kalor laten dalam jumlah besar dari tubuh' },
      { key: 'C', text: 'Karena kelembapan udara basah menghalangi aliran darah di pembuluh kapiler' },
      { key: 'D', text: 'Karena molekul air memiliki konduktivitas listrik yang menurunkan suhu' },
    ],
    correctAnswer: 'B',
    explanation: 'Penguapan (evaporasi) adalah proses endotermik yang memerlukan energi kalor laten penguapan (sekitar 2.260 kJ/kg). Aliran angin mempercepat laju evaporasi air dari pakaian, dan kalor tersebut diserap langsung dari panas tubuh, menyebabkan pendinginan evaporatif yang signifikan.'
  },
  {
    id: 23,
    category: 'IPA',
    difficulty: 'Menengah',
    question: 'Ketika sebuah sedotan dimasukkan secara miring ke dalam segelas air bening, sedotan tampak membengkok atau patah di perbatasan permukaan air. Peristiwa fisika ini terjadi akibat peristiwa:',
    options: [
      { key: 'A', text: 'Difraksi cahaya karena celah sempit air' },
      { key: 'B', text: 'Polarisasi cahaya oleh molekul hidrogen' },
      { key: 'C', text: 'Refraksi (pembiasan) cahaya akibat perubahan kecepatan rambat cahaya antarmedium' },
      { key: 'D', text: 'Refleksi baur di dasar wadah gelas' },
    ],
    correctAnswer: 'C',
    explanation: 'Peristiwa tersebut adalah refraksi (pembiasan cahaya). Cahaya merambat lebih lambat di dalam air (medium lebih rapat, indeks bias n ≈ 1,33) dibanding di udara (n ≈ 1,00). Perubahan kecepatan ini menyebabkan berkas cahaya dibelokkan mendekati garis normal saat memasuki air.'
  },

  // ==========================================
  // KATEGORI 5: PENGETAHUAN ISLAM (4 SOAL)
  // ==========================================
  {
    id: 24,
    category: 'Agama Islam',
    difficulty: 'Menengah',
    question: 'Menurut pandangan masyhur dalam Mazhab Syafi\'i, apakah status hukum melaksanakan shalat fardhu lima waktu secara berjamaah di masjid bagi kaum laki-laki yang telah baligh dan tidak beruzur syar\'i?',
    options: [
      { key: 'A', text: 'Fardhu Kifayah' },
      { key: 'B', text: 'Fardhu \'Ain bagi setiap individu' },
      { key: 'C', text: 'Makruh jika ditinggalkan' },
      { key: 'D', text: 'Mubah (boleh memilih)' },
    ],
    correctAnswer: 'A',
    explanation: 'Dalam mazhab Imam Syafi\'i menurut pendapat yang muktamad (resmi), shalat berjamaah untuk shalat fardhu lima waktu bagi laki-laki hukumnya adalah Fardhu Kifayah dalam satu lingkungan permukiman (sehingga syiar Islam tampak). Sebagian ulama Syafi\'iyyah juga berpendapat Sunnah Muakkadah.'
  },
  {
    id: 25,
    category: 'Agama Islam',
    difficulty: 'Menengah',
    question: 'Pada masa keemasan peradaban Islam (Islamic Golden Age) di bawah Dinasti Abbasiyah, didirikan pusat kajian ilmiah, perpustakaan raya, dan lembaga penerjemahan karya-karya filsafat dan sains internasional di Baghdad yang diprakarsai oleh Khalifah Harun Al-Rasyid dan dikembangkan oleh Khalifah Al-Ma\'mun. Nama lembaga bersejarah tersebut adalah:',
    options: [
      { key: 'A', text: 'Universitas Al-Azhar' },
      { key: 'B', text: 'Bayt al-Hikmah (House of Wisdom)' },
      { key: 'C', text: 'Darul Ulum Cordoba' },
      { key: 'D', text: 'Madrasah Nizamiyyah' },
    ],
    correctAnswer: 'B',
    explanation: 'Bayt al-Hikmah (Balai Kebijaksanaan / House of Wisdom) adalah pusat intelektual legendaris di Baghdad tempat para sarjana dari berbagai latar belakang menerjemahkan dan mengembangkan ilmu pengetahuan seperti matematika, astronomi, kedokteran, dan filsafat.'
  },
  {
    id: 26,
    category: 'Agama Islam',
    difficulty: 'Menengah',
    question: 'Dalam Hadits Jibril yang termaktub dalam Sahih Muslim dan Hadits Arba\'in An-Nawawi, Malaikat Jibril bertanya kepada Rasulullah SAW mengenai tingkatan tertinggi dalam beragama yaitu "Ihsan". Bagaimanakah Rasulullah mendefinisikan Ihsan?',
    options: [
      { key: 'A', text: 'Memberikan sedekah secara sembunyi-sembunyi hingga tangan kiri tidak tahu' },
      { key: 'B', text: 'Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya; jika engkau tidak dapat melihat-Nya, maka sesungguhnya Dia melihatmu' },
      { key: 'C', text: 'Menghafalkan seluruh isi Al-Qur\'an dan mengamalkannya dalam kehidupan' },
      { key: 'D', text: 'Menghormati orang tua dan menyambung silaturahmi dengan kaum kerabat' },
    ],
    correctAnswer: 'B',
    explanation: 'Sabda Nabi Muhammad SAW: "Al-Ihsan an ta\'budallaha ka-annaka tarahu, fa-in lam takun tarahu fa-innahu yaraka" (Engkau menyembah Allah seolah-olah engkau melihat-Nya, dan jika engkau tidak dapat melihat-Nya, sungguh Dia melihatmu).'
  },
  {
    id: 27,
    category: 'Agama Islam',
    difficulty: 'Menengah',
    question: 'Demi menjaga keaslian dan persatuan kaum muslimin akibat meluasnya wilayah dakwah dan perbedaan dialek bacaan (lahjah), khalifah yang memprakarsai kodifikasi dan standardisasi resmi mushaf Al-Qur\'an menjadi satu rujukan induk yang kemudian disalin dan dikirim ke berbagai kota metropolitan Islam adalah:',
    options: [
      { key: 'A', text: 'Khalifah Abu Bakar Ash-Shiddiq' },
      { key: 'B', text: 'Khalifah Umar bin Khattab' },
      { key: 'C', text: 'Khalifah Utsman bin Affan' },
      { key: 'D', text: 'Khalifah Ali bin Abi Thalib' },
    ],
    correctAnswer: 'C',
    explanation: 'Khalifah Utsman bin Affan r.a. membentuk kepanitiaan yang dipimpin Zaid bin Tsabit untuk menyatukan tulisan Al-Qur\'an dalam satu dialek standar Quraisy. Mushaf induk hasil kodifikasi ini dikenal dengan sebutan Mushaf Utsmani (Rasm Utsmani).'
  },

  // ==========================================
  // KATEGORI 6: PENGETAHUAN KRISTEN (3 SOAL)
  // ==========================================
  {
    id: 28,
    category: 'Pengetahuan Kristen',
    difficulty: 'Menengah',
    question: 'Dalam kanon Alkitab Perjanjian Lama, lima kitab pertama yang juga dikenal dalam tradisi Yahudi sebagai kitab Taurat (Pentateukh) yang dituliskan melalui Nabi Musa secara berurutan adalah:',
    options: [
      { key: 'A', text: 'Kejadian, Keluaran, Imamat, Bilangan, Ulangan' },
      { key: 'B', text: 'Kejadian, Mazmur, Amsal, Keluaran, Yosua' },
      { key: 'C', text: 'Keluaran, Imamat, Hakim-Hakim, Bilangan, Raja-Raja' },
      { key: 'D', text: 'Kejadian, Ayub, Keluaran, Ulangan, Yesaya' },
    ],
    correctAnswer: 'A',
    explanation: 'Pentateukh (dari bahasa Yunani yang berarti "lima jilid wadah") terdiri dari lima kitab awal Perjanjian Lama: Kejadian (Genesis), Keluaran (Exodus), Imamat (Leviticus), Bilangan (Numbers), dan Ulangan (Deuteronomy).'
  },
  {
    id: 29,
    category: 'Pengetahuan Kristen',
    difficulty: 'Menengah',
    question: 'Tokoh besar dalam Perjanjian Baru yang awalnya bernama Saulus dan giat menganiaya murid-murid Kristus mula-mula, namun mengalami pengalaman pertobatan dramatis setelah melihat cahaya dari langit dalam perjalanannya menuju kota Damaskus, kemudian menjadi rasul dan teolog terkemuka adalah:',
    options: [
      { key: 'A', text: 'Rasul Petrus (Simon Petrus)' },
      { key: 'B', text: 'Rasul Yohanes' },
      { key: 'C', text: 'Rasul Paulus (Santo Paulus)' },
      { key: 'D', text: 'Rasul Barnabas' },
    ],
    correctAnswer: 'C',
    explanation: 'Saulus dari Tarsus mengalami penglihatan Kristus yang bangkit dalam perjalanan ke Damaskus (Kisah Para Rasul 9). Setelah bertobat, ia dikenal sebagai Rasul Paulus yang menulis banyak surat epik dalam Perjanjian Baru dan menyebarkan ajaran kekristenan ke dunia Mediterania.'
  },
  {
    id: 30,
    category: 'Pengetahuan Kristen',
    difficulty: 'Menengah',
    question: 'Dalam surat Galatia pasal 5 ayat 22-23 yang ditulis Rasul Paulus, dicantumkan sembilan kebajikan moral dan spiritual yang disebut sebagai "Buah Roh" (Fruit of the Spirit). Manakah di antara pilihan berikut yang menyebutkan tiga di antara kebajikan tersebut?',
    options: [
      { key: 'A', text: 'Kekayaan, kekuasaan, dan kemasyhuran' },
      { key: 'B', text: 'Kasih, sukacita, dan damai sejahtera' },
      { key: 'C', text: 'Keberanian, kemenangan perang, dan kehormatan' },
      { key: 'D', text: 'Ketaatan aturan, disiplin fisik, dan puasa bicara' },
    ],
    correctAnswer: 'B',
    explanation: 'Galatia 5:22-23 menyatakan: "Tetapi buah Roh ialah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, penguasaan diri. Tidak ada hukum yang menentang hal-hal itu."'
  }
];

export const CATEGORY_META: Record<
  string,
  { label: string; iconName: string; color: string; bgClass: string; borderClass: string; totalQuestions: number }
> = {
  Matematika: {
    label: 'Matematika Sehari-hari',
    iconName: 'Calculator',
    color: '#8b5cf6',
    bgClass: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300',
    borderClass: 'border-purple-300 dark:border-purple-600/40',
    totalQuestions: 6,
  },
  Ekonomi: {
    label: 'Ekonomi & Keuangan',
    iconName: 'TrendingUp',
    color: '#ec4899',
    bgClass: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300',
    borderClass: 'border-pink-300 dark:border-pink-600/40',
    totalQuestions: 5,
  },
  Logika: {
    label: 'Logika & Penalaran',
    iconName: 'Brain',
    color: '#a855f7',
    bgClass: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300',
    borderClass: 'border-fuchsia-300 dark:border-fuchsia-600/40',
    totalQuestions: 7,
  },
  IPA: {
    label: 'Ilmu Pengetahuan Alam',
    iconName: 'Atom',
    color: '#06b6d4',
    bgClass: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300',
    borderClass: 'border-cyan-300 dark:border-cyan-600/40',
    totalQuestions: 5,
  },
  'Agama Islam': {
    label: 'Pengetahuan Islam',
    iconName: 'Moon',
    color: '#10b981',
    bgClass: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
    borderClass: 'border-emerald-300 dark:border-emerald-600/40',
    totalQuestions: 4,
  },
  'Pengetahuan Kristen': {
    label: 'Pengetahuan Kristen',
    iconName: 'Sparkles',
    color: '#f59e0b',
    bgClass: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
    borderClass: 'border-amber-300 dark:border-amber-600/40',
    totalQuestions: 3,
  },
};
