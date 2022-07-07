const arr = [1, 2, 3, 4, 5];

const newFilter = function (cb) {
  const ans = [];
  for (let i = 0; i < this.length; i++) {
    const bool = cb(this[i]);
    if (bool) ans.push(this[i]);
  }
  return ans;
};

Array.prototype.newFilter = newFilter;

console.log(arr.newFilter((item) => (item & 1) === 0));
console.log(arr.filter((item) => (item & 1) === 0));
