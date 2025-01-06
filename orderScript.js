const mobileNav = document.getElementById('mobile-nav');

// Toggle Menu Animation and Fullscreen Menu
function toggleMenu(element) {
    element.classList.toggle('change'); // Toggles the "change" class for the animation
    mobileNav.classList.toggle('show'); // Toggles the "show" class for the fullscreen menu
}

