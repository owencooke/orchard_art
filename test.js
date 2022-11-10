function moveSlides(slideshow, direction) {
    // Get slideshow images
    var imgs = slideshow.getElementsByClassName('slides');
    imgs = imgs[0].getElementsByTagName('img');
    // Swap image sources according to direction
    if (direction < 0) {
        var initial = imgs[0].src;
        for (var i = 1; i < imgs.length; i++) {
            imgs[i-1].src = imgs[i].src;
        }
        imgs[imgs.length-1].src = initial;
    } else {
        var final = imgs[imgs.length-1].src;
        for (var i = imgs.length-1; i > 0; i--) {
            imgs[i].src = imgs[i-1].src;
        }
        imgs[0].src = final;
    }
}
