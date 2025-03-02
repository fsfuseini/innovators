// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value;

    // Simulate a successful subscription
    alert(`Thank you for subscribing, ${email}!`);
    document.getElementById('newsletter-form').reset(); // Clear the form
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});