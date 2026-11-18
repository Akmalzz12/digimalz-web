// ============================================================
// NOTIFIKASI PEMBELIAN - Digimalz.id
// Muat file ini di index.html (boleh sebelum atau sesudah script.js)
// ============================================================
(function () {
  "use strict";

  // ====== PENGATURAN ======
  const POSISI = "bawah"; // "bawah" = naik dari bawah | "atas" = turun dari atas
  const MULAI = 6000;     // notif pertama muncul setelah (ms)
  const LAMA = 3000;      // lama notif tampil (ms) = 3 detik
  const JEDA = 9000;      // jeda sebelum notif berikutnya (ms)
  // ========================

  // ====== DAFTAR PEMBELIAN ======
  // Isi dengan pesanan ASLI yang sudah selesai.
  // - nomor : tulis yang SUDAH DISAMARKAN, contoh "0812****3456".
  //           Jangan tulis nomor lengkap, karena file ini bisa dibaca siapa pun.
  // - produk: harus SAMA PERSIS dengan nama layanan di DATA (script.js),
  //           supaya logo aplikasinya ikut tampil.
  const PEMBELIAN = [
    // { nomor: "0812****3456", produk: "Spotify" },
    // { nomor: "0857****9021", produk: "Canva" },
  ];
  // ==============================

  const ANIMASI = 450; // harus sama dengan durasi transisi di CSS

  // Pengaman: kalau terlanjur ada nomor lengkap, tampilkan hanya 4 angka awal & akhir
  function samarkan(nomor) {
    const s = String(nomor).trim();
    if (s.indexOf("*") !== -1) return s;
    const d = s.replace(/\D/g, "");
    return d.length >= 8 ? d.slice(0, 4) + "****" + d.slice(-4) : s;
  }

  // Logo diambil dari DATA, jadi tidak perlu menulis ulang alamat gambarnya
  function cariIcon(nama) {
    if (typeof DATA === "undefined") return "";
    for (const sm in DATA) {
      const svs = DATA[sm].services || {};
      if (Object.prototype.hasOwnProperty.call(svs, nama)) {
        return svs[nama].icon || DATA[sm].icon || "";
      }
    }
    return "";
  }

  if (!PEMBELIAN.length) return;

  const el = document.createElement("div");
  el.className = "buy-notif " + (POSISI === "atas" ? "atas" : "bawah");
  el.setAttribute("aria-live", "polite");
  el.innerHTML =
    '<img class="buy-notif-img" alt="">' +
    '<div class="buy-notif-text">' +
      '<span class="buy-notif-num"></span> membeli ' +
      '<strong class="buy-notif-prod"></strong>' +
    "</div>";
  document.body.appendChild(el);

  const imgEl = el.querySelector(".buy-notif-img");
  const numEl = el.querySelector(".buy-notif-num");
  const prodEl = el.querySelector(".buy-notif-prod");

  let i = 0;

  function tampil() {
    // tab sedang tidak dilihat: tunda saja
    if (document.hidden) {
      setTimeout(tampil, 2000);
      return;
    }

    const item = PEMBELIAN[i % PEMBELIAN.length];
    i++;

    numEl.textContent = samarkan(item.nomor);
    prodEl.textContent = item.produk;

    const icon = cariIcon(item.produk);
    if (icon) {
      imgEl.src = icon;
      imgEl.style.display = "";
    } else {
      imgEl.removeAttribute("src");
      imgEl.style.display = "none";
    }

    el.classList.add("show"); // masuk

    // tampil LAMA detik setelah selesai masuk, lalu keluar ke arah yang sama
    setTimeout(function () {
      el.classList.remove("show");
      setTimeout(tampil, ANIMASI + JEDA);
    }, ANIMASI + LAMA);
  }

  setTimeout(tampil, MULAI);
})();
    
