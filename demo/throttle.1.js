function throttle(fn, interval) {
  let timer;
  let first = true;

  return function(...args) {
    if (first) {
      fn.apply(this, args);
      first = false
    }
    if (timer) return false;
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(this, args)
    }, interval);
  }
}


function log() {
  console.log(1);
}

var throttledLog = throttle(log, 1000)

throttledLog()
throttledLog()
throttledLog()
throttledLog()
throttledLog()
throttledLog()
