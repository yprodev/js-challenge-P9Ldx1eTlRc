
(function () {

  async function sleep_one(millis) {
    return new Promise((resolve, _) => {
      setTimeout(resolve, millis);
    });
  }

  let t1 = Date.now();

  sleep_one(100)
    .then(() => console.log(Date.now() - t1)); // 100

  // Instead of returning the promise, just await it
  async function sleep_two(millis) {
    await new Promise((resolve, _) => {
      setTimeout(resolve, millis);
    });
  }

})();



