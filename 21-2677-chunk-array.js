function chunkV1(arr, size) {
  const res = [];

  let subarr = [];

  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);

    if (subarr.length === size) {
      res.push(subarr);
      subarr = [];
    }
  }

  if (subarr.length) {
    res.push(subarr);
  }

  return res;

};


function chunkV2(arr, size) {
  const res = [];

  for (let i = 0; i < arr.length; i += size) {
    const slice = arr.slice(i, i + size);
    res.push(slice);
  }

  return res;
};

