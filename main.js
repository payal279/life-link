// This function runs once the entire HTML page has loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLE (DARK/LIGHT MODE) ---
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check if the user had a theme saved from a previous visit
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // When the toggle button is clicked
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save the user's choice for their next visit
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // --- 2. NAVIGATION MENU (SHOW/HIDE) ---
    const menuToggleCheckbox = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('nav a');

    // Automatically close the mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggleCheckbox && menuToggleCheckbox.checked) {
                menuToggleCheckbox.checked = false;
            }
        });
    });

    // --- 3. SHOW ALERTS OR MESSAGES ---
    // This function creates a temporary message banner at the top of the page
    function showAlert(message, type = 'success') {
        const alertBox = document.createElement('div');
        alertBox.className = `alert-message ${type}`; // e.g., 'success' or 'error'
        alertBox.textContent = message;

        document.body.appendChild(alertBox);

        // Remove the message after 3 seconds
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
    
    // Example: Show a welcome message when the page loads
    // You can call this function from anywhere, e.g., after a form submission
    showAlert('Welcome to LifeLink!');


    // --- 4. ANIMATION EFFECTS (FADE IN ON SCROLL) ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

});