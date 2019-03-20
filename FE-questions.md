#常见面试题

- 写一个闭包实现方法调用次数打印

- 11 位手机号校验正则 & 网址匹配

- url 参数提取

- 用generator 模拟async/await
  - 迭代generator执行后的 iterator，在上一个异步结束之后触发next();
  - thunk函数（回调），promise（then回调）
  - co

- [LazyMan](https://www.jianshu.com/p/f1b7cb456d37)

- 写一个符合 Promise A+的 Promise 模块

- 写一个类，使其实例拥有多个类的的属性和方法。（模拟多重继承）

- 原生 js 创建 xhr 经历几个步骤

```javascript
var xhr;
try {
  xhr = new XMLHttpRequest();
} catch (e) {
  xhr = new ActiveXObject();
}
xhr.onreadystatechange = function() {
  // 通信成功时，状态值为4
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
};

xhr.onerror = function(e) {};
// true 表示异步请求
xhr.open("GET", "/url", true);
xhr.send(null);
```

- 浏览器从输入 url 都做了什么事

![浏览器时间线](/image/timestamp-diagram.svg)

- 写一个深拷贝函数
  [demo](./demo/deepClone.js)
- 二分查找(BST)
- 树的翻转（左旋右旋）
- reduce 模拟 map

  ```javascript
  // reduce 模拟 map
  Array.prototype.map = function(fn) {
    return this.reduce(function(acc, ...args) {
      acc.push(fn(...args));
      return acc;
    }, []);
  };
  ```

- 树的左右视图
  - DFS
  - BFS

- sendRequest(urls, max, callback)
  - 并行
  - 串行
- Vue computed原理

- JS函数的参数是传值还是传引用？
  - 传值

- 有序链表合并
- backbone怎么实现的
  WTF?
- defineproperty 和proxy的区别
- express koa路由实现
- gc方式，怎么判断循环应用
- web worker
- 事件循环
- 浏览器的渲染过程
- 写类似三栏布局的css
- vdom的结构
- 垂直居中

- margin可以取负值 margin 取值百分比是相对于谁，padding呢

- 随便写个排序算法

- 事件冒泡
- 什么事件没有捕获和冒泡

- js的流
- pipe有什么用
- koa中间件

- 实现一个bind

- nodejs介绍 事件循环

- 两个排序好的数组合并排序

- 判断类型
- promise
- event loop
- 浏览器输入url
- 缓存参数
- 组件willmount和didmount顺序和时间
- webpack拆包机制
- 端到端时间
- react和vue的区别
- let const
- Map和Object的区别

- 网络分层
- tcp在哪一层
- 为什么需求vuex redux

- service worker
- 设计一个打点的sdk
