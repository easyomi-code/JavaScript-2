'use strict';

/*
const x = '23';

const calcAge = birthYear => 2024 - birthYear;
console.log(calcAge(1999));

// -----------------------------------------

// 1. Using Google, StackOverflow and MDN (도구 이용 - Google, StackOverflow, MDN)

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// 우리는 스마트 홈 온도계를 만드는 회사에서 일합니다.
// 우리의 가장 최근 업무는 다음과 같습니다.
// "하루의 일련의 온도가 주어지면, 온도 진폭을 계산하십시오.
// 때때로 센서 오류가 있을 수 있다는 것을 명심하십시오."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 💛 1) Understanding the problem (문제를 이해하기)
// - What is temp amplitude? (온도 진폭이란?)
// - Answer: difference between highest and lowest temp (온도 진폭 -> 최고 온도와 최저 온도의 차이)
// - How to compute max and min temperatures? (최고 온도와 최저 온도를 계산하는 방법은?)
// - What's a sensor error? And what do do? (센서 오류는 무엇인가? 그리고 어떻게 해야 하는가?)

// 💛 2) Breaking up into sub-problems (문제를 더 작은 하위 문제로 분해하기)
// - How to ignore errors? (오류를 무시하는 방법?)
// - Find max value in temp array (온도 배열의 최대값 찾기)
// - Find min value in temp array (온도 배열의 최소값 찾기)
// - Subtract min from max (amplitude) and return it (return 최대값 - 최소값)

// 🔎 Google: javascript get max value in array
// 🔎 Stack overflow: https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript

const calcTempAmplitude = function (temps) {
  let max = 0
  let min = 0

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 9, 0, 11, 200, 7, 109]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 💛 1) Understanding the problem (문제를 이해하기)
// - With 2 arrays, should we implement functionality twice? (배열이 2개면 기능을 두 번 구현해야 하나?)
// - Answer: No! Just merge two arrays (No! 2개의 배열을 병합하면 된다.)

// 💛 2) Breaking up into sub-problems (문제를 더 작은 하위 문제로 분해하기)
// - How to merge 2 arrays? (2개의 배열을 병합하는 방법?)

// 🔎 Google: javascript merge two arrays
// 🔎 MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0
  let min = 0

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([2, 3, 9, 6], [7, 3, 5]);
console.log(amplitudeBug);

// -----------------------------------------

// 2. Debugging with the Console and Breakpoints (Console 및 Breakpoints를 활용한 디버깅)
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('섭씨온도(°C):')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measureKelvin.value);
  // console.warn(measureKelvin.value);
  // console.error(measureKelvin.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger (디버거 사용)
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([2, 3, 9, 6], [7, 3, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/
// -----------------------------------------

// Coding Challenge #1
/*
예측된 최고 온도의 배열이 주어지면 온도계는 이러한 온도가 있는 문자열을 표시한다.
ex) 예: [17, 21, 23]은 "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..." 출력
배열 'arr'을 매개변수로 하고, 위와 같은 문자열을 콘솔에 기록하는 함수 'printForecast' 생성
문제 해결 프레임워크 사용: 문제를 이해하고 하위 문제로 나누기!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 💛 1) Understanding the problem (문제를 이해하기)
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 💛 2) Breaking up into sub-problems (문제를 더 작은 하위 문제로 분해하기)
// - Transform array into string (배열을 문자열로 변환)
// - Transform each element to string with ºC (배열의 각 요소 뒤에 ºC 출력)
// - String needs to contain day (days -> index + 1)
// - Add ... between elements and start and end of string (배열 요소의 시작 및 끝에 ... 추가)
// - Log string to console

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

console.log(`... ${arr1[0]}ºC ... ${arr1[1]}ºC ... ${arr2[1]}ºC`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1}days ... `;
  }
  console.log('... ' + str);
};
printForecast(arr1);
printForecast(arr2);
