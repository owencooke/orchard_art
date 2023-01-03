// Add show animation when section visible
const view = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // Could toggle class for repeated animation
        // entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hidden = document.querySelectorAll('.hidden-panel');
hidden.forEach((section) => view.observe(section));

// Scroll track functionality for shoes
// FIXME: add support for image rotation (out left, in right)
const track = document.getElementById("slides");

function moveSlides(direction) {
    // Calculate amount to move images relative to screen
    var move = parseInt(track.dataset.slidePercentage);
    var imgWidth = track.getElementsByClassName("slide-img")[0].clientWidth;
    move += direction * 100 * (imgWidth - 64) / window.innerWidth;

    // Apply and run animation
    track.animate(
        { transform: `translateX(${move}%)` },
        { duration: 850, fill: "forwards", easing: "ease-in-out" }
    );
    track.dataset.slidePercentage = move;
  }