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
