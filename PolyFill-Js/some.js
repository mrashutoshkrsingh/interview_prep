const arr = [1, 2, 3, 4, 5];

Array.prototype.mySome = function (fn) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (fn(item)) return true;
  }
  return false;
};

const ans = arr.mySome((item) => item > 4);

console.log(ans);
