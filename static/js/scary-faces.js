const base = {
    students: [
        {
            pseudo: "Jack Skellington",
            born: "",
            job: "",
            equipements: [""],
            link: "cardJack.PNG",
        },

        {
            pseudo: "Ooogie Boogie",
            born: "",
            job: "",
            equipements: [""],
            link: "cardBoogie.PNG",
        },

        {
            pseudo: "Sally",
            born: "",
            job: "",
            equipements: [""],
            link: "cardSally.PNG",
        },

        {
            pseudo: "Mayor",
            born: "",
            job: "",
            equipements: [""],
            link: "cardMayor.PNG",
        },

        {
            pseudo: "Dr Flinklestein",
            born: "",
            job: "",
            equipements: [""],
            link: "cardDrFlinklestein.PNG",
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
            <img src="./01.revision.assets/${base.students[i].link}">
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