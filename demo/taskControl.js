class Scheduler {

  constructor(max = 2) {
    this.max = max;
    this.tasks = [];
    this.count = 0;
  }

  add(promiseCreator) {
    return new Promise(resolve => {
      this.tasks.push(() => {
        return promiseCreator().then(resolve);
      })
      this.run();
    })
  }

  run() {
    if (this.count < this.max && this.tasks.length > 0) {
      this.count += 1;
      const task = this.tasks.shift();
      task().then(() => this.done());
    }
  }

  done() {
    this.count -= 1;
    this.run();
  }
}

const timeout = time => () => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler(2)

const addTask = (time, order) => {
  scheduler.add(timeout(time)).then(() => {
    console.log(order)
  })
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// 2,3,1,4
