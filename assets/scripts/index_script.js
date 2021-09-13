// Initialize variables and values
const firstSlide = document.querySelector('.first-slide');
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

// Map slides with radio buttons and get move slide to the one the user has selected
// using the radio button
document.querySelector(".radio-container").addEventListener("change", (e) => {
    inputIndex = e.target.getAttribute('id').slice(6);
    slideMotion = parseInt(inputIndex) * -100;
    firstSlide.style.marginLeft = String(slideMotion) + "%";
    
})

// Continously shift slides every 5 seconds
setInterval(() => {cycleSlide(4, firstSlide)}, 5000);



