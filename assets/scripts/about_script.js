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
