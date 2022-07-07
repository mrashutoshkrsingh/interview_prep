const printName = function (age, a, ...param) {
  return this.name + " " + age + " " + a + param;
};

const newBind = function (newThis, ...arg) {
  const t = this;
  return function (...a) {
    return t.call(newThis, ...[...arg, ...a]);
  };
};

// another
const newBind1 = function (newThis, ...arg) {
  const t = this;
  return function (...a) {
    return t.apply(newThis, [...arg, ...a]);
  };
};

Function.prototype.newBind = newBind;
Function.prototype.newBind1 = newBind1;

const obj = { name: "Ashutosh" };
const obj2 = { name: "Dhoni" };
console.log(printName.bind(obj, "param1", "param2")("param3"));
console.log(printName.newBind1(obj, "param1", "param2")("param3"));
console.log(printName.newBind(obj2, ["param1", "param2"])("param3"));

// console.log(printName(20));

function test(...args) {
  console.log("...args", args);
  console.log("arguments", arguments);
}

test(1, 2, 3, 4, 5);
