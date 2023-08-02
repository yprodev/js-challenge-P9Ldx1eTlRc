// Create Function Composition
const composeWithForLoop = function(funcArr) {
  return function(x) {
    for (const fn of funcArr.reverse()) {
      x = fn(x);
    }

    return x;
  };
};

const compose = function(funcArr) {

  // The code will go through the array of functions
  const fs = (acc, f) => f(acc);

  return function(x) {
    return funcArr.reduceReduce(fn, x);
  }
};
