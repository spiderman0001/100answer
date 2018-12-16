#### 异步流控制

##### promise
![](./img/promises.png)
```javascript
    new Promise(function(resolve, reject) {
        resolve(1);
    }).then(function(value){
        console.log(a)
    }).catch(function(e) {
        console.log('error')
    })
```
##### promise的用法
- Promise.all
- Promise.race
- Promise.reject
- Promise.resolve
- Promise.prototype.then catch finally
##### promise的规范
[promise A+](https://promisesaplus.com/#point-49)
- 名词
    - promise is an object with then method
    - thenable object/function with  then method
    - value
    - exception 
    - reason
- 要求
    - 状态pending, fulfilled, or rejected
    - 状态转化规则
    - then 方法
- promise解决过程
    - [[Resolve]](promise, x)
    - x可以使thenable
    - then返回一个新的对象
...

##### 实现一个promise
- executor
- then
- 链式调用
- catch
- thenable

#### 缺点
- 容易漏掉错误
- 不能取消
- 无法知道当前处理pending的什么阶段
- 性能比callback慢一点
- 状态转化完成无法恢复（无法多次调用）

#### 一些promise的实现类库
    - Q 
    - BlueBird

#### [case](https://github.com/promises-aplus/promises-tests)

#### Iterator
```javascript
var obj = {a:1,b:2}
obj[Symbol.iterator] = function() {
    var values = Object.values(this)
    var index = -1;
    return {
        next: function() {
            index += 1;
            var value = values[index];
            return {
                value: value,
                done: index === 2
            }
        },
    }
}
for(var i of obj) {
    console.log(i)
}
```
##### generator
```javascript
    let count = 0;
    function* gen() {
        while(true) {
            yield count++;
        }
        return count
    }
    let g = gen();
    console.log(g.next())
    console.log(g.next())
    console.log(g.next())
    console.log(g.next())
 ```

消息传递功能（yield next）
```



##### async await

```javavsript
async function A() {
    await doTaskA();
    await doTaskB();
}
```

##### 用promise、generator实现一个async await

event loop
call stack
event Table/Queue


