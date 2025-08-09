document.addEventListener('DOMContentLoaded', function() {
    // Animate hero
    anime({
        targets: 'header h1, header p, header .cta-button',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });

    // Animate sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        anime({
            targets: section,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: index * 200,
            easing: 'easeOutExpo'
        });
    });

    // Contact form feedback
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا! سنتواصل معك قريباً.');
        form.reset();
    });
});
