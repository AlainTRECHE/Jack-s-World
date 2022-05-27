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
    clearBoard();

    for (let i = 0; i < diceCount; i++) {

        createAndMoveDice("player");

    }
}

function clearBoard() {
    var playerBoardElement = document.querySelector(".gametrack");
    playerBoardElement.innerHTML = "";
}

const buttonSubmitElement = document.querySelector("#submit");
const inputSubmitElement = document.querySelector("#dices");
buttonSubmitElement.addEventListener("click",function(event){
    event.preventDefault();

    playGame(3);
});


