/**
 * Implements a slideshow carousel by animating an element
 * containing multiple images. 
 * 
 * @param {number} direction - direction to translate images
 *                             1 --> slide left
 *                             -1 --> slide right
 */
function moveSlides(direction) {
    var shoes = track.getElementsByClassName("shoe");
    // Calculate percentage to move images relative to screen
    var imgWidth = shoes[0].clientWidth;
    var move = 100 * (imgWidth + 32) / window.innerWidth;

    // Compensate for changing image order
    track.animate(
        { transform: `translateX(${direction*move}%)`},
        { duration: 0, fill: "forwards" }
    );
    // track.style.transform = `translateX(${direction*move}%)`;

    // Change order of image elements
    if (direction == 1) track.appendChild(shoes[0]);
    else track.insertBefore(shoes[shoes.length-1], shoes[0]);

    // Animate carousel slide for user
    track.animate(
        { transform: "translateX(0%)" },
        { duration: 850, fill: "forwards", easing: "ease-in-out" }
    );

    // track.style.transform = "translateX(0%)";
}

/**
 * Adds a CSS class for animation when the element is
 * visible in the user's viewport. Used for scrolling animations
 */
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
const track = document.getElementById("slides");