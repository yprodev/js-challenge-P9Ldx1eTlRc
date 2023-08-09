const promisePool = async function(functions, n) {
  return new Promise((resolve, _) => {

    let i = 0;
    let inProgress = 0;

    function callback() {

      if (i === functions.length && inProgress === 0) {
        resolve();
      }

      while (i < functions.length && i < n) {
        function[i++]()
          .then(() => {
            inProgress--;

            callback();
          });

        inProgress++;
      }

    }

    callback();
    
  });
};

const sleep = (t) => new Promise(res => setTimeout(res, t));

promisePool(
  [
    () => sleep(500),
    () => sleep(400)
  ], 
  1
).then(console.log); // After 900ms

// --------------------------------------------------------------

const promisePoolWithPromise = async function(functions, n) {
  let i = 0;

  async function callback() {
    if (i === functions.length) return;

    await functions[i++]();
    await callback();
  }

  const nPromises = Array(n).fill().map(callback);

  await Promise.all(nPromises); // n promises
};


promisePoolWithPromise(
  [
    () => sleep(500),
    () => sleep(400)
  ], 
  1
).then(console.log); // After 900ms
