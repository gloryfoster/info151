document.addEventListener('DOMContentLoaded', function() {
    const mobile = document.getElementById('mobile-nav');
    const main = document.getElementById('main-nav');
    mobile.addEventListener('click', function() {
        main.classList.toggle('active');
    });
});