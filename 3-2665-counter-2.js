const createCounter = function(init) {
  let count = init;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function reset() {
    count = init;

    return count;
  }

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

// Solution with classes

class Counter {
  constructor(init) {
    this.init = init;
    this.count = init;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  reset() {
    this.count = this.init;

    return this.count;
  }
}

