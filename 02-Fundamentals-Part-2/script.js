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

// -----------------------------------------

// 4. Arrow Functions(화살표 함수)
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName}의 은퇴는 ${retirement}년 남았습니다.`;
};
console.log(yearsUntilRetirement(1999, 'Eunyomi'));
console.log(yearsUntilRetirement(1989, 'Sungkyu'));
// -----------------------------------------

// 5. Functions Calling Other Functions (다른 함수를 호출하는 함수)
// cutFruitPieces(): 과일 조각내기
function cutFruitPieces(fruit) {
  return fruit * 4;
}

// fruitProcessor(): 과일 처리기
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `사과: ${applePieces}조각, 오렌지: ${orangePieces}조각`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
// -----------------------------------------

// Reviewing Functions (함수 복습)
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName}의 은퇴는 ${retirement}년 남았습니다.`);
    return retirement;
  } else {
    console.log(`${firstName}은(는) 이미 은퇴 했습니다.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1999, 'Eunyomi'));
console.log(yearsUntilRetirement(1950, 'Sungkyu'));
