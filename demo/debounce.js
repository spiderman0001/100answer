function debounce(fn, time, immediate) {
  let timer;
  return function(...args) {
    const wait = () => {
      return setTimeout(() => {
        timer = null;
        if(!immediate) fn.apply(this, args)
      }, time);
    }
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    if (!timer) {
      timer = wait();
      return ;
    }
    clearTimeout(timer);
    timer = wait();
  }
}

function log() {
  console.log(1);
}

var fn = debounce(log, 1000);

fn();
fn();
fn();
