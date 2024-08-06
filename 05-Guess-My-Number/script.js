'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// secretNumber: 1 ~ 20 난수 생성
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // Correct Number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // Guess Wrong
    // Too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔼 High Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over...';
      document.querySelector('.score').textContent = 0;
    }

    // Too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔽 Low Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
