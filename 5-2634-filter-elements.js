// Filter array withoug filter method
const filter = (array, fn) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) {
      result.push(array[i]);
    }
  }

  return result;
};

