# Questions

### JS

#### 1、闭包机制及其用处

- 函数可以访问其声明时作用域内的变量
- 创建私有变量
- 模块化
- 写一个闭包

#### 2、this 以及如何改变 this 指向

- 严格模式 undefined
- 函数调用(global)，方法调用(object)
- 事件回调(触发事件的 DOM 对象)
- bind, apply, call
- 箭头函数的 this 指向

#### 3、基本类型与引用类型及相互转化

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

- Object

- 通过 Object.prototype.toString 做类型判断
- 通过 instanceOf 判断对象是否是某个  构造器的实例
- null 表示值为空，undefined 表示未定义或值为 undefined

#### 4、变量作用域机制

- 全局作用域
-  函数作用域
- 块级作用域 let, const , {}
- 变量声明提升
- 逐级访问，未找到会抛异常

#### 5、继承与原型链
- 继承的几种方式

- {} 的原型是 Object.prototype
- Object 的原型是 Function.prototype
- Function 的原型是 Function.prototype
- Function.prototype 的原型是 Object.prototype
- Object.prototype 的原型是 null
- 如何访问一个对象的原型？Object.getPrototypeOf
- 如何判断一个属性是来自对象本身还是原型
- hasOwnProperty 一定能访问么

#### 6、 正则表达式

- 如何创建一个正则表达式
- 正则表达式对象是何时构建出来的
- 有哪些 flag，分别是如何工作的
- 配合正则使用的方法有哪些，场景与性能 (split, replace, match, search, exec, test)
- 贪婪模式，如何开启(\*, +, {1, })
- 分组()，具名分组(?<>)，非捕获分组(?:) ，正向前瞻(?=)与负向前瞻(?!)
- 11 位手机号校验正则 & 网址匹配
- emoji 过滤
- url 参数提取

#### 7、EventLoop & 异步机制（Node、Browser）

- 浏览器异步机制
-  常用异步函数及执行时机
- Node 的 EventLoop
- setImmediate 与 process.nextTick
- lazyMan

#### 8、Callback & Promise & Async/Await

- react props callback this 指向
- Promise 对象及其用处
- 如何构造一个 Promise 对象，如何进行异常处理
- Promise.race, Promise.all
- Promise 的链式调用实现
- Async/Await 语法特点
- 如何 await 两个并行异步  任务
- Async/Await 异常处理

#### 9、ES6、ES7、ESNext

- Symbol
- let，const
- 解构  与默认值
- spread 运算符
- 函数参数转数组
- 函数默认值及其限制
- 字符串模板与标签模板
- 函数 rest 参数
- 箭头函数的 this 指向
- Set 与 WeakSet
- Map 与 Object 的区别
- Proxy 与 Reflect 的关系， 使用场景
- Iterator 和 for...of 循环
- 如何让一个对象可以迭代
- Generator 函数及其应用
- 如何用 generator 模仿 async 函数
- class 语法，constructor 函数 ，super 的用法，new.target， 静态方法中的 this 指向
-  写一个类，使其实例拥有多个类的的属性和方法。（模拟多重继承）
- 类的静态  属性和静态方法，是否可以继承

#### 10、函数式编程

- 纯函数与副作用的概念
-  柯里化
    [example](https://github.com/mqyqingfeng/Blog/issues/42)
- 函数组合
- 高阶函数 map, reduce
    
- 常用的函数式编程的库 lodash/fp

#### 11、Node

- node 模块查找机制与加载，模块缓存
- 如何读取环境变量与运行参数
- stream
    - Writable
    - Readable
    - Duplex and Transform Streams
- buffer
- npm 与 yarn, lock 文件的用处
- 包版本管理，如何发包
- C++扩展 与 NAPIb
- 进程运行异常捕获，进程退出
- 子进程与进程通信
    -如何创建子进程
- cluster 工作机制
- Koa & Express 中间件模型与工作机制
- Node 应用 APM
- CLI 编写
- [element node interview](https://github.com/ElemeFE/node-interview)

#### 12、设计模式

- 单例
- 观察者
- 命令模式
- 外观模式
- 中介者模式
- 工厂模式
- Mixin 模式
- 装饰者模式
- MVC, MVP, MVVM 的区别，双向绑定  与单向数据流的优缺点

#### 13、模块化

- 自动采用严格模式

```txt
严格模式主要有以下限制。

变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀 0 表示八进制数，否则报错
不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop]
eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不会自动反映函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈
增加了保留字（比如protected、static和interface）
```

- export 和 import (with default)
- ESM 的加载（浏览器 script type=module，Node -> mjs）
- Commonjs 的特点与  加载原理
- Commonjs 如何做到  可以访问 require,require, module,exports, **filename**, dirname
- CommonJS 模块的循环加载只输出已执行的部分
- ESM 循环引用需要自己保证

#### 14、其他

- TypeScript
- lodash 部分  函数  的实现
- JSON

### CSS

#### 1、盒模型

- padding, content, margin, border
- width
- box-sizing

#### 2、选择器

- 常用选择器及优先级
- 伪类选择器
- 常用选择器组合（猫头鹰选择器解决首尾分割线），grid 中间分割线

#### 3、伪类 & 伪元素

- 使用场景
- content: attr()

#### 4、CSS 单位

- rem, em, px, 纯数字，百分比
- vw, vh
- margin, padding 百分比参考值
- line-height rem, em, px, 纯数字，百分比相对值
- font-size rem, em, px, 纯数字，百分比相对值

#### 5、Display

- block
- inline-block(BFC)
- flex
- none
- grid
- table

#### 6、vertical-align

- 与 inline 的关系
- middle， bottom, top, 1px

#### 7、定位

- static, relative, absolute, fixed, sticky 参考点及副作用
- 如何判断浏览器是否原生支持 sticky
- sticky 的 polyfill
- ios UIWebview 键盘弹出 fixed 失效问题

#### 8、Flex 布局

- 多栏动态布局
- 类 grid 布局
- 异形布局
- 空间分配与对齐
- flex 布局下的超出省略

#### 9、浮动

- float 值与表现
- 副作用
- 清除浮动

#### 10、Grid

- 原生 grid 布局
- 类 bootstrap 栅格化实现
- grid 组件实现

#### 11、响应式布局 & 自适应布局

- flexible
- vw, vh
- media-query
-  百分比
- 主题皮肤实现

#### 12、Transform，Transition，Animation

- 变换 translate, rotate
- 变形 skew scale perspective
- filter
- transform-origin
- transition 的写法
- timing-function 与贝塞尔曲线
- keyframes, delay, loop, duration, fill-mode, play-state, iteration-count, direction

#### 13、z-index

- 层叠关系确定
- 与定位关系
- 如何实现永远在最上层的模态框

#### 14、背景与渐变

- background 属性的值有哪些，分别控制什么
- 线性渐变与径向渐变

#### 15、文本与字体

- font 查找规则
- 自定义字体
- 字号，字重，行高的关系
- 彩色  渐变文字实现
- writing-mode
- white-space
- word-break
- text-overflow

#### 16、 其他

- iPhone X 刘海兼容
- 1px 边框实现
- opacity
- 硬件加速
- 复合层
- 多行省略
- BFC
- Less、Sass、Postcss
- CSS in JS
- BEM
- scoped style 与 styled components
- Paint API
- Layout/Paint/Compose
- repaint, reflow
- 多栏布局
- 水平垂直居中

### HTML

#### 1、常用标签

- 块级标签， 内联  标签，可替换标签
- link, head, meta, style, script， body 标签
- iframe
- canvas
- svg
- table
- base
- noscript
- form
- 语义化标签

#### 2、样式覆盖顺序

- 选择器优先级相同的情况下 inline > style > link

#### 3、HTML DOM API

- document 对象
- scrollingElement
- getElementById 与 querySelector
- NodeList 与 HtmlElement
- 如何获取元素相较于父元素和主文档  以及屏幕窗口 offset & scroll offset  client
    getBoundingClientRect

- childList 与 children
- createElement、createDocumentFragment 的区别
- window
- 操作DOM常用方法

#### 4、SVG

- path, shape, rect 的概念
- fill, stroke
- 动画
- svg 图标的优势

#### 5、Form

- input type
- button type
- form action
- 表单校验， 阻止提交
- 如何设计表单校验工具类以满足复合校验

#### 6、LocalStorage， sessionStorage, Cookie, indexedDB

- 区别于使用场景
- 跨域
- 设置 cookie 作用域与过期
- 如何用 localStorage 做静态资源离线化
- Cookie http only
- Cookie跨域携带 withCredentials

#### 7、跨域与 CORS

- 同源策略
- jsonp 原理
- Image ping
- iframe 跨域，document.domain
- postMessage
- CORS 的原理与设置
- CORS 简单请求与非简单请求的处理
- CORS 下的 301
- CORS 下的脚本异常捕获
- 服务端代理跨域

#### 8、Web Worker

- 运行原理，使用场景
- 并行与死锁控制
- 线程通信 （Atomics, sharedArrayBuffer）
- service worker 的生命周期与能力
- PWA

#### 9、缓存与离线化

- HTTP Cache 策略
- Application Cache (已废弃)
- 基于 service worker 的缓存控制策略

#### 10、事件机制

- 事件的阶段
- event target, event currentTarget
- 注册与清除注册
- 事件冒泡与事件捕获
- passive event
- 事件代理（事件合成）
- 自定义事件
- 浏览器事件（onload, domContentLoaded, domInteractive）

#### 11、其他
- new创建对象的经历的几个步骤
- 图片上传
- 空格渲染策略
- defer, async
- 转义与 XSS
- Audio/Video
- Web Component
- WebAssembly
- History API
- Performance API
- 定时器与动画
- AJAX
    - AJAX经历几个步骤
```javascript
        var xhr 
        try {
            xhr= new XMLHttpRequest();
        } catch(e) {
            xhr = new ActiveXObject();
        }
        xhr.onreadystatechange = function(){
            // 通信成功时，状态值为4
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log(xhr.responseText);
                }
            }
        };

        xhr.onerror = function (e) {
        };
        // true 表示异步请求
        xhr.open('GET', '/url', true);
        xhr.send(null);
```
- fetch API
- Canvas 与 SVG
- WebGL
- WebSQL
- WebSocket
- WebRTC
- FMP, TTFB, TTL, TTI 的衡量

### CS 基础与算法

#### 1、HTTP 协议

- 常用状态码

```txt
2xx: 成功
3xx: 重定向
4xx: 客户端错误
5xx: 服务端错误
```

- 常用 Header 技巧含义

```txt
Cache-Control
Connection
Date
Via
Accept
Authorization
Expect
From
Host
If-Match
If-Match-Since
If-None-Match
Referrer
User-Agent
ETag
Server
Vary
Allow
Content-type
Expires
Last-Modified
Set-Cookie
Cookie
```

- 缓存策略（ 强制缓存与协商缓存）
- RESTful
- HTTPS 链接建立过程
- 对称加密与非对称加密
- HTTP2 特性
- 鉴权认证  机制（Basic, oauth2, jwt）
- SSO

#### 2、TCP

- 连接建立过程
    - 三次握手 四次挥手
- 可靠  传输原理
- 拥塞控制
- 流量控制

#### 3、IP

- IP 地址段
- 局域网与广播
- IPv6

#### 4、DNS 与 CDN

- 域名解析过程
- CNAME
- A 记录
- DNS 劫持
- CDN 原理

#### 5、网络安全

- XSS
- SQL 注入
- OS 命令注入
- DDOS
- CORS

#### 5、 常用数据结构

- 栈：定义，创建
- 队列 ：定义，创建， 进队，出队
- 链表：定义，创建，遍历，逆转， 增删节点
- （二叉）树：定义，创建， 遍历，diff，增删节点
- 图： 遍历，最短路径
- Hash Table
- BST
- B+ 树，红黑树
- 优先队列

#### 5、 常见算法

- 排序：冒泡，选择，快排，堆排， 归并排序，桶排
- 二叉树遍历过程
- 数组去重
- 解析 URL
- 大数相加
- leetcode~

#### 6、 操作系统

- 进程，线程，管程
- Linux 进程  通信（IPC）
- 内存与虚拟内存
- 磁盘与文件  系统（Linux）
- 基于 Socket 的远程过程调用（RPC）
- Linux 用户与权限
- Shell 脚本与 CLI
- 包管理（rpm, dnf, apt-get, brew）

### 框架

#### 1、 Vue 实例的创建过程

- 模板编译
- 组件实例化
- 响应式处理
- 生命周期 hook 执行
- 挂载

#### 2、 Vue 组件的生命周期钩子

- create
- update
- mount
- destroy
- 触发顺序，由内到外依次触发

#### 3、 Vue 是如何做到依赖收集的

- Deps

#### 4、 Vue 的响应式的原理

- Object.defineProperty
- getter setter
- Vue 3 Proxy

#### 5、 Vue 的响应式的缺陷，解决办法

- 需要声明属性  值，新增无法识别
- Vue.set

#### 6、 Vue 组件的设计原则与复用策略

- 功能单一
- 样式功能可配置

#### 7、 Vue 组件的通信机制，跨级  非兄弟组件如何通信

- 父子 props, event
- 跨级 event bus 或者 Rxjs
- 复杂状态 Vuex
- provide / inject

#### 8、 Vue Transition 原理及应用

- css transition 动态增添 class
- js transition hook function
- 配合 animate.css 或者 JS 动画库实现复杂动效。

#### 9、 Vue  计算属性与 watch

- 计算属性应该是纯函数（setter 除外）
- watch 可以改变 state 或者执行操作

#### 10、 Vue  插槽机制

- default slot
- named slot
- scoped slot

#### 11、 Vue 动态组件

- is 判断
-  异步加载注册
-  逻辑容器组件控制视图组件渲染

#### 12、 Vue directive、mixin、filter, extends 的作用

- 指令
- 混合
- 过滤器是纯函数，可以管道级联调用
- 继承

#### 13、 Vue SSR

- 服务端渲染流程
- 如何编写同构代码

#### 14、 React 的特点

-  状态机
- 虚拟 DOM
- 函数式
- JSX

#### 15、React Class Based Component 的好处

- 易继承扩展，复用度高
- React constructor里面为什么要加super(props)

#### 16、 React 组件生命周期 Hook

- componentWillxxx
- componentShouldxxx
- componentDidxxx

#### 17、 React 如何触发渲染

- setState, 异步, 合并与覆盖

#### 18、 React 合成事件与事件处理

- 事件代理机制

#### 19、 React 组件的组合与继承

- extends 用于集成，this 在 super(pros)才可用
- 组合：组件通过逻辑判断渲染哪个或哪些组件

#### 20、 React PureComponent 与 Component 的区别

- setState 时只做浅比较
- PureComponent 不建议有 state
- PureComponent 性能能好，通常用于容器逻辑组件，无状态组件 

#### 21、 React 组件 defaultProps 与 propTypes

- 组件 props 类型校验  与默认值

#### 22、 React 组件的通信

- props（值与 function 回调，注意回调中对的 this）
- Context API

#### 23、 React 组件的渲染性能优化

- componentShouldUpdate 中进行判断
- 尽量合并 setState 操作
- 指定 key 以复用组件

#### 24、 React Context API

#### 25、 React Context Hooks API

#### 26、 React 高阶组件及场景

- 权限校验
- 组件定制
- 通过 props 生成新组件而不是改传入的组件

#### 27、VDom 的原理

- createHtmlFragment 一次插进 dom 减少 dom 操作
- 内存中维护一个与 Dom 树对应的树结构， 操作只更改 vdom，需要渲染才将差异部分  渲染出来
- 不依赖实际 DOM，却可以生成 DOM
- 可用于服务端渲染出 HTML 结构

#### 28、VDom 的 Diff 算法

#### 29、Redux 思想与最佳实践
- 中间件
- store的传递过程
- action
- reducers
- 单一数据源（store）

### 前端工程

#### Gulp

- 流操作
- 任务

#### Webpack

- Webpack 配置
- 构建过程中的对象
- Webpack 插件
- Webpack Loader
-  构建性能优化
- 构建时注入
- Code Splitting
- 优化手段


#### Babel

- AST
- preset
- plugins

#### ESLint

- rules
- parser setting

#### StyleLint

- rules

#### HTTP 库，Util 库，组件库等。

- jQuery
- Axios
- lodash
- ElementUI
- Ant Design
- popmotion(动画)
- animate.css（css 动画）
- normalize.css（css reset）
- glob
- shellJs
- inquirer（cli 交互）
- moment
- query-string
- anime.js (动画)

#### Post-CSS

- cssnano
- autoprefixer

#### 工程框架

- utils & helpers
- 构建配置
- linter 配置文件
- npm scripts
- 页面模板生成器
- sass mixins, functions
- page bootstrap 脚本
-  页面  异常处理工具
- 页面性能分析上报
- 页面打点统计工具
- Node 服务压测工具
- Node 日志处理
- Node 进程运行统计分析工具

#### NPM & Yarn

- 版本管理策略
- 抽包与发包
- 私有 registry 与安装加速

#### 测试

- 单测，Jest， Mocha，覆盖率
- e2e 测试，Phantomjs，puppeteer

#### 前端发布 CI

- 代码克隆
- 包安装
- css 背景图片处理
- 引用路径处理
- md5
- （压缩）
- 资源处理（代码注入等）
- 打包
- 上传
- 部署 CDN
- 清理 CDN 缓存

#### Electron

#### 常见题目：
- 浏览器从输入url都做了什么事
- 写一个深拷贝函数
[demo](./demo/deepClone.js)
- 二分查找
- 树的翻转（左旋右旋）