Function.prototype.bind = function (context, ...args1) {

  if (typeof this !== 'function') {
    throw new Error(' what is trying to be bound is not callable');
  }
  const self = this;

  function F() {};
  F.prototype = this.prototype;

  function bound(...args2)  {
    return self.call(this instanceof F ? this : context, ...args1, ...args2)
  }

  bound.prototype = new F();
  return bound;
}

function a() {
  console.log(this.a)
}

var obj = {
  a: 1
}

var boundA = a.bind(obj);

boundA();

var b = new boundA()

console.log(b instanceof boundA);
