function flat(array, level) {
  const result = [];

  function helper(arr, depth) {
    for (const val of arr)  {
      if (typeof val === 'object' && depth < level) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }

    return result;
  }

  return helper(array, 0);
}

// Area where you can use it - application area
let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});

let promise2 = promise1.then((result) => {
  console.log('result', result); // logs '1'

  return new Promise((resolve, reject) => {
    resolve(result + 1);
  });
});

promise2.then((result) => {
  console.log(result); // logs '2'
});


