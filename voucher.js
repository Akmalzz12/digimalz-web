// ============================================================
// VOUCHER DISKON - Digimalz.id
// Muat file ini SEBELUM script.js
// ============================================================
(function () {
  "use strict";

  const VOUCHER_AKTIF = true;

  const VOUCHERS = [
    {
      aktif: true,
      code: "DGM11",
      potongan: 1000,
      min: 5000,
      sekaliPakai: false,
      expires: "2026-11-25T23:59:59+07:00",
      logo: "icon/logo2.png"
    }
  ];
  // ==================================

  const KEY = "dgm_vc_used";
  const rp = n => "Rp" + n.toLocaleString("id-ID");

  // Singkat: 5000 -> Rp5RB, 1500 -> Rp1,5RB, 2000000 -> Rp2JT
  const rpShort = n => {
    const fmt = x => String(parseFloat(x.toFixed(1))).replace(".", ",");
    if (n >= 1000000) return "Rp" + fmt(n / 1000000) + "JT";
    if (n >= 1000) return "Rp" + fmt(n / 1000) + "RB";
    return "Rp" + n;
  };

  let applied = null; // kode voucher yang sedang dipilih
  let lastTotal = 0;  // harga normal produk yang sedang dipilih

  // ---------- Penyimpanan: voucher yang sudah terpakai ----------
  // Disimpan di localStorage + cookie sebagai cadangan.
  function readUsed() {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (!Array.isArray(list)) list = [];
    } catch (e) {
      list = [];
    }
    const m = document.cookie.match(/(?:^|; )dgm_vc_used=([^;]*)/);
    if (m && m[1]) {
      m[1].split("~").forEach(c => {
        c = decodeURIComponent(c);
        if (c && list.indexOf(c) === -1) list.push(c);
      });
    }
    return list;
  }

  function saveUsed(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) {}
    document.cookie =
      "dgm_vc_used=" + list.map(encodeURIComponent).join("~") +
      "; max-age=31536000; path=/; SameSite=Lax";
  }

  // ---------- Aturan voucher ----------
  const find = code => VOUCHERS.find(v => v.code === code);
  const isUsed = code => {
    const v = find(code);
    return !!(v && v.sekaliPakai) && readUsed().indexOf(code) !== -1;
  };
  const isExpired = v => Date.now() >= new Date(v.expires).getTime();
  const usable = (v, total) => !isUsed(v.code) && !isExpired(v) && total >= v.min;

  function discountOf(v) {
    return v.potongan > 0 ? v.potongan : 0;
  }

  function calc(total) {
    const v = applied ? find(applied) : null;
    if (!v || total <= 0 || !usable(v, total)) {
      return { final: total, discount: 0, code: null };
    }
    const d = Math.min(discountOf(v), total);
    return { final: total - d, discount: d, code: v.code };
  }

  // ---------- Teks waktu ----------
  function timeInfo(v) {
    const ms = new Date(v.expires).getTime() - Date.now();
    if (ms < 86400000) {
      const jam = Math.floor(ms / 3600000);
      const text = jam >= 1
        ? "Sisa " + jam + " Jam lagi"
        : "Sisa " + Math.max(1, Math.ceil(ms / 60000)) + " Menit lagi";
      return { text: text, urgent: true };
    }
    const tgl = new Date(v.expires).toLocaleDateString("id-ID", {
      timeZone: "Asia/Jakarta",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    return { text: "Hingga " + tgl, urgent: false };
  }

  // ---------- Tampilan ----------
  let listEl = null;
  let boxEl = null;
  let savingEl = null;

  function cardHTML(v) {
    const used = isUsed(v.code);
    const isApplied = applied === v.code;
    const belumMin = lastTotal > 0 && lastTotal < v.min;
    const disabled = used || lastTotal < v.min;

    const minText = "Min. Blj " + rpShort(v.min);

    let infoLine;
    if (used) {
      infoLine = '<small>Sudah dipakai di perangkat ini</small>';
    } else if (belumMin) {
      infoLine = '<small class="warn">Tambah ' + rp(v.min - lastTotal) + ' lagi untuk pakai</small>';
    } else {
      const t = timeInfo(v);
      infoLine = '<small class="' + (t.urgent ? "urgent" : "") + '">' + t.text + "</small>";
    }

    const label = used ? "Terpakai" : isApplied ? "Dipakai" : "Pakai";
    const cls = "voucher" + (isApplied ? " applied" : "") + (disabled ? " disabled" : "");

    return (
      '<div class="' + cls + '" data-code="' + v.code + '">' +
        '<div class="voucher-logo"><img src="' + v.logo + '" alt=""></div>' +
        '<div class="voucher-body">' +
          '<div class="voucher-info">' +
            "<strong>Diskon " + rp(v.potongan) + "</strong>" +
            "<span>" + minText + "</span>" +
            infoLine +
          "</div>" +
          '<button type="button" class="voucher-btn"' + (disabled ? " disabled" : "") + ">" + label + "</button>" +
        "</div>" +
      "</div>"
    );
  }

  function render() {
    if (!listEl) return;

    const visible = VOUCHERS.filter(v => v.aktif !== false && !isExpired(v));
    // voucher baru muncul setelah kategori & layanan dipilih (harga sudah ada)
    boxEl.style.display = (visible.length && lastTotal > 0) ? "" : "none";
    listEl.innerHTML = visible.map(cardHTML).join("");

    const c = calc(lastTotal);
    if (c.code) {
      savingEl.textContent = "Hemat " + rp(c.discount) + " (harga normal " + rp(lastTotal) + ")";
      savingEl.classList.add("show");
    } else {
      savingEl.classList.remove("show");
    }
  }

  // Panggil updatePrice() milik script.js
  function syncPrice() {
    if (typeof updatePrice === "function") updatePrice();
  }

  // ---------- Popup ajakan pakai promo ----------
  let popEl = null;
  let pending = null;   // { v, onSkip }
  let skipOnce = false; // true = pembeli memilih lanjut tanpa promo

  // voucher terbaik yang bisa dipakai untuk total ini
  function bestOffer(total) {
    let best = null;
    VOUCHERS.forEach(v => {
      if (v.aktif === false || !usable(v, total)) return;
      if (!best || discountOf(v) > discountOf(best)) best = v;
    });
    return best;
  }

  function closePopup() {
    if (popEl) popEl.classList.remove("show");
  }

  function buildPopup() {
    popEl = document.createElement("div");
    popEl.className = "promo-pop-overlay";
    popEl.innerHTML =
      '<div class="promo-pop" role="dialog" aria-modal="true">' +
        '<div class="promo-pop-icon">' +
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/>' +
            '<line x1="12" y1="22" x2="12" y2="7"/>' +
            '<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>' +
            '<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>' +
          "</svg>" +
        "</div>" +
        "<h3>Yakin nih ga mau pakai promo?</h3>" +
        "<p>Pakai aja! Gapapa kok 😉</p>" +
        '<div class="promo-pop-info"></div>' +
        '<button type="button" class="promo-pop-yes">Pakai Promo</button>' +
        '<button type="button" class="promo-pop-skip">Lanjut tanpa promo</button>' +
      "</div>";
    document.body.appendChild(popEl);

    popEl.addEventListener("click", function (e) {
      if (e.target === popEl) {            // klik di luar kotak = batal
        closePopup();
        return;
      }
      if (e.target.closest(".promo-pop-yes")) {
        applied = pending.v.code;
        closePopup();
        render();
        syncPrice();
        if (typeof showToast === "function") showToast("Voucher Berhasil Dipakai");
      } else if (e.target.closest(".promo-pop-skip")) {
        closePopup();
        skipOnce = true;
        if (pending && pending.onSkip) pending.onSkip();
      }
    });
  }

  function openPopup(v, total, onSkip) {
    if (!popEl) buildPopup();
    pending = { v: v, onSkip: onSkip };
    const d = Math.min(discountOf(v), total);
    popEl.querySelector(".promo-pop-info").innerHTML =
      "<strong>Diskon " + rp(d) + "</strong>" +
      "<span>Harga jadi " + rp(total - d) + " (dari " + rp(total) + ")</span>";
    popEl.classList.add("show");
  }

  // ---------- API untuk script.js ----------
  window.Voucher = {
    // dipanggil saat tombol Order diklik. true = popup tampil (order ditahan)
    offer: function (total, onSkip) {
      if (!VOUCHER_AKTIF || applied || total <= 0) return false;
      if (skipOnce) { skipOnce = false; return false; }
      const v = bestOffer(total);
      if (!v) return false;
      openPopup(v, total, onSkip);
      return true;
    },

    calc: calc,

    // dipanggil dari updatePrice() setiap harga berubah
    refresh: function (total) {
      lastTotal = total > 0 ? total : 0;
      const v = applied ? find(applied) : null;
      if (applied && (lastTotal <= 0 || !v || !usable(v, lastTotal))) applied = null;
      render();
    },

    // dipanggil setelah order dikirim ke WhatsApp
    consume: function () {
      if (!applied) return;
      const v = find(applied);
      if (!v || !v.sekaliPakai) return; // voucher berulang: tidak dihanguskan
      const list = readUsed();
      if (list.indexOf(applied) === -1) list.push(applied);
      saveUsed(list);
      applied = null;
      render();
    }
  };

  // ---------- Pasang ke halaman ----------
  const priceBox = document.querySelector(".price-box");
  if (!VOUCHER_AKTIF || !priceBox || !VOUCHERS.length) return;

  boxEl = document.createElement("div");
  boxEl.className = "field voucher-field";
  boxEl.innerHTML =
    "<label>Voucher Diskon</label>" +
    '<div class="voucher-list"></div>' +
    '<p class="voucher-saving"></p>';
  priceBox.parentNode.insertBefore(boxEl, priceBox);

  listEl = boxEl.querySelector(".voucher-list");
  savingEl = boxEl.querySelector(".voucher-saving");

  listEl.addEventListener("click", function (e) {
    const btn = e.target.closest(".voucher-btn");
    if (!btn || btn.disabled) return;
    const code = btn.closest(".voucher").getAttribute("data-code");

    if (applied === code) {
      applied = null;
    } else {
      applied = code;
      if (typeof showToast === "function") showToast("Voucher Berhasil Dipakai");
    }
    render();
    syncPrice();
  });

  // Perbarui hitung mundur & matikan voucher yang kedaluwarsa
  setInterval(function () {
    const before = applied;
    window.Voucher.refresh(lastTotal);
    if (before && !applied) syncPrice();
  }, 30000);

  render();
})();