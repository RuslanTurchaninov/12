'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    
    if (!guess) {
        document.querySelector(".message").textContent = "Нет числа";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Верно!";
        document.querySelector("h1").textContent = "Победа!";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {

        if (score > 1) {
            score--;
            if (guess > secretNumber) {
                document.querySelector(".message").textContent = "Попробуй меньше";
            } else {
                document.querySelector(".message").textContent = "Попробуй больше";
            }
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Ты проиграл";
            document.querySelector("h1").textContent = "Поражение";
            document.querySelector(".score").textContent = 0;
        }

    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(".message").textContent = "Начни угадывать...";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("h1").textContent = "Угадай число!";
});