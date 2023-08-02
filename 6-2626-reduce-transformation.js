// Create reduce

const reduce = (array, fn, init) => {
  let aggregation = init;

  for (let i = init; i < array.length; i++) {
    aggregation = fn(aggregation, array[i]);
  }

  return raggregation;
};

