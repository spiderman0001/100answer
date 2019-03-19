# 前端技能

## JS

### 1、闭包机制及其用处

- 函数可以访问其声明时作用域内的变量
- 创建私有变量
- 模块化
- 可能会造成内存长时间得不到释放

### 2、this 以及如何改变 this 指向

- 严格模式 undefined
- 函数调用(global)，方法调用(object)
- 事件回调(触发事件的 DOM 对象)
- bind, apply, call
- 箭头函数的 this 指向声明时的作用域

### 3、基本类型与引用类型及相互转化

基本类型

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

引用类型

- Object
- 通过 Object.prototype.toString 做类型判断
- 通过 instanceOf 判断对象是否是某个构造器的实例
- null 表示值为空，undefined 表示未定义或值为 undefined

### 4、变量作用域机制

- 全局作用域
- 函数作用域
- 块级作用域 let, const , with, try catch
- 变量/函数声明提升
- 逐级访问，未找到会抛异常

### 5、继承与原型链

- 继承的几种方式
- {} 的原型是 Object.prototype
- Object 的原型是 Function.prototype
- Function 的原型是 Function.prototype
- Function.prototype 的原型是 Object.prototype
- Object.prototype 的原型是 null
- 如何访问一个对象的原型？Object.getPrototypeOf
- 如何判断一个属性是来自对象本身还是原型? hasOwnProperty
- hasOwnProperty 一定能访问么? 不一定，原型是null的普通对象没有

### 6、 正则表达式

- 如何创建一个正则表达式？字面量，构造器
- 正则表达式对象是何时构建出来的
- 有哪些 flag，分别是如何工作的 /mgiyu
- 配合正则使用的方法有哪些，场景与性能 (split, replace, match, search, exec, test)
- 贪婪模式，如何开启(\*, +, {1, })
- 分组()，具名分组(?<>)，非捕获分组(?:) ，正向前瞻(?=)与负向前瞻(?!)
- [介绍](https://juejin.im/post/5965943ff265da6c30653879)

### 7、EventLoop & 异步机制（Node、Browser）

- 浏览器异步机制
- 常用异步函数及执行时机
  - Promise //microTask
  - MutationObsever //microTask
  - setTimeout //macroTask
  - setInterval //macroTask
  - setImmediate // check phase
  - process.nextTick //microTask
  - messageChannel callback //microTask
  - Vue.nextTick // leverage microTask
  - requestAnimationFrame
  - async/await
- [Node 的 EventLoop](https://github.com/nodejs/nodejs.org/blob/master/locale/en/docs/guides/event-loop-timers-and-nexttick.md)

- setImmediate 与 process.nextTick
- [介绍](https://github.com/creeperyang/blog/issues/21)
- [一篇文章教会你Event loop——浏览器和Node](https://segmentfault.com/a/1190000013861128)

### 8、Callback & Promise & Async/Await

- react props callback this 指向
- Promise 对象及其用处
- 如何构造一个 Promise 对象，如何进行异常处理
- Promise.race, Promise.all
- Promise 的链式调用实现
- Async/Await 语法特点
- 如何 await 两个并行异步任务
- Async/Await 异常处理

### 9、ES6、ES7、ESNext

- Symbol
- let，const
- 解构与默认值
- spread 运算符
- 函数参数转数组
- 函数默认值及其限制
- 字符串模板与标签模板
- 函数 rest 参数
- 箭头函数
- Set 与 WeakSet
- Map 与 Object 的区别
- Proxy 与 Reflect 的关系， 使用场景
- Iterator 和 for...of 循环
- 如何让一个对象可以迭代
- Generator 函数及其应用
- 如何用 generator 模仿 async 函数
    [demo]('./demo/mockAsync.js')
- class 语法，constructor 函数 ，super 的用法，new.target， 静态方法中的 this 指向
- 写一个类，使其实例拥有多个类的的属性和方法。（模拟多重继承）
- 类的静态属性和静态方法，是否可以继承

### 10、函数式编程

- 纯函数与副作用的概念
-  柯里化
  [example](https://github.com/mqyqingfeng/Blog/issues/42)
- 函数组合
- 高阶函数 map, reduce
- 常用的函数式编程的库 lodash/fp

### 11、Node

- node 模块查找机制与加载，模块缓存
- 如何读取环境变量与运行参数
- stream
  - Writable
  - Readable
  - Duplex and Transform Streams
- buffer
- npm 与 yarn, lock 文件的用处
- 包版本管理，如何发包
- C++扩展 与 N-API
- 进程运行异常捕获，进程退出
- 子进程与进程通信 -如何创建子进程
- cluster 工作机制
- Koa & Express 中间件模型与工作机制
  - Koa中间件是个async function, 以next()方式调用，洋葱模型，所有中间件代码执行完毕后才会发送响应。
  - Express中间件
- Node 应用 APM
- CLI 编写
- [element node interview](https://github.com/ElemeFE/node-interview)

### 12、设计模式

- 单例
- 观察者
- 命令模式
- 外观模式
- 中介者模式
- 工厂模式
- Mixin 模式
- 装饰者模式
- MVC, MVP, MVVM 的区别，双向绑定与单向数据流的优缺点

### 13、模块化

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
- Commonjs 的特点与加载原理
- Commonjs 如何做到可以访问 require,require, module,exports, **filename**, dirname
- CommonJS 模块的循环加载只输出已执行的部分
- ESM 循环引用需要自己保证

### 14、其他

- TypeScript
- lodash 部分函数的实现
- JSON

## CSS

### 1、盒模型

- padding, content, margin, border
- width
- box-sizing

### 2、选择器

- 常用选择器及优先级
- 伪类选择器
- 常用选择器组合（猫头鹰选择器解决首尾分割线），grid 中间分割线

### 3、伪类 & 伪元素

- 使用场景
- content: attr()

### 4、CSS 单位

- rem, em, px, 纯数字，百分比
- vw, vh
- margin, padding 百分比参考值
- line-height rem, em, px, 纯数字，百分比相对值
- font-size rem, em, px, 纯数字，百分比相对值

### 5、Display

- block
- inline-block
- flex
- none
- grid
- table

### 6、vertical-align

- 与 inline 的关系
- middle， bottom, top, 1px

### 7、定位

- static, relative, absolute, fixed, sticky 参考点及副作用
- 如何判断浏览器是否原生支持 sticky
- sticky 的 polyfill
- ios UIWebview 键盘弹出 fixed 失效问题

### 8、Flex 布局

- 多栏动态布局
- 类 grid 布局
- 异形布局
- 空间分配与对齐
- flex 布局下的超出省略

### 9、浮动

- float 值与表现
- 副作用
- 清除浮动

### 10、Grid

- 原生 grid 布局
- 类 bootstrap 栅格化实现
- grid 组件实现

### 11、响应式布局 & 自适应布局

- flexible
- vw, vh
- media-query
- 百分比
- 主题皮肤实现

### 12、Transform，Transition，Animation

- 变换 translate, rotate
- 变形 skew scale perspective
- filter
- transform-origin
- transition 的写法
- timing-function 与贝塞尔曲线
- keyframes, delay, loop, duration, fill-mode, play-state, iteration-count, direction

### 13、z-index

- 层叠关系确定
- 与定位关系
- 如何实现永远在最上层的模态框

### 14、背景与渐变

- background 属性的值有哪些，分别控制什么
- 线性渐变与径向渐变

### 15、文本与字体

- font 查找规则
- 自定义字体
- 字号，字重，行高的关系
- 彩色渐变文字实现
- writing-mode
- white-space
- word-break
- text-overflow

### 16、 其他

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

## HTML

### 1、常用标签

- 块级标签， 内联标签，可替换标签
- link, head, meta, style, script， body 标签
- iframe
- canvas
- svg
- table
- form
- 语义化标签
- [标签列表](http://www.w3school.com.cn/tags/index.asp)

### 2、样式覆盖顺序

- 选择器优先级相同的情况下 inline > style > link

### 3、HTML DOM API

- document 对象
- scrollingElement
- getElementById 与 querySelector
- NodeList 与 HtmlElement
- 如何获取元素相较于父元素和主文档以及屏幕窗口 offset & scroll offset client
- getBoundingClientRect
- childList 与 children
- createElement、createDocumentFragment 的区别
- window
- 操作 DOM 常用方法

### 4、SVG

- path, shape, rect 的概念
- fill, stroke
- 动画
- svg 图标的优势

### 5、Form

- input type
- button type
- form action
- 表单校验， 阻止提交
- 如何设计表单校验工具类以满足复合校验

### 6、LocalStorage， sessionStorage, Cookie, indexedDB

- 区别于使用场景
- 跨域
- 设置 cookie 作用域与过期
- 如何用 localStorage 做静态资源离线化
- Cookie http only
- Cookie 跨域携带 withCredentials

### 7、跨域与 CORS

- 同源策略: 协议，域名，端口必须相同
- jsonp 原理： 动态创建script //get请求，需要后端配合
- Image ping：动态创建img //get，无法处理响应
- window.name：window.name在页面与子页面间共享
- iframe 跨域：document.domain，location.hash with onhashchange;
- postMessage
- CORS 的原理与设置
- CORS 简单请求与非简单请求的处理
- CORS 下的 301
- CORS 下的脚本异常捕获，crossorigin="anonymous"
- 服务端代理跨域

### 8、Web Worker

- 运行原理，使用场景
- 并行与死锁控制
- 线程通信 （Atomics, sharedArrayBuffer）
- service worker 的生命周期与能力
- PWA

### 9、缓存与离线化

- HTTP Cache 策略
- Application Cache (已废弃)
- 基于 service worker 的缓存控制策略

### 10、事件机制

- 事件的阶段
- event target, event currentTarget
- 注册与清除注册
- 事件冒泡与事件捕获
- passive event
- 事件代理（事件合成）
- 自定义事件
- 浏览器事件（onload, domContentLoaded, domInteractive）

### 11、其他

- new 创建对象的经历的几个步骤
- 图片上传
- 空格渲染策略
- defer, async
- Audio/Video
- Web Component
- WebAssembly
- History API
- Performance API
- 定时器与动画
- AJAX
- fetch API
- Canvas 与 SVG
- WebGL
- WebSQL
- WebSocket
- WebRTC
- Electron
- FMP, TTFB, TTL, TTI 的衡量

## CS 基础与算法

### 1、HTTP 协议

- 常用状态码

```txt
2xx: 成功
3xx: 重定向
4xx: 客户端错误
5xx: 服务端错误
```

- 常用 Header 技巧含义

```txt
Cache-Control: no-store(无缓存)、no-cache(协商缓存)，max-age(最大缓存时长):
Connection：连接类型
Date：创建报文日期
Via：代理相关信息
Accept：可处理的媒体类型
Authorization：web认证信息
Host：请求资源所在服务器
If-Match：比较实体标记（ETag）
If-Modified-Since：比较资源更新时间
Referrer：URI的原始获取方
User-Agent：HTTP客户端程序的信息
ETag：资源的匹配信息
Server：HTTP服务器的安装信息
Vary：代理服务器缓存的相关信息
Allow：资源可以支持的HTTP方法
Content-type：实体主体的媒体类型
Expires：实体主体过期的时间
Last-Modified：最后修改时间
Set-Cookie：开始状态管理所使用的Cookie信息
Cookie：服务器接收到的Cookie信息
```

- 缓存策略（ [强制缓存与协商缓存](https://juejin.im/entry/5ad86c16f265da505a77dca4)）

  - public：所有内容都将被缓存（客户端和代理服务器都可缓存）
  - private：所有内容只有客户端可以缓存，Cache-Control 的默认取值
  - no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
  - no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
  - max-age=xxx (xxx is numeric)：缓存内容将在 xxx 秒后失效

- RESTful
  - GET 获取资源
  - POST 传输实体主体
  - PUT 传输文件
  - DELETE 删除文件
  - OPTIONS 获取资源支持的操作
  - TRACE
  - CONNECT 
  - HEAD 获取响应头部
  - [GET 和 POST 区别 1](https://www.oschina.net/news/77354/http-get-post-different)
  - [GET 和 POST 区别 2](https://sunshinevvv.coding.me/blog/2017/02/09/HttpGETv.s.POST/)
  - [GET 和 POST 区别 3](https://www.zhihu.com/question/28586791)
- HTTPS

  - HTTP 通信接口使用 SSL（Secure Socket Layer）或者 TLS（Transport Layer Security）协议替换，普通 HTTP 直接合 TCP 通信，HTTPS 是 HTTP 先和 SSL 通信，再由 SSL 和 TCP 通信。
  - 对称加密与非对称加密
    - 对称加密：加密和解密均使用同一个密钥
    - 非对称：加密和解密使用不同密钥（公钥，私钥）
  - HTTP + 加密 + 认证 + 完整性保护 = HTTPS
  - 加密：HTTPS 使用对称+非对称的混合加密方式：1、使用非对称加密方式交换后续通信使用的对称加密密钥，2、在密钥交换安全的情况下，使用对称加密密钥通信
  - 数字证书认证机构（CA Certificate Agent），浏览器一般内置 CA 的公钥用于解密校验数字证书。
  - [连接建立过程](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
    - 客户端给出协议版本号、一个客户端生成的随机数（Client random），以及客户端支持的加密方法
    - 服务端确认双方使用的加密方法，并给出数字证书、以及一个服务器生成的随机数（Server random）
    - 客户端确认数字证书有效，然后生成一个新的随机数（Premaster secret），并使用数字证书中的公钥，加密这个随机数，发给服务端
    - 服务端使用自己的私钥，获取客户端发来的随机数（即 Premaster secret）
    - 客户端和服务端根据约定的加密方法，使用前面的三个随机数，生成"对话密钥"（session key），用来加密接下来的整个对话过程。
  - 握手阶段：
    - 生成对话密钥一共需要三个随机数。
    - 握手之后的对话使用"对话密钥"加密（对称加密），服务器的公钥和私钥只用于加密和解密"对话密钥"（非对称加密），无其他作用。
    - 服务器公钥放在服务器的数字证书之中。
    - 整个通话的安全，只取决于第三个随机数（Premaster secret）能不能被破解。

- [HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480)
  - [HTTP/2 简介](https://developers.google.com/web/fundamentals/performance/http2/?hl=zh-cn)
  - 二进制分帧：HTTP/2 转换为二进制协议，将数据流以单个或多个帧的方式发送，帧之间乱序发送，根据帧首部流信息重新组装。
  - 多路复用：同域名下所有通信都在单个 TCP 连接上完成，单个连接可以承载任意数量的双向数据流，在 HTTP/2 中，每个请求都可以带一个 31bit 的优先值，0 表示最高优先级， 数值越大优先级越低。有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧。
  - 首部压缩：HTTP/2 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送；首部表在 HTTP/2 的连接存续期内始终存在，由客户端和服务器共同渐进地更新;每个新的首部键－值对要么被追加到当前表的末尾，要么替换表中之前的值。
  - 服务器推送：服务端可以在发送页面 HTML 时主动推送其它资源，而不用等到浏览器解析到相应位置，发起请求再响应。服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送 RST_STREAM 帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。
- 鉴权认证机制（Basic, OAuth2, JWT）
  - BASIC
    - 401 Authorization Required
    - username:password -> base64 -> Authorization: BASIC _base64 format info_
  - OAUTH2
    - [参考资源 1](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html) [参考资源 2](https://zhuanlan.zhihu.com/p/30720675)
    - 用户打开客户端以后，客户端要求用户给予授权。
    - 用户同意给予客户端授权。
    - 客户端使用上一步获得的授权，向认证服务器申请令牌。
    - 认证服务器对客户端进行认证以后，确认无误，同意发放令牌。
    - 客户端使用令牌，向资源服务器申请获取资源。
    - 资源服务器确认令牌无误，同意向客户端开放资源。
  - JWT (JSON Web Token)
    - [参考资源 1](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html) [参考资源 2](https://www.jianshu.com/p/576dbf44b2ae)
    - JWT 结构：Header，Payload，Signature，以 _._ 分隔。
    - 可以放置在 Cookie 里自动发送
    - 跨域可以放在 http header 中：Authorization: Bearer \<token\>
- SSO（Single Sign-On 多应用单点登录）
  - sso 需要一个独立的认证中心，只有认证中心能接受用户的用户名密码等安全信息
  - 重定向
  - 应用向认证中心查询用户信息

### 2、TCP

- 特点
  - 面向连接
  - 点对点
  - 可靠交付
  - 全双工通信
  - 面向字节流
- 连接（socket）
  - socket = （ip : port）
  - TCP = (socket1, socket2)
- 连接建立和断开过程
  - 三次握手 四次挥手
- ACK 与 SEQ
- 可靠传输原理

  - 停止等待协议
  - 连续 ARQ 协议(自动重传请求)
  - 以字节为单位的滑动窗口
  - 超时重传
  - 选择确认

- 拥塞控制
  - 慢开始
  - 拥塞避免
  - 快重传
  - 快恢复
- 流量控制
  - 基于滑动窗口

### 3、IP

- IP 地址段：A B C 类，局域网段，本地回环测试
- IPv6：64 位

### 4、DNS 与 CDN

- 域名解析过程
  - 递归查询
  - 迭代查询
- CNAME
- A 记录
- DNS 劫持
- CDN 原理
  - 基于 DNS 调度的分布式内容分发网络
  - 缓存控制与回源策略
  - 节点覆盖

### 5、网络安全

- XSS（cross site script跨站脚本攻击）
  - 利用模板引擎，开启html转义
  - 避免内联事件
  - 避免innerHtml使用
  - 输入过滤（HTML转义、onclick 等可以执行 js 的地方校验scheme）
  - 设置 Content Security Policy
  - Http Only cookie

- SQL 注入
  - 表单中加入 SQL 操作语句
  - 不依赖用户输入拼接 sql 语句，校验
- OS 命令注入

  - 请求参数中注入操作系统命令
  - 不直接使用请求参数拼接执行命令，校验

- DDOS（分布式拒绝服务攻击）

  - 持续高 QPS 击垮应用，无法响应正常用户请求
  - 反爬，限流

- CSRF（Cross Site Request Forgery 跨站请求伪造）的攻击流程
  - 访问a.com，保留登录凭证 -> 访问b.com -> b.com 向a.com发送请求，浏览器会默认带上a.com的cookie，从而执行了危险操作。
  - 攻击一般发生在第三方网站，而不是被攻击的网站。
  - 攻击冒充被攻击者进行操作，而不是直接窃取数据。
  - 整个过程并不能获取受害者的登录凭证，仅仅是冒用。
  - 跨站请求伪造可以利用各种方式：图片URL，超链接，CORS，Form提交等。部分请求可以嵌入在第三方论坛，难以预防。
  - 通常跨域

- CSRF的预防
  - 服务端同源检测阻止不明外域访问（referer， origin等 header字段）
  - SameSite Cookie（兼容性略差）
  - 提交时必须要有本域才可以获取的信息（CSRF Token)，ajax请求和form表单请求均增加该token作为字段用于校验。
  - 双重Cookie验证，cookie与url均增加token字段，后端做校验。

- 运营商劫持
  - https

### 5、 常用数据结构

- 栈：定义，创建
- 队列 ：定义，创建， 进队，出队
- 链表：定义，创建，遍历，逆转， 增删节点
- （二叉）树：定义，创建， 遍历，diff，增删节点
- 图： 遍历，最短路径
- Hash Table
- BST
- B+ 树，红黑树
- 优先队列

### 5、 常见算法

- 排序：冒泡，选择，快排，堆排， 归并排序，桶排
- 二叉树遍历过程
- 数组去重
- 解析 URL
- 大数相加
- leetcode~

### 6、 操作系统

- 进程，线程，管程
- Linux 进程通信（IPC）
- 内存与虚拟内存
- 磁盘与文件系统（Linux）
- 基于 Socket 的远程过程调用（RPC）
- Linux 用户与权限
- Shell 脚本与 CLI
- 包管理（rpm, dnf, apt-get, brew）

## 框架

### 1、 Vue 实例的创建过程

- 合并选项（默认与自定义）
- 初始化实例属性（生命周期，事件，渲染）
- beforeCreate Hook
- 初始化注入
- 初始化组件状态（props => methods => data => computed => watch）
- 初始化provide
- created Hook
- 挂载

### 2、 Vue 组件的生命周期钩子

- create
- update
- mount
- destroy
- 触发顺序，由内层组件到外层依次触发

### 3、 Vue 是如何做到依赖收集的

- 通过为每个需要响应式的属性简历getter setter, 在getter中收集放置在Dep对象中，在setter的时候触发
- 定义后通过触发一次getter收集
- 同一时期只有一个getter被触发，所以只需
- Observer 实例绑在object的__ob__属性上
- 初始化data, props, computed的时候进行求值访问，数据变化触发依赖更新
- 通过watch mountComponent函数，首次执行渲染需要访问getters，从而触发依赖，当触发数据setter时重新对mountComponent执行求值，进而触发渲染
- Dep依赖对象，包含依赖手机，触发，发布订阅
- Observer，代理对象，定义属性的getter setter并闭包引用deps，child observer
- Watcher，观察者，用于观察表达式变化，触发依赖收集

### 4、 Vue 的响应式的原理

- Object.defineProperty
- getter 收集依赖 setter 触发依赖
- 发布订阅模式
- Vue 3 Proxy

### 5、 Vue 的响应式的缺陷，解决办法

- 需要声明属性值，新增无法识别
- 无法识别所有数组API
- Vue.set，this.$set

### 6、 Vue 组件的设计原则与复用策略

- 功能单一
- 样式功能可配置
- Mixin
- extends

### 7、 Vue 组件的通信机制，跨级非兄弟组件如何通信

- 父子 props, event
- 跨级 event bus 或者 Rxjs
- 复杂状态 Vuex
- provide / inject

### 8、 Vue Transition 原理及应用

- css transition 动态增添 class
- js transition hook function
- 配合 animate.css 或者 JS 动画库实现复杂动效。

### 9、 Vue计算属性与 watch

- 计算属性应该是纯函数（setter 除外）
- watch 可以改变 state 或者执行操作
- 底层都是通过getter/setter实现。
- 计算属性使用了Watcher，在通过对express fn求值的时候被收集到依赖中，当相关数据变化，触发重新求值。

### 10、 Vue插槽机制

- default slot
- named slot
- scoped slot

### 11、 Vue 动态组件

- is 判断
- 异步加载注册
- 逻辑容器组件控制视图组件渲染

### 12、 Vue directive、mixin、filter, extends 的作用

- 指令：操作dom
- 混合：代码复用
- 过滤器：是纯函数，可以管道级联调用
- 继承其他组件

### 13、 Vue SSR

- 服务端渲染流程：路由匹配 -> 组件fetch data 填充 state -> renderer 渲染出html结构 -> 发送给客户端渲染
- 如何编写同构代码（注意尽可能使用node browser shared api）

### 14、 React 的特点

- 状态机
- 虚拟 DOM
- 函数式
- JSX

### 15、React Class Based Component 的好处

- 易继承扩展，复用度高
- React constructor 里面为什么要加 super(props)：React组件实例属性是由React的构造函数添加的。

### 16、 React 组件生命周期 Hook

- componentWillxxx
- componentShouldxxx
- componentDidxxx
- React Hooks

### 17、 React 如何触发渲染

- setState, 异步, 合并与覆盖

### 18、 React 合成事件与事件处理

- 事件代理机制

### 19、 React 组件的组合与继承

- extends 用于集成，this 在 super(pros)才可用
- 组合：组件通过逻辑判断渲染哪个或哪些组件

### 20、 React PureComponent 与 Component 的区别

- setState 时只做浅比较
- PureComponent 不建议有 state
- PureComponent 性能能好，通常用于容器逻辑组件，无状态组件 

### 21、 React 组件 defaultProps 与 propTypes

- 组件 props 类型校验与默认值

### 22、 React 组件的通信

- props（值与 function 回调，注意回调中对的 this）
- Context API
- Redux

### 23、 React 组件的渲染性能优化

- componentShouldUpdate 中进行判断是否需要渲染
- 尽量合并 setState 操作
- 指定 key 以复用组件

### 24、 React Context API

- 组件共享全局数据（状态），类似于 Vue provide

### 25、 React Hooks API

- 实验特性
- 解决 Functional Components 的生命周期和逻辑复用问题
- 函数式，配合rxjs等

### 26、 React 高阶组件及场景

- 接收组件，返回新组件的函数
- 权限校验
- 组件定制
- 通过 props 生成新组件而不是改传入的组件

### 27、VDom 的原理

- createHtmlFragment 一次插进 dom 减少 dom 操作
- 内存中维护一个与 Dom 树对应的树结构， 操作只更改 vdom，需要渲染才将差异部分渲染出来
- 不依赖实际 DOM，却可以生成 DOM
- 可用于服务端渲染或者非web渲染（RN）

### 28、VDom 的 Diff 算法

- [Virtual DOM 背后的秘密（Diff 篇）](https://zhuanlan.zhihu.com/p/36500459)
- [Vue VDOM](<https://github.com/answershuto/learnVue/blob/master/docs/VirtualDOM%E4%B8%8Ediff(Vue%E5%AE%9E%E7%8E%B0).MarkDown>)
- [Vue 虚拟 DOM 原理](https://cloud.tencent.com/developer/article/1006029)

### 29、Redux 思想与最佳实践

- 中间件
- store 的传递过程
- action
- reducers
- 单一数据源（store）

### 30、Vue.nextTick实现原理

- async deferring task queue
- micro task机制（Promise -> MutationObserver -> setTimeout fallback）
- vm.$next 与 Vue.nextTick是同一个函数

## 前端工程

### Gulp

- 流操作
- 任务

### Webpack

- Webpack 配置
- 构建过程中的对象
- Webpack 插件
- Webpack Loader
- 构建性能优化
- 构建时注入
- Code Splitting
- 优化手段

### Babel

- AST
- preset
  - babel-preset-env
  - polyfill
- plugins

### ESLint

- rules
- parser setting

### StyleLint

- rules

### HTTP 库，Util 库，组件库等。

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

### Post-CSS

- cssnano
- autoprefixer

### 工程框架

- utils & helpers
- 构建配置
- linter 配置文件
- npm scripts
- 页面模板生成器
- sass mixins, functions
- page bootstrap 脚本
- 页面异常处理工具
- 页面性能分析上报
- 页面打点统计工具
- Node 服务压测工具
- Node 日志处理
- Node 进程运行统计分析工具

### NPM & Yarn

- 版本管理策略
- 抽包与发包
- 私有 registry 与安装加速

### 测试

- Unit Test：Jest， Mocha，覆盖率
- E2E Test：Phantomjs，Puppeteer

### 前端发布 CI

- 代码克隆
- 包安装
- css 背景图片处理
- 引用路径处理
- md5
- 压缩
- 资源后处理（代码注入等）
- 打包
- 上传静态存储或 FTP
- 部署 CDN
- 清理 CDN 缓存
