const createCounter = function(n) {
  // n is a hidden state or CLOSURE
  return function() {
    return n++;    
  };
};

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

// It could be the same as...


const createCounterWithVar = function(n) {
  let result = n;
  // n is a hidden state or CLOSURE
  return function() {
    return result++;    
  };
};


