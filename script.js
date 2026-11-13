
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    document.getElementById("hasil-pesan").textContent =
        "Terima kasih, " + nama + "! Pesan berhasil dicatat.";

    contactForm.reset();
});
