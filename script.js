"use strict";

let body = document.querySelector("body");
let scoreNum = document.querySelector(".score");
let highscoreNum = document.querySelector(".highscore");
let num = document.querySelector(".number");
let again = document.querySelector(".again");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));

let score = 20;
let highscore = 1;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = `${message}`;
  return;
};

check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //if no guess
  if (!guess) {
    displayMessage("❌❌No number");
    //if guess is correct
  } else if (guess == secretNumber) {
    displayMessage("🎉🎉Correct!");
    body.style.backgroundColor = "purple";
    num.style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreNum.textContent = highscore;
    }
    console.log(highscore.textContent);
    console.log("correct");
    //if wrong guess
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? `Too high😝😝` : `Too low😥😥`);
    score--;
    scoreNum.textContent = score;
  }
});

//rest the game
again.addEventListener("click", function () {
  score = 20;

  secretNumber = Number(Math.trunc(Math.random() * 20 + 1));

  displayMessage("Start guessing...");
  scoreNum.textContent = score;
  body.style.backgroundColor = "#654065";
  num.style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
