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
});