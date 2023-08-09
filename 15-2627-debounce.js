const debounce = function(fn, t) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100);

log('hello'); // cancelled
log('Hello'); // cancelled
log('hello'); // Logged at t=100ms

