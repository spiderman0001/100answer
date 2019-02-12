#常见面试题

- 写一个闭包实现方法调用次数打印

- 11 位手机号校验正则 & 网址匹配

- url 参数提取

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
- 二分查找
- 树的翻转（左旋右旋）
- reduce 模拟 map
  ```javascript
  //reduce模拟map
  Array.prototype.map = function(fn) {
    return this.reduce(function(acc, cur) {
      acc.push(fn(cur));
      return acc;
    }, []);
  };
  ```
