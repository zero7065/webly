// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow for hero section
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.hero-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();

// Button hover animation
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Form submission handling
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.registration-form form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Form validation and submission logic
        // ...
    });
});

// Toggle registration form visibility
document.addEventListener("DOMContentLoaded", function() {
    const toggleRegisterButton = document.getElementById('toggle-register-button');
    const registrationContainer = document.getElementById('registration-container');

    toggleRegisterButton.addEventListener('click', function() {
        registrationContainer.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});

// Toggle sign-in form visibility
document.addEventListener("DOMContentLoaded", function() {
    const toggleSignInButton = document.getElementById('toggle-sign-in-button');
    const signInContainer = document.getElementById('sign-in-container');

    toggleSignInButton.addEventListener('click', function() {
        signInContainer.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});
// JavaScript for smooth scrolling
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
