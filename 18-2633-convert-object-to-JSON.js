const jsonStringify = function(object) {
  if (object === null || object === undefined) {
    return String(object);
  }

  if (Array.isArray(object)) {
    const items = object.map((item) => jsonStringify(item));

    return "[" + items.join(',') + "]";

    // Imperative way of doing things
    // let result = '';
    //
    // for (let i = 0; i < object.length; i++) {
    //   result += jsonStringify(String(object[i])) + ",";
    // }
    //
    // return result;
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object);

    const keyValuePairs = keys.map((key) => `"${key}": ${jsonStringify(object[key])}`);

    return "{" + keyValuePairs.join(',') + "}";
  }

  if (typeof object === 'string') {
    return `"${String(object)}"`;
  }

  return String(object);
};


