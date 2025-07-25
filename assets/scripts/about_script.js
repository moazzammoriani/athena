/*
 *
 * This script is responsible for the functionality of the collapsible FAQ 
 * questions with enhanced animation and icon rotation
 *
 */

// Enhanced FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('activate');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            answer.classList.toggle('activate');
        });
    });
});
