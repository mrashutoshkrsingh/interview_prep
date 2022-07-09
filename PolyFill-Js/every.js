// every(callbackFn, thisArg)
// every((element, index, array) => { /* ... */ } )

const ages = [32, 33, 16, 40];

Array.prototype.myEvery = function (fn, thisArg) {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    if (!fn.call(thisArg, this[i], i, this)) return false;
  }
  return true;
};

const ans = ages.every(checkAge);
const ans1 = ages.myEvery(checkAge);

console.log(ans, ans1);
function checkAge(age) {
  return age > 18;
}
