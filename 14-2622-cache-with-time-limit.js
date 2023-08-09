
const TimeLimitedCache = function() {
  this.cache = new Map();
};


TimeLimitedCache.prototype.set = function(key, value, duration) {
  const existingValue = this.cache.get(key);

  if (existingValue) {
    // clear the timeout if override the value for the same key
    clearTimeout(existingValue.timeoutId);
  }


  const timeoutId = setTimeout(() => {
    // remove the key
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, timeoutId });

  return Boolean(existingValue);
};

TimeLimitedCache.prototype.get = function(key) {
  if (this.cache.has(key)) return this.cache.get(key).value;

  return -1;
};

TimeLimitedCache.prototype.count = function() {
  return this.cache.size;
};

const obj = new TimeLimitedCache();

obj.set(1, 42, 1000); // false
obj.get(1); // 42
obj.count(); // 1

