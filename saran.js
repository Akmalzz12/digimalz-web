const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyO4PCyPR0miup6nakMugwyomVLxcPFdk4GibanxJyyaHKAPmCv0eqTOJdT75Rl67E/exec";

const form = document.getElementById("saranForm");
const email = document.getElementById("email");
const saran = document.getElementById("saran");
const successMessage = document.getElementById("successMessage");
const submitBtn = document.getElementById("submitBtn");
const charCount = document.getElementById("charCount");

saran.addEventListener("input", () => {
  charCount.textContent = saran.value.length;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!saran.value.trim()) {
    alert("Silakan isi kritik atau saran terlebih dahulu.");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.querySelector(".btn-text").textContent = "Mengirim...";

  const data = new URLSearchParams();
  data.append("email", email.value.trim());
  data.append("saran", saran.value.trim());

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: data,
      mode: "no-cors"
    });

    form.style.display = "none";
    successMessage.classList.add("show");

  } catch (error) {
    console.error(error);
    alert("Gagal mengirim masukan.");
  }

  submitBtn.disabled = false;
  submitBtn.querySelector(".btn-text").textContent = "Kirim Masukan";
});