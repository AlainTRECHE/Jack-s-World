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

    var howManyDices = parseInt(prompt("combien de dés?"))
    // il me met toujours un dés de plus ???

    for (let i = 0; i < howManyDices; i++) {
console.log(howManyDices,i);
        createAndMoveDice("player");

    }
}




playGame();
