const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0)
};

const multiply = function(arr) {
  // return a * b;
  return arr.reduce((prod, curr) => prod * curr, 1);
};

const power = function(x, n) {
	return x**n;
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
