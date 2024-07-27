'use strict';
// ----------------- # Challenge-2 # ------------------
/*
const calcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};
// Test
console.log(calcTip(100));

// Challenge
const bills = [125, 555, 44];

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));
console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// Bounus
const totals = new Array(calcTip.length - 1);
totals.push(bills[0] + calcTip(bills[0]));
totals.push(bills[1] + calcTip(bills[1]));
totals.push(bills[2] + calcTip(bills[2]));
console.log(totals);
*/

// ------------ # Challenge-2(solution) # --------------
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Arrow Function (화살표 함수)
// const calTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

// ----------------- # Challenge-2(Review) # ------------------
const calcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};
// Test
console.log(calcTip(100));

// Challenge
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// Bonus
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
