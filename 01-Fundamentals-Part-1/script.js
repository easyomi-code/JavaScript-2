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

// ------------ # Challenge-1 # --------------

// 6. Strings and Template Literals (문자열과 템플릿 리터럴)
const firstName = 'Eunyomi';
const job = 'programmer';
const birthYear = 1999;
const year = 2024;

const eunyomi = '내 이름은 ' + firstName + '이고, ' + '직업은 ' + job + ' 입니다. ' + 
  '나이는 ' + (year - birthYear) + '살 입니다.';
console.log(eunyomi);

const eunyomiNew = `내 이름은 ${firstName}이고, 직업은 ${job} 입니다. 나이는 ${
  year - birthYear}살 입니다.`;
console.log(eunyomiNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

// -----------------------------------------

// 7. Taking Decisions: if / else Statements (if-else 문)
// 운전면허 취득 가능 확인 프로그램
const age = 15;

if(age >= 18) {
  console.log('당신은 운전면허를 취득할 수 있습니다🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`당신은 너무 어려서 ${yearsLeft}년 후에 운전면허를 취득할 수 있습니다😂`)
}

const birthYear = 2024;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// ------------ # Challenge-2 # --------------

// 8. Type Conversion and Coercion (형변환 및 강제 변환)
// type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
// Number(): 문자열 → 숫자
console.log(Number(inputYear) + 18);

console.log(Number('Eunyomi'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('나는 ' + 25 + '살 입니다.')
console.log('25' - '10' - 5);

console.log('25' + '2');
console.log('25' - '2');
console.log('25' * '2');
console.log('25' / '2');

// 출력 알아맞히기
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);
*/

// -----------------------------------------
// 9. Truthy and Falsy Values
// 5 falsy valuse: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Eunyomi'));
console.log(Boolean({}));
console.log(Boolean(''));

const money  = 5000;
if(money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should get a job!');
}

let height = 0;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}