const map = function (arr, fn) {
  return arr.map(fn);
};


const mapCustom = function (arr, fn) {
  const result = [];

  for (const i in arr) {
    res.push(fn(arr[i], Number(i)));
  }

  return result;
};



