// script.js — dipakai bersama oleh semua halaman

// 1. Buka-tutup menu di tampilan HP
const tombolMenu = document.querySelector(".tombol-menu");
const menu = document.querySelector(".menu");

if (tombolMenu && menu) {
  tombolMenu.addEventListener("click", () => {
    menu.classList.toggle("buka");
  });
}

// 2. Tahun otomatis di footer
const tahun = document.querySelector("#tahun");
if (tahun) {
  tahun.textContent = new Date().getFullYear();
}

// 3. Form kontak (dummy): belum benar-benar mengirim data ke mana pun.
//    Nanti di sesi form, bagian ini diganti dengan Formspree / Supabase.
const form = document.querySelector("#form-kontak");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".pesan-terkirim").style.display = "block";
    form.reset();
  });
}
