"use strict";
const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.querySelector("#score--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

dice.classList.add("hidden");
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
let activePlayer = 0;
let currentScore = 0;
let score = [0, 0];

btnRoll.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.remove("player--active");
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.add("player--active");
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    currentScore = 0;
  }
});
btnHold.addEventListener("click", function () {
  if (score[activePlayer] + currentScore < 100) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    currentScore = 0;
  } else {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
  }
});
btnNewGame.addEventListener("click", function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  dice.classList.add("hidden");
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  console.log(player1);
  console.log(player2);
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  let test =2;
});
