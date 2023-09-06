Function.prototype.callPolyfill = function (context, ...args) {
  return this.apply(context, args);
};

function increment() {
  this.count++;

  return this.count;
}

const res = increment.callPolyfill({ count: 1 }); // 2

console.log('result: ', res);

