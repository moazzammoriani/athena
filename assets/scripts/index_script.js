// Initialize variables and values
const firstSlide = document.querySelector('.first-slide');
const totalSlides = 4;
let currentSlide = 0;

// Initialize first slide
document.querySelector("#index-0").checked = true;
firstSlide.style.marginLeft = "0%";

// Logically cycle through the slides while also checking corresponding radio
// button
function cycleSlide(slideNum, first) {
    let maxMargin = String(-100 * (slideNum - 1)) + "%";
    let currentSelection = document.querySelector('input[name="carousel-btn"]:checked')
    let currentSelectionIndex = currentSelection.id.slice(6);
    let marginLeftVal = first.style.marginLeft;
    
    if (first.style.marginLeft == maxMargin) {
        first.style.marginLeft = "0%";
        let newCheck = document.querySelector("#index-0");
        newCheck.checked = true;
    } else {
        marginLeftVal = marginLeftVal.slice(0, -1);
        marginLeftVal = Number(marginLeftVal); 
        marginLeftVal = marginLeftVal - 100;
        marginLeftVal = String(marginLeftVal) + "%";
        first.style.marginLeft = marginLeftVal;

        currentSelectionIndex = Number(currentSelectionIndex);
        currentSelectionIndex += 1;
        currentSelectionIndex = String(currentSelectionIndex);
        let newCheck = document.querySelector("#index-" + currentSelectionIndex);
        newCheck.checked = true;
    }
}

// Function to go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const slideMotion = slideIndex * -100;
    firstSlide.style.marginLeft = String(slideMotion) + "%";
    document.querySelector(`#index-${slideIndex}`).checked = true;
}

// Function to go to next slide
function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
}

// Function to go to previous slide
function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
}

// Map slides with radio buttons and get move slide to the one the user has selected
// using the radio button
document.querySelector(".carousel-indicators").addEventListener("change", (e) => {
    const inputIndex = parseInt(e.target.getAttribute('id').slice(6));
    goToSlide(inputIndex);
});

// Add event listeners for navigation arrows
document.querySelector('.carousel-nav-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-nav-next').addEventListener('click', nextSlide);

// Continuously shift slides every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
const carousel = document.querySelector('.carousel-wrapper');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-slide when not hovering
carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});



