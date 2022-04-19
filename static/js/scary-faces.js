const base = {
    characters: [
        {
            pseudo: "Jack Skellington",
            story: "",
            link: "../pictures/cardJack.PNG",
        },

        {
            pseudo: "Ooogie Boogie",
            story: "",
            link: "../pictures/cardBoogie.PNG",
        },

        {
            pseudo: "Sally",
            story: "",
            link: "../pictures/cardSally.PNG",
        },

        {
            pseudo: "Mayor",
            story: "",
            link: "../pictures/cardMayor.PNG",
        },

        {
            pseudo: "Dr Flinklestein",
            story: "",
            link: "../pictures/cardDrFlinklestein.PNG",
        },

        {
            pseudo: "Zero",
            story: "",
            link: "../pictures/cardZero.PNG",
        },

        {
            pseudo: "Barrel",
            story: "",
            link: "../pictures/cardBarrel.PNG",
        },

        {
            pseudo: "Lock",
            story: "",
            link: "../pictures/cardLock.PNG",
        },

        {
            pseudo: "Shock",
            story: "",
            link: "../pictures/cardShock.PNG",
        },

        {
            pseudo: "Clown",
            story: "",
            link: "../pictures/cardClown.PNG",
        },

        {
            pseudo: "Corpse Kid",
            story: "",
            link: "../pictures/cardCorpseKid.PNG",
        },

        {
            pseudo: "Harlequin Demon",
            story: "",
            link: "../pictures/cardHarlequinDemon.PNG",
        },

        {
            pseudo: "Undersea Gal",
            story: "",
            link: "../pictures/cardUnderseaGal.PNG",
        },

        {
            pseudo: "Behemoth",
            story: "",
            link: "../pictures/cardBehemoth.PNG",
        },

        {
            pseudo: "Mr Hyde",
            story: "",
            link: "../pictures/cardMrHyde.PNG",
        },

        {
            pseudo: "Sax Player",
            story: "",
            link: "../pictures/cardSaxPlayer.PNG",
        },

        {
            pseudo: "Vampire",
            story: "",
            link: "../pictures/cardVampire.PNG",
        },

        {
            pseudo: "Wolfman",
            story: "",
            link: "../pictures/cardUnderseaGal.PNG",
        },
    ],
};

const numberOfcharacters = base.characters.length;
for (let i = 0; i < numberOfcharacters; i++) {
  
    const characterCardElement = `    

<div class="character">
    <div class="card">
        <div class="recto">
            <div class="container">
                <img src="${base.characters[i].link}">
                <div class="overlay"></div>
                 <h1>${base.characters[i].pseudo}</h1>
             </div>
            </div>
        <div class="verso">
        <h2>${base.characters[i].pseudo}</h2>
        <div>Story :${base.characters[i].story} </div>
       </div>
    </div>
</div>
`;
    const parentCharacter = document.querySelector("#characters");
    parentCharacter.insertAdjacentHTML("beforeend", characterCardElement);
}


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


