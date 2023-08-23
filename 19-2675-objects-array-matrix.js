const jsonToMatrix = () => {
  const keySet = new Set();  

  for (const obj of arr) {
    getKeys(arr, '');
  }

  const keys = Array.from(keySet).sort();
  const result = [keys]; // array with the first row - keys

  for (const obj of arr) {
    const keyToVal = {};
    let row = [];

    getValues(obj, '', keyToVal);

    for (const key of keys) {
      if (key in keyToVal) {
        row.push(keyToVal[key]);
      } else {
        // if object does not have specific key, which are in other objects
        row.push('');
      }
    }

    res.push(row);
  }

  function getKeys(obj, path) {
    for (const key in obj) {
      
      const newPath = path ? `${path}.${key}` : key;

      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      } else {
        keySet.add(key);
      }
      
    }
  }

  function getValues(obj, path, keyToVal) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;

      if (isObject(obj[key])) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
};

