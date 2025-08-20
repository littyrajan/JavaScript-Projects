// Open lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Slide control
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
