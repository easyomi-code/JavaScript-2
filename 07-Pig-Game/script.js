'use strict';

// console.log(document.querySelector('#score--0').textContent);
// console.log(document.querySelector('#score--1').textContent);

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll (주사위 숫자 랜덤 생성)
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice (주사위 그림 출력)
  diceEl.classList.remove('hidden');
  // diceEl.src = `dice-2.png`;
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled
  // 주사위 눈이 1이 아닐 경우
  if (dice !== 1) {
    // Add dice to current score (현재 점수  )
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
    // 주사위 눈이 1일 경우
  } else {
    // switch to next player (Player 교체)
  }
});
