document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.profile-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            card.style.transition = 'transform 0.5s';
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transition = 'transform 0.5s';
            card.style.transform = 'scale(1)';
        });
    });
});
