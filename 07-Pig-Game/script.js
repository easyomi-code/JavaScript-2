'use strict';

// console.log(document.querySelector('#score--0').textContent);
// console.log(document.querySelector('#score--1').textContent);

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
// init(): 게임 초기화
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle()
  // : 특정 클래스가 요소에 이미 있으면 해당 클래스를 제거하고, 그렇지 않으면 클래스를 추가
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 기능 1) Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // 주사위 눈이 1일 경우
    } else {
      // switch to next player (Player 교체)
      switchPlayer();
    }
  }
});

// 기능 2) Hold 버튼
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game (게임 종료)
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// 기능 3) New Game(Reset 버튼)
// Challenge
/*
btnNew.addEventListener('click', function () {
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
});
*/

// Solution
btnNew.addEventListener('click', init);
