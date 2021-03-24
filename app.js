// "use strict";
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// // console.log(calcTip(bills));

// console.log(bills, tips, totals);

// // const numbers = [100, 100, 100, 100];

// const calcAverage = (array) => {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total / array.length;
// };

// console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));

// let averageBills = calcAverage(bills).toFixed(2);
// averageBills = Number(averageBills);
// console.log(averageBills);
// let averageTips = calcAverage(tips).toFixed(2);
// averageTips = Number(averageTips);
// console.log(averageTips);
// let averageTotal = calcAverage(totals).toFixed(2);
// averageTotal = Number(averageTotal);
// console.log(averageTotal);

/*
THIS IS WHERE THE VIDEO CODE IS BELOW
*/

// const temperatures = [100, -3, -6, 34, "error", 16, -10, -20, 30, 234];

// const maxNumber = function (array) {
//   let largestNumber = array[0];
//   let i = 0;
//   for (i; i < array.length; i++) {
//     if (!Number(array[i])) {
//       continue;
//     } else if (array[i] > largestNumber) {
//       largestNumber = array[i];
//     }
//   }
//   return largestNumber;
// };

// console.log(maxNumber(temperatures));

/*
Code wars
*/

// const item = 9119;
// const fix = item.toString().split("");
// let squared;
// console.log(fix);

// for (let i = 0; i < fix.length; i++) {
//   squared = fix[i] ** 2;
//   console.log(squared);
// }

// Goals
// User inputs INTEGER and returns the squared variation as well as it concattenated
// Examples: 3113 => 9119

// function squareConcat(items) {
//   let formatted = items.toString().split("");
//   let newFormat = [];
//   for (let i = 0; i < formatted.length; i++) {
//     newFormat.push(formatted[i] ** 2);
//   }
//   return newFormat.join("");
// }

console.log(squareDigits(9119));

function squareDigits(num) {
  //may the code be with you
  let newNum = num.toString().split("");
  let joinArray = [];
  for (let i = 0; i < newNum.length; i++) {
    joinArray.push(newNum[i] ** 2);
  }
  return +joinArray.join("");
}

// function squareConcat(items) {

// }
