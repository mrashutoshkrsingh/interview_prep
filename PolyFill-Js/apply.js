const printName = function (age, a, ...param) {
  return this.name + " " + age + " " + a + param;
};

const newApply = function (newThis, arg) {
  const t = this;
  return function (...a) {
    return t.call(newThis, ...[...arg, ...a]);
  };
};

// Another
const newApply1 = function (newThis, ...arg) {
  const t = this;
  return function (...a) {
    return t.apply(newThis, [...arg, ...a]);
  };
};

Function.prototype.newApply = newApply;
Function.prototype.newApply1 = newApply1;

const obj = { name: "Ashutosh" };
const obj2 = { name: "Dhoni" };
console.log(printName.apply(obj, "param1", "param2")("param3"));
console.log(printName.newApply1(obj, "param1", "param2")("param3"));
console.log(printName.newApply(obj2, ["param1", "param2"])("param3"));
