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

  let strRes = "";
  let num =0;
  if (number == 0) {return "zero"};
  if (number >= 100){
      num = Math.floor(number / 100);
      strRes += `${strArr[Math.floor(number / 100)]} hundred`;
      num = number - Math.floor(number / 100)*100;
      if (num == 0){return strRes;};
  }else if(number < 100){
    num = number;
  };
  if (strArr[num]){
    if (number > 100){
      strRes += ` ${strArr[num]}`;
    }else{
      strRes += `${strArr[num]}`
    };
  }else{
    if (number > 100){
      strRes += ` ${strArr[Math.floor(num / 10)*10]} ${strArr[num % 10]}`;
    }else{
      strRes += `${strArr[Math.floor(num / 10)*10]} ${strArr[num % 10]}`;
    };
  };
  return strRes;
};


