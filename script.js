// ====== GANTI NOMOR WA TUJUAN ======
const WA_NUMBER = "628553333529";

const DATA = {
  "Streaming Apps": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "YouTube Famhead": { icon: "icon/yt.png", prices: { 1: 15000 } },
      "YouTube Indplane": { icon: "icon/yt.png", prices: { 1: 13000 } },
      "Netflix Log Via Email": { icon: "icon/netflix.png", prices: { 1: 28000 } },
      "Netflix Log Via Link": { icon: "icon/netflix.png", prices: { 1: 18000 } },
      "Vidio": { icon: "icon/vidio.png", prices: { 1: 20000, 2: 40000, 3: 60000 } },
      "Disney+": { icon: "icon/disney.png", prices: { 1: 28000, 2: 56000, 3: 84000 } },
  }
 }
};
// ============================================================

// Deskripsi tiap layanan — terpisah dari data harga, nggak nyampur

const DESCRIPTIONS = {
  "Aplikasi Premium": {
    "Canva": [
      {
        type: "paragraph",
        text: "Canva Pro adalah versi premium Canva dengan akses fitur, template, elemen, dan aset eksklusif untuk membuat desain lebih mudah dan profesional."
      },
      {
        type: "benefits",
        items: [
          "Akses Jutaan Template & Elemen",
          "Akses Ribuan Font Menarik",
          "Hapus Background Otomatis",
          "Simpan Design Jernih"
        ]
      },
      {
        type: "note",
        text: "Catatan: proses menggunakan sistem invite email canva kamu."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Capcut": [
      {
        type: "paragraph",
        text: "CapCut Pro adalah versi premium CapCut dengan fitur editing lebih lengkap, efek dan template eksklusif, serta akses berbagai tools premium untuk membuat video lebih keren dan profesional."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Akses Efek, Font & Template Pro",
          "Akses Tools AI",
          "Hapus Watermark",
          "Ekspor Video Kualitas Tinggi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Alight Motion": [
      {
        type: "paragraph",
        text: "Alight Motion Pro adalah versi premium Alight Motion dengan fitur editing lebih lengkap untuk membuat animasi, motion graphics, dan video profesional."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Akses Efek, Font & Template Pro",
          "Akses Tools AI",
          "Hapus Watermark",
          "Ekspor Video Kualitas Tinggi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "YouTube Famhead": [
      {
        type: "paragraph",
        text: "YouTube Premium Family Head adalah layanan berlangganan YouTube Premium bagi pemilik grup keluarga untuk menikmati video tanpa iklan, akses YouTube Music Premium, pemutaran di latar belakang, serta download video untuk ditonton secara offline."
      },
      {
        type: "benefits",
        items: [
          "Invite 5 Email Keluarga",
          "Tidak Ada Iklan",
          "Putar Video Di latar Belakang",
          "Kualitas Video Jernih",
          "Download Video Untuk Offline"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa menggunakan akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "YouTube Indplane": [
      {
        type: "paragraph",
        text: "YouTube Premium Individual adalah layanan berlangganan YouTube untuk menikmati video tanpa iklan, akses YouTube Music Premium, pemutaran di latar belakang, serta download video untuk ditonton secara offline."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Putar Video Di latar Belakang",
          "Kualitas Video Jernih",
          "Download Video Untuk Offline"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa menggunakan akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Netflix Log Via Email": [
      {
        type: "paragraph",
        text: "Netflix Premium adalah layanan streaming untuk menikmati berbagai film, serial, dan tayangan eksklusif dengan kualitas tinggi."
      },
      {
        type: "benefits",
        items: [
          "Akun Sharing 1P1U",
          "Login Via Email & Pass",
          "Akses Film & Serial Lengkap",
          "Tidak Ada Iklan",
          "Kualitas Video Jernih",
          "Support Semua Device"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Netflix Log Via Link": [
      {
        type: "paragraph",
        text: "Netflix Premium adalah layanan streaming untuk menikmati berbagai film, serial, dan tayangan eksklusif dengan kualitas tinggi."
      },
      {
        type: "benefits",
        items: [
          "Akun Sharing 1P1U",
          "Login Via Link/Tautan",
          "Akses Film & Serial Lengkap",
          "Tidak Ada Iklan",
          "Kualitas Video Jernih",
          "Support Semua Device"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Vidio": [
      {
        type: "paragraph",
        text: "Vidio Premium adalah layanan berlangganan Vidio untuk menikmati berbagai konten premium, live streaming olahraga, film, serial, dan tayangan eksklusif."
      },
      {
        type: "benefits",
        items: [
          "Akses Konten Premium & Eksklusif",
          "Live Streaming Olahraga Tertentu",
          "Lebih Banyak Channel TV Lokal",
          "Bisa Ditonton Di Berbagai Perangkat"
        ]
      },
      {
        type: "note",
        text: "Catatan: Bisa pakai akun pribadi"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Disney+": [
      {
        type: "paragraph",
        text: "Disney+ Premium adalah layanan streaming untuk menikmati film, serial, dan tayangan eksklusif dari Disney, Pixar, Marvel, Star Wars, dan lainnya."
      },
      {
        type: "benefits",
        items: [
          "Anti Screen Limit",
          "Akses Konten Eksklusif",
          "Kualitas Video Hingga 4K",
          "Religion Indonesia Only"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin. Akun Sharing, Kamu mendapatkan 1 Slot Profil Pribadi"
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Spotify": [
      {
        type: "paragraph",
        text: "Spotify Premium adalah layanan berlangganan Spotify untuk menikmati musik dan podcast tanpa iklan, download offline, serta fitur premium lainnya."
      },
      {
        type: "benefits",
        items: [
          "Paket Indplan",
          "Tidak Ada Iklan",
          "Pilih & Putar Lagu Bebas",
          "Download Lagu Untuk Offline",
          "Unlimited Skip"
        ]
      },
      {
        type: "note",
        text: "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Getcontact": [
      {
        type: "paragraph",
        text: "Getcontact Premium adalah layanan berlangganan dengan fitur tambahan untuk membantu mengelola dan mengenali nomor telepon dengan lebih lengkap."
      },
      {
        type: "benefits",
        items: [
          "Tidak Ada Iklan",
          "Identifikasi Nomor Lebih Lengkap",
          "Lihat Tag Nomor",
          "Lihat Siapa Yang Mencari Nomor Kamu",
          "Fitur Pencarian Premium"
        ]
      },
      {
        type: "note",
        text: "Catatan: Sistem proses pakai nomor WhatsApp kamu."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "ChatGPT": [
      {
        type: "paragraph",
        text: "ChatGPT Plus adalah paket premium ChatGPT dengan akses fitur dan model yang lebih lengkap untuk membantu berbagai kebutuhan, seperti belajar, bekerja, membuat konten, dan lainnya."
      },
      {
        type: "benefits",
        items: [
          "Akses Model AI Lebih Canggih",
          "Batas Penggunaan Lebih Tinggi",
          "Analisis File & Dokumen",
          "Prioritas Saat Trafik Tinggi",
          "Fitur AI Lebih Lengkap"
        ]
      },
      {
        type: "note",
        text: "Catatan: Sistem proses pakai email kamu."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ],

    "Gemini": [
      {
        type: "paragraph",
        text: "Gemini Advanced adalah layanan AI premium dari Google dengan akses fitur AI yang lebih canggih untuk membantu menulis, belajar, membuat ide, menganalisis informasi, dan berbagai kebutuhan lainnya."
      },
      {
        type: "benefits",
        items: [
          "Akses Model AI Premium",
          "Kemampuan Reasoning Lebih Canggih",
          "Analisis File & Dokumen",
          "Prioritas Saat Trafik Tinggi"
        ]
      },
      {
        type: "note",
        text: "Catatan: Sistem proses pakai email kamu."
      },
      {
        type: "paragraph",
        text: 'Dengan melakukan orderan Anda dianggap sudah memahami <a href="/sk" target="_blank" style="color: #038df2;">Syarat dan Ketentuan</a> Digimalz.id.'
      }
    ]
  }
};


let selectedSM = null;
let selectedService = null;
let qty = null;

const smBtn = document.getElementById("smBtn");
const smSelected = document.getElementById("smSelected");
const smList = document.getElementById("smList");
const smDropdown = document.getElementById("smDropdown");

const svBtn = document.getElementById("svBtn");
const svSelected = document.getElementById("svSelected");
const svList = document.getElementById("svList");
const svDropdown = document.getElementById("svDropdown");

const qtyStepper = document.getElementById("qtyStepper");
const qtyValue = document.getElementById("qtyValue");
const qtyLabel = document.getElementById("qtyLabel");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const priceValue = document.getElementById("priceValue");
const waBtn = document.getElementById("waBtn");
const toast = document.getElementById("toast");
const descBox = document.getElementById("descBox");
const descText = document.getElementById("descText");

let toastTimer;
function showToast(msg, color) {
  toast.textContent = msg;
  toast.style.background = color || "#038df2"; // default biru kalau nggak diisi
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function stepperLockMessage() {
  if (!selectedSM) return "Pilih kategori terlebih dahulu";
  if (!selectedService) return "Pilih layanan terlebih dahulu";
  return "";
}

function getPriceTable(sm, sv) {
  const service = DATA[sm].services[sv];
  return service.prices ? service.prices : service;
}

function getQtySteps() {
  const priceTable = getPriceTable(selectedSM, selectedService);
  return Object.keys(priceTable).map(Number).sort((a, b) => a - b);
}

function formatQtyDisplay() {
  if (qty === null) { qtyValue.textContent = "-"; return; }
  const unit = DATA[selectedSM].unit;
  qtyValue.textContent = unit === "bulan" ? `${qty} Bulan` : qty;
}

// bangun HTML deskripsi sesuai urutan yang ditentukan
function renderDescription(desc) {
  if (!desc) return "";

  return desc.map(item => {
    if (item.type === "paragraph") {
      return `<p>${item.text}</p>`;
    }

    if (item.type === "benefits") {
      return `<ul class="benefit-list">${item.items.map(b => `<li>${b}</li>`).join("")}</ul>`;
    }

    if (item.type === "note") {
      return `<p class="desc-note">${item.text}</p>`;
    }

    return "";
  }).join("");
}

Object.keys(DATA).forEach(sm => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${DATA[sm].icon}" alt="${sm}" class="sm-icon"><span>${sm}</span>`;
  li.addEventListener("click", () => {
    selectedSM = sm;
    smSelected.innerHTML = `<img src="${DATA[sm].icon}" alt="${sm}" class="sm-icon"> ${sm}`;
    smDropdown.classList.remove("open");
    smDropdown.classList.remove("attention");

    svDropdown.classList.remove("locked");
    svDropdown.classList.add("attention");

    selectedService = null;
    svSelected.textContent = "Pilih Layanan";
    svList.innerHTML = "";
    qtyStepper.classList.add("locked");
    qty = null;
    qtyValue.textContent = "-";
    qtyLabel.textContent = DATA[sm].unit === "bulan" ? "Pilih Durasi" : "Tentukan Jumlah";
    descBox.style.display = "none";

    Object.keys(DATA[sm].services).forEach(sv => {
      const liSv = document.createElement("li");
      const serviceIcon = DATA[sm].services[sv].icon;
      liSv.innerHTML = serviceIcon
        ? `<img src="${serviceIcon}" alt="${sv}" class="sm-icon"><span>${sv}</span>`
        : `<span>${sv}</span>`;
      liSv.addEventListener("click", () => {
        selectedService = sv;
        svSelected.innerHTML = serviceIcon
          ? `<img src="${serviceIcon}" alt="${sv}" class="sm-icon"> ${sv}`
          : sv;
        svDropdown.classList.remove("open");
        svDropdown.classList.remove("attention");
        qtyStepper.classList.remove("locked");

        const desc = DESCRIPTIONS[selectedSM]?.[sv];
        if (desc) {
          descText.innerHTML = renderDescription(desc);
          descBox.style.display = "block";
        } else {
          descBox.style.display = "none";
        }

        const steps = getQtySteps();
        qty = steps[0];
        formatQtyDisplay();

        updatePrice();
      });
      svList.appendChild(liSv);
    });

    updatePrice();
  });
  smList.appendChild(li);
});

smBtn.addEventListener("click", () => {
  svDropdown.classList.remove("open");
  smDropdown.classList.toggle("open");
});

svBtn.addEventListener("click", () => {
  if (svDropdown.classList.contains("locked")) {
    showToast("Pilih kategori terlebih dahulu");
    return;
  }
  smDropdown.classList.remove("open");
  svDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!smDropdown.contains(e.target)) smDropdown.classList.remove("open");
  if (!svDropdown.contains(e.target)) svDropdown.classList.remove("open");
});

plusBtn.addEventListener("click", () => {
  if (qtyStepper.classList.contains("locked")) {
    showToast(stepperLockMessage());
    return;
  }
  const steps = getQtySteps();
  const idx = steps.indexOf(qty);
  if (idx < steps.length - 1) {
    qty = steps[idx + 1];
    formatQtyDisplay();
    updatePrice();
  }
});

minusBtn.addEventListener("click", () => {
  if (qtyStepper.classList.contains("locked")) {
    showToast(stepperLockMessage());
    return;
  }
  const steps = getQtySteps();
  const idx = steps.indexOf(qty);
  if (idx > 0) {
    qty = steps[idx - 1];
    formatQtyDisplay();
    updatePrice();
  }
});

function updatePrice() {
  if (selectedSM && selectedService && qty !== null) {
    const priceTable = getPriceTable(selectedSM, selectedService);
    const total = priceTable[qty] ?? 0;
    priceValue.textContent = "Rp" + total.toLocaleString("id-ID");
    waBtn.disabled = total <= 0;
  } else {
    priceValue.textContent = "Rp0";
    waBtn.disabled = true;
  }
}

waBtn.addEventListener("click", () => {
  if (!selectedSM || !selectedService || qty === null) return;
  const priceTable = getPriceTable(selectedSM, selectedService);
  const total = priceTable[qty] ?? 0;
  if (total <= 0) return;
  const totalFormatted = "Rp" + total.toLocaleString("id-ID");
  const unit = DATA[selectedSM].unit;
  const jumlahLine = unit === "bulan" ? `Durasi: ${qty} Bulan` : `Jumlah: ${qty}`;

  const message =
`Halo Digimalz, saya mau order:

Sosial Media/Kategori: ${selectedSM}
Layanan: ${selectedService}
${jumlahLine}
Total Harga: ${totalFormatted}

Mohon info lebih lanjut. Terima kasih!`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// ============================================================
// NOTICE BAR - TEKS BERJALAN
// ============================================================

const noticeContent = document.querySelector(".notice-content");

const noticeMessages = [
  "Wellcome to Digimalz.id! 🎉 Pesan layanan produk digital dengan mudah dan cepat.",
  "Khusus pembelian pada kategori aplikasi premium, tanyakan stok terlebih dahulu sebelum transfer.",
  "Harga yang tertera pada website dapat berubah sewaktu-waktu tanpa pemberitahuan."
];

let noticeIndex = 0;

function runNotice() {
  noticeContent.innerHTML = "";

  const text = document.createElement("div");
  text.className = "notice-js";
  text.textContent = noticeMessages[noticeIndex];

  noticeContent.appendChild(text);

  requestAnimationFrame(() => {
    const containerWidth = noticeContent.offsetWidth;
    const textWidth = text.offsetWidth;

    let position = containerWidth;
    const speed = 1;

    function moveText() {
      position -= speed;
      text.style.transform = `translateX(${position}px)`;

      if (position < -textWidth) {
        noticeIndex++;
        if (noticeIndex >= noticeMessages.length) {
          noticeIndex = 0;
        }
        runNotice();
        return;
      }

      requestAnimationFrame(moveText);
    }

    moveText();
  });
}

window.addEventListener("load", () => {
  runNotice();
});

// ============================================================
// HAMBURGER MENU
// ============================================================

const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  menuPanel.classList.add("show");
  menuOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuPanel.classList.remove("show");
  menuOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// ============================================================
// TESTIMONI - CAROUSEL
// ============================================================

const testimonials = [
  { name: "Putri Kirana", username: "@puputtt", photo: "icon/cw1.png", text: "Prosesnya cepat banget, followers Instagram langsung masuk kurang dari 10 menit. Recommended!" },
  { name: "Rina Azzahra", username: "@rinasukamacha", photo: "icon/cw2.png", text: "Order Netflix Premium di sini, harganya murah dan akunnya awet. Pelayanannya juga ramah." },
  { name: "Tiara Agustina", username: "@tiaaa", photo: "icon/cw3.png", text: "Suka banget sama garansinya, kemarin sempet ada kendala langsung di-refill tanpa ribet." }
];

let testiIndex = 0;

const testiAvatar = document.getElementById("testiAvatar");
const testiName = document.getElementById("testiName");
const testiUsername = document.getElementById("testiUsername");
const testiText = document.getElementById("testiText");
const testiDots = document.getElementById("testiDots");
const testiPrev = document.getElementById("testiPrev");
const testiNext = document.getElementById("testiNext");

function renderTesti() {
  const t = testimonials[testiIndex];
  testiAvatar.src = t.photo;
  testiAvatar.alt = t.name;
  testiName.textContent = t.name;
  testiUsername.textContent = t.username;
  testiText.textContent = t.text;

  testiDots.innerHTML = "";
  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === testiIndex) dot.classList.add("active");
    testiDots.appendChild(dot);
  });
}

testiPrev.addEventListener("click", () => {
  testiIndex = testiIndex === 0 ? testimonials.length - 1 : testiIndex - 1;
  renderTesti();
});

testiNext.addEventListener("click", () => {
  testiIndex = testiIndex === testimonials.length - 1 ? 0 : testiIndex + 1;
  renderTesti();
});

renderTesti();

// ============================================================
// BANNER SLIDER
// ============================================================

const bannerBox = document.querySelector(".banner-box");
const bannerTrack = document.querySelector(".banner-track");
const bannerImages = document.querySelectorAll(".banner-track img");

let bannerIndex = 0;
let bannerTimer;

let startX = 0;
let currentX = 0;
let isDragging = false;

if (bannerTrack && bannerImages.length > 0) {

  function updateBanner() {
    bannerTrack.style.transition = "transform 0.5s ease";
    bannerTrack.style.transform = `translateX(-${bannerIndex * 100}%)`;
  }

  function startBannerTimer() {
    bannerTimer = setInterval(() => {
      bannerIndex++;
      if (bannerIndex >= bannerImages.length) {
        bannerIndex = 0;
      }
      updateBanner();
    }, 5000);
  }

  function stopBannerTimer() {
    clearInterval(bannerTimer);
  }

  function restartBannerTimer() {
    stopBannerTimer();
    startBannerTimer();
  }

  bannerBox.addEventListener("touchstart", (e) => {
    stopBannerTimer();
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    bannerTrack.style.transition = "none";
  }, { passive: true });

  bannerBox.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const moveX = currentX - startX;
    const offset = -(bannerIndex * 100) + (moveX / bannerBox.offsetWidth) * 100;
    bannerTrack.style.transform = `translateX(${offset}%)`;
  }, { passive: true });

  bannerBox.addEventListener("touchend", () => {
    if (!isDragging) return;
    const moveX = currentX - startX;
    bannerTrack.style.transition = "transform 0.5s ease";

    if (moveX < -50) {
      bannerIndex++;
    } else if (moveX > 50) {
      bannerIndex--;
    }

    if (bannerIndex >= bannerImages.length) {
      bannerIndex = 0;
    }
    if (bannerIndex < 0) {
      bannerIndex = bannerImages.length - 1;
    }

    updateBanner();
    isDragging = false;
    restartBannerTimer();
  });

  startBannerTimer();
}

// ==============================
// POPUP IKLAN
// ==============================

const AD_CONFIG = {
  enabled: true,

  image: "icon/popup.png",

  link: "#"
};


document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("adPopup");
  const closeBtn = document.getElementById("adPopupClose");
  const image = document.getElementById("adPopupImage");
  const link = document.getElementById("adPopupLink");

  if (!popup) return;


  // Kalau tidak ada iklan
  if (!AD_CONFIG.enabled || !AD_CONFIG.image) {
    popup.remove();
    return;
  }


  // Pasang gambar iklan
  image.src = AD_CONFIG.image;


  // Link iklan
  if (AD_CONFIG.link && AD_CONFIG.link !== "#") {
    link.href = AD_CONFIG.link;
  } else {
    link.removeAttribute("href");
    link.removeAttribute("target");
  }


  // Tampilkan popup
  setTimeout(() => {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  }, 500);


  // Tutup popup
  function closePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  }


  closeBtn.addEventListener("click", closePopup);


  // Klik area luar popup
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

});

// sembunyikan Crisp sepenuhnya saat halaman pertama dimuat
window.addEventListener("load", () => {
  $crisp.push(["do", "chat:hide"]);
});

// fungsi untuk menyembunyikan HANYA launcher bulat kecil bawaan Crisp,
// jendela chat (yang jauh lebih besar) dibiarkan tetap muncul normal
function hideCrispLauncher() {
  const chatbox = document.getElementById("crisp-chatbox");
  if (!chatbox) return;

  const allEls = chatbox.querySelectorAll("*");
  allEls.forEach(el => {
    const style = window.getComputedStyle(el);
    if (style.position !== "fixed") return;

    const rect = el.getBoundingClientRect();
    if (rect.width > 40 && rect.width < 90 && rect.height > 40 && rect.height < 90) {
      el.style.setProperty("display", "none", "important");
    }
  });
}

// pantau terus perubahan DOM Crisp, karena launcher bisa muncul lagi kapan saja
const crispObserver = new MutationObserver(() => {
  hideCrispLauncher();
});
crispObserver.observe(document.body, { childList: true, subtree: true });

// tombol custom kita
document.getElementById("customChatBtn").addEventListener("click", (e) => {
  e.preventDefault();
  $crisp.push(["do", "chat:show"]);
  $crisp.push(["do", "chat:open"]);
});

// ============================================================
// RATING CS POPUP
// ============================================================

const ratingOverlay = document.getElementById("ratingOverlay");
const ratingQuestion = document.getElementById("ratingQuestion");
const ratingButtons = document.getElementById("ratingButtons");
const ratingThanks = document.getElementById("ratingThanks");
const ratingNoBtn = document.getElementById("ratingNoBtn");
const ratingYesBtn = document.getElementById("ratingYesBtn");

let tombolX = 0;
let tombolY = 0;

function gerakinTombolTidak() {
  const radius = 150;

  const directions = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -0.7071, y: -0.7071 },
    { x: -0.7071, y: 0.7071 },
    { x: 0.7071, y: -0.7071 },
    { x: 0.7071, y: 0.7071 }
  ];

  const rect = ratingNoBtn.getBoundingClientRect();
  const margin = 10;

  const validDirections = directions.filter(dir => {
    const nextLeft = rect.left + dir.x * radius;
    const nextRight = rect.right + dir.x * radius;
    const nextTop = rect.top + dir.y * radius;
    const nextBottom = rect.bottom + dir.y * radius;

    return (
      nextLeft >= margin &&
      nextRight <= window.innerWidth - margin &&
      nextTop >= margin &&
      nextBottom <= window.innerHeight - margin
    );
  });

  if (!validDirections.length) return;

  const dir = validDirections[
    Math.floor(Math.random() * validDirections.length)
  ];

  tombolX += dir.x * radius;
  tombolY += dir.y * radius;

  ratingNoBtn.style.transition = "transform 0.25s ease";
  ratingNoBtn.style.transform =
    `translate(${tombolX}px, ${tombolY}px)`;

  const jumpSound = document.getElementById("jumpSound");

  if (jumpSound) {
    jumpSound.currentTime = 0;
    jumpSound.play().catch(() => {});
  }
}

function resetTombolTidak() {
  tombolX = 0;
  tombolY = 0;

  ratingNoBtn.style.transition = "transform 0.25s ease";
  ratingNoBtn.style.transform = "translate(0, 0)";
}

ratingNoBtn.addEventListener(
  "mouseenter",
  gerakinTombolTidak
);

ratingNoBtn.addEventListener(
  "touchstart",
  e => {
    e.preventDefault();
    gerakinTombolTidak();
  }
);

$crisp.push([
  "on",
  "chat:closed",
  () => {
    resetTombolTidak();

    ratingQuestion.style.display = "block";
    ratingButtons.style.display = "flex";

    ratingThanks.classList.remove("show");

    ratingOverlay.classList.add("show");
  }
]);

ratingYesBtn.addEventListener(
  "click",
  () => {

    const puasSound =
      document.getElementById("puasSound");

    if (puasSound) {
      puasSound.currentTime = 0;
      puasSound.play().catch(() => {});
    }

    resetTombolTidak();

    ratingQuestion.style.display = "none";
    ratingButtons.style.display = "none";

    ratingThanks.classList.add("show");

    const bar =
      document.getElementById("ratingProgressBar");

    if (bar) {
      bar.style.animation = "none";
      bar.offsetHeight;
      bar.style.animation =
        "shrinkBar 5.5s linear forwards";
    }

    setTimeout(() => {
      ratingOverlay.classList.remove("show");
    }, 5500);
  }
);
