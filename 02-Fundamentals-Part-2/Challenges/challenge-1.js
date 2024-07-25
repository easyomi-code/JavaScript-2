'use strict';
// ----------------- # Challenge-1 # -------------------
/*
// calcAverage(): 평균 계산
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
// console.log(calcAverage(44, 23, 71));

// Test Data 1
// const scoreDolphins = calcAverage(44, 23, 71); // 46
// const scoreKoalas = calcAverage(65, 54, 49); // 56
// console.log(`Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`);

// Test Data 2
const scoreDolphins = calcAverage(85, 54, 41); // 60
const scoreKoalas = calcAverage(23, 34, 27); // 28
console.log(`Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`);

// checkWinner(): 승자 계산
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

// ------------ # Challenge-1(solution) # --------------
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(50, 150);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
