'use strict';

// PROJECT #1: Guess My Number! (숫자 맞추기 게임)

// secretNumber: 1 ~ 20 난수 생성
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// displayMessage(): Refactoring, 중복 코드 제거
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check 버튼(EventListener)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Input Number
  if (!guess) {
    displayMessage('⛔ No Number!');

    // Correct Number
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess Wrong (Refactoring, 중복 코드 제거)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '🔼 High Number!' : '🔽 Low Number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again 버튼(EventListener)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '17rem';
});
