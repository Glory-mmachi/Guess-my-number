"use strict";
// let secretNumber = Number((Math.random() * 20).toFixed());
// let score = 20;
// let highscore = 0;

// let displayMessage=function(message){
//   document.querySelector('.message').textContent = `${message}`;
//   return

// }

// document.querySelector('.check').addEventListener('click', function () {
//   // get the value of the box
//   const guess = Number(document.querySelector('.guess').value);

//   //   --CODE LOGIC--
//   //if no guess
//   if (!guess) {
//     displayMessage('No number🥱')

//     //when player wins
//   } else if (guess === secretNumber) {
//     displayMessage('correct number')
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = 'purple';
//     document.querySelector('.number').style.width = '30rem';

//     //setting highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     //if guess is wrong
//   }else if(guess !== secretNumber){
//     if(score>1){
//       displayMessage(guess > secretNumber? 'wooah! too high😝😝':'oopps! too low😥😥')
//       //to decrease the score
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('You lost the game ☹☹')
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// //To reset the game
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;

//   secretNumber = Number((Math.random() * 20).toFixed());
//   displayMessage('start guessing...')
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '##654065';
//   document.querySelector('.number').style.width = '15rem';
// });
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
