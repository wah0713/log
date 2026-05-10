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
### 事件 带入的参数
```js
const evt = $.Event('keydown', {
    keycode: 13
}) // 事件 带入的参数
$input.trigger(evt) // 触发器
```
### [] 用法
```js
 Object.keys(abc).reduce((arr, index) => [...arr, {
     [item]: abc[item]
 }],[])
```
### iframe 中获取document
```js
 document.querySelector('#topFrame').contentWindow.document
```
### insertAdjacentElement 插入位置
> [insertAdjacentElement 插入位置](https://blog.csdn.net/stanleyhsl/article/details/104632640)
### axios 拦截器
```js
axios.create().interceptors.request.use()
```
### for continue
### scrollIntoView
### window.atob window.btoa base64
### console.trace()
### a_z字符串生成
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
### fs.createWriteStream
```js
fs.createWriteStream(
    new console.Console(
        const content=fs.readFileSync(filePath)
        let str= content.toString()
        const stat=fs.statSync(absolutePath)
        if(stat.isDirectory())absolutePath=
        absolutPath+"\\index"
        const names=fs.readdirSync(dir)
    )
)
```
### 正则惰性
### switch{} 存在变量声明提前
### inserAdjacentHTML
### insertAdjacentElement
### moment(window.buildTime).fromNow
### Object.entries
### class（ES6）
### 禁止在对象实力上直接使用object.prototypes的内置属性  json=JSON.parse('{"hasOwnProperyyu":"1"}') 方法直接变成字符
### 禁止在finally 语句块中出现控制流语句
### [JavaScript 中 call()、apply()、bind() 的用法](https://www.runoob.com/w3cnote/js-call-apply-bind.html)
### hydration 水合
### 箭头函数没有自己的this和 arguments
### [简单粗暴详细讲解javascript实现函数柯里化与反柯里化](https://www.cnblogs.com/dengyao-blogs/p/11495861.html)
### await navigator.storage.estimate()
> 查看storage系统的占用数和空闲数
### Math.sign判断数字是否正数、负数、0、-0、其他值为NaN
### typeof 123n // 'bigint'
### 尾调用优化
### 空二维数组
```js
a = new Array(5).fill(null).map(item => [])
or
Array.from({
    length: 5
}, () => ({}))
```
### [CommonsChunkPlugin可配置的属性](https://segmentfault.com/a/1190000012828879)
### [js的各种错误类型](https://www.cnblogs.com/yanze/p/5997489.html)
### [public，private，protected的区别，继承方法与访问权限](https://blog.csdn.net/spu20134823091/article/details/53836192)
作用域|中文名|说明
:-:|:-:|:-
public|公有继承|继承自父类的成员保持不变。
private|私有继承|继承自父类的成员全部变为私有成员。
protected|保护继承|继承自父类的公有成员变为保护成员，其余不变。
### 数组的shift在遍历中使用性能问题--在算法中发现
>一个数组，你把头去掉，后面所有元素都要向前移动一位，这就是时间复杂度O(n)的操作，外面再来一个遍历，那就是O(n²)
### Reflect.ownKeys
>Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
```js
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
```
### Promise.catch
>注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
>如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
### Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
```js
const p = Promise.race([p1, p2, p3]);
```
>上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
### Promise.allSettled()
>Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入。
### Promise.try()
>实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。
### [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
### [浅谈script标签中的async和defer](https://blog.csdn.net/lhjuejiang/article/details/81428226)
### [Ajax跨域的所有方法（最详细带使用教程！！！）](https://blog.csdn.net/qq_37547964/article/details/112172365)
### [js中??和?.的意思](https://www.cnblogs.com/zhigu/p/13962661.html)
### [神奇的 toLocaleString](https://blog.csdn.net/weixin_39749820/article/details/82869537)
### [JSON.stringify深拷贝的缺点](https://www.cnblogs.com/makai/p/13883544.html)
### [深拷贝与浅拷贝](https://www.cnblogs.com/nanhuaqiushui/%5B/14403976.html)
### [有关es6中的import使用方法](https://www.jianshu.com/p/c27b1640a01b)
### 原因是add()的入参类型（这里的例子是2个入参都是数字类型）中间改变了一次，这里是变为字符类型。导致javaScript需要回去再次计算出add()的结果，所以增加耗时，从而影响性能。
### [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
> 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
### [new.target 属性](https://es6.ruanyifeng.com/?search=new+target&amp;x=0&amp;y=0#docs/class#new-target-%E5%B1%9E%E6%80%A7)
### [import 命令](https://es6.ruanyifeng.com/?search=new+target&amp;x=0&amp;y=0#docs/module#import-%E5%91%BD%E4%BB%A4)
```js
import {
    a
} from './xxx.js'

a.foo = 'hello'; // 合法操作
```
> 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。
### [defer与async的区别](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/module-loader#%E4%BC%A0%E7%BB%9F%E6%96%B9%E6%B3%95)
> defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
### [CommonJS-模块的循环加载](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/module-loader#CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)
> 另外，由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。
### [解构赋值](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/style#%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)
### [对象](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/style#%E5%AF%B9%E8%B1%A1)
> 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
```js
// bad
const a = {
    k1: v1,
    k2: v2,
};
const b = {
    k1: v1,
    k2: v2
};

// good
const a = {
    k1: v1,
    k2: v2
};
const b = {
    k1: v1,
    k2: v2,
};
```
### [函数](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/style#%E5%87%BD%E6%95%B0)
> 箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。
```js
// bad
const self = this;
const boundMethod = function(...params) {
    return method.apply(self, params);
}

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);
```
> 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。
```js
// bad
function divide(a, b, option = false) {}

// good
function divide(a, b, {
    option = false
} = {}) {}
```
### [模块](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/style#%E6%A8%A1%E5%9D%97)
> 如果模块默认输出一个函数，函数名的首字母应该小写。
```js
function makeStyleGuide() {}

export default makeStyleGuide;
```
> 如果模块默认输出一个对象，对象名的首字母应该大写。
```js
const StyleGuide = {
    es6: {}
};

export default StyleGuide;
```
### [Record-和-field](https://es6.ruanyifeng.com/?search=defer&amp;x=0&amp;y=0#docs/spec#Record-%E5%92%8C-field)
> ES6 规格将键值对（key-value map）的数据结构称为 Record，其中的每一组键值对称为 field。这就是说，一个 Record 由多个 field 组成，而每个 field 都包含一个键名（key）和一个键值（value）。
### [前端进阶之道](https://yuchengkai.cn/docs/frontend/)
> 使用前删除全部cookie
### [对象转基本类型](https://yuchengkai.cn/docs/frontend/#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)
> 当然你也可以重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。
```js
let a = {
    valueOf() {
        return 0;
    },
    toString() {
        return '1';
    },
    [Symbol.toPrimitive]() {
        return 2;
    }
}
1 + a // =&gt; 3
'1' + a // =&gt; '12'
```
### [深拷贝](https://yuchengkai.cn/docs/frontend/#%E6%B7%B1%E6%8B%B7%E8%B4%9D)
> 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel
```js
function structuralClone(obj) {
    return new Promise(resolve =&gt; {
        const {
            port1,
            port2
        } = new MessageChannel();
        port2.onmessage = ev =&gt; resolve(ev.data);
        port1.postMessage(obj);
    });
}

var obj = {
    a: 1,
    b: {
        c: b
    }
}
// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
(async () =&gt; {
    const clone = await structuralClone(obj)
})()
```
### [setTimeout、setInterval被遗忘的第三个参数](https://www.cnblogs.com/leaf930814/p/6828588.html)
```js
setTimeout(function timer(a, b, c) {
    console.log(a, b, c)
}, 1000, 3, 2, 1)
// =&gt; 3 2 1
```
### [注册事件](https://yuchengkai.cn/docs/frontend/browser.html#%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6)
> 通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false 。useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性
#### capture，布尔值，和 useCapture 作用一样
#### once，布尔值，值为 true 表示该回调只会调用一次，调用后会移除监听
#### passive，布尔值，表示永远不会调用 preventDefault
### [Service Worker](https://yuchengkai.cn/docs/frontend/browser.html#service-worker)
> Service workers 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步 API。
### [重绘（Repaint）和回流（Reflow）](https://yuchengkai.cn/docs/frontend/browser.html#%E9%87%8D%E7%BB%98%EF%BC%88repaint%EF%BC%89%E5%92%8C%E5%9B%9E%E6%B5%81%EF%BC%88reflow%EF%BC%89)
> 执行 requestAnimationFrame 回调
&gt; 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
### [减少重绘和回流](https://yuchengkai.cn/docs/frontend/browser.html#%E5%87%8F%E5%B0%91%E9%87%8D%E7%BB%98%E5%92%8C%E5%9B%9E%E6%B5%81)
> 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量
```js
for (let i = 0; i &lt; 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```
### [预渲染](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E6%B8%B2%E6%9F%93)
> 可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染
```js
&lt; link rel = "prerender"
href = "http://example.com" / &gt;
```
> 预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染
### [预加载](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E5%8A%A0%E8%BD%BD)
### [监控](https://yuchengkai.cn/docs/frontend/performance.html#%E7%9B%91%E6%8E%A7)
> 但是要注意线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。
### [document.createDocumentFragment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)
```html
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;ul&gt;
        控件
    &lt;/ul&gt;
    &lt;script&gt;
        setTimeout(() =&gt; {
            // 插入十万条数据
            const total = 100000
            // 一次插入 20 条，如果觉得性能不好就减少
            const once = 20
            // 渲染数据总共需要几次
            const loopCount = total / once
            let countOfRender = 0
            let ul = document.querySelector('ul')

            function add() {
                // 优化性能，插入不会造成回流
                const fragment = document.createDocumentFragment()
                for (let i = 0; i &lt; once; i++) {
                    const li = document.createElement('li')
                    li.innerText = Math.floor(Math.random() * total)
                    fragment.appendChild(li)
                }
                ul.appendChild(fragment)
                countOfRender += 1
                loop()
            }

            function loop() {
                if (countOfRender &lt; loopCount) {
                    window.requestAnimationFrame(add)
                }
            }
            loop()
        }, 0)
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
```
```js
var a = [
    [],
    [0],
    [0, 1, 2]
]
a[4] = []
a.map(arr =&gt; arr.length) // =&gt; [0, 1, 3, empty, 0]
[...a.map(arr =&gt; arr.length)] // =&gt; [0, 1, 3, undefined, 0]
Math.max(...a.map(arr =&gt; arr.length).filter(Boolean)) // =&gt; 3
```
### [数组 - 稀疏数组](https://blog.csdn.net/weixin_41922289/article/details/94555391)
### [JS 稀疏数组](https://github.com/junreycen/blog/issues/10)
### [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
### [Sourcemap是什么？Sourcemap的作用及用法概括](https://blog.csdn.net/weixin_40599109/article/details/107845431)
### [彻底搞懂 JS 事件轮询](https://juejin.cn/post/6844904198581010439)
&gt; 顺带一提，其实还有一个替代方案，可以使用诸如getComputedStyle这样的方法，只需要访问其中一个属性，这样就能迫使浏览器更早地进行样式的计算，会让浏览器记录下此前设置的所有内容。但是，使用这个方法的时候需要小心，因为这样的做法可能会让浏览器在一帧的时间内做多余的工作，可能会破坏我们真正想要的效果。
&gt; 然而，要说的是，上面两种都不是最终方案，最终方法是使用web animation API，使用这个方案可以轻松地指定我们想要的操作，但是目前只有 Chrome 支持该方案，我们暂且不提。同时，在Edge（旧版）和Safari中，requestAnimationFrame可能现在还不是在渲染 CSS 之前执行， 这意味着很难批量更新页面，用户可能会延迟看到页面，到了下一帧才能看到页面变化，屏幕的显示会有很大的延迟。注意这并不是符合网络标准的，我们期待它们后面会有所整改。
### 宏任务的主要模块
- setTimeout
- setInterval
- I/O
- script代码块
### 微任务的主要模块
- nextTick
- callback
- Promise
- process.nextTick
- Object.observe
#### MutationObserver
### [stopPropagation与stopImmediatePropagation的区别](https://blog.csdn.net/weixin_42420703/article/details/104585427)
stopPropagation
event.stopPropagation(); 阻止事件冒泡。
stopImmediatePropagation
event.stopImmediatePropagation(); 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发。
### [localeCompare](https://www.w3school.com.cn/jsref/jsref_localecompare.asp)
&gt; 字符串排序 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
### [js控制输入框光标位置（setSelectionRange详解）](https://blog.csdn.net/forAlienZHOU/article/details/52437929)
### [javascript对象之 selectionStart selectionEnd](https://www.cnblogs.com/perseverancevictory/p/3665814.html)
&gt; input textarea 的文本控制选中范围（不是只读属性，是可写入属性）
### [Prmise](https://es6.ruanyifeng.com/#docs/promise#Promise-race)
&gt; all 一个失败全部失败
&gt; race 最快的成功即为成功
&gt; allSettlad 全部完成
&gt; 全部失败即为失败
### [ajax和fetch都是请求数据的有什么区别呢](https://www.cnblogs.com/geter/p/12552294.html)
### [Promise/A+ 规范](https://zhuanlan.zhihu.com/p/143204897)
### [js属性对象的hasOwnProperty方法](https://www.cnblogs.com/weiqinl/p/8683207.html)
### [插排与快排](https://www.cnblogs.com/friedCoder/p/12617844.html)
### [图文详解两种算法：深度优先遍历（DFS）和广度优先遍历（BFS）](https://developer.51cto.com/art/202004/614590.htm)
### [一文搞懂amd, cmd, cjs, umd, es](https://blog.csdn.net/cpa0701/article/details/108703494)
&gt; umd （ES6 import export）
&gt; cjs （commonjs）
### IIFE 立即调用函数表达式
```js
(function() {
    statements
})();
```
### 在所有字体加载完成后进行操作
```js
document.fonts.ready.then(function() {
    // 字体加载完成后的逻辑
});
```
### [JavaScript之contains()方法](https://www.jianshu.com/p/df6cb20436c5)
```js
event.target.contains(el)
```
### [nodejs路径处理方法和绝对路径 path](https://www.cnblogs.com/mengff/p/9753867.html)
### [巧用.filter去重](https://blog.csdn.net/weixin_44198018/article/details/87856385)
```js
r = arr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});;
```
### [如何优雅监听容器高度变化](https://segmentfault.com/a/1190000019877595?utm_source=tag-newest)
### [ResizeObserver API](https://zhuanlan.zhihu.com/p/41418813)
### 应答头
|应答头|说明|
|:-|:-|
|Allow|服务器支持哪些请求方法（如GET、POST等）。|
|Content-Encoding|文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。Java的GZIPOutputStream可以很方便地进行gzip压缩，但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，为其他浏览器返回普通页面。|
|Content-Length|表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入Content-Length头，最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。|
|Content-Type|表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。|
|Date|当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。|
|Expires|应该在什么时候认为文档已经过期，从而不再缓存它？|
|Last-Modified|文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。|
|Location|表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。|
|Refresh|表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。|
|Server|服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。|
|Set-Cookie|设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。|
|WWW-Authenticate|客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。|
### [mobile-detect.js 中文网](https://www.mobile-detect.cn/)
> 该脚本将通过将模式与给定的User-Agent字符串进行比较来检测设备。您可以找到有关渲染网页的设备的信息：
### [cache 强缓存 协商缓存](https://blog.csdn.net/qianqianstd/article/details/75907082)
### [node.js文件的复制，创建文件夹等相关操作](https://blog.csdn.net/youngyang_shen/article/details/54287247)
```js
function mkdir(dirpath, dirname) {
    if (dirname !== path.dirname(dirpath)) {
        mkdir(dirpath);
        return;
    }
    if (fs.existsSync(dirname)) {
        fs.mkdirSync(dirpath)
    } else {
        mkdir(dirname, path.dirname(dirname));
        fs.mkdirSync(dirpath);
    }
}
```
### [cheerio实现了核心jQuery的子集。cheerio会从jQuery库中删除所有DOM矛盾和浏览器的尴尬部分, 展示她真正华丽的API。](https://github.com/cheeriojs/cheerio/wiki/Chinese-README)
### [jsdom 中文文档（纯翻译）](https://segmentfault.com/a/1190000014844043)
### [NodeJs-crawler](https://github.com/lunlunshiwo/NodeJs-crawler)
### [node实现防盗链](https://www.cnblogs.com/sqh17/p/12713858.html)
### [node-crawler](https://node-crawler.readthedocs.io/zh_CN/latest/)
> node-crawler：一个轻量级爬虫工具 文档
> 浏览器提供了 5 种 Observer 来监听这些变动：MutationObserver、IntersectionObserver、PerformanceObserver、ResizeObserver、ReportingObserver。
### [浅谈js的数字格式](https://www.cnblogs.com/amiezhang/p/7940067.html)
```js
// 1. 二进制 - 二进制是以0b开头
0b10; //2
// 2. 八进制 - 八进制是以0开头
010； //8
// 3. 十六进制 - 十六进制是以0x开头
0x10; //16
```
### [Base64笔记](http://www.ruanyifeng.com/blog/2008/06/base64.html)
### [pointer-event属性详解](https://blog.csdn.net/qq_37600506/article/details/99487744)
> 鼠标事件屏蔽
### [深入JS getRandomValues和Math.random方法](https://www.zhangxinxu.com/wordpress/2021/12/js-getrandomvalue-math-random/)
### [ES标准中的相等比较算法 SameValue SameValueZero](https://blog.csdn.net/QDY5945/article/details/102638372)
### [HTML inputmode与iOS Android软键盘类型测试](https://www.zhangxinxu.com/wordpress/2022/02/html-inputmode-keyboard/)
> 呼出键盘
### [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
> 观察 DOM 变化的 API
### [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
> 观察元素可见性的 API
### [getComputedStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)
> 获取最终计算的样式
### [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
> 动画帧请求回调
### [FormData 原生对象](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)
### [JS复制文字到剪切板的极简实现及扩展](https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/)
### [HTML slot 插槽元素深入](https://www.zhangxinxu.com/wordpress/2021/09/html-slot-dom/)
### [不使用file类型input也能触发文件上传](https://www.zhangxinxu.com/wordpress/2021/08/file-system-access-api/)
### [polyfill、ponyfill、prollyfill傻傻分不清楚](https://www.zhangxinxu.com/wordpress/2021/08/polyfill-ponyfill-prollyfill/)
> polyfill ponyfill prollyfill
### [JS判断图像背景颜色单一还是丰富](https://www.zhangxinxu.com/wordpress/2021/06/js-image-colorful-or-pure/)
### [color thief](https://github.com/lokesh/color-thief)
> 取多个颜色
### [m多行匹配](https://www.cnblogs.com/Renyi-Fan/p/9087199.html)
### [使用 CodeMirror 打造在线代码编辑器](https://blog.csdn.net/qq_37193537/article/details/88426196)
### [Vue Json Pretty](https://github.com/leezng/vue-json-pretty)
> json格式化工具
### [vue-json-viewer](https://github.com/chenfengjw163/vue-json-viewer#readme)
> json格式化工具
### [sass @import](https://www.sass.hk/guide/)
> 当通过@import把sass样式分散到多个文件时，你通常只想生成少数几个css文件。那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件。对此，sass有一个特殊的约定来命名这些文件。
> 此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky"; 。
> 局部文件可以被多个不同的文件引用。当一些样式需要在多个页面甚至多个项目中使用时，这非常有用。在这种情况下，有时需要在你的样式表中对导入的样式稍作修改，sass有一个功能刚好可以解决这个问题，即默认变量值。
### [无障碍开发](https://www.cnblogs.com/kunmomo/category/1552789.html)
### [i18n与a11y与l10n](https://www.jianshu.com/p/a1dbc0f2d7de)
### [WAI-ARIA无障碍网页应用属性完全展示](https://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/#ariaAttr)
### [:focus-visible](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible)
> 当元素匹配:focus伪类并且客户端(UA)的启发式引擎决定焦点应当可见(在这种情况下很多浏览器默认显示"焦点框"。)时，:focus-visible 伪类将生效。
### [tabindex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)
> tabindex 全局属性 指示其元素是否可以聚焦，以及它是否/在何处参与顺序键盘导航（通常使用Tab键，因此得名）。
### [键盘导航的 JavaScript 组件](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
### [浏览器兼容](https://caniuse.com/)

### [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

> drawImage

### [输入框value属性赋值触发js change事件的实现](https://www.zhangxinxu.com/wordpress/2021/05/js-value-change-event/)

### [Promise.all、race和any方法都是什么意思？](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)

### [在有滚动条的容器中指定（显示）滚动到某一子元素位置](https://blog.csdn.net/weixin_44807526/article/details/118576067)

> scrollIntoView

### [2020的今天，[\u4e00-\u9fa5]还能匹配到所有中文吗？](https://juejin.cn/post/6844904116842430471)

### [深入理解Shadow DOM v1](https://segmentfault.com/a/1190000019115050)

> shadow 虚拟dom

### [盘点HTML字符串转DOM的各种方法及细节](https://www.zhangxinxu.com/wordpress/2021/02/html-string-dom/)

> innerHTML insertAdjacentHTML DOMParser Range

### [DOMPurify 简单使用](https://www.jianshu.com/p/d88cd47a124d)

> DOMPurify

### [判断DOM元素是否出现再浏览器窗口中](https://segmentfault.com/a/1190000017303509)

### [聊一聊前端图片懒加载背后的故事](https://qinyuanpei.blog.csdn.net/article/details/126170750)

### [如何使用JS检测用户是否缩放了页面？](https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/)

### [巧用DOM API实现HTML字符的转义和反转义](https://www.zhangxinxu.com/wordpress/2021/01/dom-api-html-encode-decode/)

### [告别JS keyCode](https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/)

> event.key event.code

### [HTML5 file API加canvas实现图片前端JS压缩并上传](https://www.zhangxinxu.com/wordpress/2017/07/html5-canvas-image-compress-upload/)

> base64 canvas canvas.getContext

### [前端JS获取字符串字节大小](https://tydev.blog.csdn.net/article/details/107357640)

### [JS 计算字符串所占字节数](http://www.alloyteam.com/2013/12/js-calculate-the-number-of-bytes-occupied-by-a-string/)

### [window.parent、window.top、window.self](https://www.cnblogs.com/zxf100/articles/14182831.html)

> iframe

### [使用document.scrollingElement控制窗体滚动高度](https://www.zhangxinxu.com/wordpress/2019/02/document-scrollingelement/)

> scrollingElement

### [前端监控之接口统计](https://juejin.cn/post/6958700362660315149)

> 监听响应 拦截请求

### [为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/87)

### [深入Node.compareDocumentPosition API](https://www.zhangxinxu.com/wordpress/2019/03/node-comparedocumentposition-api/)

> compareDocumentPosition

### [怎么判断获取到的url是否能访问](https://segmentfault.com/q/1010000011062244)

> get太重，改用HEAD请求吧
> 本地启动的接口head请求不能判断

### [使用HEAD请求判断文件是否存在](https://juejin.cn/post/7098233182843043848)

### [navigator.sendBeacon](https://zhuanlan.zhihu.com/p/381796039)

> 关闭页面时，发送请求

```js
const sendBeacon = (url, data = {}) => {
    const blob = new Blob([JSON.stringify(data)], {
        type: 'application/json; charset=UTF-8',
    });
    return navigator.sendBeacon(url, blob);
};
```

### [2022前端应该掌握的10个 JS 小技巧](https://juejin.cn/post/7072274726940311588)

### [如何disabled禁用所有表单input输入框元素](https://www.zhangxinxu.com/wordpress/2019/04/disabled-all-form-elements/)

### [解决canvas图片getImageData, toDataURL跨域问题](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)

### [What’s New With Forms in 2022?](https://css-tricks.com/whats-new-with-forms-in-2022/)

### [面试官为啥总是让我们手撕call、apply、bind?](https://juejin.cn/post/7128233572380442660)

### [请问：怎么实现大文件快速上传？](https://juejin.cn/post/7074534222748188685)

### [聊聊JS DOM变化的监听检测与应用](https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/)

> MutationObserver Mutation events Object.defineProperty

### [JS URL()和URLSearchParams() API接口详细介绍](https://www.zhangxinxu.com/wordpress/2019/08/js-url-urlsearchparams/)

> URLSearchParams URL

### [用头👴解决！前端必知必会的几个实用响应头](https://juejin.cn/post/7124847588070653983)

### [js 模拟鼠标双击](https://blog.csdn.net/nongcunqq/article/details/115358202)

```js
// 第一种
var targLink = document.getElementById("something");
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('dblclick', true, true);
targLink.dispatchEvent(clickEvent);

// 第二种
var targLink = document.getElementById("something");
targLink.dispatchEvent(new CustomEvent('dblclick'))
```

### [小tips: 元素focus页面不滚动不定位的JS处理](https://www.zhangxinxu.com/wordpress/2019/09/js-focus-preventscroll/)

> preventScroll

### [JS Intl对象完整简介及在中文中的应用](https://www.zhangxinxu.com/wordpress/2019/09/js-intl-zh/)

```js
{
    Collator: ƒ Collator()
    DateTimeFormat: ƒ DateTimeFormat()
    ListFormat: ƒ ListFormat()
    NumberFormat: ƒ NumberFormat()
    PluralRules: ƒ PluralRules()
    RelativeTimeFormat: ƒ RelativeTimeFormat()
    getCanonicalLocales: ƒ getCanonicalLocales()
    v8BreakIterator: ƒ v8BreakIterator()
}
```

> 数字格式化

### [小tips: JS DOM innerText和textContent的区别](https://www.zhangxinxu.com/wordpress/2019/09/js-dom-innertext-textcontent/)

> innerText textContent

### [RegExp.$1-$9](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)

```js
RegExp.$1
```

### [JS检测CSS属性浏览器是否支持的多种方法](https://www.zhangxinxu.com/wordpress/2019/11/js-css-supports-detect/)

### [js模拟键盘点击esc键](https://blog.csdn.net/qq_41228055/article/details/124712858)

```js
function fireKeyEvent(el, evtType, keyCode) {
    var doc = el.ownerDocument,
        win = doc.defaultView || doc.parentWindow,
        evtObj;
    if (doc.createEvent) {
        if (win.KeyEvent) {
            evtObj = doc.createEvent('KeyEvents');
            evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0);
        } else {
            evtObj = doc.createEvent('UIEvents');
            Object.defineProperty(evtObj, 'keyCode', {
                get: function() {
                    return this.keyCodeVal;
                }
            });
            Object.defineProperty(evtObj, 'which', {
                get: function() {
                    return this.keyCodeVal;
                }
            });
            evtObj.initUIEvent(evtType, true, true, win, 1);
            evtObj.keyCodeVal = keyCode;
            if (evtObj.keyCode !== keyCode) {
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
            }
        }
        el.dispatchEvent(evtObj);
    } else if (doc.createEventObject) {
        evtObj = doc.createEventObject();
        evtObj.keyCode = keyCode;
        el.fireEvent('on' + evtType, evtObj);
    }
}

fireKeyEvent(arr[0], 'keydown', 27) // dom元素，事件名，keycode
```

### [JavaScript 中几个优雅的运算符使用技巧](https://mp.weixin.qq.com/s/M6BnuFVku0sYoug016un8g)

```js
object?.property
console.log(undefined ?? 'codercao'); // codercao
expr1 ?? = expr2
x || = y
x && = y
```

### [了解woff2字体及转换](https://www.zhangxinxu.com/wordpress/2018/07/known-woff2-mime-convert/)

### [小tips: 使用JS检测用户是否安装某font-family字体](https://www.zhangxinxu.com/wordpress/2018/02/js-detect-suppot-font-family/)

```js
var isSupportFontFamily = function(f) {
    if (typeof f != "string") {
        return false
    }
    var h = "Arial";
    if (f.toLowerCase() == h.toLowerCase()) {
        return true
    }
    var e = "a";
    var font = 100;
    var _width = 100,
        _height = 100;
    var _canvas = document.createElement("canvas");
    var context = _canvas.getContext("2d");
    _canvas.width = _width;
    _canvas.height = _height;
    context.textAlign = "center";
    context.fillStyle = "black";
    context.textBaseline = "middle";
    var g = function(j) {
        context.clearRect(0, 0, _width, _height);
        context.font = font + "px " + j + ", " + h;
        context.fillText(e, _width / 2, _height / 2);
        var k = context.getImageData(0, 0, _width, _height).data;
        return [].slice.call(k).filter(function(l) {
            return l != 0
        })
    };
    return g(h).join("") !== g(f).join("")
};
```

### [小tips: 滚动容器尺寸变化子元素视觉上位置不变JS实现](https://www.zhangxinxu.com/wordpress/2018/02/container-scroll-position-hold/)

```js
var elements = document.elementsFromPoint(x, y);
```

### [小tips: 纯前端JS读取与解析本地文本类文件](https://www.zhangxinxu.com/wordpress/2018/03/js-parse-text-file/)

```js
var reader = new FileReader();
reader.onload = function(event) {
    // event.target.result就是文件文本内容
    // 然后你就可以为所欲为了
    // 例如如果是JSON数据可以解析
    // 如果是HTML数据，可以直接插入到页面中
    // 甚至字幕文件，各种滤镜，自定义文件格式，都可以玩弄于鼓掌之间……
};
reader.readAsText(file);
```

### [借助Web Animations API实现JS keyframes动画](https://www.zhangxinxu.com/wordpress/2018/03/web-animations-api-dynamic-feature-animation/)

> var myAnimation = element.animate(keyframes, options);

### [JavaScript 正则表达式匹配汉字](https://zhuanlan.zhihu.com/p/33335629)

`/[\u4e00-\u9fa5]/` 是错的，不要用二十年前的正则表达式了
`/\p{Unified_Ideograph}/u` 是正确的，不需要维护，匹配所有汉字。这里 `\p` 是 Unicode 属性转义正则表达式。
`/\p{Ideographic}/u` 和 `/\p{Script=Han}/u` 匹配了除了汉字以外的其他一些字符，在「汉字匹配正则表达式」这个需求下，是错的。
目前 Chrome 和 Safari 支持 Unicode 属性转义正则表达式。对其他环境，使用 7.7 版本的 `@babel/env` 就可以自动根据浏览器规定打开支持。

### [Service Worker实现浏览器端页面渲染或CSS, JS编译](https://www.zhangxinxu.com/wordpress/2018/04/service-worker-client-online-html-css-complie/)

> serviceWorker

### [explorer.exe命令行](https://www.cnblogs.com/zzr-stdio/articles/13140775.html)

> explorer.exe

### [node使用exec方法开启子进程](https://blog.csdn.net/xuelian3015/article/details/125923099)

> exec( command , [options] , [callback] )

### [Object转字符串可以包含function](https://blog.csdn.net/LanChongQiChuang/article/details/103683642)

### [从今天开始，请叫我Node文本节点处理大师](https://www.zhangxinxu.com/wordpress/2022/11/js-text-node-master/)

### [nodejs之支持async func的并行forEach](https://blog.csdn.net/windroid/article/details/10542653)

```
https://wah0713.github.io/getWeiboImage/image/1.03.png
https://cdn.jsdelivr.net/gh/wah0713/getWeiboImage@master/image/1.03.png
https://raw.githubusercontent.com/wah0713/getWeiboImage/master/image/1.03.png
```

### 位运算

```js
// 四色五人
num + 0.5 | 0
// 去整
num | 0
```
### [JavaScript 数组去重的方法（12 种方法，史上最全）](https://segmentfault.com/a/1190000016418021)


### [二次元live2d看板娘效果中的web前端技术](https://www.zhangxinxu.com/wordpress/2018/05/live2d-web-webgl-js/)


### [炫酷H5中序列图片视频化播放的高性能实现](https://www.zhangxinxu.com/wordpress/2018/05/image-sequence-html5-video-play/)

> img 替换


### [JS检测PNG图片是否有透明背景、抠图等相关处理](https://www.zhangxinxu.com/wordpress/2018/05/canvas-png-transparent-background-detect/)


### [前端原生API实现条形码二维码的JS解析识别](https://www.zhangxinxu.com/wordpress/2023/01/js-parse-barcode-qrcode-barcodedetector/)

> BarcodeDetectorBarcodeDetector


### [使用JS在客户端判断当前网络状态](http://t.zoukankan.com/libin-1-p-6822746.html)

> navigator.onLine


### [拖拽献祭中的黑山羊-DataTransfer对象](https://www.zhangxinxu.com/wordpress/2018/09/drag-drop-datatransfer-js/)

> DataTransfer


### [直接剪切板粘贴上传图片的前端JS实现](https://www.zhangxinxu.com/wordpress/2018/09/ajax-upload-image-from-clipboard/)


### [Chrome浏览器原生支持的7种后台服务简介](https://www.zhangxinxu.com/wordpress/2023/01/js-background-services/)

```
Background Fetch
Background Sync
Notifications
Payment Handler
Periodic Background Sync
Push Messaging
Reporting API
```


### [HTML5 video视频播放Picture-in-Picture画中画技术](https://www.zhangxinxu.com/wordpress/2018/12/html5-video-play-picture-in-picture/)

```js
// 进入画中画
video.requestPictureInPicture();
// 退出画中画
document.exitPictureInPicture();
```

> 悬浮 视频 弹出


### [【JavaScript】遍历数组时注意 Empty Item 的影响](https://segmentfault.com/a/1190000020192631)

```js
// 在 Chrome 中试验：
const arr = new Array(3)

console.log(arr)
// output: [empty × 3]

arr.map((item) => item.prop)
// output: [empty × 3]

arr.forEach((item) => console.log(item.prop))
// nothing

arr.reduce((res) => res += 'ha', '')
// output: ''
```


### [奇了怪了，输入法和JS Enter回车提交冲突](https://www.zhangxinxu.com/wordpress/2023/02/js-enter-submit-compositionupdate/)

> key keyCode isComposing


### [JavaScript将首字母转换为大写或小写的简单方法](https://blog.csdn.net/csdn_meng/article/details/85935593)

```js
var str = 'test string';
// 只需要一行代码即可
str = str.replace(str[0], str[0].toUpperCase());
console.log(str);
// 输出：Test string
```


### [使用electron构建跨平台Node.js桌面应用经验分享](https://www.zhangxinxu.com/wordpress/2017/05/electron-node-js-desktop-application-experience/)

> electron


### [利用HTML5 Web Audio API给网页JS交互增加声音](https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/)

> AudioContext


### [可以参考element的实现, 判断文本是否溢出](https://github.com/ElemeFE/element/blob/dev/packages/table/src/table-body.js#L245)

```js
      if (cell) {
          const column = getColumnByCell(table, cell);
          const hoverState = table.hoverState = {
              cell,
              column,
              row
          };
          table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');
      if (!(hasClass(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
          return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      // getStyle Window.getComputedStyle()
      const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
          (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
          const tooltip = this.$refs.tooltip;
          // TODO 会引起整个 Table 的重新渲染，需要优化
          this.tooltipContent = cell.innerText || cell.textContent;
          tooltip.referenceElm = cell;
          tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
          tooltip.doDestroy();
          tooltip.setExpectedState(true);
          this.activateTooltip(tooltip);
      }
```


### [HTML5 indexedDB前端本地存储数据库实例教程](https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/)

> indexedDB


### [iframe和HTML5 blob实现JS, CSS, HTML直接当前页预览](https://www.zhangxinxu.com/wordpress/2017/08/iframe-html5-blob-code-view/)

> iframe


### [请使用千位分隔符(逗号)表示web网页中的大数字](https://www.zhangxinxu.com/wordpress/2017/09/web-page-comma-number/)

```js
(123456789).toLocaleString('en-US');
```


### [鼠标无限移动 JS API Pointer Lock简介](https://www.zhangxinxu.com/wordpress/2017/10/js-api-pointer-lock/)


### [照片位图转SVG矢量图片JS工具primitive.js等简介](https://www.zhangxinxu.com/wordpress/2017/11/raster-image-vector-svg-canvas-primitive-js/)

> primitive


### [使用CSS3 will-change提高页面滚动、动画等渲染性能](https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/)

```
/* 关键字值 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;
/* <custom-ident>示例 */
will-change: opacity;
/* <custom-ident>示例 */
will-change: left,top;
/* 两个<animateable-feature>示例 */

/* 全局值 */
will-change: inherit;
will-change: initial;
will-change: unset;
```


### [小tip: 如何让contenteditable元素只能输入纯文本](https://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/)

```js
$('[contenteditable]').each(function() {
    // 干掉IE http之类地址自动加链接
    try {
        document.execCommand("AutoUrlDetect", false, false);
    } catch (e) {}

    $(this).on('paste', function(e) {
        e.preventDefault();
        var text = null;

        if (window.clipboardData && clipboardData.setData) {
            // IE
            text = window.clipboardData.getData('text');
        } else {
            text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('在这里输入文本');
        }
        if (document.body.createTextRange) {
            if (document.selection) {
                textRange = document.selection.createRange();
            } else if (window.getSelection) {
                sel = window.getSelection();
                var range = sel.getRangeAt(0);

                // 创建临时元素，使得TextRange可以移动到正确的位置
                var tempEl = document.createElement("span");
                tempEl.innerHTML = "&#FEFF;";
                range.deleteContents();
                range.insertNode(tempEl);
                textRange = document.body.createTextRange();
                textRange.moveToElementText(tempEl);
                tempEl.parentNode.removeChild(tempEl);
            }
            textRange.text = text;
            textRange.collapse(false);
            textRange.select();
        } else {
            // Chrome之类浏览器
            document.execCommand("insertText", false, text);
        }
    });
});
```

> execCommand range clipboardData


### [使用ImageDecoder API让GIF图片暂停播放](https://www.zhangxinxu.com/wordpress/2023/05/js-imagedecoder-api-gif/)

> ImageDecoder


### [半深入理解CSS3 object-position/object-fit属性](https://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/)

```
替换元素
不是所有元素都叫“替换元素”。在CSS中，“替换元素”指的是（引用自这里）：

其内容不受CSS视觉格式化模型（中文释义参见这里）控制的元素，比如image, 嵌入的文档(iframe之类)或者applet。比如，img元素的内容通常会被其src属性指定的图像替换掉。替换元素通常有其固有的尺寸：一个固有的宽度，一个固有的高度和一个固有的比率。比如一幅位图有固有用绝对单位指定的宽度和高度，从而也有固有的宽高比率。另一方面，其他文档也可能没有固有的尺寸，比如一个空白的html文档。

CSS渲染模型不考虑替换元素内容的渲染。这些替换元素的展现独立于CSS。object, video, textarea, input也是替换元素，audio和canvas在某些特定情形下为替换元素。

使用CSS的content属性插入的对象是匿名替换元素。
```


### [怎么使用js下载m3u8视频](https://www.ljhmp.com/article-detail.html?id=25)


### [m3u8-downloader](https://gitee.com/jin2014/m3u8-downloader)

```
直接通过 ajax 的 get 请求 m3u8 文件。得到 m3u8 文件的内容字符串。读取字符串进行解析。

需要注意的是，m3u8 文件不是 json 格式，不能将 dataType 设置为 json。 【队列下载 ts 视频片段】

同样使用 ajax 的 get 请求视频碎片，一个 ajax 请求一个 ts 视频碎片，但关键点在于，下载的是视频文件，属于二进制数据，需要将 responseType 请求头设置为 arraybuffer。xhr.responseType = 'arraybuffer'

使用队列下载，是因为视频碎片太多，不可能一次性请求全部。需要分批下载。

同时由于浏览器同源并发限制，视频同时请求数不能过多。本工具设置为并发下载数为 10。 【组合 ts 视频片段】

看似很难，但其实使用 Blob 对象即可将多个 ts 文件整合成一个文件。new Blob()，传入 ts 文件数组。

这里有个小细节需要注意，需要在 new Blob 的第二个参数中设置文件的 MIME 类型，否则将默认为 txt 文件。 const fileBlob = new Blob(fileDataList, { type: 'video/MP2T' }) 【自动下载】

下载，当然先要获得文件链接，即刚生成的 Blob 文件链接。

使用 URL.createObjectURL，即可得到浏览器内存中，Blob 的文件链接。URL.createObjectURL(fileBlob)

最后，使用 a 标签的 a.download 属性，将 a 标签设置为下载功能。主动调用 click 事件a.click()。完成文件自动下载。
```


### [【前端学习笔记_JS】设计任务队列，控制请求最大并发数](https://juejin.cn/post/7099344493010223134)

```js
function createTask(i) {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 2000);
        });
    };
}​
class TaskQueue {
    constructor() {
        this.max = 10; //最大并发数
        this.taskList = [] //用shift方法实现先进先出
        setTimeout(() => { //这里初始化队列后自动执行，后续有新任务添加则需要手动执行。
            this.run()
        })
    }
    addTask(task) {
        this.taskList.push(task);
    }​
    run() {
        const length = this.taskList.length;​
        if (!length) {
            return;
        }
        const min = Math.min(length, this.max); // 控制并发数量
        for (let i = 0; i < min; i++) {
            this.max--; //开始占用一个任务的空间
            const task = this.taskList.shift();
            task().then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                this.max++; //任务完成，释放空间
                this.run(); //自动进行下一个任务
            })
        }
    }
}​
const taskQueue = new TaskQueue();
for (let i = 0; i < 20; i++) {
    const task = createTask(i);
    taskQueue.addTask(task); //当所有任务添加到队列中后自动执行。
}
```


### [Promise.all的并发控制](https://blog.csdn.net/weixin_46133178/article/details/127142418)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Promise.all()</title>
</head>

<body></body>
<script>
    // 并发量
    const limit = 3;
    // 异步任务的参数数组，一般为url
    const array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
    ];
    // 根据参数生成Promise的函数、一般为根据传入的url构造一个Promise，其内部封装一个异步请求
    const proFn = (item) => {
        return new Promise((resolve, reject) => {
            console.log(`开始生成${item}的异步请求          ····`);
            // 模拟异步请求
            setTimeout(() => {
                console.log(item);
                // 得到结果
                resolve(item);
                console.log(`${item}的异步请求执行完毕            √`);
            }, Math.random() * 1000);
        });
    };
    console.log(promiseAll(array, proFn, limit));

    // proFn返回一个封装了异步任务的promise
    function promiseAll(arr = [], proFn, limit) {

        // 当前正在遍历的坐标
        let index = 0;
        // 存放结果的数组
        let res = [];
        // 正在执行的数组
        let excuting = [];

        // 执行函数
        function enqueue() {
            // 当执行完毕之后返回resolve状态的promise
            if (index === arr.length) {
                return Promise.resolve();
            }

            // 依次取出一个元素
            const item = arr[index++];

            /* 此处then方法会立即返回一个promise,在then回调运行结束
            （promise生成完毕）之后才会变成resolved状态，且当时的promise与
            proFn生成的promise保持一致(1、状态一致；2、resolve或者reject的值一致)*/
            const p = Promise.resolve().then(() => proFn(item, arr));
            // 将其放到promise数组
            res.push(p);

            // 将e放入正在执行的数组，并且在p执行完成之后将当前执行的e删除掉
            const e = p.then(() => {
                excuting.splice(excuting.indexOf(e), 1);
            });
            excuting.push(e);

            // 让r为一个默认resolved状态的promise
            let r = Promise.resolve();
            // 如果执行数组满了的话，那就让r通过race等待改变状态
            if (excuting.length >= limit) {
                r = Promise.race(excuting);
            }
            // 等到r变为resolved状态（执行数组没满或者有一个已经执行完被删除了）再来递归调用enqueue
            return r.then(() => enqueue());
        }

        // 执行完成后，通过promise.all返回所有的结果
        return enqueue().then(() => Promise.all(res));
    }
</script>

</html>
```


### 【JavaScript】更改数组中某一个元素在数组中的位置

```js
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Move(目标数组, 需要移动的元素的位置, 元素移动后的位置)
function Move(arr, a, b) {
    let arr_temp = [].concat(arr); //创建一个新的临时数组，用以操作后不变更原数组
    arr_temp.splice(b, 0, arr_temp.splice(a, 1)[0]); //在b位置插入从a位置截取的元素
    return arr_temp;
}

//满足极限条件，某元素移指最后或最前，最后或最前元素移至某位置等
console.log(Move(arr, 2, 1)); //变更后的数组满足要求：[0, 2, 1, 3, 4, 5, 6, 7, 8, 9]
console.log(arr); //原数组不变更：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```


### [图片主色获取脚本rgbaster.js小介绍小使用](https://www.zhangxinxu.com/wordpress/2014/08/image-dominant-color-get-rgbaster-js/)

> [rgbaster.js](https://github.com/briangonzalez/rgbaster.js)


### [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

标志|描述
:-:|:-|
g|全局搜索。
i|不区分大小写搜索。
m|多行搜索。
s|允许 . 匹配换行符。
u|使用 unicode 码的模式进行匹配。
y|执行“粘性 (sticky)”搜索，匹配从目标字符串的当前位置开始。


### [文件系统标志](https://nodejs.cn/api/fs.html#%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%A0%87%E5%BF%97)

> flags


### [clean-css](https://github.com/clean-css/clean-css)

> clean-css是Node.js平台和任何现代浏览器的快速高效的css优化器。


### [JavaScript 性能利器 —— Web Worker](https://juejin.cn/post/6844903736238669837)

> Web Worker

### [狙杀页面卡顿 —— Performance 指北](https://juejin.cn/post/6844903651262070791)

> Performance chrome

### [梳理：提高前端性能方面的处理以及不足](https://www.zhangxinxu.com/wordpress/2013/04/%e5%89%8c%e7%ab%af%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%bb%8f%e9%aa%8c%e5%88%86%e4%ba%ab/)

> 性能 优化

### [jQuery诞生记-原理与机制](https://www.zhangxinxu.com/wordpress/2013/07/jquery-%e5%8e%9f%e7%90%86-%e6%9c%ba%e5%88%b6/)

> 原型链 prototype

### [node.js - 有没有办法删除最后一行输出？](https://www.coder.work/article/1372167)

```js
process.stdout.write("000");
process.stdout.write("\n111");
process.stdout.write("\n222");
process.stdout.write("\r\x1b[K")
process.stdout.write("333");
```

使用 process.stdout.write 打印没有 EOL 字符的行。
使用回车符(\r)返回行首。
使用\e[K清除从光标位置到行尾的所有字符。

### [ANSI转义序列详解](https://juejin.cn/post/7086720921158811662)

### [关于async / await的异常捕获](https://blog.csdn.net/qq_42543244/article/details/123423894)

```js
		async getList1() {
		    let resp = await this.httpTest().catch(err => console.log(err));
		    console.log(resp);
		}

		async getList2() {
		    try {
		        let resp = await this.httpTest();
		        console.log(resp);
		    } catch (err) {
		        console.log(err);
		    }
		},
```

### [强大的JS位运算](https://juejin.cn/post/7176635614777851941)

> 位运算

### [理解DOMString、Document、FormData、Blob、File、ArrayBuffer数据类型](https://www.zhangxinxu.com/wordpress/2013/10/understand-domstring-document-formdata-blob-file-arraybuffer/)

### [XMLHttpRequest实现HTTP协议下文件上传断点续传](https://www.zhangxinxu.com/wordpress/2013/11/xmlhttprequest-ajax-localstorage-%e6%96%87%e4%bb%b6%e6%96%ad%e7%82%b9%e7%bb%ad%e4%bc%a0/)

> slice(0, 20); slice(20, 40); slice(40, 60); slice(60)

### [小折腾：JavaScript与元素间的抛物线轨迹运动](https://www.zhangxinxu.com/wordpress/2013/12/javascript-js-%e5%85%83%e7%b4%a0-%e6%8a%9b%e7%89%a9%e7%ba%bf-%e8%bf%90%e5%8a%a8-%e5%8a%a8%e7%94%bb/)

### [btoa(crypto.randomUUID())](https://www.zhangxinxu.com/wordpress/2023/08/html-attribute-nonce-translate/)

```js
// randomuuid
btoa(crypto.randomUUID())
// NDhkODkxMzYtNGUxZS00N2NjLTk1YTItNWMyOTM4YzdhZGJj
```

### [聊聊Web网页中资源加载的优先级](https://www.zhangxinxu.com/wordpress/2023/10/img-js-preload-fetch-priority/)

> prefetch preload fetchPriority

### [纯JS实现多个音频的拼接或者合并](https://www.zhangxinxu.com/wordpress/2023/10/js-audio-audiobuffer-concat-merge/)

> new AudioContext()

### [JS改变AudioBuffer音量并下载为新audio音频](https://www.zhangxinxu.com/wordpress/2023/10/js-web-audio-audiobuffer-volume/)

### json stringify 排序问题

> JSON.stringify 的排序，不是按字母顺序

### [又get到了，JS复制图片到剪切板](https://www.zhangxinxu.com/wordpress/2023/09/js-copy-image-clipboard/)

> b64toBlob ClipboardItem

### [Base64、Blob、File 三种类型的相互转换 最详细](https://blog.csdn.net/BaymaxCSDN/article/details/108077233)

> base64、blob、file

### [Tips：form元素reset后input不触发change事件处理](https://www.zhangxinxu.com/wordpress/2023/09/form-reset-input-change/)

```js
    // 观察页面所有的form元素，绑定reset事件
    document.addEventListener('reset', function(event) {
        // 事件对象e中的target属性，指向触发事件的元素
        var target = event.target;
        // 如果触发事件的元素是form元素
        if (target.tagName.toLowerCase() === 'form') {
            // 遍历form元素中的所有input元素
            var inputs = [].slice.call(target.elements);
            // 只有当前后值变化的时候才会触发 change 事件
            inputs.forEach(function(input) {
                input.tempValue = input.value;
            });

            setTimeout(function() {
                inputs.forEach(function(input) {
                    if (input.tempValue !== input.value) {
                        input.dispatchEvent(new Event('change'));
                    }
                });
            }, 1);
        }
    }, false);
```

### [逻辑空赋值（??=）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

> ??=

### [空值合并运算符（??）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

> ??

### [可选链运算符（?.）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

> ?.

### [JavaScript实现监听路由变化](https://blog.csdn.net/qq_42367749/article/details/119653295)

### [怎样监听history.pushState、history.replaceState事件](https://blog.csdn.net/swc1997/article/details/118242920)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>自定义对pushState、replaceState的监听</title>
</head>

<body>
    <button onclick="push()">点击切换路由</button>
    <button onclick="replace()">点击替换路由</button>
    <script>
        function push() {
            window.history.pushState({
                data: "from test1"
            }, "", "/test1");
        }

        function replace() {
            window.history.replaceState({
                data: "from test2"
            }, "", "/test2");
        }

        /**
         * 重写history的pushState和replaceState
         * @param action pushState|replaceState
         * @return {function(): *}
         */
        function wrapState(action) {
            // 获取原始定义
            let raw = history[action];
            return function() {

                // 经过包装的pushState或replaceState
                let wrapper = raw.apply(this, arguments);

                // 定义名为action的事件
                let e = new Event(action);

                // 将调用pushState或replaceState时的参数作为stateInfo属性放到事件参数event上
                e.stateInfo = {
                    ...arguments
                };
                // 调用pushState或replaceState时触发该事件
                window.dispatchEvent(e);
                return wrapper;
            }
        }

        //修改原始定义
        history.pushState = wrapState("pushState");
        history.replaceState = wrapState("replaceState");

        // 监听自定义的事件
        window.addEventListener("pushState", function(e) {
            console.info("pushState", e.stateInfo);
        })
        window.addEventListener("replaceState", function(e) {
            console.info("replaceState", e.stateInfo);
        })
    </script>
</body>

</html>
```

### [获取元素CSS值之getComputedStyle方法熟悉](https://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/)

### [alova.js]( https://alova.js.org/zh-CN/)

> 以声明的方式完成各种复杂场景的网络请求，这意味着使用非常少量的代码就可以实现更高的流畅性和可用性的网络请求，让你的应用如智者一般具备卓越的策略思维

### [js的.map() 里使用异步方法](https://blog.csdn.net/hannah1116/article/details/86541680)

```js
// 使用async await 处理异步操作
let results = await Promise.all(arr.map(async (item) => {
    // 等待异步操作完成，返回执行结果
    return await asyncWorker(item);
}));
```

### [当你需要将cookie转换成对象](https://www.kancloud.cn/hanxuming/codesnippet/3204012)

```js
const getCookie = () => document.cookie
    .split(';')
    .map((item) => item.split('='))
    .reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {})
getCookie()
```

### [Web：从给定文本中剥离html](https://www.kancloud.cn/hanxuming/codesnippet/3204018)

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
stripHtml('<div>test</div>') // 'test'
```

### [数组：找到最接近的数值](https://www.kancloud.cn/hanxuming/codesnippet/3203983)

```js
const closest = (arr, n) => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50) // 33
```

### [数组：生成数组](https://www.kancloud.cn/hanxuming/codesnippet/3203976)

```js
const createArr = (n) => Array.from(new Array(n), (v, i) => i)
const arr = createArr(100) // 0 - 99 数组

const createArr = (n) => new Array(n).fill(0).map((v, i) => i)
createArr(100) // 0 - 99数组
```

### [进制转换](https://www.kancloud.cn/hanxuming/codesnippet/3203985)

```js
const toDecimal = (num, n = 10) => num.toString(n)
// 假设数字10要转换成2进制
toDecimal(10, 2) // '1010'

// 10的2进制为1010
const toDecimalism = (num, n = 10) => parseInt(num, n)
toDecimalism(1010, 2)
```

### [当你需要获取一个随机颜色](https://www.kancloud.cn/hanxuming/codesnippet/3204008)

```js
const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
getRandomColor() // '#4c2fd7'
```


### [HTML5全屏API在FireFox/Chrome中的显示差异](https://www.zhangxinxu.com/wordpress/2012/10/html5-full-screen-api-firefox-chrome-difference/)


### [全屏 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)

```js
function toggleFullScreen() {
    // 元素和document的区别
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
```

> requestFullscreen exitFullscreen


### [Page Visibility(页面可见性) API介绍、微拓展](https://www.zhangxinxu.com/wordpress/2012/11/page-visibility-api-introduction-extend/)

```js
document.addEventListener("visibilitychange", function() {})
```

> visibilitychange


### [纯JS实现图像的人脸识别功能](https://www.zhangxinxu.com/wordpress/2023/12/js-image-video-face-detect/)


### [Face-Detection-JavaScript](https://github.com/WebDevSimplified/Face-Detection-JavaScript)


### [JS实现图片相似度的判断](https://www.zhangxinxu.com/wordpress/2023/12/js-img-image-similarity/)


### [SSIM. JS](https://github.com/obartra/ssim)


### [使用JS提取视频中的音频资源](https://www.zhangxinxu.com/wordpress/2023/12/js-fetch-video-audio-mp3-mp4-wav/)


### [本地MP3封面图、时长等信息的JS读取](https://www.zhangxinxu.com/wordpress/2023/11/js-mp3-media-tags-metadata/)


### [cube格式的LUT滤镜也叫ColorMapFilter在pixi中应用](https://www.zhangxinxu.com/wordpress/2023/11/cube-lut-colormapfilter-pixijs/)


### [剪映APP的视频特效如何在Web中JS实现](https://www.zhangxinxu.com/wordpress/2023/11/video-effect-js-filter-pixijs-webgl-3d/)


### [mp4box.js加WebCodecs 解码MP4视频帧并渲染](https://www.zhangxinxu.com/wordpress/2023/11/mp4box-js-webcodecs-mp4-canvas/)


### [翻译 – 高性能网站需避免的7个错误](https://www.zhangxinxu.com/wordpress/2011/11/seven-mistakes-that-make-websites-slow/)


### [翻编-JavaScript有关的10个怪癖和秘密](https://www.zhangxinxu.com/wordpress/2011/06/javascript%e6%9c%89%e5%85%b3%e7%9a%8410%e4%b8%aa%e6%80%aa%e7%99%96%e5%92%8c%e7%a7%98%e5%af%86/)

```js
alert('10 13 21 48 52'.replace(/\d+/g, function(match) {
    return parseInt(match) < 30 ? '*' : match;
}));

var someVar = 0;
alert(someVar == false); //结果 true – 0属于falsy
alert(someVar === false); //结果 false – zero是个数值, 不是布尔值

var someVar = []; //空数组
alert(someVar == false); //结果 true
if (someVar) alert('hello'); //alert语句执行, 所以someVar当作true
```


### [JS Range HTML文档/文字内容选中、库及应用介绍](https://www.zhangxinxu.com/wordpress/2011/04/js-range-html%e6%96%87%e6%a1%a3%e6%96%87%e5%ad%97%e5%86%85%e5%ae%b9%e9%80%89%e4%b8%ad%e3%80%81%e5%ba%93%e5%8f%8a%e5%ba%94%e7%94%a8%e4%bb%8b%e7%bb%8d/)

> selection


### [node环境中使用fluent-ffmpeg每隔一秒视频截图](https://www.zhangxinxu.com/wordpress/2024/04/node-fluent-ffmpeg-screenshot-every-second/)

```js
const ffmpeg = require("fluent-ffmpeg");

// 每间隔2秒截取缩略图
const videoPath = './sources/zhangxinxu.mp4';
console.log('正在获取视频缩略图...');
const time = Date.now();
// 下面是核心执行方法
ffmpeg(videoPath)
    .fps(0.5)
    .size('128x?')
    .save('./temp/thumb-%04d.jpg')
    .on('error', (err) => {
        console.log('获取视频缩略图失败', err);
    })
    .on('end', () => {
        console.log('获取视频缩略图成功，耗时：', (Date.now() - time) / 1000 + 's');
    });
```


### [今天才知道，Web网页也能阻止息屏了](https://www.zhangxinxu.com/wordpress/2024/03/js-screen-wake-lock-api/)

> wakeLock


### [不改变音调情况下Audio音频的倍速合成JS实现](https://www.zhangxinxu.com/wordpress/2024/02/js-audioencoder-backplayrate-audiobuffer/)


### [使用JS快速获取video视频任意位置的缩略图](https://www.zhangxinxu.com/wordpress/2024/01/js-get-video-thumb-poster/)


### [时代变了，该使用原生popover属性模拟下拉了](https://www.zhangxinxu.com/wordpress/2024/01/js-html-popover-dropdown/)

```html
<button popovertarget="imgBook">点击显示图片</button>
<img id="imgBook" popover src="/study/202312/book1.jpg" />
```


### [js中 ||=、&&=、??=、?.、?? 运算符的使用](https://blog.csdn.net/tiven_/article/details/134289431)

```js
let x = 10;
let y = 0;
x || = 5; // x仍为10，因为10被视为真值
y || = 5; // y现在为5，因为0被视为假值

let a = null;
let b = 15;
a && = 10; // a仍为null
b && = 20; // b现在为20

let c = null;
let d;
c ?? = 5; // c现在为5
d ?? = 10; // d现在为10
```


### 1e5

```js
1e5 // 100000
```


### [告别轮询，SSE 流式传输可太香了！](https://juejin.cn/post/7359347999308644390)

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/events', function(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let startTime = Date.now();

    const sendEvent = () => {
        // 检查是否已经发送了10秒
        if (Date.now() - startTime >= 10000) {
            res.write('event: close\ndata: {}\n\n'); // 发送一个特殊事件通知客户端关闭
            res.end(); // 关闭连接
            return;
        }

        const data = {
            message: 'Hello World',
            timestamp: new Date()
        };
        res.write(`data: ${JSON.stringify(data)}\n\n`);

        // 每隔2秒发送一次消息
        setTimeout(sendEvent, 2000);
    };

    sendEvent();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>SSE Example</title>
</head>

<body>
    <h1>Server-Sent Events Example</h1>
    <div id="messages"></div>

    <script>
        const evtSource = new EventSource('/events');
        const messages = document.getElementById('messages');

        evtSource.onmessage = function(event) {
            const newElement = document.createElement("p");
            const eventObject = JSON.parse(event.data);
            newElement.textContent = "Message: " + eventObject.message + " at " + eventObject.timestamp;
            messages.appendChild(newElement);
        };
    </script>
</body>

</html>
```


### [前端跨页面通信：Broadcast Channel](https://www.jianshu.com/p/12bb9acd9165)

```js
const setChannel = new BroadcastChannel('demos');
setChannel.postMessage('要发送消息啦啦啦啦啦啦啦');
setChannel.onmessage = function(e) {

    console.log('接收到消息:', e.data);

    //一大波你要要的操作

};
setChannel..close();
```


### [JavaScript 判断是否为数字的几种方式](https://segmentfault.com/a/1190000044729061)

```js
!isNaN(parseFloat(value)) && isFinite(value);
```


### [重学JS | Proxy与Object.defineProperty的用法与区别](https://juejin.cn/post/6973636618515120165)

陷阱函数|覆写的特性
:-:|:-
get|读取一个值
set|写入一个值
has|in操作符
deleteProperty|Object.getPrototypeOf()
getPrototypeOf|Object.getPrototypeOf()
setPrototypeOf|Object.setPrototypeOf()
isExtensible|Object.isExtensible()
preventExtensions|Object.preventExtensions()
getOwnPropertyDescriptor|Object.getOwnPropertyDescriptor()
defineProperty|Object.defineProperty
ownKeys|Object.keys() Object.getOwnPropertyNames()和Object.getOwnPropertySymbols()
apply|调用一个函数
construct|用new调用一个函数


### [获取多级对象的值](https://vue3.chengpeiquan.com/component.html#%E8%8E%B7%E5%8F%96%E5%A4%9A%E7%BA%A7%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%80%BC)

```js
// 例子比较极端，但在 Vuex 这种大型数据树上，也不是完全不可能存在
const foo = computed(() => {
    // 正常情况下返回需要的数据
    try {
        return store.state.foo3.foo2.foo1.foo
    } catch (e) {
        // 处理失败则返回一个默认值
        return ''
    }
})
```


### [structuredClone](https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone)

> 深拷贝 原生


### [我敢打赌你不知道的十个JavaScript技巧](https://juejin.cn/post/7296755101622878248)


### [localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

> 字符排序


### [Git 代码提交规范，feat、fix、chore 都是什么意思?](https://juejin.cn/post/7374295163625521161)

名字|描述|例子
:-|:-|:-
feat: 新功能（feature）|用于提交新功能。|feat: 增加用户注册功能
fix: 修复 bug|用于提交 bug 修复。|fix: 修复登录页面崩溃的问题
docs: 文档变更|用于提交仅文档相关的修改。|docs: 更新README文件
style: 代码风格变动（不影响代码逻辑）|用于提交仅格式化、标点符号、空白等不影响代码运行的变更。|style: 删除多余的空行
refactor: 代码重构（既不是新增功能也不是修复bug的代码更改）|用于提交代码重构。|refactor: 重构用户验证逻辑
perf: 性能优化|用于提交提升性能的代码修改。|perf: 优化图片加载速度
test: 添加或修改测试|用于提交测试相关的内容。|test: 增加用户模块的单元测试
chore: 杂项（构建过程或辅助工具的变动）|用于提交构建过程、辅助工具等相关的内容修改。|chore: 更新依赖库
build: 构建系统或外部依赖项的变更|用于提交影响构建系统的更改。|build: 升级webpack到版本5
ci: 持续集成配置的变更|用于提交CI配置文件和脚本的修改。|ci: 修改GitHub Actions配置文件
revert: 回滚|用于提交回滚之前的提交。|revert: 回滚feat: 增加用户注册功能


### [异步侦听器问题](https://cn.vuejs.org/guide/essentials/watchers.html#stopping-a-watcher)

```
如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
```

```vue
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```


### [使用一个对象绑定多个 prop](https://cn.vuejs.org/guide/components/props.html#binding-multiple-properties-using-an-object)

```jsx
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
<BlogPost v-bind="post" />
```


### [Boolean 类型转换](https://cn.vuejs.org/guide/components/props.html#boolean-casting)

```jsx
<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />

defineProps({
  disabled: Boolean
})
```


### [v-model 的参数](https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments)

```jsx
<MyComponent v-model:title="bookTitle" />
```


### [动态插槽名](https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names)

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```


### [作用域插槽](https://cn.vuejs.org/guide/components/slots.html#scoped-slots)

```jsx
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>

<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```


### [和响应式数据配合使用](https://cn.vuejs.org/guide/components/provide-inject.html#working-with-reactivity)

```jsx
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```


### [使用 Symbol 作注入名](https://cn.vuejs.org/guide/components/provide-inject.html#working-with-symbol-keys)

```js
// keys.js
export const myInjectionKey = Symbol()

// 在供给方组件中
import {
    provide
} from 'vue'
import {
    myInjectionKey
} from './keys.js'

provide(myInjectionKey, {
    /*
  要提供的数据
*/
});

// 注入方组件
import {
    inject
} from 'vue'
import {
    myInjectionKey
} from './keys.js'

const injected = inject(myInjectionKey)
```


### [鼠标跟踪器示例](https://cn.vuejs.org/guide/reusability/composables.html#mouse-tracker-example)

```html
<script setup>
    import {
        ref,
        onMounted,
        onUnmounted
    } from 'vue'

    const x = ref(0)
    const y = ref(0)

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

```js
// mouse.js
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
    // 被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)

    // 组合式函数可以随时更改其状态。
    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // 通过返回值暴露所管理的状态
    return {
        x,
        y
    }
}
```

```html
<script setup>
    import {
        useMouse
    } from './mouse.js'

    const {
        x,
        y
    } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```


### [缓存实例的生命周期](https://cn.vuejs.org/guide/built-ins/keep-alive.html#lifecycle-of-cached-instance)

```html
<script setup>
    import {
        onActivated,
        onDeactivated
    } from 'vue'

    onActivated(() => {
        // 调用时机为首次挂载
        // 以及每次从缓存中被重新插入时
    })

    onDeactivated(() => {
        // 在从 DOM 上移除、进入缓存
        // 以及组件卸载时调用
    })
</script>
```


### [Teleport 基本用法](https://cn.vuejs.org/guide/built-ins/teleport.html#basic-usage)

> 有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。

```html
<button @click="open = true">Open Modal</button>

<Teleport to="body">
    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
    </div>
</Teleport>
```


### [浏览器内模板编译注意事项](https://cn.vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation)


### [从头开始实现一个简单的路由](https://cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

```html
<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import NotFound from './NotFound.vue'
    const routes = {
        '/': Home,
        '/about': About
    }
    const currentPath = ref(window.location.hash)
    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })
    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
</script>
<template>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
</template>
```


### [SSR vs. SSG](https://cn.vuejs.org/guide/scaling-up/ssr.html#ssr-vs-ssg)


### [Props 稳定性](https://cn.vuejs.org/guide/best-practices/performance.html#props-stability)

> 一个子组件只会在其至少一个 props 改变时才会更新


### [语义化表单](https://cn.vuejs.org/guide/best-practices/accessibility.html#semantic-forms)

> autocomplete='on' 自动填充


### [URL 注入](https://cn.vuejs.org/guide/best-practices/security.html#url-injection)

> sanitize-url


### [动画6方格](https://www.jq22.com/js/a1.html)


### [响应性调试](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging)

> onTrack onTrigger


### [创建 Vnodes](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes)


### [传递插槽](https://cn.vuejs.org/guide/extras/render-function.html#passing-slots)


### [Array.prototype.at()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

> array[array.length - 1]。at() 方法允许使用相对索引，因此上面的示例可以简化为 array.at(-1)。


### [什么，你连一个Node.js脚本都不会写！！！](https://juejin.cn/post/7361687968519700514)

```package.json
type module
```


### [来了来了，scrollend滚动停止事件也支持了](https://www.zhangxinxu.com/wordpress/2024/09/js-scrollend-event/)

```js
window.addEventListener("scrollend", (event) => {
    // 滚动结束
});

element.addEventListener("scrollend", (event) => {
    // 滚动结束
});
```


### [实用的JS对象分组静态方法Object.groupBy()](https://www.zhangxinxu.com/wordpress/2024/09/js-object-groupby/)

```js
const data = [{
    id: 1,
    name: '张三'
}, {
    id: 3,
    name: '李四'
}, {
    id: 4,
    name: '王二'
}, {
    id: 2,
    name: '张三'
}];

const result = Object.groupBy(data, ({
    name
}) => name);

console.log(result);
```


### [app.config.globalProperties](https://cn.vuejs.org/api/application#app-config-globalproperties)

```js
app.config.globalProperties.msg = 'hello'

export default {
    mounted() {
        console.log(this.msg) // 'hello'
    }
}
```


### [21 个 HTML 必备的小技巧](https://juejin.cn/post/7410955755942723624)

```html
<!-- 改进视频展示 -->
<video controls poster="image.png" width="500">
    <source src="video.mp4" type="video/mp4" />
</video>

<!-- 支持多选 -->
<input type=" file" multiple />
<select multiple>
    <option value="java">Java</option>
    <option value="javascript">JavaScript</option>
    <option value="typescript">TypeScript</option>
    <option value="rust">Rust</option>
</select>

<!-- 将文本显示为下标和上标 -->
<input type="file" multiple />
<select multiple>
    <option value="java">Java</option>
    <option value="javascript">JavaScript</option>
    <option value="typescript">TypeScript</option>
    <option value="rust">Rust</option>
</select>

<!-- 设置最大输入长度 -->
<input type="text" maxlength="4">

<!-- 设置最小输入长度 -->
<input type="text" minlength="3">

<!-- 控制拼写检查 -->
<input type="text" spellcheck="true" />

<!-- 优化视频加载 -->
<video src="video.mp4" preload="auto">
    你的浏览器不支持 video 标签。
</video>
```


### [Setup 上下文](https://cn.vuejs.org/api/composition-api-setup#setup-context)

```
attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 attrs.x 或 slots.x 的形式使用其中的属性。此外还需注意，和 props 不同，attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑。
```


### [app.runWithContext()](https://cn.vuejs.org/api/application#app-runwithcontext)


### [useTemplateRef() ](https://cn.vuejs.org/api/composition-api-helpers#usetemplateref)


### [useId() ](https://cn.vuejs.org/api/composition-api-helpers#useid)

> 用于为无障碍属性或表单元素生成每个应用内唯一的 ID。


### [优化 Javascript 以获得乐趣和利润](https://romgrk.com/posts/optimizing-javascript)


### [这13个前端库，帮我在工作中赢得了不少摸鱼时间](https://juejin.cn/post/7373136303180136459#heading-5)

```js
import xss from "xss";
const userInput = '<script>alert("恶意代码");</script><p>这是用户输入的文本内容</p>';
const output = xss(userInput);
console.log(output); // &lt;script&gt;alert("恶意代码");&lt;/script&gt;<p>这是用户输入的文本内容</p>

import copy from 'copy-text-to-clipboard';

button.addEventListener('click', () => {
    copy('复制一些东西');
});
```

```
localforage
支持自动数据类型转换，可以将对象、数组等复杂数据结构转换成适合存储的格式，并在取出数据时自动转换回原始格式。
```

```
vconsole
可以在手机浏览器中实时查看日志、错误信息、网络请求等调试信息，帮助我们快速定位和解决问题。
```


### [watch](https://cn.vuejs.org/api/options-state#watch)

> 这种用法不支持复杂表达式——仅支持由点分隔的路径。如果你需要侦听复杂的数据源，可以使用命令式的 $watch() API。


### [v-bind](https://cn.vuejs.org/api/built-in-directives#v-bind)


### [v-pre](https://cn.vuejs.org/api/built-in-directives#v-pre)

> 跳过该元素及其所有子元素的编译。


### [命名空间组件](https://cn.vuejs.org/api/sfc-script-setup#namespaced-components)

```vue
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```


### [qs.js库的使用](https://juejin.cn/post/7431999633071030283)

> 用于url参数转化：parse和stringify的js库


### [检测用户是否打开了键盘的大写锁定](https://davidwalsh.name/detect-caps-lock)

```js
document.querySelector('input[type=password]').addEventListener('keyup', function(keyboardEvent) {
    const capsLockOn = keyboardEvent.getModifierState('CapsLock');
    if (capsLockOn) {
        // Warn the user that their caps lock is on?
    }
});
```


### [w3c的getModifierState](https://w3c.github.io/uievents/#event-modifier-initializers)

```js
dictionary EventModifierInit: UIEventInit {
    boolean ctrlKey = false;
    boolean shiftKey = false;
    boolean altKey = false;
    boolean metaKey = false;

    boolean modifierAltGraph = false;
    boolean modifierCapsLock = false;
    boolean modifierFn = false;
    boolean modifierFnLock = false;
    boolean modifierHyper = false;
    boolean modifierNumLock = false;
    boolean modifierScrollLock = false;
    boolean modifierSuper = false;
    boolean modifierSymbol = false;
    boolean modifierSymbolLock = false;
};
```


### [Date.prototype.toLocaleString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)

> 以特定于地区的格式显示日期字符串。
> 转化时间的第二种方法


### [Nostalgist](https://github.com/arianrhodsandlot/nostalgist)

> Nostalgist.js 是一个 JavaScript 库，允许您在 Web 浏览器中运行复古游戏机的模拟器，例如 NES 和 Sega Genesis。


### [英文单词朗读基于音素预估时长的JS算法](https://www.zhangxinxu.com/wordpress/2024/12/js-word-speach-split-time-calc/)


### [iframe大小](https://github.com/davidjbradshaw/iframe-resizer)

> iframe-resizer 库旨在消除使用 iframe 的痛点。它将调整您的 iframe 大小以匹配您的内容大小，然后监控 iframe 以确保它始终是完美的大小。


### [x-crawl](https://coder-hxl.github.io/x-crawl/cn/guide/)

>>> x-crawl 是一个灵活的 Node.js AI 辅助爬虫库。灵活的使用方式和强大的 AI 辅助功能，使爬虫工作变得更加高效、智能和便捷。


### [JS Array数组新的with方法，你知道作用吗？](https://www.zhangxinxu.com/wordpress/2025/02/js-array-with/)

```js
const arr = [, '唐探1900', '侠之大者', '蛟龙行动'];
// 结果是 ['哪吒魔童闹海', '唐探1900', '侠之大者', '蛟龙行动']
console.log(arr.with(0, '哪吒魔童闹海'));
```


### [JS Set新支持了intersection, union, difference等方法](https://www.zhangxinxu.com/wordpress/2025/02/js-set-intersection-union-difference/)


### [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

> new Map做遍历


### [Vite - 解决TypeScript中的 `import.meta.glob` 问题](https://juejin.cn/post/7176270537436430397)

```js
const modules: Record < string, {
        [key: string]: any
    } > =
    import.meta.glob('./modules/*.ts', {
        eager: true
    });
// 大伙可以这样写试试，我这里是用的是ts，其他语言的写法可能会有所不同。
```


### [mjs 引入json](https://v8.dev/features/import-attributes)

```js
// main.mjs
//
// New 'with' syntax.
import json from './foo.json'
with {
    type: 'json'
};
console.log(json.answer); // 42
```


### ElementUI校验[Violation] Added non-passive event listener to a scroll-blocking ‘touchmove‘ event. 问题解决

```js
// 修复 ElementUI 的 passive 警告
const originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, listener, options) {
    if (type === 'touchmove' && typeof options === 'object') {
        options.passive = false; // ElementUI 需要阻止默认行为
    }
    return originalAddEventListener.call(this, type, listener, options);
};

//去除谷歌浏览器的scroll、wheel等事件警告
;(function () {
if (typeof EventTarget !== 'undefined') {
let func = EventTarget.prototype.addEventListener
EventTarget.prototype.addEventListener = function (type, fn, capture) {
this.func = func
if (typeof capture !== 'boolean') {
capture = capture || {}
capture.passive = false
}
this.func(type, fn, capture)
}
}
})()
```


### [v-for 中的模板引用](https://cn.vuejs.org/guide/essentials/template-refs#refs-inside-v-for)


### [Document：caretPositionFromPoint() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/caretPositionFromPoint)

```js
function insertBreakAtPoint(e) {
    let range;
    let textNode;
    let offset;

    if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;
    } else if (document.caretRangeFromPoint) {
        // 使用 WebKit 专有回退方法
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
    } else {
        // 两个方法都不支持，什么都不做
        return;
    }
    // 只分割 TEXT_NODE
    if (textNode?.nodeType === 3) {
        let replacement = textNode.splitText(offset);
        let br = document.createElement("br");
        textNode.parentNode.insertBefore(br, replacement);
    }
}

let paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
    paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```


### [您的照片透露了很多私人信息](https://theyseeyourphotos.com/)

> 在本实验中，我们使用 Google Vision API 来查看从单张照片中可以推断出多少关于您的信息。


### [为什么大写字母的二维码比小写字母的二维码小？](https://shkspr.mobi/blog/2025/02/why-are-qr-codes-with-capital-letters-smaller-than-qr-codes-with-lower-case-letters/)


### [最大限度地减少 Node.js 中的堆分配](https://blog.appsignal.com/2022/09/28/minimize-heap-allocations-in-nodejs.html)


### [node执行的内存快照](https://nodejs.cn/api/cli/heapsnapshot_signal_signal.html)

```
$ node --heapsnapshot-signal=SIGUSR2 index.js &
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
node         1  5.5  6.1 787252 247004 ?       Ssl  16:43   0:02 node --heapsnapshot-signal=SIGUSR2 index.js
$ kill -USR2 1
$ ls
Heap.20190718.133405.15554.0.001.heapsnapshot
```


### [Volta](https://volta.jikun.dev/guide/understanding.html)

```
Volta 的工作是管理 JavaScript 命令行工具，如 node、npm、yarn 或作为 JavaScript 包的一部分发布的可执行文件。

与包管理器类似，Volta 会根据当前目录跟踪您正在处理的项目(如果有的话)。Volta 工具链中的工具会自动检测您所处的项目是否使用特定版本的工具，并为您路由到正确的工具版本。
```


### [使用 HTML 标签优化图像<picture>](https://jfhr.me/optimizing-images-with-the-html-picture-tag/)

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Image">
</picture>
```


### [json转ts](https://xietiansheng.github.io/json-to-any-web/)

> json-to-any-web 是一个在线工具，可以将 JSON 数据转换为 TypeScript 类型定义。
> 它支持将 JSON 数据转换为 TypeScript 接口、类型别名、联合类型、枚举类型等多种类型定义。


### [vue-js-cron](https://github.com/abichinger/vue-js-cron)

> 一个基于 Vue.js 的 cron 表达式编辑器。
> 支持手动输入 cron 表达式，也支持通过可视化的方式来编辑 cron 表达式。
> 支持多种语言，包括中文、英文、日语、法语、德语、意大利语、西班牙语、葡萄牙语、俄语、韩语、日语、荷兰语、波兰语、瑞典语、土耳其语、乌克兰语    等。


### [cron-parser](https://github.com/harrisiirak/cron-parser)

> 一个用于解析 cron 表达式的 JavaScript 库。
> 支持解析 cron 表达式，并返回一个可迭代的对象，用于遍历所有符合 cron 表达式的日期。


### [TypeScript 导入 JSON Module --resolveJsonModule](https://www.cnblogs.com/wx18638101223/p/16146075.html)
```ts
// typings.d.ts

declare module '*.json' {
    const value: any;
    export default value;
}
```
```
在项目的根目录中找到的tsconfig.json文件，然后添加一个新行：“resolveJsonModule”：true，

需要在tsconfig.json文件，然后添加：“esModuleInterop”: true,就没有问题了。
```


### [templating](https://kittygiraudel.com/2022/09/30/templating-in-html/)
```js
const template = document.querySelector('#id-of-template')
const content = template.content.cloneNode(true)

container.append(content)
```

### [PicHoro](https://github.com/Kuingsmile/PicHoro)

> PicHoro 是一款基于 Flutter 的手机端云存储平台/图床管理和文件上传/下载工具，最新版本 V3.0.1。

### [推荐站点](https://github.com/zhaoolee/ins?tab=readme-ov-file#%E6%9C%81%E5%AE%A2)

### [锻炼推荐](https://workout.cool/)

### [能够快速构建产品在公司的任何阶段都是一个巨大的优势](https://www.paralect.com/blog/post/development-process-startup-founders-should-use-to-ship-features-weirdly-fast)

### [利用js实现文本转语音](https://jsdev.space/tts-sentence-reader/)

### [Pip-Helper - 画中画助手](https://github.com/yaolifeng0629/Pip-Helper/blob/main/README.zh.md)

### [您只需使用 HTML 标签即可访问用户的相机](https://austingil.com/html-capture-attribute/)

### [Details 元素样式的两个问题以及如何解决它们](https://css-tricks.com/two-issues-styling-the-details-element-and-how-to-solve-them/)

> details summary
> 鼠标样式 和 箭头和文字错行

### [二阶思维](https://fs.blog/second-order-thinking/)

```
1.总是问自己，"然后呢？
2.跨时间思考 — 10 分钟后的后果是什么？10 个月？10 年？
3.创建如上图第二张图所示的模板，其中包含 1 阶、2 阶和 3 阶结果。确定您的决定，仔细考虑，并写下后果。如果您定期复习这些，您将能够帮助校准您的思维。
4.如果您用它来思考业务决策，请问问自己生态系统的重要部分可能会做出哪些反应。员工将如何处理这个问题？我的竞争对手可能会怎么做？我的供应商呢？监管机构呢？通常，答案几乎没有影响，但您希望在做出决定之前了解直接和二阶后果。
```

### [本地 Office 网页版](https://github.com/ranuts/document)

> 本地 Office 网页版，支持 Office 文档在线预览、编辑、下载、分享等功能。

### [简单的 Chromium AI](https://github.com/kstonekuan/simple-chromium-ai)

> 简单的 Chromium AI，支持 Chromium 浏览器的 AI 助手功能。

### [您需要 4 种颜色](https://www.iamsajid.com/colors/)

> 2种用于文本和背景（主要和次要颜色）。1种强调色以突出重要元素（数字4和按钮）。以及可选的第三色，以增加一点个性（色相滑块）。

### [pixpin](https://pixpin.cn/docs/start/what-is-pixpin)

> pixpin 是一个基于 AI 的图片编辑工具。取字

### [速查表](https://wangchujiang.com/reference/index.html)

### [Emmet语法](https://juejin.cn/post/6844903456130465805)

### [写代码推荐](https://massimo-nazaria.github.io/spaghetti-code.html)

```
R1.切勿使用全局变量
R2.声明单一用途变量
R3.声明接近其用途的变量
R4.保持代码块较小
R5.使用接近声明的变量
R6.使用不超过两个嵌套级别
```

### [JS正则新特性：安全过滤RegExp.escape方法](https://www.zhangxinxu.com/wordpress/2025/07/js-regexp-escape/)

> RegExp escape

### [工具自荐微信小程序在文字中隐藏任意文字、图片、视频的小程序（悄悄话工具）](https://github.com/ruanyf/weekly/issues/2634)

### [🚀 WebCurl - 极简网页版API调试神器](https://github.com/o8oo8o/WebCurl)

### [Kite](https://kite.kagi.com/ccc74663-a271-43a3-b54d-afd23fb936cb/business?data_lang=zh-Hans)

> 看新闻

### [nesbox](https://nesbox.xianqiao.wang/)

> 游戏

### 谷歌 无障碍 实时字幕

### [Python中使用uv创建环境及原理详解](https://blog.csdn.net/xinjichenlibing/article/details/148138997)

### [如何维护一个开源项目](https://xuanwo.io/reports/2022-30/)

> 马太定律

### [《唐纵日记》摘录](https://www.ruanyifeng.com/blog/2025/07/tangzong-diary.html)

### [Lumma](https://github.com/geosmart/lumma)

> 写日记

### [github写mackdown技巧](https://github.com/TheOdinProject/css-exercises/blob/main/README.md)
> [!IMPORTANT]
> github写mackdown技巧

### [emoji混合](https://tikolu.net/emojimix)

### [emoji厨房](https://emojikitchen.dev/)

### [emoji供应商](https://emoji.supply/kitchen/)

### [一个 GitHub Action，用于创建存储库的 SVG 图。在文章中阅读更多内容。](https://github.com/githubocto/repo-visualizer)

### [HTML 中的 popover 提示](https://www.zhangxinxu.com/wordpress/2025/07/html-popover-hint/)

```html
<button popovertarget="datalist">点击我 ▼</button>
<div id="datalist" popover>
    <option>列表1</option>
    <option>列表2</option>
</div>
<!-- 轻提示 -->
<button class="hint" onmouseover="hint.showPopover();" onmouseout="hint.hidePopover();">?</button>
<div id="hint" popover="hint">我是轻提示文字内容</div>
```

```css
[popovertarget="datalist"] {
    anchor-name: --button-anchor;
}

#datalist {
    position-anchor: --button-anchor;
}

[popover] {
    left: anchor(left);
    top: calc(anchor(bottom) + 5px);
    right: auto;
    bottom: auto;
}

.hint {
    anchor-name: --hint-anchor;
}

#hint {
    background: #0009;
    color: #fff;
    position-anchor: --hint-anchor;
}
```

### 页面关闭时请求
> sendBeacon fetch + keepalive

### [蒙特卡洛模拟](https://towardsdev.com/good-beginner-exercise-for-improving-programming-monte-carlo-simulation-of-the-approximation-of-838dc17eb6bc)

> 计算圆周率 Π

```py
import random
import sys
import time
import matplotlib.pyplot as plt

def get_pi(n, isShow=True):
    start = time.monotonic()
    o_x, o_y = [], []
    i_x, i_y = [], []
    for _ in range(n):
        x, y = random.random(), random.random()
        if (x**2 + y**2) <= 1:
            i_x.append(x)
            i_y.append(y)
        else:
            o_x.append(x)
            o_y.append(y)
    pi = len(i_x) * 4 / len(o_x + i_x)
    print("pi=", pi)
    end = time.monotonic()
    print(f"${end - start:.4f}秒")

    if isShow:
        plt.figure(figsize=(8, 8))
        plt.scatter(o_x, o_y, color="blue", label="Outside circle")
        plt.scatter(i_x, i_y, color="red", label="Inside circle")
        plt.legend()
        plt.title(f"pi={pi}, n={n}")
        plt.show()

if __name__ == "__main__":
    get_pi(int(sys.argv[1]))
```

### [那些你从不使用的 HTML 属性](https://www.smashingmagazine.com/2022/03/html-attributes-you-never-use/)
```html
<input type="text" enterkeyhint="done">
enter,  输入，
done,  完成，
go,  去，
next,  接下来，
previous,  上一篇，
search,  搜索，
send.  发送。
```

### [简历警察 🕵️‍♂️](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FitMrBoy%2FresumePolice)

### [JavaScript → Python](https://langshift.dev/)

### [a2 – b2 = (a + b)(a – b)](https://www.futilitycloset.com/2024/12/15/tidy-2/)

### [我刚刚学会的三个 Markdown 技巧](https://www.stefanjudis.com/blog/three-markdown-tricks-i-just-learned/)
This text is ***cursive and bold***. Here are escaped backticks: `` `foo` ``.

### [LaTeX 速成训练器](https://pipeak.share4y.cn/)

### [在 Markdown 中渲染数学表达式](https://github.blog/changelog/2022-05-19-render-mathematical-expressions-in-markdown/)

### [用新的 HTML 对话框元素替换 JavaScript 对话框](https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/)

### [我编程 20 年的指导原则](https://www.jitao.tech/posts/my-guiding-principles-after-20-years-of-programming)

### [为了更深入理解前端部署](https://q.shanyue.tech/deploy/simple-intro)

### 检查用户输入是否为有效数字

```js
// 检查用户输入是否为有效数字
function isValidNumber(input) {
    return Number.isFinite(Number(input));
}

// 示例
console.log(isValidNumber('123')); // true
console.log(isValidNumber('abc')); // false（转换为NaN）
console.log(isValidNumber('Infinity')); // false
```

### [2025 年的现代 Node.js 模式](https://kashw1n.com/blog/nodejs-2025/)

### [文件的黑名单（.gitignore）转变为白名单。你将你的.gitignore 更改为这样：](https://rgbcu.be/blog/gitignore/)

```
*

!.gitignore

# whitelist 'src' directories and their children, regardless of place
!src/
!src/**/
!src/**/*.rs
!Cargo.{toml,lock}

# whitelist root 'pysrc' directory
!/pysrc/
!/pysrc/*.py
!pyproject.toml
!poetry.lock

!/cmd/
!/cmd/*.go
!main.go
!go.{mod,sum}

!/docs/
!/docs/*.md
```

### [PanSou 网盘搜索API](https://github.com/fish2018/pansou)

### [口语写作好帮手：两个语料查询网站](https://sspai.com/post/71962)

> Ludwig Linggle

### [三角函数](https://www.mathpages.com/home/kmath277/kmath277.htm)

> 图中符号α代表的角度是多少？

### [通过验证码获取您的浏览历史](https://varun.ch/posts/history)

> 总之，:visited 伪类对上网的人存在隐私风险。作为用户，你可以通过在浏览器中禁用访问链接高亮来阻止网页跟踪你的历史记录。

### [CTFever](https://ctfever.uniiem.com/)

> 这是为 CTF 发烧者准备的工具套件，助你过关斩将、攻克难关。目前基础功能和一部分高级功能已经完成

### [凯文 · 凯利 70 岁生日的 103 条人生建议](https://mp.weixin.qq.com/s/LvH3PUDwea4ZsxsbZWRuFg)

```
About 99% of the time, the right time is right now.
99% 情况下，最佳时机就是现在。

No one is as impressed with your possessions as you are.
没人会像你一样，对你的财产印象深刻。

Don't ever work for someone you don't want to become.
不要为那种你不想成为的人工作。

Cultivate 12 people who love you, because they are worth more than 12 million people who like you.
12 个爱你的人，比 12,000,000 个喜欢你的人更值得。

Don't keep making the same mistakes; try to make new mistakes.
别犯同样的错；试一些新错。

If you stop to listen to a musician or street performer for more than a minute, you owe them a dollar.
如果你不停下一分钟来听听音乐家或街头表演者的演奏，你就欠他们一块钱。

Anything you say before the word "but" does not count.
"但是"之前的任何话都不算数。

When you forgive others, they may not notice, but you will heal. Forgiveness is not something we do for others; it is a gift to ourselves.
当你原谅一个人，对方未必知道，但你会自愈。原谅，不是为了别人，那是给自己的礼物。

Courtesy costs nothing. Lower the toilet seat after use. Let the people in the elevator exit before you enter. Return shopping carts to their designated areas. When you borrow something, return it better shape (filled up, cleaned) than when you got it.
变礼貌不要钱。用完马桶后放下坐垫。让别人先出电梯。将购物车推到指定位置。还东西时，让它比借来时更好（填满、干净）。

Whenever there is an argument between two sides, find the third side.
但凡有两方在争论，去找第三方。

Efficiency is highly overrated; Goofing off is highly underrated. Regularly scheduled sabbaths, sabbaticals, vacations, breaks, aimless walks and time off are essential for top performance of any kind. The best work ethic requires a good rest ethic.
效率被过度高估，而玩乐则被过度低估。定期安排的安息日、公休日、假期、休息日、漫无目的的散步和休息时间对于任何类型的顶级业绩都必不可少。最好的工作道德需要良好的休息道德。

When you lead, your real job is to create more leaders, not more followers.
领导的真正工作是培养更多领导，而不是粉丝。

Criticize in private, praise in public.
私下批评，公开表扬。

Life lessons will be presented to you in the order they are needed. Everything you need to master the lesson is within you. Once you have truly learned a lesson, you will be presented with the next one. If you are alive, that means you still have lessons to learn.
生活会不断给你教训。你只能靠自己掌握它。一旦你真正学到教训，你就会得到下一个。还活着，意味着还有教训在等待。

It is the duty of a student to get everything out of a teacher, and the duty of a teacher to get everything out of a student.
从老师身上学得一切是学生的责任，从学生身上挖掘一切是老师的责任。

If winning becomes too important in a game, change the rules to make it more fun. Changing rules can become the new game.
如果在游戏中获胜太重要，那就更改规则来让它更有趣。改变规则可以收获新游戏。

Ask funders for money, and they'll give you advice; but ask them for advice and they'll give you money.
问投资者要钱，他们会给你建议。但问他们建议，他们会给你钱。

Productivity is often a distraction. Don't aim for better ways to get through your tasks as quickly as possible, rather aim for better tasks that you never want to stop doing.
效率常常会分散注意力。别找那种可以快速完成任务的更好的方法，而是找那种你永远不会不想做的更好的任务。

Immediately pay what you owe to vendors, workers, contractors. They will go out of their way to work with you first next time.
供应商、工人、承包商的钱要马上付。下次他们会第一个跟你合作。

The biggest lie we tell ourselves is "I don't need to write this down because I will remember it."
我们跟自己说过最大的谎言是"我不需要记下来，我记得住。"

Your growth as a conscious being is measured by the number of uncomfortable conversations you are willing to have.
作为一个有意识的人，你的成长由那些让你不舒服但愿意进行的对话的数量所决定。

Speak confidently as if you are right, but listen carefully as if you are wrong.
如果你是对的，你就自信说，但如果你是错的，你要听仔细。

Handy measure: the distance between your fingertips of your outstretched arms at shoulder level is your height.
方便的测量方法：把两个手臂伸直，与肩同高，两边指尖之间的长度就是你的身高。

The consistency of your endeavors (exercise, companionship, work) is more important than the quantity. Nothing beats small things done every day, which is way more important than what you do occasionally.
付出（锻炼、陪伴、工作）的连续性比数量更重要。日拱一卒，比偶尔为之更重要。

Making art is not selfish; it's for the rest of us. If you don't do your thing, you are cheating us.
搞艺术并不自私，那是为了大家；如果你不搞，那是在欺骗大家。

Never ask a woman if she is pregnant. Let her tell you if she is.
永远不要问一个女人是不是怀孕了。如果她怀孕了，让她自己告诉你。

Three things you need: The ability to not give up something till it works, the ability to give up something that does not work, and the trust in other people to help you distinguish between the two.
你需要三样东西：不奏效就不放弃的毅力、不奏效也敢放弃的魄力，以及，对一个能够帮你分辨两者的人的信任。

When public speaking, pause frequently. Pause before you say something in a new way, pause after you have said something you believe is important, and pause as a relief to let listeners absorb details.
公开演讲时，频繁暂停一下。换新方式说之前，暂停一下；说了重点之后，暂停一下。把暂停作为一种缓冲，让观众吸收细节。

There is no such thing as being "on time". You are either late or you are early. Your choice.
没有"准时"一说。要么早，要么晚。你自己选。

Ask anyone you admire: Their lucky breaks happened on a detour from their main goal. So embrace detours. Life is not a straight line for anyone.
问问你钦佩的人你就知道，他们的幸运发生在远离主要目标的弯道上。所以要拥抱弯路。任何人的生活都不会一帆风顺。

The best way to get a correct answer on the internet is to post an obviously wrong answer and wait for someone to correct you.
获得一个正确答案的最佳方法是发布一个明显错误的答案，然后等待别人来纠正你。

You'll get 10x better results by elevating good behavior rather than punishing bad behavior, especially in children and animals.
通过提升好行为而不是惩罚坏行为，你会得到 10 倍良效，特别是在儿童和动物身上。

Spend as much time crafting the subject line of an email as the message itself because the subject line is often the only thing people read.
花同样多的时间来打磨电子邮件标题，因为那往往是人们阅读的唯一内容。

Don't wait for the storm to pass; dance in the rain.
别等待暴风雨过去。在雨中跳舞吧。

When checking references for a job applicant, employers may be reluctant or prohibited from saying anything negative, so leave or send a message that says, "Get back to me if you highly recommend this applicant as super great." If they don't reply take that as a negative.
在检查求职者的推荐信时，雇主可能不愿意或不能说任何负面东西，所以会这么说："如果你认为这位求职者超级棒，强烈推荐，请回信。" 如果他们不回，可以当作一种否定。

Use a password manager: Safer, easier, better.
用一个密码管理软件吧，更安全、更简单、更好用。

Half the skill of being educated is learning what you can ignore.
有一半教育技能是学习你可以忽略什么。

The advantage of a ridiculously ambitious goal is that it sets the bar very high so even in failure it may be a success measured by the ordinary.
一个荒谬但雄心勃勃的目标的好处是，它把标准定得如此之高，即使失败，在普通人眼里也是成功。

A great way to understand yourself is to seriously reflect on everything you find irritating in others.
了解自己的一个好方法是认真反思别人身上令你讨厌的一切东西。

Keep all your things visible in a hotel room, not in drawers, and all gathered into one spot. That way you'll never leave anything behind. If you need to have something like a charger off to the side, place a couple of other large items next to it, because you are less likely to leave 3 items behind than just one.
在酒店房间里，把你所有的东西都集中放在一个显眼的地方，而不要放在抽屉里。这样你就不会落下任何东西。如果你需要把充电器之类的东西放在一边，就在旁边放几件其它大物件，因为你留下三件物品的可能性比只留下一件要小。

Denying or deflecting a compliment is rude. Accept it with thanks, even if you believe it is not deserved.
拒绝或回避赞美是不礼貌的。即使你认为它不值得，也要感恩接受。

Always read the plaque next to the monument.
始终阅读纪念碑旁边的牌匾。

When you have some success, the feeling of being an imposter can be real. Who am I fooling? But when you create things that only you — with your unique talents and experience — can do, then you are absolutely not an imposter. You are the ordained. It is your duty to work on things that only you can do.
当你有一些成功的时候，作为一个冒牌货的感觉可能是真实的——我在愚弄谁呢？但当你创造出只有你——以你独特的才能和经验——才能做到的事情时，你绝对不是冒牌货。你是受命者。从事只有你能做的事情是你的职责。

What you do on your bad days matters more than what you do on your good days.
你在坏日子里做的事，比在好日子里做的事更重要。

Make stuff that is good for people to have.
做一些对人们有用的东西。

When you open paint, even a tiny bit, it will always find its way to your clothes no matter how careful you are. Dress accordingly.
当你要用颜料，哪怕是一丁点，无论你多么小心，它总会沾到你的衣服。穿好防护。

To keep young kids behaving on a car road trip, have a bag of their favorite candy and throw a piece out the window each time they misbehave.
要让小朋友在汽车公路旅行时保持良好的行为习惯，可以准备一袋他们最喜欢的糖果，每次他们行为不端时就往窗外扔一块。

You cannot get smart people to work extremely hard just for money.
你不可能让聪明人为了钱而 996。

When you don't know how much to pay someone for a particular task, ask them "what would be fair" and their answer usually is.
当你不知道该为某项任务付给某人多少钱时，问他们"怎样才公平"，他们的回答通常是（？）。

90% of everything is crap. If you think you don't like opera, romance novels, TikTok, country music, vegan food, NFTs, keep trying to see if you can find the 10% that is not crap.
90% 的东西都是垃圾。如果你认为自己不喜欢歌剧、言情小说、TikTok、乡村音乐、素食、NFT，请继续尝试，看看能否找到那不是垃圾的 10%。

You will be judged on how well you treat those who can do nothing for you.
你会怎样对待那些不能为你做什么的人？人们将据此评价你。

We tend to overestimate what we can do in a day, and underestimate what we can achieve in a decade. Miraculous things can be accomplished if you give it ten years. A long game will compound small gains to overcome even big mistakes.
我们往往高估自己一天能做的事，而低估自己十年能取得的成就。十年时间可以完成奇迹般的事情。在一个漫长的游戏里，让小收益滚雪球也能抵消大错误。

Thank a teacher who changed your life.
感谢改变你人生的老师。

You cant reason someone out of a notion that they didn't reason themselves into.
你不能从一个他们没有自己推理的概念中推理出一个人。

Your best job will be one that you were unqualified for because it stretches you. In fact only apply to jobs you are unqualified for.
你最好的工作将是一份你不够资格做的工作，因为它能使你得到锻炼。事实上，你应该申请你还不够资格的工作。

Buy used books. They have the same words as the new ones. Also libraries.
买二手书。它们有和新书一样的文字。或去图书馆借。

You can be whatever you want, so be the person who ends meetings early.
你可以成为你想成为的任何人，所以，做那个提前结束会议的人。

A wise man said, "Before you speak, let your words pass through three gates. At the first gate, ask yourself, 'Is it true?' At the second gate ask, 'Is it necessary?' At the third gate ask, 'Is it kind?'"
一位智者曾说，在你说出想法之前，让想法先走三道门。在第一道门，问自己："这是真的？"在第二道门问："有必要？"在第三道门则问："它仁慈吗？"

Take the stairs.
走楼梯。

What you actually pay for something is at least twice the listed price because of the energy, time, money needed to set it up, learn, maintain, repair, and dispose of at the end. Not all prices appear on labels. Actual costs are 2x listed prices.
你为某样东西实际支付的费用至少是标价的两倍，因为还需要花费精力、时间、金钱来设置、学习、维护、修理、善后。不是所有价格都写在价标上。实价会是标价的 2 倍。

When you arrive at your room in a hotel, locate the emergency exits. It only takes a minute.
下榻旅馆后，看看紧急出口在哪儿。那只要一会儿。

The only productive way to answer "what should I do now?" is to first tackle the question of "who should I become?"
要回答"我现在该干嘛"的最高效方式是先搞清楚"我想成为怎样的人"。

Average returns sustained over an above-average period of time yield extraordinary results. Buy and hold.
在高于平均水平的时间里，持续的平均回报会产生非凡结果。买入并持有。

It's thrilling to be extremely polite to rude strangers.
对粗鲁的陌生人极其礼貌是一种魄力。

It's possible that a not-so smart person, who can communicate well, can do much better than a super smart person who can't communicate well. That is good news because it is much easier to improve your communication skills than your intelligence.
一个不太聪明的人，若能好好沟通，有可能比一个超级聪明但不能好好沟通的人做得更好。这是个好消息，因为提高沟通能力比提高智力容易得多。

Getting cheated occasionally is the small price for trusting the best of everyone, because when you trust the best in others, they generally treat you best.
相信每个人的好会有小代价——偶尔受骗。因为当你信任每个人的好，他们一般也会对你最好。

Art is whatever you can get away with.
艺术是让你逃脱一切的避风港。

For the best results with your children, spend only half the money you think you should, but double the time with them.
要想在孩子身上取得最好的效果，你可以只花一半你认为应该花的钱，但要花双倍的时间陪伴他们。

Purchase the most recent tourist guidebook to your home town or region. You'll learn a lot by playing the tourist once a year.
每年买一本你家乡的最新旅游指南并做一次游客，你会学到很多。

Don't wait in line to eat something famous. It is rarely worth the wait.
不要排队吃网红餐。很少值得。

To rapidly reveal the true character of a person you just met, move them onto an abysmally slow internet connection. Observe.
要迅速了解一个你刚认识的人的真实性格，带对方去一个网络慢得不能再慢的地方，然后观察。

Prescription for popular success: do something strange. Make a habit of your weird.
受欢迎的成功处方：做一些奇怪的事。让怪异成为一种习惯。

Be a pro. Back up your back up. Have at least one physical backup and one backup in the cloud. Have more than one of each. How much would you pay to retrieve all your data, photos, notes, if you lost them? Backups are cheap compared to regrets.
高阶做法：做双重备份。至少要有一个物理备份和一个云端备份，并且各有备选方案。如果丢失了所有数据、照片、笔记，你会花多少钱来找回它们？与遗憾相比，备份很便宜。

Don't believe everything you think you believe.
不要相信你认为自己相信的一切东西。

To signal an emergency, use the rule of three; 3 shouts, 3 horn blasts, or 3 whistles.
要发出紧急信号，使用 3 次原则：喊叫 3 次、鸣笛 3 次或吹 3 次口哨。

At a restaurant do you order what you know is great, or do you try something new? Do you make what you know will sell or try something new? Do you keep dating new folks or try to commit to someone you already met? The optimal balance for exploring new things vs exploiting them once found is: 1/3. Spend 1/3 of your time on exploring and 2/3 of your time on deepening. It is harder to devote time to exploring as you age because it seems unproductive, but aim for 1/3.
在餐厅，你是点你知道的好东西，还是尝试新东西？你是做你知道会卖的东西还是尝试新东西？你是继续和新朋友约会，还是试着对已经认识的人做出承诺？探索新事物还是继续深入，最佳平衡点是 1/3。1/3 时间用于探索，2/3 时间用于深入。随着年龄增长，花时间探索比较困难，因为这似乎无益，但最好有 1/3。

Actual great opportunities do not have "Great Opportunities" in the subject line.
真正的好机会，不会太显而易见。

When introduced to someone make eye contact and count to 4. You'll both remember each other.
被介绍时，要与对方眼神接触并数 4 秒。这样你们都会记住对方。

Take note if you find yourself wondering "Where is my good knife? Or, where is my good pen?" That means you have bad ones. Get rid of those.
如果你发现自己在找那把好刀或好笔，说明它们并不好。扔掉它们。

When you are stuck, explain your problem to others. Often simply laying out a problem will present a solution. Make "explaining the problem" part of your troubleshooting process.
当你不解，向别人解释你的问题。通常情况下，简单地摆出问题就能得到解决方案。让"解释问题"成为你解决麻烦过程的一部分。

When buying a garden hose, an extension cord, or a ladder, get one substantially longer than you think you need. It'll be the right size.
买花园水管、延长线或梯子时，买一个比你需要的还长的。那才是正确尺寸。

Don't bother fighting the old; just build the new.
不要费力与旧事物作斗争。建立新事物就好了。

Your group can achieve great things way beyond your means simply by showing people that they are appreciated.
只需向你的团队表达感激之情，他们就能取得超出你能力范围的伟大成就。

When someone tells you about the peak year of human history, the period of time when things were good before things went downhill, it will always be the years of when they were 10 years old — which is the peak of any human's existence.
当有人告诉你她/他的人生高峰在哪一年，那总是他们 10 岁的时候——那是所有人的人生高峰。

You are as big as the things that make you angry.
让你生气的事情有多大，你的心胸就有多大。

When speaking to an audience it's better to fix your gaze on a few people than to "spray" your gaze across the room. Your eyes telegraph to others whether you really believe what you are saying.
演讲时，把目光固定在几个人身上，比把目光洒满整个房间要好。你的眼睛会告诉别人你是否真的相信你所说的话。

Habit is far more dependable than inspiration. Make progress by making habits. Don't focus on getting into shape. Focus on becoming the kind of person who never misses a workout.
习惯远比灵感更可靠。通过养成习惯来取得进步。不要把注意力放在塑身上，而要专注于成为那种从不错过锻炼的人。

When negotiating, don't aim for a bigger piece of the pie; aim to create a bigger pie.
谈判时，不要把目标定在一块更大的蛋糕上，而是定在创造一个更大的蛋糕上。

If you repeated what you did today 365 more times will you be where you want to be next year?
如果你把今天所做之事重复 365 次，明年你会获得你想要的吗？

You see only 2% of another person, and they see only 2% of you. Attune yourselves to the hidden 98%.
你只看到一个人的 2%，他们也只看到你的 2%。让你自己与那隐藏的 98% 调和。

Your time and space are limited. Remove, give away, throw out things in your life that don't spark joy any longer in order to make room for those that do.
你的时间和空间是有限的。清除、放弃、扔掉生活中不再带来快乐的东西，以为那些真正带来快乐的东西腾出空间。

Our descendants will achieve things that will amaze us, yet a portion of what they will create could have been made with today's materials and tools if we had had the imagination. Think bigger.
我们的后代将取得令我们惊奇的成就，然而，如果我们有足够的想象力，他们的一部分创造可以基于今天的材料和工具来实现。想远一点。

For a great payoff be especially curious about the things you are not interested in.
为了获得巨大回报，要对自己不感兴趣的事情特别好奇。

Focus on directions rather than destinations. Who knows their destiny? But maintain the right direction and you'll arrive at where you want to go.
专注于方向而不是目的地。谁知道自己终将走向哪里呢。保持正确的方向，你就会到达你想去的地方。

Every breakthrough is at first laughable and ridiculous. In fact if it did not start out laughable and ridiculous, it is not a breakthrough.
每一个突破，一开始都令人觉得好笑、荒谬。事实上，如果它一开始不是这样，就不会是突破。

If you loan someone $20 and you never see them again because they are avoiding paying you back, that makes it worth $20.
如果你借给别人 20 块钱，而对方因为不想还钱所以不想见你，这 20 块钱就花得很值。

Copying others is a good way to start. Copying yourself is a disappointing way to end.
模仿别人是一种好的开始方式。重复自己却是一种令人失望的结束方式。

The best time to negotiate your salary for a new job is the moment AFTER they say they want you, and not before. Then it becomes a game of chicken for each side to name an amount first, but it is to your advantage to get them to give a number before you do.
为一份新工作谈判薪水的最佳时机是在他们说要你之后，而不是之前。虽然这变成了谁先说就谁获利的鸡肋游戏，但让他们在你之前给出一个数字对你是有利的。

Rather than steering your life to avoid surprises, aim directly for them.
与其避开生活中的意外，不如直接瞄准它们。

Don't purchase extra insurance if you are renting a car with a credit card.
如果你用信用卡租车，就不要购买额外保险。

If your opinions on one subject can be predicted from your opinions on another, you may be in the grip of an ideology. When you truly think for yourself your conclusions will not be predictable.
如果你对一个问题的看法可以从你对另一个问题的看法中预测出来，你可能被一种意识形态控制了。当你真正为自己思考，你的结论不会被预测。

Aim to die broke. Give to your beneficiaries before you die; it's more fun and useful. Spend it all. Your last check should go to the funeral home and it should bounce.
争取死时千金散尽。死前给你的受益人，这更有趣，更有用。花光所有的钱吧，你的最后一张支票应该交给殡仪馆，而且应该跳票。

The chief prevention against getting old is to remain astonished.
防止变老的主要方法是保持惊奇。
```

### [找出哪些 JavaScript 变量正在泄露到全局作用域](https://mmazzarolo.com/blog/2022-02-14-find-what-javascript-variables-are-leaking-into-the-global-scope/)

```
创建一个可丢弃的 iframe，将其指向 about:blank （以确保 window 对象处于干净状态）。
检查 iframe window 对象并存储其全局变量名。
移除 iframe。
```

```js
(function() {
    // Grab browser's default global variables.
    const iframe = window.document.createElement("iframe");
    iframe.src = "about:blank";
    window.document.body.appendChild(iframe);
    const browserGlobals = Object.keys(iframe.contentWindow);
    window.document.body.removeChild(iframe);

    // Get the global variables added at runtime by filtering out the browser's
    // default global variables from the current window object.
    const runtimeGlobals = Object.keys(window).filter((key) => {
        const isFromBrowser = browserGlobals.includes(key);
        return !isFromBrowser;
    });

    console.log("Runtime globals", runtimeGlobals);
})();
```

### [3d东京](https://minitokyo3d.com/)

### Chrome 浏览器的离线翻译插件，基于浏览器新的 Translator API 和 Language Detector API，不用网络也能翻译。

> Translator Language Detector

### [vue2中使用自定义指令实现el-table虚拟列表](https://juejin.cn/post/7459039610396803110)

### [umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿，编辑表格卡顿问题](https://github.com/popo-fishes/umy-ui)

### [使用文件系统访问 API 入门](https://css-tricks.com/getting-started-with-the-file-system-access-api/)

```js
let fileHandle;

document.querySelector(".pick-file").onclick = async () => {
    [fileHandle] = await window.showOpenFilePicker();

    const file = await fileHandle.getFile();
    const content = await file.text();

    return content;
};
```

### [pkg](https://github.com/vercel/pkg)

> 这个命令行界面使您能够将您的 Node.js 项目打包成一个可执行文件，即使在没有安装 Node.js 的设备上也能运行。

### [地图edia](https://mapedia.cc/view/5d12cb947706814e12ba5e3b449910b1)

> 孔子周游列国

### [你想了解哪个仓库？](https://deepwiki.com/)

### [VideoAdGuard - B站视频植入广告检测器](https://github.com/Warma10032/VideoAdGuard)

### [卫星图](https://rammb-slider.cira.colostate.edu/?sat=himawari&sec=full_disk&x=11136&y=11296&z=0&angle=0&im=60&ts=3&st=0&et=0&speed=130&motion=loop&p%5B0%5D=geocolor&opacity%5B0%5D=1&pause=20250923020000&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider&draw_color=FFD700&draw_width=6&map=1&lat=0)

### [Tesseract-OCR Windows 64-bit 5.5.0 安装与使用指南](https://blog.csdn.net/gs80140/article/details/148138997)

### [你最大的客户可能是最大的瓶颈](https://densumes.dev/blog/fair-queue/)
```
当消息到达时（插入操作）：
我们将消息存储在专门为该特定客户端准备的队列中
我们检查该客户端的 ID 是否已经在我们的轮询调度器中
如果他们已经在轮转中，我们就完成了。他们会得到他们的机会
如果它们是新的，我们将它们的客户端 ID 添加到轮询队列的末尾

当工作准备好处理（读操作）时：
我们从我们的轮询调度器中获取下一个客户 ID
我们前往该客户的专用队列并获取它们的一条消息
处理完成后，我们检查他们是否还有更多工作等待
如果他们的队列是空的，他们自然会退出轮换
如果他们还有消息，我们将他们的客户端 ID 重新放到队伍的末尾
```

### [paddleOCR理解及识别手写体，手写公式，表格](https://blog.csdn.net/m0_68926749/article/details/134843387)
```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddlepaddle
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddleocr
```
### [通用OCR产线使用教程](https://www.paddleocr.ai/latest/version3.x/pipeline-usage/OCR.html#422)

### [浏览器指纹检测器](https://fingerprint.goldenowl.ai/)

> 该工具旨在揭示您在浏览互联网时共享的数据，并通过自定义您授予的权限来帮助您加强隐私保护。它不使用 cookies，也不收集、存储或传输任何个人信息。它的唯一目的是让您意识到潜在隐私风险，展示网站可以访问哪些数据，并指导您如何防范不受欢迎的追踪。我们的使命是教育和赋权您，以防止隐私泄露，并提升您的数字安全。

### [由 no-constant-binary-expression 捕获的有趣错误](https://eslint.org/blog/2022/07/interesting-bugs-caught-by-no-constant-binary-expression/)

```
+x == null 将始终为 false，因为 + 会将 x 转换为数字，而数字永远不会是 nullish。
{ ...foo } || DEFAULT 永远不会返回 DEFAULT，因为对象总是 truthy。

if (!whitelist.has(specifier.imported.name) == null) {
    return;
}

在尝试定义默认值时，人们会混淆像 a === b ?? c 这样的表达式，并假设它会被解析为 a === (b ?? c)。但实际上它会被解析为 (a === b) ?? c。

hasData = hasData || data !== {};
在这个例子中， hasData 总是被设置为 true，因为 data 永远不可能与一个新创建的对象具有引用相等性。

const newConfigValue = { ...configProfiles } ?? {};
JavaScript 错误的另一个常见类别是期望空对象为 nullish 或 falsy。对于来自 Python 等语言的开发者来说，这可能是一个容易犯的错误。

assert(startWidth => 0 && startWidth <= 1);
在这里，开发者本意是测试一个值是否大于或等于零（ >= 0），但意外地颠倒了字符的顺序，创建了一个返回 0 && startWidth <= 1 的箭头函数！

Thinking || allows for set operations: states.includes('VALID' || 'IN_PROGRESS')
思考 || 允许进行集合操作： states.includes('VALID' || 'IN_PROGRESS')
Thinking primitive functions pass through nulls: Number(x) == null
认为原始函数会通过 null： Number(x) == null
Not knowing primitive constructors return boxed primitives: new Number(x) === 10
不知道原始构造函数返回装箱原始值： new Number(x) === 10
```

### [使用 HTTP OPTIONS 发现功能](https://evertpot.com/discovering-features-with-http-options/)

```
OPTIONS 就是用于此目的的方法。你可能从 CORS 中知道这个 HTTP 方法，但它的通用目的是让客户端被动地发现"这里我能做什么？"
```

```js
const response = await fetch(
    'https://example.org', {
        method: 'OPTIONS'
    }
);
```

```http
HTTP/1.1 204 No Content
Date: Mon, 23 Sep 2024 02:57:38 GMT
Server: KKachel/1.2
Allow: GET, PUT, POST, DELETE, OPTIONS
```

### shell:startup

> 按 Win + R 打开 "运行" 对话框，输入 shell:startup，然后按回车。这将打开 "启动" 文件夹。

### [本项目基于 Bilibili 的 index-tts，提供 LoRA 单说话人 / 多说话人 的微调方案，用于提升精品说话人合成音频的 韵律和自然度。](https://github.com/asr-pub/index-tts-lora/blob/main/README_zh.md)

### [使用Intl. Segmenter返回更准确的字符长度](https://www.zhangxinxu.com/wordpress/2025/09/js-intl-segmenter-string-length/)

```js
Object.defineProperty(String.prototype, 'realLength', {
    get: function() {
        return Array.from(
            new Intl.Segmenter("en", {
                // 颗粒度：字位，默认值，可省略
                granularity: "grapheme"
            }).segment(this)
        ).length;
    }
});

"鑫空间".realLength // 3

    "🌝".realLength // 1

"🇮🇳".realLength // 1

    "👨‍👩‍👧‍👦".realLength // 1

"दरबार".realLength // 4
```

### [马尔可夫链](https://setosa.io/blog/2014/07/26/markov-chains/)

> 马尔可夫链是一种随机过程，用于描述一个系统在不同状态之间转换的概率。它由一个状态集合和一个转移矩阵组成。每个状态都有一个概率分布，描述了从该状态转换到其他状态的概率。马尔可夫链可以用于模拟随机过程，例如股票价格、天气模式或交通流量。
> canvas

### HTTPS下A标签下载HTTP资源受限

### [开始音乐创作之旅](https://learningmusic.ableton.com/zh-Hans/)

### [酷炫开源游戏](https://github.com/michelpereira/awesome-open-source-games)

### [ThreeJs 制作的魔方游戏，支持自定义魔方阶级（目前界面上只开放 2-10 阶魔方）。](https://pengfeiw.github.io/rubiks-cube/)

### [正则表达式可视化工具](https://regex-vis.com/)

### 指数退避算法

### [Python项目管理神器 PDM，用它管理项目爽到飞起！](https://juejin.cn/post/7503596255122161690)

### [JavaScript Set有新功能啦，子、交、并、补轻松搞定](https://juejin.cn/post/7411416025729957928)

```
子，isSubsetOf/isSupersetOf/isDisjointFrom
交，intersection
并，union
补，difference/symmetricDifference
```

### [泄露记录](https://databreach.com/)

### [Magentic-UI](https://github.com/microsoft/magentic-ui)

> Magentic-UI 是一个以人为中心的 AI 代理研究原型，可解决复杂的网络和编码任务，这些任务可能需要监控。与其他黑盒代理不同，该系统在执行前会揭示其计划，允许您指导其操作，并在浏览网站、执行代码和分析文件时请求对敏感操作的批准。查看演示部分，了解您可以完成哪些任务。

### playwright

> Playwright 是一个用于自动化浏览器操作的强大工具，支持多种浏览器（如 Chrome、Firefox、Safari）和平台（如 Windows、macOS、Linux）。它提供了丰富的 API 来模拟用户交互、导航网页、提取数据等。Playwright 以其稳定性、跨平台兼容性和强大的功能而闻名，成为了自动化测试和浏览器操作的首选工具。

### [处理element ui table组件加了 show-overflow-tooltip 后, 悬浮无法复制问题](https://juejin.cn/post/7329194915683729446)

> 二次开发组件写法借鉴

### [C V大法：让你用最简单的方式使用Vue2 + Web Worker + js-xlsx 解析excel数据](https://juejin.cn/post/7010046891480055815)

> Web Worker

### [监听浏览器页面切换/刷新/关闭事件](https://www.jianshu.com/p/bc5d242aff09)

> visibilitychange

### [SingleFile](https://github.com/gildas-lormeau/SingleFile)

> SingleFile 是一个兼容 Chrome、Firefox（桌面版和移动版）、Microsoft Edge、Safari、Vivaldi、Brave、Waterfox、Yandex 浏览器和 Opera 的网络扩展（以及一个命令行工具）。

### [矩阵乘法](http://matrixmultiplication.xyz/)

### [模块的特殊变量](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#23-%E6%A8%A1%E5%9D%97%E7%8A%84%E7%89%B9%E6%AE%8A%E5%8F%98%E8%87%8F)

### [动态导入](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#62-%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5)

### [特殊方法魔术方法](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#24-%E7%89%B9%E6%AE%8A%E6%96%B9%E6%B3%95%E9%AD%94%E6%9C%AF%E6%96%B9%E6%B3%95)

### [列表推导式](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#33-%E5%88%97%E8%A1%A8%E6%8E%A8%E5%AF%BC%E5%BC%8F)

### [Canvas也支持锥形渐变了createConicGradient方法](https://www.zhangxinxu.com/wordpress/2025/10/js-canvas-createconicgradient/?shrink=1)

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 尺寸
const size = 300;
canvas.width = size;
canvas.height = size;

// 创建锥形渐变
const gradient = ctx.createConicGradient(-0.5 * Math.PI, size / 2, size / 2);

// 色带颜色
const arrColor = ['#10239E', '#2F54EB', '#597EF7', '#85A5FF', '#D6E4FF'];
// 各自占据的百分比
const arrPercent = [0.07, 0.13, 0.2, 0.27, 0.33];

// 添加中断点
let sumPercent = 0;
arrPercent.forEach((percent, index) => {
    gradient.addColorStop(sumPercent, arrColor[index]);
    sumPercent += percent;
    gradient.addColorStop(sumPercent, arrColor[index]);
});

// 设置渐变为填充样式
ctx.fillStyle = gradient;
// 绘制圆形
ctx.ellipse(size / 2, size / 2, size / 2 - 30, size / 2 - 30, 0, 0, 2 * Math.PI);
// 填充
ctx.fill();
```

### [CanvasRenderingContext2D：ellipse() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/ellipse)

```js
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
```

### [全球儿歌乐园](https://beddysongs.com/zh)

### [elementUI 表格宽度自适应、不换行](https://www.jianshu.com/p/8b7ea304dc54)

> context.measureText方法可以测量文本的宽度

### 计算文本宽度

```js
/**
 * 计算文本宽度（包含可选内边距）
 * @param {Object} options - 配置对象
 * @param {string} options.str - 要测量的文本内容
 * @param {string} [options.style='12px PingFang HK'] - 文本样式
 * @param {number} [options.padding=0] - 额外内边距
 * @returns {number} 文本宽度（像素值）
 */
export const textWidth = ({
    str,
    style = '12px PingFang HK',
    padding = 0
}) => {

    // 创建临时canvas用于测量文本宽度
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
        console.warn('Canvas上下文获取失败');
        return 0;
    }

    // 设置字体样式并测量文本宽度
    context.font = style;
    const textWidth = context.measureText(str).width;

    return textWidth + Number(padding);

};
```

### [Alabaster 配色方案](https://github.com/tonsky/sublime-scheme-alabaster#variations-1)

### [一个 16.67 毫秒的帧](https://koolcodez.com/blog/inside-the-frame/)

> Performance monitor 控制台

```
首先，未优化的版本。它使用 top 和 left ，这会导致每帧都发生重排。
然后，优化的版本，它使用 transform 和 opacity 。
```

### [纯前端 LaTeX 公式识别工具](https://github.com/alephpi/Texo)

### [中国节假日](https://github.com/vsme/chinese-days)

### [完整的多说话人语音生成 Web 应用](https://github.com/zhao-kun/VibeVoiceFusion/blob/main/README_zh.md)

> VibeVoiceFusion 是一个Web 应用，用于生成高质量、多说话人的合成语音，具备声音克隆功能。基于微软的 VibeVoice 模型（AR + 扩散架构），本项目提供完整的全栈解决方案，包含直观的用户界面、项目管理和先进的显存优化功能。

### [Canvas 变换](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#%E5%8F%98%E5%BD%A2)

> 这个简单的 CSS 技巧允许你在点击详情元素时打开其关联的内容。它利用了 details 元素的默认行为，无需 JavaScript 即可实现。

### [Document.elementFromPoint()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint)

> 这个方法返回文档中指定坐标位置的元素。它可以用于确定用户点击的元素，或者在需要知道元素位置的情况下使用。
> elementFromPoint

### [首次内容绘制 (FCP)](https://webdev.ac.cn/articles/fcp#what-is-a-good-fcp-score)

> 首次内容绘制 (FCP) 是衡量网页性能的关键指标。它表示浏览器在导航到网页后首次将任何文本或图像呈现给用户所需的时间。FCP 是用户感知性能的重要方面，因为它提供了页面开始加载的视觉反馈。

### [10 个被严重低估的 JS 特性，直接少写 500 行代码](https://juejin.cn/post/7568153532014559267)

> element.closest () 方法返回调用它的元素或其最近的祖先元素（也可以是相同的元素），该元素匹配指定的选择器字符串。如果没有匹配的元素，则返回 null。
> URL + URLSearchParams 可以用于构建 URL 字符串，同时添加查询参数。

### [高级动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)

### [Date.prototype.setHours()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)

> setHours() 方法根据本地时间设置 Date 对象的小时数。

### [Date.prototype.setTime()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)

> setTime() 方法根据本地时间设置 Date 对象的毫秒数。

### [醒醒，该使用CookieStore新建和管理cookie了](https://www.zhangxinxu.com/wordpress/2025/11/js-cookiestore-cookie/)

> CookieStore 是一个用于管理浏览器 Cookie 的 API。它提供了一种简单的方式来设置、获取和删除 Cookie。

```js
// 删除cookie
cookieStore.delete()

// 获取cookie
cookieStore.get()

// 获取所有cookie
cookieStore.getAll()

// 设置cookie
cookieStore.set()
```

### [WeFinance](https://github.com/JasonRobertDestiny/WeFinance/blob/main/README_zh-CN.md#%E7%AE%97%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9C%AF%E6%9C%9A)

> AI驱动的个人财务助理 - 基于Vision LLM技术，将账单图片转化为可执行的财务洞察

### [OCR Arena](https://www.ocrarena.ai/battle)

> OCR Arena 是一个基于 Vision LLM 技术的在线 OCR 服务，它可以将图片中的文本转化为可编辑的文本。

### [HumanLayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
> HumanLayer 是一个基于 Claude 技术的在线写作助手，它可以帮助用户提高写作效率和质量。

### [Code996](https://github.com/hellodigua/code996)

> Code996 是一个开源项目，它提供了一个平台，让开发人员可以在其中编写和运行代码。它的目标是为开发人员提供一个安全、可靠的环境，以便他们可以专注于编写代码，而不是担心环境问题。

### [黑客新闻](https://news.ycombinator.com/)

### git add -p
```
该命令会：

扫描所有已修改的文件
将每个文件的修改分割成称为 "hunks" 的小块（通常是函数、代码块或连续的几行）
逐个询问用户是否将每个 hunk 添加到暂存区
```


### [svelte-scroller](https://github.com/sveltejs/svelte-scroller)

> 一个用于 Svelte 应用的滚动组件。


### [为什么对象数组（SoA 模式）胜过交错数组：一个 JavaScript 性能的兔子洞](https://www.royalbhati.com/posts/js-array-vs-typedarray)

```
SoA:{x:[0],y:[0],z:[0]}
AoS:[{x:0,y:0,z:0}]
```

```js
function main() {
    const ARRAY_SIZE = 50_000_000;

    const aos = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        aos.push({
            x: i,
            y: i * 2,
            z: i * 3
        });
    }

    const soa = {
        x: new Float64Array(ARRAY_SIZE),
        y: new Float64Array(ARRAY_SIZE),
        z: new Float64Array(ARRAY_SIZE)
    };
    for (let i = 0; i < ARRAY_SIZE; i++) {
        soa.x[i] = i;
        soa.y[i] = i * 2;
        soa.z[i] = i * 3;
    }

    const interleaved = new Float64Array(ARRAY_SIZE * 3);
    for (let i = 0; i < ARRAY_SIZE; i++) {
        const base = i * 3;
        interleaved[base] = i;
        interleaved[base + 1] = i * 2;
        interleaved[base + 2] = i * 3;
    }

    let sumAoS = 0;
    const startAoS = performance.now();
    for (let iter = 0; iter < 10; iter++) {
        for (let i = 0; i < ARRAY_SIZE; i++) {
            sumAoS += aos[i].x + aos[i].y + aos[i].z;
        }
    }
    const timeAoS = performance.now() - startAoS;

    let sumSoA = 0;
    const startSoA = performance.now();
    for (let iter = 0; iter < 10; iter++) {
        for (let i = 0; i < ARRAY_SIZE; i++) {
            sumSoA += soa.x[i] + soa.y[i] + soa.z[i];
        }
    }
    const timeSoA = performance.now() - startSoA;

    let sumInterleaved = 0;
    const startInterleaved = performance.now();
    for (let iter = 0; iter < 10; iter++) {
        for (let i = 0; i < ARRAY_SIZE; i++) {
            const base = i * 3;
            sumInterleaved +=
                interleaved[base] +
                interleaved[base + 1] +
                interleaved[base + 2];
        }
    }
    const timeInterleaved = performance.now() - startInterleaved;

    console.log(`AoS:         ${timeAoS.toFixed(2)}ms`);
    console.log(`SoA:         ${timeSoA.toFixed(2)}ms`);
    console.log(`Interleaved: ${timeInterleaved.toFixed(2)}ms`);
}

main();
```


### [Performance.now()](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now)

Performance.now() 方法返回一个高分辨率时间戳，单位为毫秒。它可以用于测量代码执行时间、动画性能等。


### [JS正则表达式y标识符之粘性匹配](https://www.zhangxinxu.com/wordpress/2026/02/js-regexp-y-sticky-flags/)

> RegExp.lastIndex
> 只有正则表达式使用了表示全局检索的 "g" 或者粘性检索的 "y" 标志时，该属性才会起作用。此时应用下


### [在 DevTools 中查找 JavaScript 中特定对象的分配位置](https://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/)

> 调试技巧


### [跨浏览器扩展框架](https://github.com/extension-js/extension.js)


### [Temporal API](https://bloomberg.github.io/js-blog/post/temporal/)


### 发送控制台通知

```js
process.stdout.write('\u0007')
```


### [Page Agent](https://github.com/alibaba/page-agent)

> 纯 JS 实现的 GUI agent。使用自然语言操作你的 Web 应用。无须后端、客户端、浏览器插件。


### [浅学WebTransport API：下一代Web双向通信技术](https://www.zhangxinxu.com/wordpress/2026/03/webtransport-api/)

> WebTransport


