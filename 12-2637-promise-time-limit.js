
const timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      const callbackId = setTimeout(() => reject('Time Limit Exceeded'), t);

      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => clearTimeout(callbackId));

    });
  };
};

function fnCallback(t) {
  return new Promise(res => setTimeout(res, t));
}

const limited = timeLimit(fnCallback, 100);

limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms


