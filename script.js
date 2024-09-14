/*All rights reserved. by ShivWatches */
var typed = new Typed(".typewriter-text ",
    {
        strings: [" ",
            "Student",
           
            "Visionary",
           
            "Dreamer",
           
            "Achiever",
           
            "Believer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        
    }
)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.reveal-card');

    const revealCards = () => {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealCards);
    revealCards(); // Initial check
});
