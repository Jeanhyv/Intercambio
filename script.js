const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");

let current = 0;

function updateSlide() {

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    slides[current].classList.add("active");

    counter.textContent =
        `${current + 1} / ${slides.length}`;
}

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        if (current < slides.length - 1) {
            current++;
            updateSlide();
        }

    }

    if (e.key === "ArrowLeft") {

        if (current > 0) {
            current--;
            updateSlide();
        }

    }

});

updateSlide();