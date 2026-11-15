// ============================================================
// LABEL TERJUAL - Digimalz.id
// Muat file ini SEBELUM script.js
//
// Tulis:  "Nama Layanan": jumlah,
// Nama harus SAMA PERSIS dengan nama layanan di DATA (script.js).
// Belum ditulis atau diisi 0 = tampil "0 Terjual".
// Pakai angka asli penjualanmu ya.
// ============================================================
const TERJUAL = {
  // ----- Streaming Apps -----
  "YouTube": 42,
  "Netflix Via Email": 66,
  "Netflix Via Link": 35,
  "Vidio": 8,
  "Vision+": 3,
  "Disney+": 0,
  "Prime Video": 2,
  "Bstation": 4,
  "HBO Max Standar": 8,
  "HBO Max Ultimate": 2,
  "iQIYI": 11,
  "Viu": 17,
  "WeTV": 14,
  "Loklok": 5,

  // ----- Editing Apps -----
  "Canva": 87,
  "Capcut": 63,
  "Alight Motion": 44,
  "Picsart": 16,
  "Meitu": 12,
  "Wink": 6,

  // ----- Music Apps -----
  "Spotify": 45,
  "Apple Music": 3,

  // ----- AI Apps -----
  "ChatGPT Go": 4,
  "Gemini Pro": 2,

  // ----- Nokos WhatsApp -----
  "Region Indonesia": 0,
  "Region Malaysia": 0,
  "Region India": 0,
  "Region Singapore": 0,
};

// Tampilan: 15 -> "15 Terjual", 1500 -> "1,5RB Terjual", 2000000 -> "2JT Terjual"
function terjualBadge(nama) {
  // belum ditulis / 0 -> tetap tampil "0 Terjual"
  const n = TERJUAL[nama] > 0 ? TERJUAL[nama] : 0;

  const fmt = x => String(parseFloat(x.toFixed(1))).replace(".", ",");
  const teks =
    n >= 1000000 ? fmt(n / 1000000) + "JT" :
    n >= 1000 ? fmt(n / 1000) + "RB" :
    String(n);

  return `<span class="proses-badge terjual"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>${teks} Terjual</span>`;
}
