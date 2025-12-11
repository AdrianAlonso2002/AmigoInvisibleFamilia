// ✅ EDITA ESTO: códigos -> persona + foto
// Recomendación: usa imágenes locales en /images para que funcione perfecto en GitHub Pages.
const CODE_MAP = {
  "SANCHEZ-2K9A": { name: "Paula", photo: "images/paula.png" },
  "SANCHEZ-7Q1P": { name: "Andrés", photo: "images/andres.png" },
  "SANCHEZ-4LM8": { name: "Adri", photo: "images/adri.png" },
  "SANCHEZ-9Z0X": { name: "Paola", photo: "images/paola.png" },
  "SANCHEZ-1H2T": { name: "Teresa", photo: "images/teresa.png" },
  "SANCHEZ-2D3D": { name: "Julia", photo: "images/julia.png" },
  "SANCHEZ-3A68": { name: "Rafa", photo: "images/rafa.png" },
  "SANCHEZ-4D8G": { name: "Itziar", photo: "images/itziar.png" },
  "SANCHEZ-5F0J": { name: "Dario", photo: "images/dario.png" },
  "SANCHEZ-6H13": { name: "MariLuz", photo: "images/mariluz.png" },
  "SANCHEZ-7K3U": { name: "Miguel", photo: "images/miguel.png" },
  "SANCHEZ-8Z5Z": { name: "Cinthia", photo: "images/cinthia.png" },
  "SANCHEZ-9Q6M": { name: "Valentina", photo: "images/valentina.png" }
};

const input = document.getElementById("codeInput");
const btn = document.getElementById("btnReveal");
const result = document.getElementById("result");
const errorBox = document.getElementById("errorBox");
const personName = document.getElementById("personName");
const personPhoto = document.getElementById("personPhoto");

function normalizeCode(str) {
  return (str || "")
    .trim()
    .replace(/\s+/g, "")      // quita espacios
    .toUpperCase();
}

function showError() {
  errorBox.classList.remove("hidden");
  result.classList.add("hidden");
}

function showResult(entry) {
  errorBox.classList.add("hidden");

  personName.textContent = entry.name;
  personPhoto.src = entry.photo;
  personPhoto.alt = `Foto de ${entry.name}`;

  result.classList.remove("hidden");
}

function reveal() {
  const code = normalizeCode(input.value);
  const entry = CODE_MAP[code];

  if (!code || !entry) {
    showError();
    return;
  }
  showResult(entry);
}

btn.addEventListener("click", reveal);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") reveal();
});

// Opcional: si recargas, deja limpio
window.addEventListener("load", () => {
  result.classList.add("hidden");
  errorBox.classList.add("hidden");
});
