// Form validation
const formContainer = document.querySelector(".contact-form-container");
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

/* Check the form data and if it is correct display a success message */
form.addEventListener("submit", (event) => {
    event.preventDefault();

    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Kindly enter a valid email address");
        }
    })

    form.style.display = "none";
    let successBanner = document.createElement("div");
    successBanner.className += "success-banner";
    successBanner.innerHTML = `<i class="fas fa-check-circle"></i> Sumbission successful! We will get in touch with you soon.`
    formContainer.appendChild(successBanner);
});
