// When function is wrapping the function, this
// is kind of simplified Decorator Design Pattern
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    // Better to right NOT
    if (key in cache) {
      return cache[key];
    }

    cache[key] = Math.sum(args);

    return cache[key];
  }
}

let callCount = 0;

const memoizedFn = memoize(function(a, b) {
  callCount += 1; 
  return a + b;
});

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5

console.log(callCount); // 1

