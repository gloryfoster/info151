document.addEventListener('DOMContentLoaded', function() {
    const mobile = document.getElementById('mobile-nav');
    const main = document.getElementById('main-nav');
    mobile.addEventListener('click', function() {
        main.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.associations-img');

    function checkImages() {
        const windowTrigger = window.innerHeight * 0.9;
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < windowTrigger) {
                img.classList.add('.visible');
            }
        });
    };

    window.addEventListener('scroll', checkImages);
    checkImages();
});