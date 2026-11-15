// ============================================================
// LABEL TERJUAL - Digimalz.id
// Muat file ini SEBELUM script.js
//
// Tulis:  "Nama Layanan": jumlah,
// Nama harus SAMA PERSIS dengan nama layanan di DATA (script.js).
// Isi 0 (atau hapus barisnya) = tanpa label terjual.
// Pakai angka asli penjualanmu ya.
// ============================================================
const TERJUAL = {
  // ----- Streaming Apps -----
  "YouTube": 0,
  "Netflix Via Email": 0,
  "Netflix Via Link": 0,
  "Vidio": 0,
  "Vision+": 0,
  "Disney+": 0,
  "Prime Video": 0,
  "Bstation": 0,
  "HBO Max Standar": 0,
  "HBO Max Ultimate": 0,
  "iQIYI": 0,
  "Viu": 0,
  "WeTV": 0,
  "Loklok": 0,

  // ----- Editing Apps -----
  "Canva": 0,
  "Capcut": 0,
  "Alight Motion": 0,
  "Picsart": 0,
  "Meitu": 0,
  "Wink": 0,

  // ----- Music Apps -----
  "Spotify": 0,
  "Apple Music": 0,

  // ----- AI Apps -----
  "ChatGPT Go": 0,
  "Gemini Pro": 0,

  // ----- Nokos WhatsApp -----
  "Region Indonesia": 0,
  "Region Malaysia": 0,
  "Region India": 0,
  "Region Singapore": 0,
};

// Tampilan: 15 -> "15 Terjual", 1500 -> "1,5RB Terjual", 2000000 -> "2JT Terjual"
function terjualBadge(nama) {
  const n = TERJUAL[nama];
  if (!n || n <= 0) return "";

  const fmt = x => String(parseFloat(x.toFixed(1))).replace(".", ",");
  const teks =
    n >= 1000000 ? fmt(n / 1000000) + "JT" :
    n >= 1000 ? fmt(n / 1000) + "RB" :
    String(n);

  return `<span class="proses-badge terjual"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>${teks} Terjual</span>`;
      }
