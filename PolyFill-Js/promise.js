function asyncFunc1(time, shouldReject = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldReject) reject(time);
      resolve(time);
    }, time);
  });
}

function myPromiseAll(tasks) {
  let result = [];
  let len = tasks.length,
    count = 0;
  return new Promise((resolve, reject) => {
    tasks.forEach((task, index) => {
      task
        .then((res) => {
          ++count;
          result[index] = res;
          if (count === len) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

let list = [asyncFunc1(2500), asyncFunc1(1100, true), asyncFunc1(3500)];

Promise.all(list)
  .then((res) => console.log(res))
  .catch(console.log);
myPromiseAll(list)
  .then((res) => console.log(res))
  .catch(console.log);
