function setTimeout(fn, time) {
  console.log(time + 'ms')
  global.setTimeout(() => {
    fn();
  }, time)
}

const app = {
  middleWares: [],
  use(fn) {
    this.middleWares.push(fn);
  },
  /**
   * works, but not good
   */
  run1() {
    let i = 0;

    const dispatch = i => {
      const middleWare = this.middleWares[i];
      if (!middleWare) return Promise.resolve();
      return new Promise(resolve => {
        const next = () => resolve()
        middleWare.call(this, next);
      }).then(dispatch.bind(this, ++i)).catch(Promise.reject);
    }
    return dispatch(0)
  },
  /**
   * koa official approach
   */
  run2() {
    const dispatch = i => {
      const fn = this.middleWares[i];
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(dispatch.bind(null, i + 1)))
      } catch(e) {
        return Promise.reject(e);
      }
    }
    return dispatch(0);
  }
}
app.use(next => setTimeout(() => next(), 5000))
app.use(next => console.log(123))
app.run() // 5000ms -> 123


