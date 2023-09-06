Array.prototype.last = function () {
  if (!this.length) return -1;

  return this[this.length - 1];
};

const arr = [1, 2, 3];

const res = arr.last(); // 3

console.log('result:', res);
