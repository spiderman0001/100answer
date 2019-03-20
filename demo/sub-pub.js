class Handler {
  constructor(fn, once = false) {
    this.fn = fn;
    this.once = once;
    this.called = false;
  }
  run(...args) {
    this.fn.call(null, ...args);
    this.called = true
  }
}

class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(event, handler, once = false) {
    if (this.events[event]) {
      this.events[event].push(new Handler(handler, once));
    } else {
      this.events[event] = [ new Handler(handler, once) ];
    }
  }

  off(event, handler) {
    if (!this.events[event]) return;
    const index = this.events[event].findIndex(eventHandler => eventHandler.fn === handler);
    if (index < 0) return;
    this.events[event].splice(index, 1);
  }

  emit(event, ...args) {
    const eventHandlers = this.events[event];
    if (!eventHandlers) return;
    eventHandlers.forEach(handler => {
      handler.run(...args)
    });
    this.clearHandlers(event);
  }

  clearHandlers(event) {
    this.events[event] = this.events[event].filter(handler => !handler.once || !handler.called)
  }

  once(event, handler) {
    this.on(event, handler, true)
  }
}

const emitter = new EventEmitter();

let count = 0;
let handler = (a) => {
  count += 1;
  console.log('aa1', count, a);
}
emitter.on('aa', handler)

emitter.on('aa', (a) => {
  console.log('aa2', count, a);
})

emitter.once('bb', (c) => {
  console.log('bb', count, c);
})

emitter.emit('aa', 1)
emitter.emit('aa', 3)
emitter.emit('bb', 4)
emitter.emit('bb')
emitter.off('aa', handler);

emitter.emit('aa', 1)
emitter.emit('aa', 3)
emitter.emit('bb', 4)
emitter.emit('bb')
