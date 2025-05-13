document.addEventListener("DOMContentLoaded", () => {
    const pizzaContainer = document.getElementById("falling-pizzas");
    const pizzaCount = 30;
    const pizzaImage = "resources/pizza.png"; 

    for (let i = 0; i < pizzaCount; i++) {
        const pizza = document.createElement("img");
        pizza.src = pizzaImage;
        pizza.classList.add("pizza");

        pizza.style.left = Math.random() * 100 + "vw"; 
        pizza.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        pizza.style.animationDelay = Math.random() * 5 + "s"; 

        pizzaContainer.appendChild(pizza);
    }
    // Pizza scroll. DISCLAIMER: código asistido con IA
    document.querySelectorAll('.pizza-slice').forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionNum = this.getAttribute('data-section');
            const section = document.querySelector(`.section-${sectionNum}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    let playing = false;

    function playMusic() {
        audio.play();
        toggleBtn.textContent = "⏸️";
        playing = true;
    }
    function pauseMusic() {
        audio.pause();
        toggleBtn.textContent = "▶️";
        playing = false;
    }

    toggleBtn.addEventListener('click', () => {
        if (playing) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    playMusic();
});