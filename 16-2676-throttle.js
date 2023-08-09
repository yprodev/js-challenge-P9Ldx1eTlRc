// technically speaking it is not working as a real throttle
// Throttle / Rate Limitig
const throttle = function(fn, t) {
  let isThrottled = false;
  let nextArgs = null;

  function helper() {
    isThrottled = false;
    // Is there anything scheduled?
    if (nextArgs) {
      fn(...nextArgs);
      isThrottled = true;
      nextArgs = null;
      setTimeout(helper, t);
    } else {
      isThrottled = false;
    }
  }

  return function(...args) {
    if (isThrottled) {
      // wait
      nextArgs = args;
    } else {
      fn(...args);
      isThrottled = true;

      setTimeout(helper, t);
    }
  }
};


const throttled = throttle(console.log, 100);
throttled('log1'); // logged immediately
throttled('log2'); // logged at t=100ms


