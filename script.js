// ====== GANTI NOMOR WA TUJUAN ======
const WA_NUMBER = "628553333529";

const DATA = {
  "Aplikasi Premium": {
    icon: "icon/app.png",
    unit: "bulan",
    services: {
      "Canva": { icon: "icon/canva.png", prices: { 1: 2500, 2: 5000, 3: 7000 } },
      "Capcut": { icon: "icon/capcut.png", prices: { 1: 37000, 2: 74000, 3: 111000 } },
      "Alight Motion": { icon: "icon/am.png", prices: { 1: 5000, 2: 10000, 3: 15000 } },
      "YouTube": { icon: "icon/yt.png", prices: { 1: 5000, 2: 10000, 3: 15000 } },
      "Netflix": { icon: "icon/netflix.png", prices: { 1: 25000, 2: 50000, 3: 75000 } },
      "Vidio": { icon: "icon/vidio.png", prices: { 1: 20000, 2: 40000, 3: 60000 } },
      "Disney+": { icon: "icon/disney.png", prices: { 1: 28000, 2: 56000, 3: 84000 } },
      "Spotify": { icon: "icon/spotify.png", prices: { 1: 32000, 2: 64000, 3: 96000 } },
      "Getcontact": { icon: "icon/gtc.png", prices: { 1: 10000, 2: 20000, 3: 30000 } },
      "ChatGPT": { icon: "icon/gpt.png", prices: { 1: 20000, 2: 40000, 3: 60000 } },
      "Gemini": { icon: "icon/gemini.png", prices: { 1: 18000, 2: 36000, 3: 54000 } }
    }
  },
  "Suntik Instagram": {
    icon: "icon/ig.png",
    services: {
      "Followers": { 1000: 13000, 2000: 26000, 3000: 39000, 4000: 52000, 5000: 65000, 6000: 78000, 7000: 91000, 8000: 104000, 9000: 117000, 10000: 130000 },
      "Likes": { 100: 2000, 200: 4000, 300: 6000, 400: 8000, 500: 10000, 1000: 15000, 2000: 25000, 3000: 35000, 4000: 45000, 5000: 50000 },
      "Komentar": { 10: 5000, 20: 10000, 30: 15000, 40: 20000, 50: 25000, 60: 30000, 70: 35000, 80: 40000, 90: 45000, 100: 50000 }
    }
  },
  "Suntik TikTok": {
    icon: "icon/tt.png",
    services: {
      "Followers": { 100: 5000, 200: 8000, 300: 12000, 400: 16000, 500: 20000, 1000: 40000, 2000: 80000, 3000: 120000, 4000: 160000, 5000: 200000 },
      "Likes": { 100: 2000, 200: 4000, 300: 6000, 400: 8000, 500: 9000, 1000: 10000, 2000: 15000, 3000: 20000, 4000: 25000, 5000: 30000 },
      "Views": { 1000: 3000, 2000: 6000, 3000: 9000, 4000: 12000, 5000: 15000, 6000: 18000, 7000: 21000, 8000: 24000, 9000: 27000, 10000: 30000 }
    }
  },
  "Suntik Shopee": {
    icon: "icon/sp.png",
    services: {
      "Followers": { 100: 2000, 200: 4000, 300: 6000, 400: 8000, 500: 10000, 1000: 20000, 2000: 40000, 3000: 60000, 4000: 80000, 5000: 100000 },
      "Likes": { 100: 1000, 200: 2000, 300: 3000, 400: 4000, 500: 5000, 1000: 10000, 2000: 20000, 3000: 30000, 4000: 40000, 5000: 50000 },
      "Komentar": { 10: 5000, 20: 10000, 30: 15000, 40: 20000, 50: 25000, 60: 30000, 70: 35000, 80: 40000, 90: 45000, 100: 50000 }
    }
  },
  "Suntik X/Twitter": {
    icon: "icon/x.png",
    services: {
      "Followers": { 100: 3000, 200: 6000, 300: 9000, 400: 12000, 500: 15000, 1000: 20000, 2000: 40000, 3000: 60000, 4000: 80000, 5000: 100000 },
      "Likes": { 100: 1000, 200: 2000, 300: 3000, 400: 4000, 500: 5000, 1000: 10000, 2000: 15000, 3000: 20000, 4000: 25000, 5000: 30000 },
      "Views": { 1000: 2000, 2000: 4000, 3000: 6000, 4000: 8000, 5000: 10000, 6000: 12000, 7000: 14000, 8000: 16000, 9000: 18000, 10000: 20000 }
    }
  },
  "Suntik Facebook": {
    icon: "icon/fb.png",
    services: {
      "Followers": { 100: 2000, 200: 4000, 300: 6000, 400: 8000, 500: 10000, 1000: 15000, 2000: 30000, 3000: 45000, 4000: 60000, 5000: 75000 },
      "Likes": { 100: 2000, 200: 4000, 300: 6000, 400: 8000, 500: 10000, 1000: 15000, 2000: 30000, 3000: 45000, 4000: 60000, 5000: 75000 },
      "Views": { 1000: 2000, 2000: 4000, 3000: 6000, 4000: 8000, 5000: 10000, 6000: 12000, 7000: 14000, 8000: 16000, 9000: 18000, 10000: 20000 }
    }
  }
};
// Belum ada gambar pricelist utk Instagram Views, TikTok Komentar, Shopee Views, X/Twitter Komentar.
// Siapin file icon aplikasi (canva.png, capcut.png, dst) di folder icon/.
// ============================================================

// Deskripsi tiap layanan — terpisah dari data harga, nggak nyampur
const DESCRIPTIONS = {
  "Aplikasi Premium": {
    "Canva": {
      paragraphs: [
        "Canva Pro adalah versi premium Canva dengan akses fitur, template, elemen, dan aset eksklusif untuk membuat desain lebih mudah dan profesional.",
      ],
      benefits: [
        "Akses Jutaan Template & Elemen",
        "Akses Ribuan Font Menarik",
        "Hapus Background Otomatis",
        "Simpan Design Jernih"
      ],
      notes: [
        "Catatan: proses menggunakan sistem invite email canva kamu."
      ]
    },
    "Capcut": {
      paragraphs: [
        "CapCut Pro adalah versi premium CapCut dengan fitur editing lebih lengkap, efek dan template eksklusif, serta akses berbagai tools premium untuk membuat video lebih keren dan profesional."
      ],
      benefits: [
        "Tidak Ada Iklan",
        "Akses Efek, Font & Template Pro",
        "Akses Tools AI",
        "Hapus Watermark",
        "Ekspor Video Kualitas Tinggi"
      ],
      notes: [
        "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      ]
    },
    "Alight Motion": {
      paragraphs: [
        "Alight Motion Pro adalah versi premium Alight Motion dengan fitur editing lebih lengkap untuk membuat animasi, motion graphics, dan video profesional."
      ],
      benefits: [
        "Tidak Ada Iklan",
        "Akses Efek, Font & Template Pro",
        "Akses Tools AI",
        "Hapus Watermark",
        "Ekspor Video Kualitas Tinggi"
      ],
      notes: [
        "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      ]
    },
    "YouTube": {
      paragraphs: [
        "YouTube Premium adalah layanan berlangganan YouTube untuk menikmati video tanpa iklan, akses YouTube Music, serta fitur tambahan lainnya."
      ],
      benefits: [
        "Tidak Ada Iklan",
        "Putar Video Di latar Belakang",
        "Kualitas Video Jernih",
        "Download Video Untuk Offline"
      ],
      notes: [
        "Catatan: Akun bisa dari pribadi, dan bisa dari admin"
      ]
    },
    "Netflix": {
      paragraphs: [
        "Netflix Premium adalah layanan streaming untuk menikmati berbagai film, serial, dan tayangan eksklusif dengan kualitas tinggi."
      ],
      benefits: [
        "Akses Film & Serial Lengkap",
        "Tidak Ada Iklan",
        "Kualitas Video Jernih",
        "Support Semua Device"
      ],
      notes: [
        "Catatan: Akun dari admin, tidak bisa pakai akun/email sendiri"
      ]
    },
    "Vidio": {
      paragraphs: [
        "Vidio Premium adalah layanan berlangganan Vidio untuk menikmati berbagai konten premium, live streaming olahraga, film, serial, dan tayangan eksklusif."
      ],
      benefits: [
        "Akses Konten Premium & Eksklusif",
        "Live Streaming Olahraga Tertentu",
        "Lebih Banyak Channel TV Lokal",
        "Bisa Ditonton Di Berbagai Perangkat"
      ],
      notes: [
        "Catatan: Bisa pakai akun pribadi"
      ]
    },
    "Disney+": {
      paragraphs: [
        "Disney+ Premium adalah layanan streaming untuk menikmati film, serial, dan tayangan eksklusif dari Disney, Pixar, Marvel, Star Wars, dan lainnya."
      ],
      benefits: [
        "Anti Screen Limit",
        "Akses Konten Eksklusif",
        "Kualitas Video Hingga 4K",
        "Religion Indonesia Only"
      ],
      notes: [
        "Catatan: Akun dari admin. Akun Sharing, Kamu mendapatkan 1 Slot Profil Pribadi"
      ]
    },
    "Spotify": {
      paragraphs: [
        "Spotify Premium adalah layanan berlangganan Spotify untuk menikmati musik dan podcast tanpa iklan, download offline, serta fitur premium lainnya."
      ],
      benefits: [
        "Tidak Ada Iklan",
        "Pilih & Putar Lagu Bebas",
        "Download Lagu Untuk Offline",
        "Unlimited Skip"
      ],
      notes: [
        "Catatan: Akun dari admin, tidak bisa pakai akun pribadi."
      ]
    },
    "Getcontact": {
      paragraphs: [
        "Getcontact Premium adalah layanan berlangganan dengan fitur tambahan untuk membantu mengelola dan mengenali nomor telepon dengan lebih lengkap."
      ],
      benefits: [
        "Tidak Ada Iklan",
        "Identifikasi Nomor Lebih Lengkap",
        "Lihat Tag Nomor",
        "Lihat Siapa Yang Mencari Nomor Kamu",
        "Fitur Pencarian Premium"
      ],
      notes: [
        "Catatan: Sistem proses pakai nomor WhatsApp kamu."
      ]
    },
    "ChatGPT": {
      paragraphs: [
        "ChatGPT Plus adalah paket premium ChatGPT dengan akses fitur dan model yang lebih lengkap untuk membantu berbagai kebutuhan, seperti belajar, bekerja, membuat konten, dan lainnya."
      ],
      benefits: [
        "Akses Model AI Lebih Canggih",
        "Batas Penggunaan Lebih Tinggi",
        "Analisis File & Dokumen",
        "Prioritas Saat Trafik Tinggi",
        "Fitur AI Lebih Lengkap"
      ],
      notes: [
        "Catatan: Sistem proses pakai email kamu."
      ]
    },
    "Gemini": {
      paragraphs: [
        "Gemini Advanced adalah layanan AI premium dari Google dengan akses fitur AI yang lebih canggih untuk membantu menulis, belajar, membuat ide, menganalisis informasi, dan berbagai kebutuhan lainnya."
      ],
      benefits: [
        "Akses Model AI Premium",
        "Kemampuan Reasoning Lebih Canggih",
        "Analisis File & Dokumen",
        "Prioritas Saat Trafik Tinggi"
      ],
      notes: [
        "Catatan: Sistem proses pakai email kamu."
      ]
    }
  },
  "Suntik Instagram": {
    "Folloers": {
      paragraphs: [
        "Followers real dan aktif, diproses bertahap secara natural biar aman buat kesehatan akun Instagram lo."
      ]
    }
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
function showToast(msg) {
  toast.textContent = msg;
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
  "Mau order dengan jumlah yang lebih banyak dari yang ada di website? silahkan klik icon WhatsApp yang ada di bawah kanan"
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