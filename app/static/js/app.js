const app = {
    player : {
        x : 0,
        y : 0,
        direction : "right",
        collision : false,
        skin : "char-01",
    },
    gameOver : false,

    moves : 0,

    currentLevel : 1,

    drawBoard : function() {

        const levelsList = app.levelsList();
        const currentLevel = levelsList[app.currentLevel-1];
        const currentLevelSizeX = levels[currentLevel].lvlSize[0];
        const currentLevelSizeY = levels[currentLevel].lvlSize[1];
        let currentLevelTargetX = levels[currentLevel].targetCell[0];
        let currentLevelTargetY = levels[currentLevel].targetCell[1];
        const currentLevelName = levels[currentLevel].name;
        const currentLevelCellType = levels[currentLevel].cellType;
        document.querySelector("title").innerText = currentLevelName;
        document.querySelector("h1").innerText = "Niveau "+app.currentLevel +" : "+ currentLevelName;
        const boardElement = document.querySelector("#board");


        for (let y = 0 ; y < currentLevelSizeY ; y++) {
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");
            boardElement.appendChild(rowElement);

            for (let x = 0 ; x < currentLevelSizeX ; x++) {
                const divElement = document.createElement("div");
                divElement.classList.add("cell");
                if (x === currentLevelTargetX && y === currentLevelTargetY ) {

                    if (levels[currentLevel].hiddenTreasure) {
                        divElement.classList.add("hidden-treasure");
                    } else {
                        divElement.classList.add("target-cell");
                    }
                }
                if (x === app.player.x && y === app.player.y ) {
                    spanElement = document.createElement("span");
                    spanElement.classList.add("bubble");
                    divElement.appendChild(spanElement);
                    divElement.classList.add("player");
                    divElement.classList.add(app.player.skin);
                    divElement.classList.add(app.player.direction);
                }
                divElement.setAttribute("data-cell-x",x);
                divElement.setAttribute("data-cell-y",y);
                if (currentLevelName === "Bonus !") {
                    divElement.setAttribute("data-cell-type",Math.floor(Math.random()*6+1));
                } else {
                    divElement.setAttribute("data-cell-type",currentLevelCellType);
                }

                rowElement.appendChild(divElement);
                if (app.player.collision) {
                    divElement.classList.add("collision");
                }
            }
        }
        app.isGameOver();
    },

    clearBoard : function() {
        const boardElement = document.querySelector("#board");
        boardElement.innerHTML = "";
    },

    redrawBoard : function() {
        app.clearBoard();
        app.drawBoard();
    },

    turnLeft : function() {
        if (!app.gameOver) {
            if (app.player.direction === "right") { app.player.direction = "up"; } else
            if (app.player.direction === "up") { app.player.direction = "left"; } else
            if (app.player.direction === "left") { app.player.direction = "down"; } else
            if (app.player.direction === "down") { app.player.direction = "right"; }
            app.player.collision = false;
            app.moves++;
        }
    },

    turnRight : function() {
        if (!app.gameOver) {
            if (app.player.direction === "right") { app.player.direction = "down"; } else
            if (app.player.direction === "down") { app.player.direction = "left"; } else
            if (app.player.direction === "left") { app.player.direction = "up"; } else
            if (app.player.direction === "up") { app.player.direction = "right"; }
            app.player.collision = false;
            app.moves++;
        }
    },

    moveForward : function() {
        const levelsList = app.levelsList();
        const currentLevel = levelsList[app.currentLevel-1];
        const currentLevelSizeX = levels[currentLevel].lvlSize[0] - 1 ;
        const currentLevelSizeY = levels[currentLevel].lvlSize[1] - 1;
        if (!app.gameOver) {
            if (app.player.direction === "right" && app.player.x < currentLevelSizeX) { app.player.x++; } else
            if (app.player.direction === "left" && app.player.x > 0) { app.player.x--; } else
            if (app.player.direction === "up" && app.player.y > 0) { app.player.y--; } else
            if (app.player.direction === "down" && app.player.y < currentLevelSizeY) { app.player.y++; }
            else {app.player.collision = true;}
            app.moves++;
        }
    },

    cheatMove : function () {
        const levelsList = app.levelsList();
        const currentLevel = levelsList[app.currentLevel-1];
        app.player.x = levels[currentLevel].targetCell[0];
        app.player.y = levels[currentLevel].targetCell[1];
        app.cheatUsed = true;

    },

    listenKeyboardEvents : function() {
        document.addEventListener("keyup", function(event) {
            event.preventDefault;
            if (!app.gameOver) {
                const key = event.code; switch (key) {
                case "ArrowUp" : app.moveForward(); break;
                case "ArrowRight" : app.turnRight(); break;
                case "ArrowLeft" : app.turnLeft(); break;
                case "KeyT" : app.cheatMove(); break;
                }
                app.redrawBoard();
            }
        });
    },

    isGameOver : function() {
        const levelsList = app.levelsList();
        const currentLevel = levelsList[app.currentLevel-1];
        const currentLevelTargetX = levels[currentLevel].targetCell[0];
        const currentLevelTargetY = levels[currentLevel].targetCell[1];
        if (app.player.x === currentLevelTargetX && app.player.y === currentLevelTargetY) {
            if(levels[currentLevel].hiddenTreasure) {
                document.querySelector(".hidden-treasure").classList.add("target-cell");
            }
            app.gameOver = true;
            console.log(`game over, en ${app.moves} deplacements.`);
            bubbleElement = document.querySelector(".bubble");
            bubbleElement.style.display = "block";
            bubbleElement.innerText = `Bien joue ! Jack a  trouve le cadeau en ${app.moves} mouvements.`;
            document.querySelector(".player").classList.add("game-over");

            console.log("c'etait le level : " + currentLevel + " => " + levels[currentLevel].name);
            app.nextLevel();
        }
    },

    nextLevel : function(){
        const levelsListLength = app.levelsList().length;
        if(app.currentLevel < levelsListLength) {
            const nextLvlBtnElement = document.createElement("button");
            nextLvlBtnElement.innerText = "Niveau suivant";
            nextLvlBtnElement.classList.add("next-lvl-btn");
            document.body.appendChild(nextLvlBtnElement);


            document.body.addEventListener("keyup",function handler(e){
                e.preventDefault();
                if (e.code === "Enter") {
                    if(!app.gameover){
                        nextLvlBtnElement.remove();
                        document.body.removeEventListener("keyup",handler);
                        console.log("enter has pressed");
                        app.moves = 0;
                        app.gameOver = false;
                        app.currentLevel++;
                        app.resetPlayerPos();
                        app.redrawBoard();
                    }
                }
            });
            nextLvlBtnElement.addEventListener("click",function(){
                nextLvlBtnElement.remove();
                app.moves = 0;
                app.gameOver = false;
                app.currentLevel++;
                app.resetPlayerPos();
                app.redrawBoard();
            });
        } else {
            const victoireElement = document.createElement("p");
            victoireElement.innerText = "Bravo, vous avez termine tous les niveaux !";

            victoireElement.classList.add("victory-banner");
            document.body.appendChild(victoireElement);
        }
    },

    levelsList : function() {
        const levelsList = Object.keys(levels);
        return levelsList;
    },

    resetPlayerPos : () => {
        app.player.x = 0;
        app.player.y = 0;
    },



    init : function () {
        console.log("init !");
        app.drawBoard();
        app.listenKeyboardEvents();
    },
};

document.addEventListener("DOMContentLoaded", app.init);

