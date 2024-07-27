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

// ------------ # Challenge-1 # --------------

// 6. Introduction to Arrays (배열)
// 배열 -> 데이터 구조
const friend1 = '이강인';
const friend2 = '손흥민';
const friend3 = '김민재';

const friends = ['이강인', '손흥민', '김민재'];
console.log(friends);

const year = new Array(2001, 1992, 1996, 1999);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = '배준호';
console.log(friends);
console.log(friends[2]);
// friends = ['황희찬', '조규성', '설영우'];

const firstName = 'Eunyomi';
const eunyomi = [firstName, 'Lee', 2024 - 1999, 'Programmer', friends];
console.log(eunyomi);
console.log(eunyomi.length);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1993, 1999, 2001, 2003];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
// -----------------------------------------

// 7. Basic Array Operations(Methods) - 기본 배열 연산(메서드)
// Add elements (배열 요소 추가)
const friends = ['이강인', '손흥민', '김민재'];
const newLength = friends.push('배준호');
console.log(friends);
console.log(newLength);

friends.unshift('설영우');
console.log(friends);

// Remove elements (배열 요소 제거)
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('이강인'));
console.log(friends.indexOf('손흥민'));
console.log(friends.indexOf('김민재'));

friends.push(25);
console.log(friends.includes('이강인'));
console.log(friends.includes('배준호'));
console.log(friends.includes('25'));
console.log(friends.includes(25)); // strict(===)

if (friends.includes('손흥민')) {
  console.log('너는 손흥민 이라는 친구가 있다.');
}
