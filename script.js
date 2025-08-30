// Ambil elemen
const modal = document.getElementById("paymentModal");
const closeModal = document.getElementById("closeModal");
const buyBtns = document.querySelectorAll(".buy-btn");
const purchaseForm = document.getElementById("purchaseForm");
const paymentInfo = document.getElementById("paymentInfo");
const notif = document.getElementById("notif");

// Data produk
const selectedProduct = document.getElementById("selectedProduct");
const selectedPrice = document.getElementById("selectedPrice");

// Buka modal
buyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.getElementById("modalTitle").innerText = 
      "Formulir Pembelian - " + btn.dataset.apk;

    selectedProduct.innerText = btn.dataset.apk;
    selectedPrice.innerText = "Rp " + btn.dataset.price;

    purchaseForm.style.display = "block";
    paymentInfo.style.display = "none";
  });
});

// Tutup modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Submit form
purchaseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  purchaseForm.style.display = "none";
  paymentInfo.style.display = "block";
});

// Salin nomor
const copyBtns = document.querySelectorAll(".copy-btn");
copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.num);
    showNotif("✅ Nomor berhasil disalin: " + btn.dataset.num);
  });
});

// Tombol kirim order
document.getElementById("sendOrder").addEventListener("click", () => {
  modal.style.display = "none";
  showNotif("✅ Pesanan berhasil dikirim!");
});

// Notifikasi
function showNotif(msg) {
  notif.innerText = msg;
  notif.style.display = "block";
  setTimeout(() => {
    notif.style.display = "none";
  }, 3000);
}
