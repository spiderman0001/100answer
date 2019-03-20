function Subject() {
  this.change = function() {
    this.observers.notify()
  }
}
function Observer(fn) {
  this.fn = fn;
}
Observer.prototype.run = function() {
  this.fn.call()
}


Subject.prototype = new Observerable();


function Observerable() {
  this.observers = [];
}

Observerable.prototype.add = function(observer) {
  this.observers.push(observer);
}

Observerable.prototype.remove = function(observer) {
  const index = this.observers.findIndex(observer);
  if (index > -1) this.observers.splice(index, 1);
}

Observerable.prototype.notify = function() {
  this.observers.forEach(observer => {
    observer.run && observer.run();
  })
}
