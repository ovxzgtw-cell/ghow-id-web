const buyButtons = document.querySelectorAll(".buy-btn");
const modal = document.getElementById("paymentModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const purchaseForm = document.getElementById("purchaseForm");
const paymentInfo = document.getElementById("paymentInfo");
const selectedProduct = document.getElementById("selectedProduct");
const selectedPrice = document.getElementById("selectedPrice");
const copyButtons = document.querySelectorAll(".copy-btn");
const notif = document.getElementById("notif");
const sendOrder = document.getElementById("sendOrder");
const apkCards = document.querySelectorAll(".apk-card");

let currentProduct = "";
let currentPrice = "";

// Scroll animation kartu
const showCards = () => {
    const triggerBottom = window.innerHeight / 1.1;
    apkCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) card.classList.add("show");
    });
};
window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);

// Modal
const modalAnimation = () => modal.classList.add("show");
buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentProduct = btn.dataset.apk;
        currentPrice = btn.dataset.price;
        modal.style.display = "flex";
        modal.classList.remove("show");
        setTimeout(modalAnimation, 50);
        modalTitle.textContent = `Formulir Pembelian - ${currentProduct}`;
        purchaseForm.style.display = "flex";
        paymentInfo.style.display = "none";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("show");
});
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
        modal.classList.remove("show");
    }
});

purchaseForm.addEventListener("submit", e => {
    e.preventDefault();
    selectedProduct.textContent = currentProduct;
    selectedPrice.textContent = currentPrice + " IDR";
    purchaseForm.style.display = "none";
    paymentInfo.style.display = "block";
});

// Copy nomor
copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.num).then(() => {
            notif.textContent = "✅ Nomor disalin!";
            notif.style.display = "block";
            setTimeout(() => {
                notif.style.display = "none";
            }, 1500);
        });
    });
});

// Kirim pesanan
sendOrder.addEventListener("click", () => {
    notif.textContent = "✅ Pesanan berhasil dikirim ke seller!";
    notif.style.display = "block";
    setTimeout(() => {
        notif.style.display = "none";
    }, 1500);
    modal.style.display = "none";
    modal.classList.remove("show");
});
