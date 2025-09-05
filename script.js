document.addEventListener('DOMContentLoaded', () => {
    // A simple function to create and animate a confetti element
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        // // Randomize the confetti's position and color
        // confetti.style.left = Math.random() * 100 + 'vw';
        // confetti.style.backgroundColor = hsl(${Math.random() * 360}, 100%, 50%);

        // Animate the confetti falling
        confetti.animate([
            { transform: 'translateY(-100vh)', opacity: 0 },
            { transform: 'translateY(100vh)', opacity: 1 }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity,
            delay: Math.random() * 2000
        });

        // Clean up the element after a while to avoid memory issues
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Generate a few confetti elements on page load
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
});