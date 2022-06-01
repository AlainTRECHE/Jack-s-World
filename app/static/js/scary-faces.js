//je recupere un objet qui contient toutes les cartes des personnages
const cardsElements = document.querySelectorAll(".character");

cardsElements.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
    });
}); //fin du foreach


