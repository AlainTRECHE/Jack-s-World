function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function createAndMoveDice() {
    var diceElement = document.createElement("div");
    diceElement.classList.add("dice");

    var parentElement = document.querySelector("#player");
    parentElement.appendChild(diceElement);

    var randomNumber = getRandomNumber(1, 6);
    diceElement.style.backgroundPositionX = (randomNumber) * (-100) + "px";
}

function playGame(howManyDices) {

const diceCount = howManyDices;


    for (let i = 0; i < diceCount; i++) {

        createAndMoveDice("player");

    }
}

const buttonSubmitElement = document.querySelector("#submit");
const inputSubmitElement = document.querySelector("#dices");
buttonSubmitElement.addEventListener("click",function(event){
    event.preventDefault();
    const nbDices = parseInt(inputSubmitElement.value);
    playGame(nbDices);
});


