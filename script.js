document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementById('close');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});
