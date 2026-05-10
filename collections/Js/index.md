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


