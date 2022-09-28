window.onload = function onLoad() {
    slideIndex = 1;
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slides = document.getElementsByClassName("slides");
    thumbs = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbs[slideIndex-1].className += "active";
}