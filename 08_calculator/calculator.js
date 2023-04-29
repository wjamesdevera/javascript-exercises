const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = (arr) => {
  return arr.reduce((quotient, multiples) => quotient * multiples)
};

const power = function(a, b) {
  let quotient = a
  for (let i = 0; i < b - 1; i++) {
    quotient *= a;
  }
  return quotient;
};

const factorial = (n) => { return n > 0 ? n * factorial(n - 1) : 1;};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
