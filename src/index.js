"use strict"
module.exports = function toReadable (number) {
  let strArr = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety"
  };

  let arrRes = [];

  if (number == 0) return "zero";
  if (number >= 100){
      arrRes.push(`${strArr[Math.floor(number / 100)]} hundred`);
  }

  let num = number % 100;
  if( !num ) return arrRes.join(' ');

  if (strArr[num]){
    arrRes.push(`${strArr[num]}`);
    return arrRes.join(' ');
  }

  arrRes.push(`${strArr[Math.floor(num / 10)*10]} ${strArr[num % 10]}`);
  return arrRes.join(' ');
};