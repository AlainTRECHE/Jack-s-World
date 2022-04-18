const base = {
    students: [
        {
            pseudo: "Jack Skellington",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardJack.PNG",
        },

        {
            pseudo: "Ooogie Boogie",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardBoogie.PNG",
        },

        {
            pseudo: "Sally",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardSally.PNG",
        },

        {
            pseudo: "Mayor",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardMayor.PNG",
        },

        {
            pseudo: "Dr Flinklestein",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardDrFlinklestein.PNG",
        },

        {
            pseudo: "Zero",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardZero.PNG",
        },

        {
            pseudo: "Barrel",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardBarrel.PNG",
        },

        {
            pseudo: "Lock",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardLock.PNG",
        },

        {
            pseudo: "Shock",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardShock.PNG",
        },

        {
            pseudo: "Clown",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardClown.PNG",
        },

        {
            pseudo: "Corpse Kid",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardCorpseKid.PNG",
        },

        {
            pseudo: "Harlequin Demon",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardHarlequinDemon.PNG",
        },

        {
            pseudo: "Undersea Gal",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardUnderseaGal.PNG",
        },

        {
            pseudo: "Behemoth",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardBehemoth.PNG",
        },

        {
            pseudo: "Mr Hyde",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardMrHyde.PNG",
        },

        {
            pseudo: "Sax Player",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardSaxPlayer.PNG",
        },

        {
            pseudo: "Vampire",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardVampire.PNG",
        },

        {
            pseudo: "Wolfman",
            born: "",
            job: "",
            equipements: [""],
            link: "../pictures/cardUnderseaGal.PNG",
        },
    ],
};

const numberOfStudents = base.students.length;
for (let i = 0; i < numberOfStudents; i++) {
    //créer une variable qui contient le tableau des equipements
    const equipementOfStudent = base.students[i].equipements;
    //compter le nombre d'equipements de l'etudiant ciblé (i)
    const numberOfEquipement = equipementOfStudent.length;
    //créer le nombre de li necessaire (autant que d'equipement)
    let listEquipementElement = "";
    for (let j = 0; j < numberOfEquipement; j++) {
        listEquipementElement += `<li>${equipementOfStudent[j]}</li>`;
    }
    console.log(listEquipementElement);
    const studentCardElement = `    

<div class="avenger">
<div class="card">
    <div class="recto">
        <div class="container">
            <img src="${base.students[i].link}">
            <div class="overlay"></div>
            <h1>${base.students[i].pseudo}</h1>
        </div>
    </div>
    <div class="verso">
        <h2>${base.students[i].pseudo}</h2>

        <!-- TEMPLATE DE CODE POUR UN SUPER ETUDIANT -->

        <!-- FIN TEMPLATE DE CODE POUR UN SUPER ETUDIANT -->

        <div>Année de création :${base.students[i].born} </div>
        <div>Métier : ${base.students[i].job}</div>
        <div class="array-equipement">
            Équipement :
            <ul class="array">${listEquipementElement}</ul>
        </div>
    </div>
</div>
</div>
`;
    const parentAvenger = document.querySelector("#avengers");
    // parentAvenger.innerHTML = studentCardElement;
    parentAvenger.insertAdjacentHTML("beforeend", studentCardElement);
}


//je recupere un objet qui contient toutes les cartes d'etudiant
const cardsElements = document.querySelectorAll(".avenger");

cardsElements.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
    });
}); //fin du foreach


//je recupere l'input submit
const buttonElement = document.querySelector("#button");
console.log(buttonElement);
//j'ecoute l'event du button (click)
buttonElement.addEventListener("click", (event) => {
    //je recupere le contenu de l'input text
    //en annulant le comportement par defaut
    event.preventDefault();
    let searchedText = document.querySelector("#inputsearch").value;
    console.log(searchedText);
});

function processAndDisplayHeroesCards(text) {
    //je cree un tableau vide
    let studentsFound = [];
    //l'utilisateur recherche "Hul"
    //je parcours tout les pseudo dans le tableau students POUR CHAQUE etudiant
    base.students.forEach((student) => {
        const studentPseudo = student.pseudo;

        if (studentPseudo.includes("a")) {
            studentsFound.push(student);
        }
    });
    console.log(studentsFound);

    //      je lis son pseudo

    //      si le pseudo contient un "Hul"

    //      alors j'affiche la carte qui contient "Hul"
}
processAndDisplayHeroesCards("text");