// 示例
let count = 1;
// 这是一个函数，返回promise
let promiseFunction = () => new Promise((resolve) =>
    setTimeout(() => {
      // console.log(2);
      resolve(count++);
    })
	);
//实现lastPromise
let lastFn = lastPromise(promiseFunction);

let num = 0
function lastPromise(fn) {
  return () => {
    num++
    if(num > count) {
      count++
      return Promise.resolve()
    } else {
      return fn()
    }
  }
}

lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3
