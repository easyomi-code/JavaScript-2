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

// ------------ # Challenge-2 # --------------

// 8. Introduction to Objects (객체)
const yomiArray = [
  'Eunyomi',
  2024 - 1999,
  'Programmer',
  ['이강인', '손흥민', '황희찬'],
];

const eunyomi = {
  firstName: 'Eunyomi',
  age: 2024 - 1999,
  job: 'Programmer',
  friends: ['이강인', '손흥민', '황희찬'],
};

// -----------------------------------------

// 9. Dot vs. Bracket Notation (점 표기법 vs. 대괄호 표기법)
const yomiArray = [
  'Eunyomi',
  'Lee',
  2024 - 1999,
  'Programmer',
  ['이강인', '손흥민', '황희찬'],
];
console.log(yomiArray);

const eunyomi = {
  firstName: 'Eunyomi',
  lastName: 'Lee',
  age: 2024 - 1999,
  job: 'Programmer',
  friends: ['이강인', '손흥민', '황희찬'],
};
console.log(eunyomi);

// Dot Notation
console.log(eunyomi.firstName);
console.log(eunyomi.friends);

// Bracket Notation
console.log(eunyomi['firstName']);
console.log(eunyomi['friends']);

const nameKey = 'Name';
console.log(eunyomi['first' + nameKey]);
console.log(eunyomi['last' + nameKey]);

const interestedIn = prompt(
  'Eunyomi에 대해 알고 싶은 것은? (💁🏻‍♂️: firstName, lastName, age, job, friends)'
);

if (eunyomi[interestedIn]) {
  console.log(eunyomi[interestedIn]);
} else {
  console.log(
    '잘못된 접근입니다.(Choose: firstName, lastName, age, job, friends)'
  );
}

eunyomi.location = 'South Korea';
eunyomi['tistory'] = 'easyomi-code';
console.log(eunyomi);

// Challenge
// "Eunyomi는 3명의 친구가 있고, 그 중 친한 친구는 이강인이다." 출력
console.log(eunyomi.firstName);
console.log(eunyomi.friends.length);
console.log(eunyomi.friends[0]);

console.log(
  `${eunyomi.firstName}는 ${eunyomi.friends.length}명의 친구가 있고, 그 중 친한 친구는 ${eunyomi.friends[0]}이다.`
);

// -----------------------------------------

// 10. Object Methods
const eunyomi = {
  firstName: 'Eunyomi',
  lastName: 'Lee',
  birthYear: 1999,
  job: 'Programmer',
  friends: ['이강인', '손흥민', '황희찬'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  // getSummary: function () {
  //   if (this.hasDriversLicense) {
  //     return `${this.firstName}는 ${this.age}살이고, 직업은 ${this.job}이다. 그리고 그녀는 운전면허가 있다.`;
  //   } else {
  //     return `${this.firstName}는 ${this.age}살이고, 직업은 ${this.job}이다. 그리고 그녀는 운전면허가 없다.`;
  //   }

  getSummary: function () {
    return `${this.firstName}는 ${this.age}살이고, 직업은 ${
      this.job
    }이다. 그리고 그녀는 운전면허가 ${
      this.hasDriversLicense ? '있다' : '없다'
    }.`;
  },
};
// console.log(eunyomi.calcAge(1999));
// console.log(eunyomi['calcAge'](1999));

console.log(eunyomi.calcAge());

console.log(eunyomi.age);
console.log(eunyomi.age);
console.log(eunyomi.age);

// Challenge
// getSummary() : eunyomi에 대한 데이터를 요약하는 문자열 반환
// 출력 예: "Eunyomi는 25살이고, 직업은 Programmer이다. 그리고 그녀는 운전면허가 있다."
console.log(eunyomi.getSummary());

// ------------ # Challenge-3 # --------------

// 11. Iteration: The for Loop
// console.log('My hobby is playing soccer 1 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 2 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 3 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 4 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 5 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 6 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 7 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 8 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 9 ⚽🏃🏻‍♂️');
// console.log('My hobby is playing soccer 10 ⚽🏃🏻‍♂️');

// for loop는 조건이 참인 동안에 계속 실행
for (let rep = 1; rep <= 10; rep++) {
  console.log(`My hobby is playing soccer ${rep} ⚽🏃🏻‍♂️`);
}

// -----------------------------------------

// 12. Looping Arrays, Breaking and Continuing
const yomiArray = [
  'Eunyomi',
  2024 - 1999,
  'Programmer',
  ['이강인', '손흥민', '황희찬'],
  true,
];
const types = [];

// console.log(yomiArray[0]);
// console.log(yomiArray[1]);
// console.log(yomiArray[2]);
// console.log(yomiArray[3]);

for (let i = 0; i <= yomiArray.length - 1; i++) {
  // Reading from yomiArray
  console.log(yomiArray[i], typeof yomiArray[i]);

  // Filling types array
  // types[i] = typeof yomiArray[i];
  types.push(typeof yomiArray[i]);
}
console.log(types);

const years = [1999, 2002, 2010, 1989];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages[i] = 2024 - years[i];
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
console.log('---- 1. Continue ----');
for (let i = 0; i <= yomiArray.length - 1; i++) {
  if (typeof yomiArray[i] !== 'string') continue;

  console.log(yomiArray[i], typeof yomiArray[i]);
}

console.log('---- 2. Break ----');
for (let i = 0; i <= yomiArray.length - 1; i++) {
  if (typeof yomiArray[i] === 'object') break;

  console.log(yomiArray[i], typeof yomiArray[i]);
}

// -----------------------------------------

// 13. Looping Backwards and Loops in Loops
const yomiArray = [
  'Eunyomi',
  2024 - 1999,
  'Programmer',
  ['이강인', '손흥민', '황희찬'],
];

// 0, 1, ..., 3
for (let i = 0; i <= yomiArray.length - 1; i++) {
  console.log(i, yomiArray[i]);
}
// 3, 2, ..., 0
for (let i = yomiArray.length - 1; i >= 0; i--) {
  console.log(i, yomiArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Start exercise ${exercise} ---------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Today exercise ${exercise} is Basketball ${rep} 🏀`);
  }
}
*/
// -----------------------------------------

// 14. The while Loop (while 문)
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`My hobby is playing soccer ${rep} ⚽🏃🏻‍♂️`);
// }

console.log(`---------- (While 문) ----------`);
let rep = 1;
while (rep <= 10) {
  console.log(`My hobby is playing soccer ${rep} ⚽🏃🏻‍♂️`);
  rep++;
}

// 주사위의 숫자가 6이 나올 때까지 계속 실행
// dice: 1 ~ 6 랜덤 숫자 생성
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`주사위 번호: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  // if (dice === 6) console.log(`주사위 종료: ${dice}`);
}
console.log(`주사위 종료: ${dice}`);

// ◉ while 문: counter 없는 루프, 반복 횟수가 정확하지 않을 때 사용
