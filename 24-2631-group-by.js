Array.prototype.groupBy = function(fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item)

    // You may use this: result[key] = result[key] || [];
    // instead of using explicit if statement
    // if (!result.hasOwnProperty(key)) {
    //   result[key] = [];
    // }

    result[key] = result[key] || [];
    result[key].push(item);
  }


  return result;
};

const res = [1, 2, 3].groupBy(String) // { "1": [1], "2": [2], "3": [3] }

console.log('result: ', res);


