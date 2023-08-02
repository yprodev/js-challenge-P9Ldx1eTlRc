// The function which is called only once
const once = (fn) => {
  let isCalled = false;

  return function(...args) {
    if (isCalled) return;
    

    isCalled = true;
    return fn(...args);
  }
};

let fn = (a, b, c) => (a + b + c);

let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(1, 2, 3)); // returns undefined

// Variant with .apply()
const onceApply = function(fn) {
  let hasBeenCalled = false;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;

      return fn.apply(this, args);
    }
  }
}


