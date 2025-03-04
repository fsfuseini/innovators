// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle Hamburger Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close Hamburger Menu when a link is clicked
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
})

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value;

    // Simulate a successful subscription
    alert(`Thank you for subscribing, ${email}!`);
    document.getElementById('newsletter-form').reset(); // Clear the form
});