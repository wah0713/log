## JavaScript

### observe
> 观察模式

### DOMSubtreeModified
> [监控dom节点子元素变化](http://javascript.ruanyifeng.com/dom/mutationobserver.html)

### getComputedStyle 或者 getBoundingClientRect
> [获取最终的style](https://blog.csdn.net/zy1281539626/article/details/78488062)

### currentStyle
> 获取最终的style （ie）

### encodeURI 和 encodeURIComponent
1、加密后还具有URI的语义，还能访问和点击，用encodeURI
2、加密后传入后端解析，用encodeURIComponent
3、加密后用于拼接URI参数，用encodeURIComponent
4、加密cookie，用encodeURIComponent

### 字符串
> 0o八进制 0x十六进制 0b二进制

### 事件带入参数
```js
const evt = $.Event('keydown', {
    keycode: 13
}) // 事件带入的参数
$input.trigger(evt) // 触发器
```

### [] 用法
```js
Object.keys(abc).reduce((arr, index) => [...arr, {
    [item]: abc[item]
}], [])
```

### iframe 中获取document
```js
document.querySelector('#topFrame').contentWindow.document
```

### insertAdjacentElement 插入位置
> [insertAdjacentElement](https://blog.csdn.net/stanleyhsl/article/details/104632640)

### axios 拦截器
```js
axios.create().interceptors.request.use()
```

### scrollIntoView

### window.atob window.btoa base64

### console.trace()

### a-z字符串生成
```js
var a_z=``
for(let i=`a`.charCodeAt();i<=`z`.charCodeAt();i++){
    a_z+=String.fromCharCode(i)
}
console.log(a_z)
```

### require.context

### document.designMode="on" "off"

### (new Set()).toJSON()

### text.charCodeAt(i)&0xff00!=0 中文字节

### fs文件操作
```js
fs.createWriteStream()
const content=fs.readFileSync(filePath)
let str= content.toString()
const stat=fs.statSync(absolutePath)
if(stat.isDirectory())absolutePath=absolutPath+"\\index"
const names=fs.readdirSync(dir)
```

### vue项目实现路由按需加载
> [路由懒加载的3种方式](https://blog.csdn.net/xm1037782843/article/details/88225104)
```js
const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
```

### a+?正则惰性

### switch{} 存在变量声明提前

### inserAdjacentHTML

### moment(window.buildTime).fromNow

### Object.entries

### class（ES6）

### 禁止在对象实例上直接使用object.prototypes的内置属性
> json=JSON.parse('{"hasOwnProperyyu":"1"}') 方法直接变成字符

### 禁止在finally语句块中出现控制流语句

### call()、apply()、bind()的用法
> [JavaScript 中 call()、apply()、bind() 的用法](https://www.runoob.com/w3cnote/js-call-apply-bind.html)

### hydration 水合

### 箭头函数没有自己的this和arguments

### 函数柯里化与反柯里化
> [简单粗暴详细讲解javascript实现函数柯里化与反柯里化](https://www.cnblogs.com/dengyao-blogs/p/11495861.html)

### await navigator.storage.estimate()
> 查看storage系统的占用数和空闲数

### Math.sign
> 判断数字是否正数、负数、0、-0、其他值为NaN

### typeof 123n
> 'bigint'

### 尾调用优化

### 空二维数组
```js
a = new Array(5).fill(null).map(item => [])
or
Array.from({
    length: 5
}, () => ({}))
```

### CommonsChunkPlugin可配置的属性
> [CommonsChunkPlugin可配置的属性](https://segmentfault.com/a/1190000012828879)

### js的各种错误类型
> [js的各种错误类型](https://www.cnblogs.com/yanze/p/5997489.html)

### public、private、protected的区别
> [public，private，protected的区别，继承方法与访问权限](https://blog.csdn.net/spu20134823091/article/details/53836192)

### 数组shift性能问题
> 一个数组，把头去掉，后面所有元素都要向前移动一位，这就是时间复杂度O(n)的操作，外面再来一个遍历，那就是O(n²)

### Reflect.ownKeys
> Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
```js
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
```

### Promise.catch
> 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

### Promise.race()
```js
const p = Promise.race([p1, p2, p3]);
```
> 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。

### Promise.allSettled()
> Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入。

### Promise.try()
> 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。

### HTTP中GET、POST和PUT的区别
> [HTTP中GET，POST和PUT的区别](https://blog.csdn.net/qq_36183935/article/details/80570062)

### 使用axios调用后端接口
> [使用axios调用后端接口](https://blog.csdn.net/kid_hw/article/details/93927253)

### 跨域资源共享CORS
> [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

### script标签中的async和defer
> [浅谈script标签中的async和defer](https://blog.csdn.net/lhjuejiang/article/details/81428226)

### Ajax跨域方法
> [Ajax跨域的所有方法（最详细带使用教程！！！）](https://blog.csdn.net/qq_37547964/article/details/112172365)

### commonjs与esm的区别
> [commonjs 与 esm 的区别](https://juejin.cn/post/6844903861166014478)

### CJS、AMD、UMD和ESM
> [面试 Javascript 中的 CJS, AMD, UMD 和 ESM是什么？](https://blog.csdn.net/weixin_39363245/article/details/114391500)

### ?? 和 ?. 的意思
> [js中??和?.的意思](https://www.cnblogs.com/zhigu/p/13962661.html)

### toLocaleString
> [神奇的 toLocaleString](https://blog.csdn.net/weixin_39749820/article/details/82869537)

### JSON.stringify深拷贝的缺点
> [JSON.stringify深拷贝的缺点](https://www.cnblogs.com/makai/p/13883544.html)

### 深拷贝与浅拷贝
> [深拷贝与浅拷贝](https://www.cnblogs.com/nanhuaqiushui/%5B/14403976.html)

### es6中的import使用方法
> [有关es6中的import使用方法](https://www.jianshu.com/p/c27b1640a01b)

### 参数类型变化导致性能问题
> 原因是add()的入参类型中间改变了一次，导致JavaScript需要重新计算结果，增加耗时。

### Object.prototype.hasOwnProperty()
> 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性。
> [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

### new.target属性
> [new.target 属性](https://es6.ruanyifeng.com/?search=new+target&x=0&y=0#docs/class#new-target-%E5%B1%9E%E6%80%A7)

### import命令
```js
import { a } from './xxx.js'
a.foo = 'hello'; // 合法操作
```

### defer与async的区别
> defer要等到整个页面在内存中正常渲染结束，才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
> [defer与async的区别](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#%E4%BC%A0%E7%BB%9F%E6%96%B9%E6%B3%95)

### CommonJS模块的循环加载
> 由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值。
> [CommonJS-模块的循环加载](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)

### 对象转基本类型
> 可以重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。
```js
let a = {
    valueOf() { return 0; },
    toString() { return '1'; },
    [Symbol.toPrimitive]() { return 2; }
}
1 + a // => 3
'1' + a // => '12'
```

### 深拷贝-MessageChannel
> 如果所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel
```js
function structuralClone(obj) {
    return new Promise(resolve => {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    });
}
```

### setTimeout、setInterval被遗忘的第三个参数
```js
setTimeout(function timer(a, b, c) {
    console.log(a, b, c)
}, 1000, 3, 2, 1)
// => 3 2 1
```

### 注册事件-addEventListener
> 第三个参数可以是布尔值，也可以是对象（capture、once、passive）。
> [注册事件](https://yuchengkai.cn/docs/frontend/browser.html#%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6)

### Service Worker
> Service workers 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。
> [Service Worker](https://yuchengkai.cn/docs/frontend/browser.html#service-worker)

### 重绘（Repaint）和回流（Reflow）
> 执行 requestAnimationFrame 回调，执行 IntersectionObserver 回调。
> [重绘（Repaint）和回流（Reflow）](https://yuchengkai.cn/docs/frontend/browser.html#%E9%87%8D%E7%BB%98%EF%BC%88repaint%EF%BC%89%E5%92%8C%E5%9B%9E%E6%B5%81%EF%BC%88reflow%EF%BC%89)

### document.createDocumentFragment()
> 优化性能，插入不会造成回流
```html
<script>
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < once; i++) {
        const li = document.createElement('li')
        li.innerText = Math.floor(Math.random() * total)
        fragment.appendChild(li)
    }
    ul.appendChild(fragment)
</script>
```

### 稀疏数组
> [数组 - 稀疏数组](https://blog.csdn.net/weixin_41922289/article/details/94555391)

### JavaScript Source Map详解
> [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

### Sourcemap是什么
> [Sourcemap是什么？Sourcemap的作用及用法概括](https://blog.csdn.net/weixin_40599109/article/details/107845431)

### package.json版本号详解
> [Node.js中package.json中库的版本号详解(^和~区别)](https://blog.csdn.net/superjunjin/article/details/76034076)

### Fetch API
> [浏览器直接发请求Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

### Fetch设置请求头
```js
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
var myRequest = new Request('flowers.jpg', myInit);
fetch(myRequest).then(function(response) { ... });
```

### visibilitychange
> 当其选项卡的内容变得可见或被隐藏时，会在文档上触发 visibilitychange 事件。
> [visibilitychange](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event)

### pushState、replaceState
> history.pushState history.replaceState无刷新改变url
> [关于H5的pushState、replaceState](https://www.jianshu.com/p/ddb7fcdf5962)

### window.prompt
> 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。
> [window.prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)

### stopPropagation与stopImmediatePropagation的区别
> stopPropagation阻止事件冒泡；stopImmediatePropagation阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发。
> [stopPropagation与stopImmediatePropagation的区别](https://blog.csdn.net/weixin_42420703/article/details/104585427)

### buildtime
> buildtime='<%=new Date %>' 记录编译时间

### localeCompare
> 字符串排序
> [localeCompare](https://www.w3school.com.cn/jsref/jsref_localecompare.asp)

### setSelectionRange
> js控制输入框光标位置
> [js控制输入框光标位置（setSelectionRange详解）](https://blog.csdn.net/forAlienZHOU/article/details/52437929)

### selectionStart、selectionEnd
> input textarea 的文本控制选中范围（不是只读属性，是可写入属性）
> [javascript对象之 selectionStart selectionEnd](https://www.cnblogs.com/perseverancevictory/p/3665814.html)

### iframe通信
> contentWindow.postMessage 父给子发消息；parent.postMessage 子发给父消息
> [iframe的使用和 contentWindow、parent以及postMessage通信方式](https://www.cnblogs.com/nangezi/p/12706672.html)

### Promise
> all 一个失败全部失败；race 最快的成功即为成功；allSettlad 全部完成
> [Promise/A+ 规范](https://zhuanlan.zhihu.com/p/143204897)

### ajax和fetch的区别
> [ajax和fetch都是请求数据的有什么区别呢](https://www.cnblogs.com/geter/p/12552294.html)

### 插入排序与快速排序
> [插排与快排](https://www.cnblogs.com/friedCoder/p/12617844.html)

### DFS和BFS
> [图文详解两种算法：深度优先遍历（DFS）和广度优先遍历（BFS）](https://developer.51cto.com/art/202004/614590.htm)

### JS作用域及作用域链
> [JS 作用域及作用域链](https://www.cnblogs.com/gaosirs/p/10579059.html)

### amd、cmd、cjs、umd、es
> [一文搞懂amd, cmd, cjs, umd, es](https://blog.csdn.net/cpa0701/article/details/108703494)

### IIFE立即调用函数表达式
```js
(function() {
    statements
})();
```

### fonts.ready
> 在所有字体加载完成后进行操作
```js
document.fonts.ready.then(function() {
    // 字体加载完成后的逻辑
});
```

### contains()方法
```js
event.target.contains(el)
```
> [JavaScript之contains()方法](https://www.jianshu.com/p/df6cb20436c5)

### process.env、process.argv
> node里读取命令行参数
> [node里读取命令行参数](https://blog.csdn.net/weixin_34292402/article/details/93318423)

### JS事件轮询
> [彻底搞懂 JS 事件轮询](https://juejin.cn/post/6844904198581010439)

### 宏任务与微任务
> 宏任务：setTimeout、setInterval、I/O、script代码块
> 微任务：nextTick、callback、Promise、process.nextTick、Object.observe、MutationObserver