class MyEventEmitter {
  constructor() {
    this._events = {};
  }

  on(name, listener) {
    if (!this._events[name]) {
      this._events[name] = [];
    }
    this._events[name].push(listener);
  }

  emit(name, data) {
    if (!this._events[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }
    const fireCallBacks = (callback) => {
      callback(data);
    };
    this._events[name].forEach(fireCallBacks);
  }

  removeListener(name, listenerToRemove) {
    if (!this._events[name]) {
      throw new Error(
        `Can't remove a listener. Event "${name}" doesn't exits.`
      );
    }

    const filterListeners = (listener) => listener !== listenerToRemove;

    this._events[name] = this._events[name].filter(filterListeners);
  }
}

const myEventEmitter = new MyEventEmitter();

const handleMyEvent = (data) => {
  console.log("Was fired: ", data);
};

myEventEmitter.on("testEvent", handleMyEvent);

myEventEmitter.emit("testEvent", "hi"); // Was fired: hi

myEventEmitter.emit("testEvent", "trigger"); // Was fired: trigger
myEventEmitter.emit("testEvent", "again"); // Was fired: again

// myEventEmitter.emit("fakeEvent", {}); // Error: Can't emit an event. Event "fakeEvent" doesn't exits.

// myEventEmitter.removeListener("testEvent", handleMyEvent);

console.log(myEventEmitter._events);

myEventEmitter.emit("testEvent", "hiiii"); // Was fired: hi
