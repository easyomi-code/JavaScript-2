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
*/
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
