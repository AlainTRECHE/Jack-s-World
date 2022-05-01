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

    var howManyDices = document.querySelector("#dices");
    var diceCount = howManyDices.value;

    for (let i = 0; i < diceCount; i++) {

        createAndMoveDice("player");

    }
}

function updateHowManyDices() {
    var howManyDices = document.querySelector("#dices");
    var howManyValue = howManyDices.value;
    
   
    var howManyDicesValue = document.querySelector("#submit");
    howManyDicesValue.textContent = howManyValue;
}

var rollDiceButtonElement = document.querySelector("#roll-dice-button");
rollDiceButtonElement.addEventListener("click", playGame);


var howManyDices = document.querySelector("#dices");
howManyDices.addEventListener("input", updateHowManyDices);
howManyDices.addEventListener("input", playGame);


playGame();
