'use strict'

let fibonacci_arr = [];
let fib_value = 0;
let fib_max = 350;

const fibonacci = () => {
  for (let i = fib_value; i < fib_max; i++) {
    i === 0 ? fibonacci_arr.push(i) : fibonacci_arr.push(i + (i -1));
  }

  console.log(fibonacci_arr);
  return fibonacci_arr;
}

const isFibonnaci = (num) => {
  if (fibonacci_arr.indexOf(num) !== -1) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  fibonacci,
  isFibonnaci
}
