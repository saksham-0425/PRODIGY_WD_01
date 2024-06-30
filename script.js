window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to bottom, rgba(88, 6, 97, 1), #c8c9ca)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom,#444545, #c8c9ca)';
    }
});
