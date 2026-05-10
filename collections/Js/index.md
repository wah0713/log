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
