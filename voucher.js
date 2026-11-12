// ============================================================
// VOUCHER DISKON - Digimalz.id
// Muat file ini SEBELUM script.js
// ============================================================
(function () {
  "use strict";

  // ====== ATUR VOUCHER DI SINI ======
  // code        : kode unik (huruf besar, tanpa spasi)
  // percent     : besar diskon dalam persen
  // min         : minimal belanja (Rp). 0 = tanpa minimal
  // maxDiscount : batas maksimal potongan (Rp). 0 = tanpa batas
  // expires     : batas waktu (format ISO, +07:00 = WIB)
  // logo        : gambar di sisi kiri kartu
  const VOUCHERS = [
    {
      code: "DIGI5",
      percent: 5,
      min: 0,
      maxDiscount: 0,
      expires: "2026-11-13T23:59:59+07:00",
      logo: "icon/logo.png"
    }
  ];
  // ==================================

  const KEY = "dgm_vc_used";
  const rp = n => "Rp" + n.toLocaleString("id-ID");

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
  const isUsed = code => readUsed().indexOf(code) !== -1;
  const isExpired = v => Date.now() >= new Date(v.expires).getTime();
  const usable = (v, total) => !isUsed(v.code) && !isExpired(v) && total >= v.min;

  function discountOf(v, total) {
    let d = Math.floor(total * v.percent / 100);
    if (v.maxDiscount > 0) d = Math.min(d, v.maxDiscount);
    return d;
  }

  function calc(total) {
    const v = applied ? find(applied) : null;
    if (!v || total <= 0 || !usable(v, total)) {
      return { final: total, discount: 0, code: null, percent: 0 };
    }
    const d = Math.min(discountOf(v, total), total);
    return { final: total - d, discount: d, code: v.code, percent: v.percent };
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

    let minText = "Min. blj " + rp(v.min);
    if (v.maxDiscount > 0) minText += " · Maks. " + rp(v.maxDiscount);

    let infoLine;
    if (used) {
      infoLine = '<small>Sudah dipakai di perangkat ini</small>';
    } else if (belumMin) {
      infoLine = '<small class="warn">Belanja ' + rp(v.min - lastTotal) + ' lagi untuk pakai</small>';
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
            "<strong>Diskon " + v.percent + "%</strong>" +
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

    const visible = VOUCHERS.filter(v => !isExpired(v));
    boxEl.style.display = visible.length ? "" : "none";
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

  // ---------- API untuk script.js ----------
  window.Voucher = {
    calc: calc,

    // dipanggil dari updatePrice() setiap harga berubah
    refresh: function (total) {
      lastTotal = total > 0 ? total : 0;
      const v = applied ? find(applied) : null;
      if (applied && (!v || !usable(v, lastTotal))) applied = null;
      render();
    },

    // dipanggil setelah order dikirim ke WhatsApp
    consume: function () {
      if (!applied) return;
      const list = readUsed();
      if (list.indexOf(applied) === -1) list.push(applied);
      saveUsed(list);
      applied = null;
      render();
    }
  };

  // ---------- Pasang ke halaman ----------
  const priceBox = document.querySelector(".price-box");
  if (!priceBox || !VOUCHERS.length) return;

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
      if (typeof showToast === "function") showToast("Voucher " + code + " dipakai");
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
                                             
