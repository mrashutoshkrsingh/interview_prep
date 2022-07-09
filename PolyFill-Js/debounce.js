// Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

// Here we monitor the delay user gives between two key presses. If this delay matches our threshold limit, then we make another API call.

const debounce = function (fn, delay) {
  let timer;
  return function (...agrs) {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, agrs);
    }, delay);
  };
};
