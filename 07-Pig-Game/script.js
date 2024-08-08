'use strict';

console.log(document.querySelector('#score--0').textContent);
console.log(document.querySelector('#score--1').textContent);

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
