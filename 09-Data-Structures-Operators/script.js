'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `주문 완료! ${this.starterMenu[starterIndex]} 그리고 ${this.mainMenu[mainIndex]}는 ${time}분에 ${address}로 배달될 예정입니다.😊 `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`${ing1}, ${ing2}, ${ing3}을(를) 넣은 파스타 나왔습니다!😋`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// 1. Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// -----------------------------------------

// 2. Destructuring Objects
// 객체 Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// 새로운 변수에 속성 할당
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// 기본 값 설정
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables(변수 값 변경)
let a = 111;
let b = 999;
console.log(`변경 전 -> a: ${a}, b: ${b}`);

const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj); // 괄호()로 감싸줌
console.log(`변경 후 -> a: ${a}, b: ${b}`);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'ABC Hotel, 302',
  mainIndex: 2,
  starterIndex: 2,
});

// default 값 지정(time, mainIndex 속성 미지정)
restaurant.orderDelivery({
  address: 'ABC Hotel, 302',
  starterIndex: 0,
});

// -----------------------------------------

// 3. The Spread Operator (...)
// Spread 연산자 -> 배열에서 모든 값을 가져온다.(배열에서 요소를 얻는다)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Spread 연산자는 배열에서 모든 요소를 취하고 새 변수를 생성하지 않는다.
// 쉼표로 구분된 값을 쓸 수 있는 곳에서만 사용할 수 있다.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Eunyomi';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Hello!`);

// Real-world example
const ingredients = [
  // prompt('파스타를 만들어 보자! 넣을 재료 (1)?'),
  // prompt('파스타를 만들어 보자! 넣을 재료 (2)?'),
  // prompt('파스타를 만들어 보자! 넣을 재료 (3)?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
// console.log(restaurant);
// console.log({ ...restaurant });
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

// const restaurantCopy = restaurant;
// restaurantCopy.name = 'Ristorante Roma';
// console.log('변경 전: ', restaurant.name); // Ristorante Roma
// console.log('변경 후: ', restaurantCopy.name); // Ristorante Roma

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log('변경 전: ', restaurant.name); // Classico Italiano
console.log('변경 후: ', restaurantCopy.name); // Ristorante Roma

// -----------------------------------------

// 4. Rest Pattern and Parameters
// 1) Destructuring
// SPREAD(...), because on RIGHT side of = (= 기준, 오른쪽)
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = (= 기준, 왼쪽)
// 변수 이름을 쉼표로 구분
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
// -----------------------------------------

// 5. Short Circuiting (&& and ||)
// Use any data type (어떤 데이터 타입도 사용 가능하다.)
// Return any data type (어떤 데이터 타입이든 반환할 수 있다.)
// Short Circuiting 작업을 한다 -> true인 값이 존재하면 그 값을 즉시 반환
console.log('----------- OR(||) -----------');
console.log(3 || 'Eunyomi'); // Not Boolean
console.log('' || 'Eunyomi');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
console.log(`restaurant.numGuests = ${restaurant.numGuests}`);
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------- AND(&&) -----------');
console.log(0 && 'Eunyomi');
console.log(7 && 'Eunyomi');

console.log('Hello' && 25 && null && 'Eunyomi');
console.log('Hello' && undefined && null && 'Eunyomi');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
