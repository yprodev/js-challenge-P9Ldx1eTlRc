const areDeeplyEqual = function(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // The same type
  if (typeof obj1 !=== typeof obj2) {
    return false;
  }

  // Based on previous assumption, check primitives
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }

  // Are we dealing with Arrays?
  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    // Stringify to check if they equal
    if (String(obj1) !== String(obj2)) {
      return false;
    }

    for (let i = 0; i < obj.length; i++) {
      if (!areDeeplyEqual(obj1[i], obj[i])) {
        return false;
      }
    }
  } else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    for (const key in obj1) {
      if (!areDeeplyEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  }

  return true;
};

