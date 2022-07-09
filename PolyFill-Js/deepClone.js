var object_create = Object.create;
if (typeof object_create !== "function") {
  object_create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

function deepClone(obj) {
  if (!obj || typeof obj !== "object") return obj;

  //   Honor native/custom clone methods
  if (typeof obj.clone == "function") {
    return obj.clone(true);
  }

  //   special cases
  //   Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  //   RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  //   DOM Element
  if (obj.nodeType && typeof obj.cloneNode === "function") {
    return obj.cloneNode(true);
  }

  //   Array
  if (Array.isArray(obj)) {
    // slice will do soft clone
    const el = obj.slice();
    const len = obj.length;
    while (len--) {
      el[len] = deepClone(obj[len]);
    }
    return el;
  }

  //   If we've reached here, we have a regular object
  let proto = Object.getPrototypeOf
    ? Object.getPrototypeOf(obj)
    : obj.__proto__;

  let dest = object_create(proto);

  for (let key in obj) {
    dest[key] = deepClone(obj[key]);
  }
  return dest;
}
