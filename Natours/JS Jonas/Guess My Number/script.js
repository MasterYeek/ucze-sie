"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Whhen there is no number
  if (!guess) {
    displaymessage("😯 No number!");

    // When player wins
  } else if (guess === SecretNumber) {
    //document.querySelector(".message").textContent = "👍 Correct Number!";
    displaymessage("👍 Correct Number!");

    document.querySelector(".number").textContent = SecretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      // guess > SecretNumber ? "☝️ Too High!" : "👎 Too Low!";
      displaymessage(guess > SecretNumber ? "☝️ Too High!" : "👎 Too Low!");

      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "😭 You lost the game";
      displaymessage("😭 You lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector(".message").textContent = "Start guessing...";
  displaymessage("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
