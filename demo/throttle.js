function throttle(fn, interval) {
  let first = true;
  let timer;

  return function(...args) {
    if (first) {
      first = false;
      fn.apply(this, args);
      return;
    }
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
    }, interval);
  }
}

function debounce(fn, wait) {
  let timer;
  return function(...args) {
    if (timer) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, interval);
  }
}
