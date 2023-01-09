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
// const shoes = track.getElementsByClassName("shoe");

function moveSlides(direction) {
    var shoes = track.getElementsByClassName("shoe");
    // Calculate percentage to move images relative to screen
    var move = parseFloat(track.dataset.slidePercentage);
    var imgWidth = shoes[0].clientWidth;
    move += direction * 100 * (imgWidth + 32) / window.innerWidth;

    // Cycle image to back of array
    if (direction == -1) {
        // Out left, in right
        track.appendChild(shoes[0].cloneNode());
        track.removeChild(shoes[0]);
    } else {
        // Out right, in left
        track.insertBefore(shoes[shoes.length-1].cloneNode(), shoes[0]);
        track.removeChild(shoes[shoes.length-1]);
    }

    // Apply and run slide animation
    track.animate(
        { transform: `translateX(${move}%)` },
        { duration: 850, fill: "forwards", easing: "ease-in-out" }
    )
    
    // Array.from(shoes).forEach((image) => {
    //     image.animate(
    //         { transform: `translateX(${move}%)` },
    //         { duration: 850, fill: "forwards", easing: "ease-in-out" }
    //     );
    // });

    // Store percentage in slide element
    track.dataset.slidePercentage = move;
  }