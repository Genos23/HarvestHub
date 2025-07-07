document.addEventListener('DOMContentLoaded', function() {
    // Lazy Load Images
    const lazyLoadImages = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                observer.unobserve(img);
            }
        });
    });

    lazyLoadImages.forEach(image => {
        imageObserver.observe(image);
    });

    // Make feature boxes responsive
    const featureBoxes = document.querySelectorAll('.feature-box');

    function resizeFeatureBoxes() {
        featureBoxes.forEach(box => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) { // Mobile view
                box.style.width = '90%';
            } else if (screenWidth < 1024) { // Tablet view
                box.style.width = '45%';
            } else { // Desktop view
                box.style.width = '30%';
            }
        });
    }

    // Initial call to resize boxes
    resizeFeatureBoxes();

    // Resize boxes on window resize
    window.addEventListener('resize', resizeFeatureBoxes);
});
