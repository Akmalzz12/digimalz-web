// ====== GANTI 3 NILAI INI SESUAI GOOGLE FORM LO ======
const GOOGLE_FORM_ID = "1FAIpQLSc-Ea6YHuXZ3kZyOM2sEz40DpyRVll7JWCoxr4V5NkxrPWmOw";
const ENTRY_EMAIL = "entry.865231788";
const ENTRY_SARAN = "entry.207969406";
// ======================================================

const saranForm = document.getElementById("saranForm");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");
const emailInput = document.getElementById("email");
const saranInput = document.getElementById("saran");
const charCount = document.getElementById("charCount");

// hitung karakter live
saranInput.addEventListener("input", () => {
  charCount.textContent = saranInput.value.length;
});

saranForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!saranInput.value.trim()) {
    saranInput.focus();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.querySelector(".btn-text").textContent = "Mengirim...";

  const formData = new FormData();
  formData.append(ENTRY_EMAIL, emailInput.value.trim());
  formData.append(ENTRY_SARAN, saranInput.value.trim());

  const url = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
    .then(() => {
      saranForm.style.display = "none";
      successMessage.classList.add("show");
    })
    .catch(() => {
      alert("Gagal mengirim, coba lagi.");
      submitBtn.disabled = false;
      submitBtn.querySelector(".btn-text").textContent = "Kirim Masukan";
    });
});