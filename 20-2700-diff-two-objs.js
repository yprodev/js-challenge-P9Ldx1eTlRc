function objDiff(item1, item2) {
  // Only care about common keys
  // If both primitive and different, then return diff 
  // If one is obj and another isn't, then return diff
  // If one is an array and on is obj, then return diff
  // If both arrs or both objs, then return recursion
  
  // If both primitives
  if (!isObject(item1) && !isObject(item2)) {
    return item1 === item2 ? {} : [ item1, item2 ];
  }

  // One is primitive
  if (!isObject(item1) || !isObject(item2)) {
    return [ item1, item2 ];
  }

  // One is an array, one is an object
  if (Array.isArray(item1) !== Array.isArray(item2)) {
    return [ item1, item2 ];
  }

  const diff = {};

  for (const key in item1) {
    if (item2.hasOwnProperty(key)) {
      const result = objDiff(item1[key], item2[key]);

      if (Object.keys().length > 0) {
        diff[key] = result;
      }
    }
  }

  return diff;

  function isObject(obj) {
    typeof obj === 'object' && obj !== null;
  }
}



