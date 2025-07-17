// Form validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (valid) {
            document.getElementById('formMessage').classList.remove('hidden');
            form.reset();
        }
    });
}

// Lightbox for gallery images
const gallery = document.querySelectorAll('.gallery img');
if (gallery.length) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    gallery.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            const imgClone = document.createElement('img');
            imgClone.src = img.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(imgClone);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}
