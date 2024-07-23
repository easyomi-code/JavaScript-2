// 1. Activating Strict Mode (엄격 모드)
'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('나는 운전을 할 수 있다 🚗');

// const interface = 'Audio';
// const private = 534;

// -----------------------------------------

// 2. Functions (함수)
function logger() {
  console.log('내 이름은 Eunyomi 입니다.');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `사과주스: ${apples}개, 오렌지주스: ${oranges}개`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

const num = Number('25');
*/
// -----------------------------------------

// 3. Function Declarations vs Expressions (함수 선언 vs 함수 표현식)
// Function declaration
function calcAge1(birthYear) {
  // const age = 2024 - birthYear;
  return 2024 - birthYear;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1999);

console.log(age1, age2);
