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
*/
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
