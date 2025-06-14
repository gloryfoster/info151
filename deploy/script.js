document.addEventListener('DOMContentLoaded', function() {
    const mobile = document.getElementById('mobile-nav');
    const main = document.getElementById('main-nav');
    mobile.addEventListener('click', function() {
        main.classList.toggle('active');
    });
});

console.log('script.js loaded');
window.onload = function() {
    const images = document.querySelectorAll('.associations-image');
    console.log('Images found:', images.length);
    function checkImages() {
        console.log('Checking images on scroll');
        const windowTrigger = window.innerHeight * 0.9;
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < windowTrigger) {
                img.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkImages);
    checkImages();
};