// Selecting elements
const menu = document.querySelector(".mob-bars-icon-container");
const header = document.querySelector("header");

/* Adding an event listener and a callback function that toggles the mobile menu
   display.*/
menu.addEventListener("click", toggleMobileMenu)


function toggleMobileMenu() {
    if (header.className !== "activate-mobile-header") {
        header.className = "activate-mobile-header";
    } else {
        header.className = "";
    }
}

/*document.querySelector(".radio-container").addEventListener("change", (e) => {
    // Selects the number of the input's index
    inputIndex = e.target.getAttribute('id').slice(6);

    firstSlide = document.querySelector('.first-slide');
    
    slideMotion = parseInt(inputIndex) * -100;
    firstSlide.style.marginLeft = String(slideMotion) + "%";

    
})*/

// Selecting all accordions
accordions = document.querySelectorAll('.accordion');

// Adding an event listener to all accordions, selecting their content and then toggling 
// the the class that hides/displays them
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", (e) => {
        accordion = e.target.parentNode;
        for (let i = 0; i < accordion.childNodes.length; i++) {
            if (accordion.childNodes[i].classList != undefined) {
                if (accordion.childNodes[i].classList[0] == "accordion-content") {
                    accordion.childNodes[i].classList.toggle("activate");
                }
            }
        }
    })
}
