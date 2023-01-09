const track = document.getElementById("slides");
// const shoes = track.getElementsByClassName("shoe");

function moveSlides(direction) {
    var shoes = track.getElementsByClassName("shoe");
    // Calculate percentage to move images relative to screen
    var current = parseFloat(track.dataset.slidePercentage);
    var imgWidth = shoes[0].clientWidth;
    var move = direction * 100 * (imgWidth + 32) / window.innerWidth;

    // Cycle image to back of array
    // WORKS
    if (direction == -1) {
        // Out left, in right
        track.animate(
            { transform: `translateX(${current-move}%)`},
            {duration: 0, fill: "forwards"}
        );
        track.appendChild(shoes[0].cloneNode());
        track.removeChild(shoes[0]);

        // Apply and run slide animation
        track.animate(
            { transform: `translateX(${current}%)` },
            { duration: 850, fill: "forwards", easing: "ease-in-out" }
        )
    // OFFSET BY ONE IMAGE
    } else {
        // Out right, in left
        track.animate(
            { transform: `translateX(${current-2*move}%)`},
            {duration: 0, fill: "both"}
        );
        // these work
        track.insertBefore(shoes[shoes.length-1].cloneNode(), shoes[0]);
        track.removeChild(shoes[shoes.length-1]);
        
        // Apply and run slide animation
        track.animate(
            { transform: `translateX(${current-move}%)` },
            { duration: 850, fill: "forwards", easing: "ease-in-out" }
        )
    }

    // Store percentage in slide element
    track.dataset.slidePercentage = move;
  }