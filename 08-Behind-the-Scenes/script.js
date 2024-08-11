'use strict';

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
