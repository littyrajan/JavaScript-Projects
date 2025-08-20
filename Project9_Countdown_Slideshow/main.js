// Project 9 - Countdown & Slideshow

// COUNTDOWN FUNCTION
function countdown() {
    let seconds = document.getElementById("seconds").value; // get input value
    function tick() {
        seconds = seconds - 1; // decrease seconds
        document.getElementById("timer").innerHTML = seconds; // display countdown
        if (seconds > 0) {
            setTimeout(tick, 1000); // call tick() every 1 sec
        } else {
            document.getElementById("timer").innerHTML = "Time’s up!";
        }
    }
    tick();
}

// SLIDESHOW FUNCTION
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increase slide index
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
