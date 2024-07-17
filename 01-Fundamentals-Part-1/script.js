/*
// 1. Linking a JavaScript File (JS 파일 연결)
let js = 'amazing';
console.log(1 + 5 + 8 + 16 + 28 + 33 + 45);

// -----------------------------------------

// 2-1. Values and Variables (값, 변수)
console.log('Eunyomi');
console.log(24);

let firstName = 'Eunyeong';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// -----------------------------------------

// 2-2. Variable name conventions (변수 이름 규칙)
let easyomi_code = 'EC';
let $function = 26;

let person = 'eunyomi';
let PI = 3.141592;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Police Officer';

let job1 = 'programmer';
let job2 = 'police officer';

console.log(myFirstJob);

// -----------------------------------------

// 3. Data Types (데이터 타입)
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log('javascriptIsFun: ', typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Eunyomi');

javascriptIsFun = 'YES!';
console.log('javascriptIsFun: ', typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(typeof year);

console.log(typeof null);

// -----------------------------------------

// 4. let, const and var (변수 선언)
// let - 빈 변수 선언 or 값 변경이 가능한 변수
let age = 30;
age = 31;

// const - 상수 변수에 대한 할당(변경할 수 없는 변수)
const birthYear = 1999;
// birthYear = 1990; (X)
// const job; (X)

// var - 옛날 방식(ES6 이전)
var job = 'programmer';
job = 'teacher';

// 변수 선언X - (terrible)
lastName = 'Lee';
console.log(lastName);

// ※ 항상 변수를 적절히 선언하는 것이 중요하다!

// -----------------------------------------

// 5-1. Basic Operators (연산자)
// Math Operators(산술 연산자)
const now = 2024;
const ageEunyomi = now - 1999;
const ageKangin = now - 2001;
console.log(ageEunyomi, ageKangin);

console.log(ageEunyomi * 2, ageEunyomi / 10, 2 ** 3);
// 2 ** 3 => 2 * 2 * 2

const firstName = 'EunYomi';
const lastName = 'Lee';
console.log(firstName + ' ' + lastName);

// Assignment Operators(대입 연산자)
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators(비교 연산자)
console.log(ageEunyomi > ageKangin); // >, <, >=, <=
console.log(ageKangin >= 20);

const isFullAge = ageKangin >= 20;

console.log(now - 1991 > now - 2001);

// -----------------------------------------

*/
// 5-2. Operator Precedence (연산자 우선순위)
const now = 2024;
const ageEunyomi = now - 1999;
const ageKangin = now - 2001;

console.log(now - 1991 > now - 2001);
// 연산자 우선순위에 의해 (-)가 (>)보다 먼저 수행된다.

console.log(25 - 10 - 5); // 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageEunyomi + ageKangin) / 2;
console.log(ageEunyomi, ageKangin, averageAge);
