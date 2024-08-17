'use strict';

/*
// 1. Scoping in Practice
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, 너는 ${age}살이고, ${birthYear}년도에 태어났다.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'KangIn';

      // Reassigning outer scope's variable(외부 스코프의 변수 재할당)
      output = 'NEW OUTPUT!';

      const str = `오, ${firstName}, 너는 밀레니얼 세대이구나!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

// firstName: 전역 변수
const firstName = 'Eunyomi';
calcAge(1996);
// console.log(age);
// printAge();

// -----------------------------------------

// 2. Hoisting and TDZ in Practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1999;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example(호이스팅으로 인한 예상치 못한 상황)
console.log(undefined);
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// -----------------------------------------

// 3. The this Keyword in Practice
// 어떤 기능도 없는 this 키워드(전역 컨텍스트)
console.log(this);

// 함수 표현식(Function Expression)
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(1999);

// 화살표 함수(Arrow Function)
const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(2001);

const eunyomi = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
eunyomi.calcAge();

const kangin = {
  year: 2001,
};
// Method borrowing(메서드 공유)
kangin.calcAge = eunyomi.calcAge;
kangin.calcAge();

const func = eunyomi.calcAge;
func();

// -----------------------------------------

// 4. Regular Functions vs. Arrow Functions
// var firstName = 'Kangin';

const eunyomi = {
  firstName: 'Eunyomi',
  year: 1999,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // Solution 1(ES6 이전)
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2(Arrow Function, ES6)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`저의 이름은 ${this.firstName} 입니다.`);
  },
};
eunyomi.greet();
eunyomi.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// -----------------------------------------

// 5. Primitives vs. Objects (Primitive vs Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Eunyomi',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Me: ', me);
// {name: 'Eunyomi', age: 27}
console.log('Friend: ', friend);
// {name: 'Eunyomi', age: 27}
*/
// -----------------------------------------

// 6. Primitives vs Objects in Practice
// Primitive types(원시 타입)
let lastName = 'Kate';
let oldLastName = lastName;
lastName = 'Eunyomi';
console.log(lastName, oldLastName);

// Reference types(참조 타입)
const jessi = {
  firstName: 'Jessi',
  lastName: 'King',
  age: 28,
};

// marriedJessi: 스택에 있는 또 다른 변수, 새로운 객체 X
const marriedJessi = jessi;
marriedJessi.lastName = 'Queen';
console.log('변경 전: ', jessi);
console.log('변경 후: ', marriedJessi);
// Jessi, marriedJessi: 힙(Heap)에서 같은 메모리 주소를 가리킴
// 콜 스택(Call Stack)에서 같은 메모리 주소 레퍼런스를 갖고 있기 때문
// marriedJessi = {};

// Copying objects
console.log('---------- Copying objects ----------');
const jessi2 = {
  firstName: 'Jessi',
  lastName: 'King',
  age: 28,
};

const jessiCopy = Object.assign({}, jessi2);
jessiCopy.lastName = 'Queen';
console.log('변경 전: ', jessi2);
console.log('변경 후: ', jessiCopy);

console.log('--------------------------------------');
const yomi = {
  firstName: 'Yomi',
  lastName: 'King',
  age: 29,
  family: ['Jin', 'V'],
};

const yomiCopy = Object.assign({}, yomi);
yomiCopy.lastName = 'Queen';

yomiCopy.family.push('RM');
yomiCopy.family.push('Jimin');

console.log('변경 전: ', yomi);
console.log('변경 후: ', yomiCopy);
