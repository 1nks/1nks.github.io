document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        // Toggle "X" effect on the hamburger menu
        hamburgerMenu.classList.toggle('open');
    });
});
