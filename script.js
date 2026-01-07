document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOGIN (OPS 2) ================= */
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("Username dan Password harus diisi!");
        return;
      }

      // TIDAK CEK BENAR / SALAH → LANGSUNG MASUK
      window.location.href = "index.html";
    });
  }

  /* ================= TOGGLE PASSWORD ================= */
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";

      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });
  }

  /* ================= TRANSAKSI ================= */
  const formTransaksi = document.getElementById("formTransaksi");
  const tabelBody = document.querySelector("#tabelTransaksi tbody");

  if (formTransaksi && tabelBody) {
    formTransaksi.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const jumlah = document.getElementById("jumlah").value.trim();
      const kategori = document.getElementById("kategori").value.trim();

      if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua field wajib diisi!");
        return;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${nama}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
      `;

      tabelBody.appendChild(row);
      formTransaksi.reset();
    });
  }

});
