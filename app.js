console.log("Pratikum dimulai");

// Aktivitas 1 DOM SELECTION
// Penjelasan kita harus menyeleksi atau "menangkap"
// Mengambil Elemen -> sip didalam variable java script

// 1. Mengambil Elemen Judul Berdasarkan ID
// Dokumen.getElementById("...") -> seleksi berdasasarkan id
const judulUtama = document.getElementById("judul-utama");

// 1.1 Mengambil Elemen Sub Judul
// tanda (#) Artinya menargetkan ID (.) menargetkan class
// querySelector(#...) Ambil Elemen HTML spesifik berdasarkan id
const subJudul = document.querySelector("#sub-judul");

// 2. Mengambil elemen pada kartu 1 (Kartu Manipulasi Teks & Style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. Mengambil Elemen Tombol" Aksi pada Kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil Elemen pada kartu 2 (fitur catatan dinamis / todolist)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

// Aktivitas 2: Manipulasi Teks & Style (pada Kartu 1)
// addEventListener("click", function(){...}) -> artinya tolong dengarkan dan tunggu
// setelah diclik oleh user jalankan perintah di dalam function {...}
btnUbahTeks.addEventListener("click", function () {
  // .innerText = Mengisi/menimpa tulisan teks yang ada di HTML
  teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

  // .style.color = Mengubah warna teks secara langsung melalui Javascript (inline)
  teksPreview.style.color = "#1619f6";

  // console.log = mencetak pesan di console
  console.log("DOM Teks Preview telah diperbaharui");
});

// B -- Manipulasi Class Css Menggunakan ClassListToggle()
btnToggleWarna.addEventListener("click", function () {
  // .classList.toggle (nama-class) -> menambahkan class jika belum ada, menghapus class jika sudah ada
  // jika  class tersbut belum ada pada elemen, maka class tersebut akan ditambahkan
  // jika class tersebut sudah ada pada elemen, maka class tersebut akan dihapus
  boxPreview.classList.toggle("active-mode");
  cardManipulasi.classList.toggle("highlight");

  console.log("DOM class hihglight berhasil di switch");
});

//mengembalikan teks dan warna teks priview ke default (reset)
btnReset.addEventListener("click", function () {
  // mengembalikan teks priview pada default atau reset
  teksPreview.style.color = "";

  //hapus class khusus menggunakan .classList.remove("nama-class")
  boxPreview.classList.remove("active-mode");
  cardManipulasi.classList.remove("highlight");

  console.log("DOM Box Priview telah di kembalikan ke default");
});

//aktivitas 3 dan 4 : membuat caatan dinamis (todolist) dan menghitung jumlah catatan pada kartu 2
//dibagian ini kita belajar membuat elemen html baru (<li>) secarra dinamis menggunakan js
// lalu  mengisi teksnya, memberi tombol hapus, lalau menempelkannya kedala layar

// langkah 1: membuat variabel untuk menmapung jumlah catatan
//"let" di ggunakan karena nilainya berubah ubah (multitable)
let totalCatatan = 0;

///langka 2: membuat fungsi untuk menambahkan catatan baru
// fungsi ini adala kumpulan peritah yang di beri nama. kita bisa memangginya kapanpun kita mau.
function tambahCatatan() {
  //masukan angka total.
  jumlahCatatan.innerText = totalCatatan;

  //percangan kondisi: apakah catatannya 0?
  if (totalCatatn === 0) {
    // jika hapus class "hidden" agar pesan "tidak adda catatan" muncul.
    pesanKosong.classList.remove("hidden");
  } else {
    //jika > 0 : tambahkan class "hidden" agar pesan "tidak ada catatan" hilang
    pesanKosong.classList.add("hidden");
  }
}

// Langkah 3: Membuat Fungsi untuk menambahkan catatan baru
function tambahCatatan() {
  // 3.1 inputCatatan.value -> Mengambil teks yang diketik user di input
  // .trim() -> Menghapus spasi di awal dan akhir teks
  const isiTeks = inputCatatan.value.trim();

  // 3.2 Validasi Input: Jika variabel isiTeks kosong(""), maka tampilkan alert
  if (isiTeks === "") {
    alert("Catatan tidak boleh kosong!");
    return; // Hentikan fungsi jika input kosong
  }

  // 3.3 createElement("li") -> Membuat elemen HTML baru <li> hanya di memori Javascript
  const liBaru = document.createElement("li");
  liBaru.className = "note-item"; // Memberi class agar tampilannya sesuai style CSS

  // 3.4 Mengisi teks catatan baru dengan cara innerHTML mengisi <li> dengan teks dan tombol hapus
  // Tanda Backtick (`) digunakan agar kita bisa menulis teks multi-baris dan menyisipkan variabel dengan ${variabel}
  liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

  // 3.5 Menambahkan EVent Listener pada tombol hapus di catatan <li> baru
  // querySelector(".btn-hapus") -> Menargetkan tombol hapus yang baru dibuat di dalam <li>
  const btnHapus = liBaru.querySelector(".btn-hapus");
  btnHapus.addEventListener("click", function () {
    // Menghapus <li> catatan baru dari daftarCatatan (<ul>)
    liBaru.remove(); // Menghapus elemen <li> dari DOM .remove()
    totalCatatan--; // Mengurangi jumlah catatan
    perbaruiJumlah(); // Memperbarui tampilan jumlah catatan
    console.log(`DOM Catatan "${isiTeks}" telah dihapus`);
  });

  // 3.6 .appendChild(liBaru) -> Menempelkan <li> baru ke dalam <ul> daftarCatatan
  daftarCatatan.appendChild(liBaru);

  // 3.7 Mengosongkan input setelah catatan ditambahkan
  inputCatatan.value = "";

  // 3.8 Menambah jumlah catatan dan memperbarui tampilan jumlah catatan
  totalCatatan++;
  perbaruiJumlah();

  console.log(`DOM Catatan baru ditambahkan : "${isiTeks}"`);
}

// Langkah 4: Event Listener untuk tombol tambah catatan
// Ketika tombol tambah diklik, jalankan fungsi tambahCatatan
btnTambah.addEventListener("click", function () {
  tambahCatatan();
});

// Langkah 5: Event Listener untuk menambahkan catatan ketika menekan tombol Enter di input
inputCatatan.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    tambahCatatan();
  }
});