'use strict';
// ----------------- # Challenge-4 # ------------------
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// calcTip(): tip 계산기
const calcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};

// tip 계산(tips[])
for (let i = 0; i <= bills.length - 1; i++) {
  tips[i] = calcTip(bills[i]);
}

// bills + tip (totals[])
for (let i = 0; i <= bills.length - 1; i++) {
  totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals);

// BONUS
const calcAverage = function (arr) {
  return arr / totals.length;
};

let sum = 0;
for (let i = 0; i <= totals.length - 1; i++) {
  sum += totals[i];
}
console.log(sum);
console.log(calcAverage(sum));

// ------------ # Challenge-4(solution) # --------------
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// tips[], totals[]
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// calcAverage(): totals[] 평균
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

// ------------ # Challenge-4(Review) # --------------
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// tips[], totals[]
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}
console.log(bills, tips, totals);

// calcAverage(): totals 평균
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
