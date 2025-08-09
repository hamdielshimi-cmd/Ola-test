
document.addEventListener('DOMContentLoaded', function() {
    // Animate header elements
    anime({
        targets: 'header h1, header p, header .cta-button',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });

    // Animate section titles and cards on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        anime({
            targets: section,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 200,
            easing: 'easeOutExpo',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%'
            }
        });
    });

    // Animate cards
    const cards = document.querySelectorAll('.card');
    anime({
        targets: cards,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%'
        }
    });
});
