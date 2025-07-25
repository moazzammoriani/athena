// Enhanced form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector(".contact-form-container");
    const form = document.querySelector(".contact-form");
    const submitBtn = document.querySelector("#contact-form-submit-btn");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    // Email validation on input
    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Please enter a valid email address");
        } else {
            email.setCustomValidity("");
        }
    });

    // Enhanced form submission with loading state
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Add loading state to button
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Simulate form processing delay
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = "none";
            
            const successBanner = document.createElement("div");
            successBanner.className = "success-banner";
            successBanner.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>Message sent successfully!</strong><br>
                    We'll get back to you within 24 hours.
                </div>
            `;
            
            formContainer.appendChild(successBanner);

            // Reset button state (in case user wants to send another message)
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Add input focus animations
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});
