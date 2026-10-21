const inputBox = document.getElementById("inputBox");
const keys = document.querySelectorAll(".key");
const btnSpace = document.getElementById("btnSpace");
const btnDelete = document.getElementById("btnDelete");

// Fungsi untuk tombol huruf A-Z
keys.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-val");
    inputBox.value += value; // Menambahkan huruf ke input
    inputBox.focus();
  });
});

// Fungsi untuk tombol Spasi
btnSpace.addEventListener("click", () => {
  inputBox.value += " ";
  inputBox.focus();
});

// Fungsi untuk tombol Hapus (Delete / Backspace)
btnDelete.addEventListener("click", () => {
  inputBox.value = inputBox.value.slice(0, -1); // Menghapus 1 karakter terakhir
  inputBox.focus();
});

