function loadSlides() {
    slideshows = ["portraits", "cats", "shoes"];
    //slideshows.reverse();
    for (str of slideshows) {
        s = document.getElementById(str);
        s.slideIdx = 1;
        showSlides(s.slideIdx, s);
    }
}

function plusSlides(n, slideshow) {
    showSlides(slideshow.slideIdx += n, slideshow);
}

function currentSlide(n, slideshow) {
    showSlides(slideshow.slideIdx = n, slideshow);
}

function showSlides(n, slideshow) {
    var slides = slideshow.getElementsByClassName("slides");
    var dots = slideshow.getElementsByClassName("demo");
    if (n > slides.length) {slideshow.slideIdx = 1}    
    if (n < 1) {slideshow.slideIdx = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideshow.slideIdx-1].style.display = "block";  
    dots[slideshow.slideIdx-1].className += "active";
}

loadSlides()
