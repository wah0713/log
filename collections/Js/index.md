### observe

> 观察模式

### DOMSubtreeModified

> [监控dom节点子元素变化](http://javascript.ruanyifeng.com/dom/mutationobserver.html)

### getComputedStyle 或者 getBoundingClientRect

> [获取最终的style](https://blog.csdn.net/zy1281539626/article/details/78488062)

### jquery.chm

> [jquery使用手册](http://jquery.cuishifeng.cn/)

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
 }], [])
```

### iframe 中获取document

```js
 document.querySelector('#topFrame').contentWindow.document
```

### [insertAdjacentElement 插入位置](https://blog.csdn.net/stanleyhsl/article/details/104632640)

### axios 拦截器

```js
axios.create().interceptors.request.use()
```

### for continue

### scrollIntoView

### window.atob window.btoa base64

###

```js
var a_z = ``
for (let i = `a`.charCodeAt(); i <= `z`.charCodeAt(); i++) {
    a_z += String.fromCharCode(i)
}
console.log(a_z)
```

### require.context

### document.title 窗口闪烁

### (new Set()).toJSON()

### text.charCodeAt(i)&0xff00!=0 中文字节

###

```js
fs.createWriteStream(
    new console.Console(
        const content = fs.readFileSync(filePath)
        let str = content.toString()
        const stat = fs.statSync(absolutePath)
        if (stat.isDirectory()) absolutePath =
            absolutPath + "\\index"
        const names = fs.readdirSync(dir)
    )
)
```

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

### Math.sign判断数字是否正数、负数、0、-0、其他值为NaN

### typeof 123n // 'bigint'

### 尾调用优化

### [前端真题](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?table=tblzZHf2Ix3YtxPM&view=vew9iquA45)

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

### [uni-app](https://uniapp.dcloud.io/)

> 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

### [avuejs](https://www.avuejs.com/)

> Avue 是一个采用Element框架低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率

### [public，private，protected的区别，继承方法与访问权限](https://blog.csdn.net/spu20134823091/article/details/53836192)

作用域|中文名|说明
:-:|:-:|:-
public|公有继承|继承自父类的成员保持不变。
private|私有继承|继承自父类的成员全部变为私有成员。
protected|保护继承|继承自父类的公有成员变为保护成员，其余不变。

### 数组的shift在遍历中使用性能问题--在算法中发现

> 一个数组，你把头去掉，后面所有元素都要向前移动一位，这就是时间复杂度O(n)的操作，外面再来一个遍历，那就是O(n²)

### Reflect.ownKeys

> Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

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

> 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
> 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。

### Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.race([p1, p2, p3]);
```

> 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

### Promise.allSettled()

> Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入。

### Promise.try()

> 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。

### 执行一下命令可修复prettier

```bash
npm run lint --fix
```

### [前端规范：eslint与prettier使用（干货）](https://blog.csdn.net/weixin_45077178/article/details/107226551)

### [HTTP中GET，POST和PUT的区别](https://blog.csdn.net/qq_36183935/article/details/80570062)

### [node中的express框架，nodemon设置修改代码后服务自动重启](https://blog.csdn.net/a419419/article/details/78831869)

### [使用axios调用后端接口](https://blog.csdn.net/kid_hw/article/details/93927253)

### [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

### [简单的nginx代理demo的详细步骤](https://blog.csdn.net/weixin_44706322/article/details/103256636)

### [浅谈script标签中的async和defer](https://blog.csdn.net/lhjuejiang/article/details/81428226)

### [nginx 相关命令 nginx -s reload/stop/quit](https://blog.csdn.net/weixin_34356138/article/details/85996493)

### ngxin loadction正则语法

```Shell
location ~* \.json$ {
    root html;
    add_header Access-Control-Allow-Origin 'http://localhost:8080';
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```

### [Ajax跨域的所有方法（最详细带使用教程！！！）](https://blog.csdn.net/qq_37547964/article/details/112172365)

### vite几乎秒开的体验，且运行速度不会随着包的增大而变慢

### [commonjs 与 esm 的区别](https://juejin.cn/post/6844903861166014478)

### [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

### [vite-plugin-legacy](https://www.npmjs.com/package/vite-plugin-legacy)

### [vite-plugin-legacy兼容旧浏览器](https://www.bookstack.cn/read/vitejs-2.0-beta-en/cc39a9ad791e3c94.md)

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'
exportdefault {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ]
}
```

### [vite的周边](https://github.com/vitejs/awesome-vite)

### [面试 Javascript 中的 CJS, AMD, UMD 和 ESM是什么？](https://blog.csdn.net/weixin_39363245/article/details/114391500)

### [vite 源码解读](https://github.com/lubanproj/vite_read)

### [js中?? 和?. 的意思](https://www.cnblogs.com/zhigu/p/13962661.html)

### [神奇的 toLocaleString](https://blog.csdn.net/weixin_39749820/article/details/82869537)

### [npx](https://www.ruanyifeng.com/blog/2019/02/npx.html) 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。

### [JSON.stringify深拷贝的缺点](https://www.cnblogs.com/makai/p/13883544.html)

### [深拷贝与浅拷贝](https://www.cnblogs.com/nanhuaqiushui/%5B/14403976.html)

### [有关es6中的import使用方法](https://www.jianshu.com/p/c27b1640a01b)

### <%= %> webpack

### [ssr与csr](https://blog.csdn.net/xiaoxian_xian/article/details/109104607)

### data覆盖原来的对象实例，导致被遗漏的属性没有被vue监听到

### [table标签](https://www.jianshu.com/p/7c768011f25a)

### [了解HTML锚点](https://www.cnblogs.com/xiaohuochai/p/5007282.html)

### [Service Worker基础知识整理](https://www.cnblogs.com/BoatGina/p/10422361.html)

### [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

> 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

### [new.target 属性](https://es6.ruanyifeng.com/?search=new+target&x=0&y=0#docs/class#new-target-%E5%B1%9E%E6%80%A7)

### [import 命令](https://es6.ruanyifeng.com/?search=new+target&x=0&y=0#docs/module#import-%E5%91%BD%E4%BB%A4)

```js
import {
    a
} from './xxx.js'

a.foo = 'hello'; // 合法操作
```

> 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

### [defer与async的区别](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#%E4%BC%A0%E7%BB%9F%E6%96%B9%E6%B3%95)

> defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。

### [CommonJS-模块的循环加载](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)

> 另外，由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。

### [解构赋值](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)

### [对象](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E5%AF%B9%E8%B1%A1)

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

### [函数](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E5%87%BD%E6%95%B0)

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

### [模块](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E6%A8%A1%E5%9D%97)

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

### [Record-和-field](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/spec#Record-%E5%92%8C-field)

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
1 + a // => 3
'1' + a // => '12'
```

### [深拷贝](https://yuchengkai.cn/docs/frontend/#%E6%B7%B1%E6%8B%B7%E8%B4%9D)

> 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel

```js
function structuralClone(obj) {
    return new Promise(resolve => {
        const {
            port1,
            port2
        } = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
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
(async () => {
    const clone = await structuralClone(obj)
})()
```

### [setTimeout、setInterval被遗忘的第三个参数](https://www.cnblogs.com/leaf930814/p/6828588.html)

```js
setTimeout(function timer(a, b, c) {
    console.log(a, b, c)
}, 1000, 3, 2, 1)
// => 3 2 1
```

### [注册事件](https://yuchengkai.cn/docs/frontend/browser.html#%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6)

> 通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false 。useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

#### capture，布尔值，和 useCapture 作用一样

#### passive，布尔值，表示永远不会调用 preventDefault

### [Service Worker](https://yuchengkai.cn/docs/frontend/browser.html#service-worker)

> Service workers 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步 API。

### [重绘（Repaint）和回流（Reflow）](https://yuchengkai.cn/docs/frontend/browser.html#%E9%87%8D%E7%BB%98%EF%BC%88repaint%EF%BC%89%E5%92%8C%E5%9B%9E%E6%B5%81%EF%BC%88reflow%EF%BC%89)

> 执行 requestAnimationFrame 回调
> 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好

### [减少重绘和回流](https://yuchengkai.cn/docs/frontend/browser.html#%E5%87%8F%E5%B0%91%E9%87%8D%E7%BB%98%E5%92%8C%E5%9B%9E%E6%B5%81)

> 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

```js
for (let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```

### [预渲染](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E6%B8%B2%E6%9F%93)

> 可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染

```js
< link rel = "prerender"
href = "http://example.com" / >
```

> 预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染

### [预加载](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E5%8A%A0%E8%BD%BD)

### [监控](https://yuchengkai.cn/docs/frontend/performance.html#%E7%9B%91%E6%8E%A7)

> 但是要注意线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。

### [document.createDocumentFragment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
</head>

<body>
    <ul>
        控件
    </ul>
    <script>
        setTimeout(() => {
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
                for (let i = 0; i < once; i++) {
                    const li = document.createElement('li')
                    li.innerText = Math.floor(Math.random() * total)
                    fragment.appendChild(li)
                }
                ul.appendChild(fragment)
                countOfRender += 1
                loop()
            }

            function loop() {
                if (countOfRender < loopCount) {
                    window.requestAnimationFrame(add)
                }
            }
            loop()
        }, 0)
    </script>
</body>

</html>
```

```js
var a = [
    [],
    [0],
    [0, 1, 2]
]
a[4] = []
a.map(arr => arr.length) // => [0, 1, 3, empty, 0]
[...a.map(arr => arr.length)] // => [0, 1, 3, undefined, 0]
Math.max(...a.map(arr => arr.length).filter(Boolean)) // => 3
```

### [数组 - 稀疏数组](https://blog.csdn.net/weixin_41922289/article/details/94555391)

### [JS 稀疏数组](https://github.com/junreycen/blog/issues/10)

### [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

### [Sourcemap是什么？Sourcemap的作用及用法概括](https://blog.csdn.net/weixin_40599109/article/details/107845431)

> 设置打包后项目源码不可见

### [发布es6写的npm包遇到了这个坑](https://www.jianshu.com/p/8f335a84e44d)

> lib问题

### [Node.js中package.json中库的版本号详解(^和~区别)](https://blog.csdn.net/superjunjin/article/details/76034076)

###  [npm 和 yarn 常用指令解读和比较](https://blog.csdn.net/xunyicao_e/article/details/110930736)

> yarn install --update-checksums
> 当与对应包的校验不一致时， 更新 yarn.lock 文件和已安的依赖装包

### [component：(resolve) => require](https://www.cnblogs.com/dzkjz/p/12364882.html)

### [第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/145)

### [windows下快速删除node_modules](https://www.cnblogs.com/yeminglong/p/12620473.html)

### [活用yarn resolutions统一版本大幅减小产物包体积（优化之最后的倔强）](https://blog.csdn.net/qq_21567385/article/details/112644629)

### [入门教程: 认识 React](https://react.docschina.org/tutorial/tutorial.html)

> react 的井字棋教程

### [函数组件](https://react.docschina.org/tutorial/tutorial.html#function-components)

### [为什么不可变性在 React 中非常重要](https://react.docschina.org/tutorial/tutorial.html#why-immutability-is-important)

### [JSX 防止注入攻击](https://react.docschina.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

### 组件名称必须以大写字母开头。

> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

### [State 的更新可能是异步的](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

> 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```js
// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```

### [在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。](https://react.docschina.org/docs/handling-events.html)

### [react props.children ](https://react.docschina.org/docs/composition-vs-inheritance.html#containment)

> 我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：

```js
function FancyBorder(props) {
    return ( <
        div className = {
            'FancyBorder FancyBorder-' + props.color
        } > {
            props.children
        } <
        /div>
    );
}
```

### amazon (S3)

> 是一个公开的服务，Web 应用程序开发人员可以使用它存储数字资产，包括图片、视频、音乐和文档。 S3 提供一个 RESTful API 以编程方式实现与该服务的交互。

### [Fragments](https://react.docschina.org/docs/fragments.html)

> 类似于vue中的template

### [鼠标和指针事件](https://react.docschina.org/docs/accessibility.html#mouse-and-pointer-events)

### [错误边界（Error Boundaries）](https://react.docschina.org/docs/error-boundaries.html#introducing-error-boundaries)

### [约定：最大化可组合性](https://react.docschina.org/docs/higher-order-components.html#convention-maximizing-composability)

> compose(f, g, h) 等同于 (...args) => f(g(h(...args)))

### [Chosen 是一个 jQuery 插件，它使长而笨重的选择框更加用户友好。](https://harvesthq.github.io/chosen/)

### [谷歌的文本对比库](https://github.com/google/diff-match-patch/wiki/API)

> 要对文本文件的进行比较的时候，可以考虑使用google-diff-match-patch算法，它可以对文本文件进行比较、匹配和生成补丁的操作。

### [彻底搞懂 JS 事件轮询](https://juejin.cn/post/6844904198581010439)

> 顺带一提，其实还有一个替代方案，可以使用诸如getComputedStyle这样的方法，只需要访问其中一个属性，这样就能迫使浏览器更早地进行样式的计算，会让浏览器记录下此前设置的所有内容。但是，使用这个方法的时候需要小心，因为这样的做法可能会让浏览器在一帧的时间内做多余的工作，可能会破坏我们真正想要的效果。

> 然而，要说的是，上面两种都不是最终方案，最终方法是使用web animation API，使用这个方案可以轻松地指定我们想要的操作，但是目前只有 Chrome 支持该方案，我们暂且不提。同时，在Edge（旧版）和Safari中，requestAnimationFrame可能现在还不是在渲染 CSS 之前执行， 这意味着很难批量更新页面，用户可能会延迟看到页面，到了下一帧才能看到页面变化，屏幕的显示会有很大的延迟。注意这并不是符合网络标准的，我们期待它们后面会有所整改。

### 宏任务的主要模块

* setTimeout
* setInterval
* I/O
* script代码块

### 微任务的主要模块

* nextTick
* callback
* Promise
* process.nextTick
* Object.observe

#### MutationObserver

### [JS算法](https://github.com/thealgorithms/javascript)

### [免费的编程中文书籍索引](https://github.com/justjavac/free-programming-books-zh_CN)

### [在运行时选择类型](https://react.docschina.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)

> 你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下:

```js
import React from 'react';
import {
    PhotoStory,
    VideoStory
} from './stories';

const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    // 错误！JSX 类型不能是一个表达式。
    return <components[props.storyType] story = {
        props.story
    }
    />;
}
```

### [函数作为子元素](https://react.docschina.org/docs/jsx-in-depth.html#functions-as-children)

### [虚拟化长列表](https://react.docschina.org/docs/optimizing-performance.html#virtualize-long-lists)

### [避免调停](https://react.docschina.org/docs/optimizing-performance.html#avoid-reconciliation)

> 即使 React 只更新改变了的 DOM 节点，重新渲染仍然花费了一些时间。在大部分情况下它并不是问题，不过如果它已经慢到让人注意了，你可以通过覆盖生命周期方法 shouldComponentUpdate 来进行提速。该方法会在重新渲染前被触发。其默认实现总是返回 true，让 React 执行更新：

```js
shouldComponentUpdate(nextProps, nextState) {
    return true;
}
```

### [示例](https://react.docschina.org/docs/optimizing-performance.html#examples)

> 在这段代码中，shouldComponentUpdate 仅检查了 props.color 或 state.count 是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承 React. PureComponent 就行了。所以这段代码可以改成以下这种更简洁的形式：

```js
class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    render() {
        return ( <
            button color = {
                this.props.color
            }
            onClick = {
                () => this.setState(state => ({
                    count: state.count + 1
                }))
            } >
            Count: {
                this.state.count
            } <
            /button>
        );
    }
}
```

### [不可变数据的力量](https://react.docschina.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

> 避免该问题最简单的方式是避免更改你正用于 props 或 state 的值。例如，上面 handleClick 方法可以用 concat 重写：

```js
handleClick() {
    this.setState(state => ({
        words: state.words.concat(['marklar'])
    }));
}
```

### [前端面试秘籍](https://github.com/yisainan/web-interview)

### [访问 Refs](https://reactjs.bootcss.com/docs/refs-and-the-dom.html#accessing-refs)

当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。

```js
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
你不能在函数组件上使用 ref 属性，因为他们没有实例。

### [前端登录，这一篇就够了](https://blog.csdn.net/u011192674/article/details/107101526/)

### [添加 TypeScript 到现有项目中](https://reactjs.bootcss.com/docs/static-type-checking.html#adding-typescript-to-a-project)

### [默认值](https://reactjs.bootcss.com/docs/uncontrolled-components.html#default-values)

### 这里我推荐 [observer-util](https://github.com/nx-js/observer-util)，我解读过这个库的源码，和 Vue3 的实现原理基本上是一模一样！但是简单了很多。麻雀虽小，五脏俱全。里面的注释也很齐全。

### 当然，如果你的英文不是很熟练，也可以看我精心用 TypeScript + 中文注释基于 observer-util 重写的这套代码： [typescript-proxy-reactive](https://github.com/sl1673495/typescript-proxy-reactive)

### [浏览器直接发请求Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

### [Fetch设置请求头](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest).then(function(response) {
    ...
});
```

### [node餐饮demo](https://github.com/bailicangdu/node-elm)

> nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui

### [visibilitychange](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event)

> 当其选项卡的内容变得可见或被隐藏时，会在文档上触发 visibilitychange (能见度更改)事件。

### [关于H5的pushState、replaceState](https://www.jianshu.com/p/ddb7fcdf5962)

> history.pushState history.replaceState无刷新改变url

### [window.prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)

> 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。

### [stopPropagation与stopImmediatePropagation的区别](https://blog.csdn.net/weixin_42420703/article/details/104585427)

stopPropagation
event.stopPropagation(); 阻止事件冒泡。

stopImmediatePropagation
event.stopImmediatePropagation(); 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发。

### buildtime='<%=new Date %>' 记录编译时间

### [npm ora](https://www.jianshu.com/p/52bed753d5be)

### [npm chalk](https://blog.csdn.net/u013530539/article/details/79073938)

###  [localeCompare](https://www.w3school.com.cn/jsref/jsref_localecompare.asp)

> 字符串排序 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

### [js控制输入框光标位置（setSelectionRange详解）](https://blog.csdn.net/forAlienZHOU/article/details/52437929)

### [javascript对象之 selectionStart selectionEnd](https://www.cnblogs.com/perseverancevictory/p/3665814.html)

> input textarea 的文本控制选中范围（不是只读属性，是可写入属性）

### [npm cloc](https://blog.csdn.net/baidu_35120637/article/details/109148623)

### webpack-to-vite npm

### [jsPlumb的中文文档](https://www.jianshu.com/p/e61dd8ec781b)

### [iframe的使用和 contentWindow、parent以及postMessage通信方式](https://www.cnblogs.com/nangezi/p/12706672.html)

> contentWindow.postMessage 父给子发消息
> parent.postMessage 子发给父消息

### [Prmise](https://es6.ruanyifeng.com/#docs/promise#Promise-race)

> all 一个失败全部失败
> race 最快的成功即为成功
> allSettlad 全部完成
> 全部失败即为失败

### [ajax和fetch都是请求数据的有什么区别呢](https://www.cnblogs.com/geter/p/12552294.html)

###  https ssl

### [Promise/A+ 规范](https://zhuanlan.zhihu.com/p/143204897)

### [js属性对象的hasOwnProperty方法](https://www.cnblogs.com/weiqinl/p/8683207.html)

### [插排与快排](https://www.cnblogs.com/friedCoder/p/12617844.html)

### [网络协议概述：物理层、连接层、网络层、传输层、应用层详解](https://www.cnblogs.com/dengyibing/p/5563082.html)

### [从输入URL到页面加载的全过程](https://www.cnblogs.com/xiaohuochai/p/9193083.html)

### [JS 作用域及作用域链](https://www.cnblogs.com/gaosirs/p/10579059.html)

### [动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D)

### [一文搞懂amd, cmd, cjs, umd, es](https://blog.csdn.net/cpa0701/article/details/108703494)

> umd （ES6 import export）
> cjs （commonjs）

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

### [Vue使用NProgress npm](https://blog.csdn.net/wn1245343496/article/details/82151273)

> NProgress是页面跳转是出现在浏览器顶部的进度条

### [TinyMCE](http://tinymce.ax-z.cn/)

> TinyMCE：功能强大、所见即所得的富文本编辑器

### [node里读取命令行参数](https://blog.csdn.net/weixin_34292402/article/details/93318423)

> process.env process.argv

### [store.js使用简介 npm](https://gist.github.com/reygreen1/7226325)

> tore.js 优先选择 localStorage 来进行存储，在 IE6 和 IE7 下降级使用userData来达到目的。 没有使用 flash ，不会减慢你的页面加载速度。也没有使用 cookies ，不会使你的网络请求变得臃肿。store.js 依赖 JSON 来序列化数据进行存储。

### [React Hook 系列(一)：彻底搞懂react-hooks 用法（万字慎点）](https://segmentfault.com/a/1190000021261588)

### [Webpack Bundle Analyzer插件的使用](https://segmentfault.com/a/1190000017716736)

### [webpack配置中的ExtractTextPlugin插件认识](https://www.jianshu.com/p/ed3c98ba5474)

### [webpack配置别名alias](https://www.cnblogs.com/Jimc/p/10282969.html)

### [nodejs路径处理方法和绝对路径 path](https://www.cnblogs.com/mengff/p/9753867.html)

### [巧用.filter去重](https://blog.csdn.net/weixin_44198018/article/details/87856385)

```js
r = arr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});;
```

### [如何优雅监听容器高度变化](https://segmentfault.com/a/1190000019877595?utm_source=tag-newest)

### [ResizeObserver API](https://zhuanlan.zhihu.com/p/41418813)

### [介绍nodejs中的path模块的几个方法](https://www.cnblogs.com/wulinzi/p/8034047.html)

> Windows 与 POSIX

### [webpack基础](https://www.jianshu.com/p/13bdbefd6189)

### [webpack-module配置详解](https://blog.csdn.net/qq_44708990/article/details/116758235)

### [前端小白入门webpack中对于css、less、图片的处理](https://blog.csdn.net/weixin_43916611/article/details/111708384)

### [webpack：hash、chunkhash、contenthash三者区别](https://www.cnblogs.com/gaoht/p/14005850.html)

### [基于 webpack 的持久化缓存方案](https://github.com/pigcan/blog/issues/9)

### [cache 强缓存 协商缓存](https://blog.csdn.net/qianqianstd/article/details/75907082)

### [web前端入门到实战：CSS3中width值为max/min-content及fit-content的理解](https://blog.csdn.net/wewfdf/article/details/101228278)

### [浏览器是根据什么决定「from disk cache」与「from memory cache」？](https://www.zhihu.com/question/64201378?sort=created)

### [聊一聊缓存 [from memory cache 和 from disk cache]](https://blog.csdn.net/weixin_42038290/article/details/110135296)

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
|Refresh|表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http:/\/host/path")让浏览器读取指定的页面。<br/>注意这种功能通常是通过设置HTML页面HEAD区的＜META HTTP-EQUIV="Refresh" CONTENT="5; URL=http:/\/host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。<br/><br/>注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。<br/><br/>注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。|
|Server|服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。|
|Set-Cookie|设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。|
|WWW-Authenticate|客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。
注意Servlet一般不进行这方面的处理，而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。|

### [webpack devtool](https://doc.codingdict.com/webpack-cn-doc/configuration/devtool/)

### [mobile-detect.js 中文网](https://www.mobile-detect.cn/)

> 该脚本将通过将模式与给定的User-Agent字符串进行比较来检测设备

### [JavaScript 数组去重的方法（12 种方法，史上最全）](https://segmentfault.com/a/1190000016418021)

### [前端原生API实现条形码二维码的JS解析识别](https://www.zhangxinxu.com/wordpress/2023/01/js-parse-barcode-qrcode-barcodedetector/)

> BarcodeDetector

### [使用AbortController abort中断原生fetch或axios请求](https://www.zhangxinxu.com/wordpress/2023/01/fetch-abortcontroller-abort-fetch-axios/)

### [万岁，浏览器原生支持ES6 export和import模块啦！](https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/)

### [前端重新部署如何通知用户刷新网页？](https://juejin.cn/post/7185451392994115645)

### [近万字新手 chrome 扩展开发简单入门](https://juejin.cn/post/6844904127932137485)

### [拖拽献祭中的黑山羊-DataTransfer对象](https://www.zhangxinxu.com/wordpress/2018/09/drag-drop-datatransfer-js/)

> DataTransfer

### [直接剪切板粘贴上传图片的前端JS实现](https://www.zhangxinxu.com/wordpress/2018/09/ajax-upload-image-from-clipboard/)

### [使用JS在客户端判断当前网络状态](http://t.zoukankan.com/libin-1-p-6822746.html)

> navigator.onLine

### [数学标记语言MathML简介、工具及兼容](https://www.zhangxinxu.com/wordpress/2018/10/mathml-%e5%85%bc%e5%ae%b9-%e5%b7%a5%e5%85%b7/)

### [git stash 命令实用指南](https://zhuanlan.zhihu.com/p/364339115)

```bash
git stash list
git stash pop stash@{1}
git stash clear
git stash drop <stash_id>
```

### [什么是跨域，后端工程师如何处理跨域](https://www.cnblogs.com/ricklz/p/16217937.html)

> 简单请求（simple request） 非简单请求（not-so-simple request）

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
video.requestPictureInPicture();
document.exitPictureInPicture();
```

### [奇了怪了，输入法和JS Enter回车提交冲突](https://www.zhangxinxu.com/wordpress/2023/02/js-enter-submit-compositionupdate/)

> key keyCode isComposing

### [数组遍历注意Empty Item的影响](https://segmentfault.com/a/1190000020192631)

```js
const arr = new Array(3)
arr.map((item) => item.prop)  // [empty × 3]
arr.forEach((item) => console.log(item.prop))  // nothing
arr.reduce((res) => res += 'ha', '')  // ''
```

### [leetcode 鸡蛋掉落](https://leetcode.cn/problems/egg-drop/)

### [CSS和JS判断深色模式](https://www.jianshu.com/p/06561bbb6118/)

```js
window.matchMedia('(prefers-color-scheme: dark)')
```

### [去掉html标签](https://blog.csdn.net/qq_37860634/article/details/124616991)

### [判断文本是否溢出](https://juejin.cn/post/6844903939440115725)

### [原生js获取dom元素css样式的四种方法及对比](https://blog.csdn.net/zwkkkk1/article/details/103188153)

> HTMLElement.style Element.currentStyle Window.getComputedStyle() Element.getBoundingClientRect()

### [HTML5 indexedDB前端本地存储数据库实例教程](https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/)

> indexedDB

### [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)

### [iframe和HTML5 blob实现JS, CSS, HTML直接当前页预览](https://www.zhangxinxu.com/wordpress/2017/08/iframe-html5-blob-code-view/)

> iframe blob

### [JavaScript将首字母转换为大写或小写的简单方法](https://blog.csdn.net/csdn_meng/article/details/85935593)

```js
var str = 'test string';
str = str.replace(str[0], str[0].toUpperCase());
```

### [博闻强识：了解CSS中的@ AT规则](https://www.zhangxinxu.com/wordpress/2015/08/know-css-at-rules/)

### [怎么使用js下载m3u8视频](https://www.ljhmp.com/article-detail.html?id=25)

### [m3u8-downloader](https://gitee.com/jin2014/m3u8-downloader)

### [设计任务队列，控制请求最大并发数](https://juejin.cn/post/7099344493010223134)

```js
class TaskQueue {
    constructor() {
        this.max = 10;
        this.taskList = [];
    }
    addTask(task) { this.taskList.push(task); }
    run() {
        const min = Math.min(this.taskList.length, this.max);
        for (let i = 0; i < min; i++) {
            const task = this.taskList.shift();
            task().finally(() => { this.max++; this.run(); });
        }
    }
}
```

### [Promise.all的并发控制](https://blog.csdn.net/weixin_46133178/article/details/127142418)

### 【JavaScript】更改数组中某一个元素在数组中的位置

```js
function Move(arr, a, b) {
    let arr_temp = [].concat(arr);
    arr_temp.splice(b, 0, arr_temp.splice(a, 1)[0]);
    return arr_temp;
}
```

### [ES2023 来了，赶紧学起来](https://juejin.cn/post/7206302271079989308)

### [正则表达式标志](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

标志|描述
:-:|:-|
g|全局搜索
i|不区分大小写搜索
m|多行搜索
s|允许 . 匹配换行符
u|使用 unicode 码的模式进行匹配
y|执行"粘性"搜索

### [文件系统标志](https://nodejs.cn/api/fs.html#%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%A0%87%E5%BF%97)

> flags

### [JavaScript 性能利器 —— Web Worker](https://juejin.cn/post/6844903736238669837)

> Web Worker

### [new Date() 我忍你很久了！](https://juejin.cn/post/7221884988492382267)

### [狙杀页面卡顿 —— Performance 指北](https://juejin.cn/post/6844903651262070791)

> Performance chrome 控制台

### [Node卸载超详细步骤](https://blog.csdn.net/m0_51945510/article/details/127710792)

### [nvm安装、node安装及node版本切换管理](https://juejin.cn/post/7249585135800336444)

> nvm node

### [bpmn-js](https://bpmn.io/toolkit/bpmn-js/)

> bpmn

### [jQuery诞生记-原理与机制](https://www.zhangxinxu.com/wordpress/2013/07/jquery-%e5%8e%9f%e7%90%86-%e6%9c%ba%e5%88%b6/)

> 原型链 prototype

### [node.js有没有办法删除最后一行输出？](https://www.coder.work/article/1372167)

```js
process.stdout.write("\r\x1b[K")
```

### [ANSI转义序列详解](https://juejin.cn/post/7086720921158811662)

### [关于async / await的异常捕获](https://blog.csdn.net/qq_42543244/article/details/123423894)

```js
async getList1() {
    let resp = await this.httpTest().catch(err => console.log(err));
}
async getList2() {
    try {
        let resp = await this.httpTest();
    } catch (err) { console.log(err); }
}
```

### [强大的JS位运算](https://juejin.cn/post/7176635614777851941)

> 位运算

### [理解DOMString、Document、FormData、Blob、File、ArrayBuffer数据类型](https://www.zhangxinxu.com/wordpress/2013/10/understand-domstring-document-formdata-blob-file-arraybuffer/)

### [XMLHttpRequest实现HTTP协议下文件上传断点续传](https://www.zhangxinxu.com/wordpress/2013/11/xmlhttprequest-ajax-localstorage-%e6%96%87%e4%bb%b6%e6%96%ad%e7%82%b9%e7%bb%ad%e4%bc%a0/)

> slice断点续传

### [JavaScript实现监听路由变化](https://blog.csdn.net/qq_42367749/article/details/119653295)

### [怎样监听history.pushState、history.replaceState事件](https://blog.csdn.net/swc1997/article/details/118242920)

```js
function wrapState(action) {
    let raw = history[action];
    return function() {
        let wrapper = raw.apply(this, arguments);
        let e = new Event(action);
        e.stateInfo = { ...arguments };
        window.dispatchEvent(e);
        return wrapper;
    }
}
history.pushState = wrapState("pushState");
history.replaceState = wrapState("replaceState");
```

### [json stringify 排序问题](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

> JSON.stringify 的排序，不是按字母顺序

### [JS复制图片到剪切板](https://www.zhangxinxu.com/wordpress/2023/09/js-copy-image-clipboard/)

> b64toBlob ClipboardItem

### [Base64、Blob、File 三种类型的相互转换](https://blog.csdn.net/BaymaxCSDN/article/details/108077233)

### [Tips：form元素reset后input不触发change事件处理](https://www.zhangxinxu.com/wordpress/2023/09/form-reset-input-change/)

```js
document.addEventListener('reset', function(event) {
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
}, false);
```

### [Popover](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using)

```js
popover.showPopover();
popover.hidePopover();
```

### [alova.js](https://alova.js.org/zh-CN/)

> 以声明的方式完成各种复杂场景的网络请求

### [js的.map()里使用异步方法](https://blog.csdn.net/hannah1116/article/details/86541680)

```js
let results = await Promise.all(arr.map(async (item) => {
    return await asyncWorker(item);
}));
```

### [cookie转换成对象](https://www.kancloud.cn/hanxuming/codesnippet/3204012)

```js
const getCookie = () => document.cookie
    .split(';')
    .map((item) => item.split('='))
    .reduce((acc, [k, v]) => (acc[k.trim()] = v) && acc, {})
```

### [Web：从给定文本中剥离html](https://www.kancloud.cn/hanxuming/codesnippet/3204018)

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

### [数组：找到最接近的数值](https://www.kancloud.cn/hanxuming/codesnippet/3203983)

```js
const closest = (arr, n) => arr.reduce((prev, curr) =>
    (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))
```

### [数组：生成数组](https://www.kancloud.cn/hanxuming/codesnippet/3203976)

```js
const createArr = (n) => Array.from(new Array(n), (v, i) => i)
const createArr = (n) => new Array(n).fill(0).map((v, i) => i)
```

### [进制转换](https://www.kancloud.cn/hanxuming/codesnippet/3203985)

```js
const toDecimal = (num, n = 10) => num.toString(n)
const toDecimalism = (num, n = 10) => parseInt(num, n)
```

### [随机颜色](https://www.kancloud.cn/hanxuming/codesnippet/3204008)

```js
const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
```

### [前端工程化：基于 Vue.js 3.0 的设计与实践](https://vue3.chengpeiquan.com/)

### [randomuuid](https://developer.mozilla.org/zh-CN/)

```js
btoa(crypto.randomUUID())
```

### [聊聊Web网页中资源加载的优先级](https://www.zhangxinxu.com/wordpress/2023/10/img-js-preload-fetch-priority/)

> prefetch preload fetchPriority

### [纯JS实现多个音频的拼接或者合并](https://www.zhangxinxu.com/wordpress/2023/10/js-audio-audiobuffer-concat-merge/)

> new AudioContext()

### [JS改变AudioBuffer音量并下载为新audio音频](https://www.zhangxinxu.com/wordpress/2023/10/js-web-audio-audiobuffer-volume/)

### [HTML elementtiming属性初体验记录](https://www.zhangxinxu.com/wordpress/2023/09/html-elementtiming-attribute/)

```html
<p elementtiming="text">我是一段内容。</p>
```

### [squoosh](https://github.com/googlechromelabs/squoosh)

> Squoosh是一款图像压缩网络应用程序

### [Web referrer策略详解与防盗链图片的显示](https://www.zhangxinxu.com/wordpress/2023/08/web-referer-image-policy/)

### [逻辑空赋值（??=）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

### [空值合并运算符（??）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

### [可选链运算符（?.）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)。您可以找到有关渲染网页的设备的信息：

浏览器提供了 5 种 Observer 来监听这些变动：MutationObserver、IntersectionObserver、PerformanceObserver、ResizeObserver、ReportingObserver。

### [node-crawler](https://node-crawler.readthedocs.io/zh_CN/latest/)

> node-crawler：一个轻量级爬虫工具 文档

### [五十种最好的开源爬虫](https://www.cnblogs.com/jscs/p/13672785.html)

### [type=file上传文件时accept限制文件类型](https://blog.csdn.net/guoqiankunmiss/article/details/102629209)

### [FormData 原生对象](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)

### [浅谈js的数字格式](https://www.cnblogs.com/amiezhang/p/7940067.html)

```js
// 二进制
0b10; // 2
// 八进制
010; // 8
// 十六进制
0x10; // 16
```

### [Base64笔记](http://www.ruanyifeng.com/blog/2008/06/base64.html)

### [HTML DOM cloneNode() 方法](https://www.w3school.com.cn/jsref/met_node_clonenode.asp)

### [前端监控体系搭建](https://juejin.cn/post/7078512301665419295)

### [使用 CodeMirror 打造在线代码编辑器](https://blog.csdn.net/qq_37193537/article/details/88426196)

### [Vue Json Pretty](https://github.com/leezng/vue-json-pretty)

### [vue-json-viewer](https://github.com/chenfengjw163/vue-json-viewer#readme)

### [无障碍开发](https://www.cnblogs.com/kunmomo/category/1552789.html)

### [i18n与a11y与l10n](https://www.jianshu.com/p/a1dbc0f2d7de)

### [WAI-ARIA无障碍网页应用属性完全展示](https://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/#ariaAttr)

### [:focus-visible](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible)

### [tabindex](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex)

### [键盘导航的 JavaScript 组件](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)

### [浏览器兼容](https://caniuse.com/)

### [深入JS getRandomValues和Math.random方法](https://www.zhangxinxu.com/wordpress/2021/12/js-getrandomvalue-math-random/)

### [ES标准中的相等比较算法 SameValue SameValueZero](https://blog.csdn.net/QDY5945/article/details/102638372)

### [了解页面的生命周期](https://www.zhangxinxu.com/wordpress/2021/11/js-visibilitychange-pagehide-lifecycle/)

### [这几个高级前端常用的API，你用到了吗？](https://juejin.cn/post/7028744289890861063)

> MutationObserver IntersectionObserver getComputedStyle requestAnimationFrame

### [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

### [输入框value属性赋值触发js change事件的实现](https://www.zhangxinxu.com/wordpress/2021/05/js-value-change/)

### [Promise.all、race和any方法都是什么意思？](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)

### [在有滚动条的容器中指定（显示）滚动到某一子元素位置](https://blog.csdn.net/weixin_44807526/article/details/118576067)

> scrollIntoView

### [2020的今天，[\u4e00-\u9fa5]还能匹配到所有中文吗？](https://juejin.cn/post/6844904116842430471)

### [读取字体属性](https://wakamaifondue.com/)

### [div模拟textarea文本域轻松实现高度自适应](https://www.zhangxinxu.com/wordpress/2010/12/div-textarea-height-auto/)

> contenteditable

### [深入理解Shadow DOM v1](https://segmentfault.com/a/1190000019115050)

> shadow 虚拟dom

### [vue生产环境报错 ChunkLoadError](https://www.impl.fun/2022/03/27/cue-load-chunk-failed/)

```js
window.addEventListener('error', (event) => {
    if (!(event instanceof ErrorEvent)) {
        window.hasScriptJs = event.target.src
    }
}, true);

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed && window.hasScriptJs) {
        let setScript = document.createElement("script");
        setScript.setAttribute("src", window.hasScriptJs);
        head.appendChild(setScript);
        setScript.onload = () => {
            const targetPath = $router.history.pending.fullPath;
            $router.replace(targetPath);
        }
        setScript.onerror = () => {
            location.reload();
        }
    }
});
```

### [盘点HTML字符串转DOM的各种方法及细节](https://www.zhangxinxu.com/wordpress/2021/02/html-string-dom/)

> innerHTML insertAdjacentHTML DOMParser Range

### [DOMPurify 简单使用](https://www.jianshu.com/p/d88cd47a124d)

### [判断DOM元素是否出现再浏览器窗口中](https://segmentfault.com/a/1190000017303509)

### [聊一聊前端图片懒加载背后的故事](https://qinyuanpei.blog.csdn.net/article/details/126170750)

### [如何使用JS检测用户是否缩放了页面？](https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/)

### [巧用DOM API实现HTML字符的转义和反转义](https://www.zhangxinxu.com/wordpress/2021/01/dom-api-html-encode-decode/)

### [告别JS keyCode](https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/)

> event.key event.code

### [前端JS获取字符串字节大小](https://tydev.blog.csdn.net/article/details/107357640)

### [JS 计算字符串所占字节数](http://www.alloyteam.com/2013/12/js-calculate-the-number-of-bytes-occupied-by-a-string/)

### [window.parent、window.top、window.self](https://www.cnblogs.com/zxf100/articles/14182831.html)

> iframe

### [前端监控之接口统计](https://juejin.cn/post/6958700362660315149)

### [为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/87)

### [深入Node.compareDocumentPosition API](https://www.zhangxinxu.com/wordpress/2019/03/node-comparedocumentposition-api/)

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

### [Vue 使用 lodash Debounce 进行防抖，控制高耗任务的频率](https://juejin.cn/post/7041067567422636063)

### [揭秘 Vue.js 九个性能优化技巧](https://juejin.cn/post/6922641008106668045)

> Local variables

### [25个 Vue 技巧, 学了这么久才知道还能这么用](https://juejin.cn/post/7098688018663342111)

> v-for 中的解构

### [解决canvas图片getImageData, toDataURL跨域问题](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)

### [面试官为啥总是让我们手撕call、apply、bind?](https://juejin.cn/post/7128233572380442660)

### [请问：怎么实现大文件快速上传？](https://juejin.cn/post/7074534222748188685)

### [告别pointer-events:none使用HTML inert属性真正禁用](https://www.zhangxinxu.com/wordpress/2022/10/html-inert-disabled-attribute/)

### [面向对象七大设计原则](https://blog.csdn.net/nanyupeng/article/category/125680185)

> 开放封闭原则、单一职责原则、依赖倒置原则、里氏替换原则、接口隔离原则、组合复用原则、迪米特原则

### [Element-UI使用及遇到的问题](https://www.jianshu.com/p/52ca9a00851a)

### [聊聊JS DOM变化的监听检测与应用](https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/)

> MutationObserver Mutation events Object.defineProperty

### [JS URL()和URLSearchParams() API接口详细介绍](https://www.zhangxinxu.com/wordpress/2019/08/js-url-urlsearchparams/)

### [前端面试常见的浏览器缓存（强缓存、协商缓存），代码实操](https://juejin.cn/post/7083178636852854792)

### [Moment.js](https://www.momentjs.com.cn/docs.html#/manipulating/add/)

```js
moment().add(Number, String);
moment().add(Duration);
moment().add(Object);

moment().startOf('year');
moment().startOf('month');
moment().startOf('day');
```

### [实战技巧，Vue原来还可以这样写](https://juejin.cn/post/6844904196626448391)

```js
window.addEventListener('resize', this.$_handleResizeChart)
this.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', this.$_handleResizeChart)
})
```

### [js 模拟鼠标双击](https://blog.csdn.net/nongcunqq/article/details/115358202)

```js
var targLink = document.getElementById("something");
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('dblclick', true, true);
targLink.dispatchEvent(clickEvent);
```

### [纯前端JS zip打包文件并下载](https://www.zhangxinxu.com/wordpress/2019/08/js-zip-download/)

> jszip FileSaver js-xlsx

### [小tips: 元素focus页面不滚动不定位的JS处理](https://www.zhangxinxu.com/wordpress/2019/09/js-focus-preventscroll/)

> preventScroll

### [JS Intl对象完整简介及在中文中的应用](https://www.zhangxinxu.com/wordpress/2019/09/js-intl-zh/)

> 数字格式化

### [小tips: JS DOM innerText和textContent的区别](https://www.zhangxinxu.com/wordpress/2019/09/js-dom-innertext-textcontent/)

> innerText textContent

### [RegExp.$1-$9](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)

### [JS检测CSS属性浏览器是否支持的多种方法](https://www.zhangxinxu.com/wordpress/2019/11/js-css-supports-detect/)

### [js模拟键盘点击esc键](https://blog.csdn.net/qq_41228055/article/details/124712858)

### [JavaScript 中几个优雅的运算符使用技巧](https://mp.weixin.qq.com/s/M6BnuFVku0sYoug016un8g)

```js
object?.property
undefined ?? 'codercao'
expr1 ??= expr2
x ||= y
x &&= y
```

### [webpack-bundle-analyzer 优化实战](https://juejin.cn/post/7035951233907032077)

### [从今天开始，请叫我Node文本节点处理大师](https://www.zhangxinxu.com/wordpress/2022/11/js-text-node-master/)

### [nodejs之支持async func的并行forEach](https://blog.csdn.net/windroid/article/details/105942653)

### 位运算

```js
// 四舍五入
num + 0.5 | 0
// 取整
num | 0
```

### [Vue 强制刷新(重新渲染)的方式](https://blog.csdn.net/LonewoIf/article/details/126176039)

### [小tips: 使用JS检测用户是否安装某font-family字体](https://www.zhangxinxu.com/wordpress/2018/02/js-detect-suppot-font-family/)

### [小tips: 纯前端JS读取与解析本地文本类文件](https://www.zhangxinxu.com/wordpress/2018/03/js-parse-text-file/)

```js
var reader = new FileReader();
reader.onload = function(event) {
    // event.target.result就是文件文本内容
};
reader.readAsText(file);
```

### [JavaScript 正则表达式匹配汉字](https://zhuanlan.zhihu.com/p/33335629)

> /\p{Unified_Ideograph}/u 匹配所有汉字

### [Service Worker实现浏览器端页面渲染或CSS, JS编译](https://www.zhangxinxu.com/wordpress/2018/04/service-worker-client-online-html-css-complie/)

### [node使用exec方法开启子进程](https://blog.csdn.net/xuelian3015/article/details/125923099)

> exec(command, [options], [callback])

### [Object转字符串可以包含function](https://blog.csdn.net/LanChongQiChuang/article/details/103683642)

### [React Hook 系列(一)：彻底搞懂react-hooks 用法（万字慎点）](https://segmentfault.com/a/1190000021261588)

### [Webpack Bundle Analyzer插件的使用](https://segmentfault.com/a/1190000017716736)

### [webpack配置中的ExtractTextPlugin插件认识](https://www.jianshu.com/p/ed3c98ba5474)

### [webpack配置别名alias](https://www.cnblogs.com/Jimc/p/10282969.html)

### [nodejs路径处理方法和绝对路径 path](https://www.cnblogs.com/mengff/p/9753867.html)

### [巧用.filter去重](https://blog.csdn.net/weixin_44198018/article/details/87856385)

```js
r = arr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});
```

### [如何优雅监听容器高度变化](https://segmentfault.com/a/1190000019877595?utm_source=tag-newest)

### [ResizeObserver API](https://zhuanlan.zhihu.com/p/41418813)

### [介绍nodejs中的path模块的几个方法](https://www.cnblogs.com/wulinzi/p/8034047.html)

> Windows 与 POSIX

### [webpack基础](https://www.jianshu.com/p/13bdbefd6189)

### [webpack-module配置详解](https://blog.csdn.net/qq_44708990/article/details/116758235)

### [前端小白入门webpack中对于css、less、图片的处理](https://blog.csdn.net/weixin_43916611/article/details/111708384)

### [webpack：hash、chunkhash、contenthash三者区别](https://www.cnblogs.com/gaoht/p/14005850.html)

### [基于 webpack 的持久化缓存方案](https://github.com/pigcan/blog/issues/9)

### 数字每三位加逗号

```js
`2322222222222123`.replace(/(\d)(?=(\d{3})+$)/g, '$1, ')
```

### [webpack devtool](https://doc.codingdict.com/webpack-cn-doc/configuration/devtool/)

### [一些提高前端代码健壮性的方法](https://juejin.cn/post/6896118234391511053)

### [webpack的chunkFilename详细说明](https://blog.csdn.net/wu_xianqiang/article/details/113121793)

### base64编码实现

```js
function _btoa(str) {
    const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    const a = [...str].map(item => item.charCodeAt().toString(2).padStart(8, '0')).join('')
    let list = []
    for (let i = 0; i < Math.ceil(a.length / 6); i++) {
        list.push(base64[parseInt(`00${a.slice(i * 6, (i + 1) * 6)}`.padEnd(8, '0'), 2)])
    }
    const res = list.join('')
    console.log(res.padEnd(Math.ceil(res.length / 4) * 4, '='))
}
_btoa('http://www.ruanyifeng.com/blog/2008/06/base64.html')
_btoa('Man')
_btoa('Ma')
_btoa('M')
```

### emoji编码转换

```js
const codePoint = '✔️'.codePointAt()
const num16 = codePoint.toString(16)
const emoji = String.fromCodePoint(`0x${num16}`)
```

### [web前端入门到实战：CSS3中width值为max/min-content及fit-content的理解](https://blog.csdn.net/wewfdf/article/details/101228278)

### [浏览器是根据什么决定「from disk cache」与「from memory cache」？](https://www.zhihu.com/question/64201378?sort=created)

### [聊一聊缓存 [from memory cache 和 from disk cache]](https://blog.csdn.net/weixin_42038290/article/details/110135296/)

### [mobile-detect.js 中文网](https://www.mobile-detect.cn/)

&gt; 该脚本将通过将模式与给定的User-Agent字符串进行比较来检测设备

### [纯JS实现图像的人脸识别功能](https://www.zhangxinxu.com/wordpress/2023/12/js-image-video-face-detect/)

### [Face-Detection-JavaScript](https://github.com/WebDevSimplified/Face-Detection-JavaScript)

### [JS实现图片相似度的判断](https://www.zhangxinxu.com/wordpress/2023/12/js-img-image-similarity/)

### [SSIM.js](https://github.com/obartra/ssim)

### [使用JS提取视频中的音频资源](https://www.zhangxinxu.com/wordpress/2023/12/js-fetch-video-audio-mp3-mp4-wav/)

### [本地MP3封面图、时长等信息的JS读取](https://www.zhangxinxu.com/wordpress/2023/11/js-mp3-media-tags-metadata/)

### [mp4box.js加WebCodecs 解码MP4视频帧并渲染](https://www.zhangxinxu.com/wordpress/2023/11/mp4box-js-webcodecs-mp4-canvas/)

### [js中 ||=、&amp;&amp;=、??=、?.、?? 运算符的使用](https://blog.csdn.net/tiven_/article/details/134289431/)

```js
let x = 10;
let y = 0;
x || = 5; // x仍为10，因为10被视为真值
y || = 5; // y现在为5，因为0被视为假值

let a = null;
let b = 15;
a &amp;&amp; = 10; // a仍为null
b &amp;&amp; = 20; // b现在为20

let c = null;
let d;
c ?? = 5; // c现在为5
d ?? = 10; // d现在为10
```

### 1e5

```js
1e5 // 100000
```

### [Chrome-查看DOM元素绑定的事件【工具篇】](https://blog.csdn.net/weixin_38080573/article/details/105200212/)

&gt; getEventListeners

### [Fetch GitHub Hosts](https://hosts.gitcdn.top/)

&gt; hosts

### [告别轮询，SSE 流式传输可太香了！](https://juejin.cn/post/7359347999308644390/)

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use((req, res, next) =&gt; {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/events', function(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let startTime = Date.now();

    const sendEvent = () =&gt; {
        if (Date.now() - startTime &gt;= 10000) {
            res.write('event: close\ndata: {}\n\n');
            res.end();
            return;
        }

        const data = {
            message: 'Hello World',
            timestamp: new Date()
        };
        res.write(`data: ${JSON.stringify(data)}\n\n`);

        setTimeout(sendEvent, 2000);
    };

    sendEvent();
});

app.listen(PORT, () =&gt; {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

```html
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;SSE Example&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;Server-Sent Events Example&lt;/h1&gt;
    &lt;div id="messages"&gt;&lt;/div&gt;

    &lt;script&gt;
        const evtSource = new EventSource('/events');
        const messages = document.getElementById('messages');

        evtSource.onmessage = function(event) {
            const newElement = document.createElement("p");
            const eventObject = JSON.parse(event.data);
            newElement.textContent = "Message: " + eventObject.message + " at " + eventObject.timestamp;
            messages.appendChild(newElement);
        };
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
```

### [npm view node](https://docs.npmjs.com/cli/v8/commands/npm-view)

### [input type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/button)

### [语义化版本号管理](https://vue3.chengpeiquan.com/guide.html#%E5%9F%BA%E6%9C%AC%E6%A0%BC%E5%BC%8F%E4%B8%8A%E5%8D%87%E7%BA%A7%E8%A7%84%E5%88%99/)

&gt; 版本号

英文|中文|含义
:-:|:-:|:-
Major|主版本号|当项目作了大量的变更，与旧版本存在一定的不兼容问题
Minor|次版本号|做了向下兼容的功能改动或少量功能更新
Patch|修订号|修复上一个版本的少量 BUG

### [MPA 与 SPA](https://vue3.chengpeiquan.com/engineering.html#mpa-%E4%B8%8F-spa)

### [CSR 与 SSR](https://vue3.chengpeiquan.com/engineering.html#csr-%E4%B8%8F-ssr)

### [了解模块导入限制](https://vue3.chengpeiquan.com/guide.html#%E4%BA%86%E8%A7%A3%E6%A8%A1%E5%9D%97%E5%AF%BC%E5%85%A5%E9%99%90%E5%88%B6/)

```html
  &lt;script type="importmap"&gt;
      {
        "imports": {
          "md5": "https://esm.run/md5"
        }
      }
  &lt;/script&gt;
```

### [不使用font-weight等CSS实现文字变瘦或变胖效果](https://www.zhangxinxu.com/wordpress/2024/05/svg-femorphology-font-weight-thin-stretch/)

```html
&lt;svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"&gt;
    &lt;filter id="erode"&gt;
        &lt;feMorphology operator="erode" radius="1" /&gt;
    &lt;/filter&gt;
    &lt;filter id="dilate"&gt;
        &lt;feMorphology operator="dilate" radius="1" /&gt;
    &lt;/filter&gt;
&lt;/svg&gt;

&lt;h4&gt;苗条&lt;/h4&gt;
&lt;data class="erode"&gt;《CSS新世界》&lt;/data&gt;
&lt;h4&gt;体胖&lt;/h4&gt;
&lt;data class="dilate"&gt;《CSS新世界》&lt;/data&gt;
```

```css
data {
    font-size: 2.5rem;
}

.erode {
    filter: url(#erode);
}

.dilate {
    filter: url(#dilate);
}
```

### [Timeline 是以时间线的方式追踪不同类型的数据](https://vue3.chengpeiquan.com/upgrade.html#vue-devtools/)

&gt; Timeline

### [前端跨页面通信：Broadcast Channel](https://www.jianshu.com/p/12bb9acd9165/)

```js
const setChannel = new BroadcastChannel('demos');
setChannel.postMessage('要发送消息啦啦啦啦啦啦啦');
setChannel.onmessage = function(e) {
    console.log('接收到消息:', e.data);
};
setChannel.close();
```

### [JavaScript 判断是否为数字的几种方式](https://segmentfault.com/a/1190000044729061/)

```js
!isNaN(parseFloat(value)) &amp;&amp; isFinite(value);
```

### [聊聊Top Layer顶层特性的隐患与实践](https://www.zhangxinxu.com/wordpress/2024/06/web-top-layer/)

```html
&lt;button onclick="dialog.showModal();"&gt;点击我显示模态对话框&lt;/button&gt;

&lt;dialog id="dialog"&gt;
    &lt;blockquote&gt;
        &lt;button onclick="toast.showPopover();"&gt;显示toast提示&lt;/button&gt;
        &lt;button onclick="dialog.close();"&gt;关闭&lt;/button&gt;
    &lt;/blockquote&gt;
&lt;/dialog&gt;

&lt;div id="toast" class="toast" popover&gt;我是提示内容&lt;/div&gt;
```

### [今天才知道，Web网页也能阻止息屏了](https://www.zhangxinxu.com/wordpress/2024/03/js-screen-wake-lock-api/)

&gt; wakeLock

### [不改变音调情况下Audio音频的倍速合成JS实现](https://www.zhangxinxu.com/wordpress/2024/02/js-audioencoder-backplayrate-audiobuffer/)

### [使用JS快速获取video视频任意位置的缩略图](https://www.zhangxinxu.com/wordpress/2024/01/js-get-video-thumb-poster/)

### [时代变了，该使用原生popover属性模拟下拉了](https://www.zhangxinxu.com/wordpress/2024/01/js-html-popover-dropdown/)

```html
&lt;button popovertarget="imgBook"&gt;点击显示图片&lt;/button&gt;
&lt;img id="imgBook" popover src="/study/202312/book1.jpg" /&gt;
```

### [来了来了，scrollend滚动停止事件也支持了](https://www.zhangxinxu.com/wordpress/2024/09/js-scrollend-event/)

```js
window.addEventListener("scrollend", (event) =&gt; {
    // 滚动结束
});

element.addEventListener("scrollend", (event) =&gt; {
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
}) =&gt; name);

console.log(result);
```

### [Server-Sent Events 教程](https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)

### [还在用轮询、websocket查询大屏数据？sse用起来](https://juejin.cn/post/7424908830902042658/)

### [app.runWithContext()](https://cn.vuejs.org/api/application.html#app-runwithcontext)

### [2024 最新最全 VS Code 插件推荐！](https://juejin.cn/post/7384765023343394827/)

### [用纯 CSS 实现网格背景](https://spacexcode.com/blog/pure-css-grid-line/)

```css
{
    background-size: 20px 20px;
    background-position: center center;
    background-image: linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px);
    -webkit-mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
    mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
    mask-composite: intersect;
    -webkit-mask-composite: source-in, xor;
}
```

### [好的重构与坏的重构](https://www.builder.io/blog/good-vs-bad-refactoring)

### [useTemplateRef()](https://cn.vuejs.org/api/composition-api-helpers.html#usetemplateref)

### [useId()](https://cn.vuejs.org/api/composition-api-helpers.html#useid)

&gt; 用于为无障碍属性或表单元素生成每个应用内唯一的 ID。

### [优化 Javascript 以获得乐趣和利润](https://romgrk.com/posts/optimizing-javascript)

### [这13个前端库，帮我在工作中赢得了不少摸鱼时间](https://juejin.cn/post/7373136303180136459#heading-5/)

```js
import xss from "xss";
const userInput = '&lt;script&gt;alert("恶意代码");&lt;/script&gt;&lt;p&gt;这是用户输入的文本内容&lt;/p&gt;';
const output = xss(userInput);
console.log(output); // &amp;lt;script&amp;gt;alert("恶意代码");&amp;lt;/script&amp;gt;&lt;p&gt;这是用户输入的文本内容&lt;/p&gt;

import copy from 'copy-text-to-clipboard';

button.addEventListener('click', () =&gt; {
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

### [watch](https://cn.vuejs.org/api/options-state.html#watch)

&gt; 这种用法不支持复杂表达式——仅支持由点分隔的路径。如果你需要侦听复杂的数据源，可以使用命令式的 $watch() API。

### [v-bind](https://cn.vuejs.org/api/built-in-directives.html#v-bind)

### [手机电脑互传](https://localsend.org/zh-CN/)

### [v-pre](https://cn.vuejs.org/api/built-in-directives.html#v-pre)

&gt; 跳过该元素及其所有子元素的编译。

### [命名空间组件](https://cn.vuejs.org/api/sfc-script-setup.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E7%BB%84%E4%BB%B6/)

```vue
&lt;script setup&gt;
import * as Form from './form-components'
&lt;/script&gt;

&lt;template&gt;
  &lt;Form.Input&gt;
    &lt;Form.Label&gt;label&lt;/Form.Label&gt;
  &lt;/Form.Input&gt;
&lt;/template&gt;
```

### [chatgpt在线](http://chatgpt.com/)

### [qs.js库的使用](https://juejin.cn/post/7431999633071030283/)

&gt; 用于url参数转化：parse和stringify的js库

### [检测用户是否打开了键盘的大写锁定](https://davidwalsh.name/detect-caps-lock)

```js
document.querySelector('input[type=password]').addEventListener('keyup', function(keyboardEvent) {
    const capsLockOn = keyboardEvent.getModifierState('CapsLock');
    if (capsLockOn) {
        // Warn the user that their caps lock is on?
    }
});
```

### [w3c的getModifierState](https://w3c.github.io/uievents/#event-modifier-initializers/)

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

### [科学 PDF 文档翻译及双语对照工具](https://github.com/Byaidu/PDFMathTranslate/blob/main/README_zh-CN.md/)

&gt; python 实现的科学文档翻译及双语对照工具

### [免费共享的GPT4镜像](https://www.opkfc.com/list/)

### [以图搜图](https://picfind.top/)

### [插槽选择器](https://cn.vuejs.org/api/sfc-css-features.html#%E6%8F%92%E6%A7%BD%E9%80%89%E5%99%A8%E5%99%A8/)

```vue
&lt;style scoped&gt;
:slotted(div) {
    color: red;
}

&lt;/style&gt;
```

### [全局选择器](https://cn.vuejs.org/api/sfc-css-features.html#%E5%85%A8%E5%B1%80%E9%80%89%E5%99%A8%E5%99%A8/)

```vue
&lt;style scoped&gt;
:global(.red) {
  color: red;
}
&lt;/style&gt;
```

### [CSS 中的 v-bind()](https://cn.vuejs.org/api/sfc-css-features.html#v-bind-%E5%9C%A8-css/)

```vue
&lt;template&gt;
  &lt;div class="text"&gt;hello&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
&lt;/script&gt;

&lt;style&gt;
.text {
  color: v-bind(color);
}
&lt;/style&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const theme = ref({
    color: 'red',
})
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;hello&lt;/p&gt;
&lt;/template&gt;

&lt;style scoped&gt;
p {
  color: v-bind('theme.color');
}
&lt;/style&gt;
```

### [VS Code配置使用 Python，超详细配置指南，看这一篇就够了](https://blog.csdn.net/weixin_49895216/article/details/131696960/)

&gt; python环境配置

### [Python 的许多命令行实用程序](https://www.pythonmorsels.com/cli-tools/)

&gt; python 命令行工具

### [DashPlayer](https://github.com/solidSpoon/DashPlayer/)

&gt; 一款专为英语学习打造的视频播放器

### [字幕工具箱](https://zm.i8k.tv/)

### [混合图片](https://styleof.com/s/remix-yourself/)

### [𦮙](https://www.hanyuguoxue.com/zidian/zi-158617/)

### [GPT生成图关键词](https://artiversehub.ai/prompt-marketplace/1783666543199424513/)

### [DOOM Captcha](https://github.com/vivirenremoto/doomcaptcha/)

&gt; DOOM 风格的验证码

### [github收藏展示图](https://star-history.com/)

### [中国古代历史人物可视化，可以生成 52 万位中国古代历史名人的的社会关系、亲戚关系和生平足迹图，数据来源：CBDB](https://tools.buyixiao.xyz/historical-figure-query/)

### [代码对比库](https://github.com/MrWangJustToDo/git-diff-view/)

&gt; Git Diff Component vue react

### [Web 终极拦截技巧（全是骚操作）](https://hughfenghen.github.io/posts/2023/12/23/web-spy/)

### [汇聚多个GPT](https://github.com/lencx/Noi/)

### [CSS 可以制作动画的令人惊讶的事情](https://codersblock.com/blog/the-surprising-things-that-css-can-animate/)

### [Date.prototype.toLocaleString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString/)

&gt; 以特定于地区的格式显示日期字符串。
&gt; 转化时间的第二种方法

### [Nostalgist](https://github.com/arianrhodsandlot/nostalgist/)

&gt; Nostalgist.js 是一个 JavaScript 库，允许您在 Web 浏览器中运行复古游戏机的模拟器，例如 NES 和 Sega Genesis。

### [哇哦，font-palette支持动画和palette-mix()混合函数了](https://www.zhangxinxu.com/wordpress/2024/12/font-palette-animation-palette-mix/)

&gt; 字体调色板是一个 CSS 函数，用于在文本上应用调色板效果。它可以将文本的颜色转换为调色板中的颜色，从而使文本更加生动和吸引人。

### [超酷！CSS font-palette与彩色字体显示](https://www.zhangxinxu.com/wordpress/2022/07/css-font-palette/)

&gt; 同上

### [cloudflare-ai-web](https://github.com/Jazee6/cloudflare-ai-web/)

&gt; 基于 Cloudflare Workers 的 AI 聊天机器人，支持上下文对话

### [Kickass markdown 🤩](https://github.com/Olwiba/Kickass-markdown/)

```diff
+ this text is highlighted in green
- this text is highlighted in red
```

```css
Some text in green! 123
```

```P4
Some text in blue! 123
```

```Mint
Some text in blue with additional keyword highlighting! 123
```

```robots.txt
some text in light blue! 123

```
```EBNF
Some text in purple! 123
```

```mupad
Some text in purple with additional keyword highlighting! 123
```

```Mathematica
Some text in orange! 123
```

```REXX
Some text in orange with additional keyword highlighting! 123
```

```Nix
Some text in orange with additional keyword highlighting! 123
```

```POV-Ray SDL
some text in red!

```
```RobotFramework
Some text in light red! 123
```

```JSON
Some text highlighted in red! 123
```

&lt;samp&gt;Monospaced text&lt;/samp&gt;
&lt;ins&gt;Underlined text&lt;/ins&gt;
&lt;table&gt;&lt;tr&gt;&lt;td&gt;Boxed text&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
&lt;details&gt;

&lt;summary&gt;Item summary with dropdown&lt;/summary&gt;

Dropdown content (supports **markdown** ~~yay!~~)

```json
{
  awesome: "true"
}
```

&lt;/details&gt;

__*Italic-bold*__

Superscript&lt;sup&gt;TM&lt;/sup&gt;

Superscript-italic&lt;sup&gt;*tm*&lt;/sup&gt;

Subscript&lt;sub&gt;x&lt;/sub&gt;

Subscript-bold&lt;sub&gt;**min**&lt;/sub&gt;

~~__*Italic-bold-strikethrough*__~~

&gt; markdown的一些进阶用法

### [英文单词朗读基于音素预估时长的JS算法](https://www.zhangxinxu.com/wordpress/2024/12/js-word-speech-split-time-calc/)

### [CSS文字和背景color自动配色技术简介](https://www.zhangxinxu.com/wordpress/2018/11/css-background-color-font-auto-match/)

```css
:root {
    --red: 44;
    --green: 135;
    --blue: 255;
    --threshold: 0.5;
    --border-threshold: 0.8;
}

.btn {
    background: rgb(var(--red), var(--green), var(--blue));
    --r: calc(var(--red) * 0.2126);
    --g: calc(var(--green) * 0.7152);
    --b: calc(var(--blue) * 0.0722);
    --sum: calc(var(--r) + var(--g) + var(--b));
    --lightness: calc(var(--sum) / 255);
    color: hsl(0, 0%, calc((var(--lightness) - var(--threshold)) * -999999%));
    --border-alpha: calc((var(--lightness) - var(--border-threshold)) * 100);
    border: .2em solid;
    border-color: rgba(calc(var(--red) - 50), calc(var(--green) - 50), calc(var(--blue) - 50), var(--border-alpha));
}
```

### [全新的CSS相对颜色语法-使用from和calc()](https://www.zhangxinxu.com/wordpress/2024/12/css-relative-color-from-calc/)

&gt; 相对颜色语法是一种新的CSS颜色语法，它允许您使用from关键字来指定一个颜色作为基准，然后使用calc()函数来计算相对于基准颜色的新颜色。
&gt; 颜色相对

### [跳转链接时，关键字颜色改变](https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html)

```
https://example.com/page.html#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

### [现代 CSS 重置](https://www.joshwcomeau.com/css/custom-css-reset/)

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

p {
    text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-wrap: balance;
}

#root,
#__next {
    isolation: isolate;
}
```

### [前端模糊搜索](https://github.com/m31coding/fuzzy-search/)

### [BabelDuck](https://github.com/Orenoid/BabelDuck/)

&gt; BabelDuck 是一个面向各水平层次语言学习者的高度可定制化 AI 口语对话练习应用，并对初学者更友好，旨在将口语表达练习的门槛与心智负担降至最低。
&gt; 口语练习

### [YouTube中文配音](https://chromewebstore.google.com/detail/youtube%E4%B8%8F%E6%96%87%E9%85%8D%E9%9F%B3/oglffgiaiekgeicdgkdlnlkhliajdlja/)

### [30 天学 Python](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/Chinese/04_strings.md/)

### [卸载软件](https://uninstalr.com/ )

### [监控chrome扩展是否被自己调接口](https://github.com/dnakov/little-rat/)

&gt; 🐀 小型 chrome 扩展，用于监控（并选择性地阻止）其他扩展的网络调用

### [磁力](https://anybt.eth.limo/)

### [本项目旨在打造一本开源免费、新手友好的数据结构与算法入门教程。](https://github.com/krahets/hello-algo/)

### [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

> new Map做遍历

### [JS Array数组新的with方法，你知道作用吗？](https://www.zhangxinxu.com/wordpress/2025/02/js-array-with/)

```js
const arr = [, '唐探1900', '侠之大者', '蛟龙行动'];
// 结果是 ['哪吒魔童闹海', '唐探1900', '侠之大者', '蛟龙行动']
console.log(arr.with(0, '哪吒魔童闹海'));
```

### [JS Set新支持了intersection, union, difference等方法](https://www.zhangxinxu.com/wordpress/2025/02/js-set-intersection-union-difference/)

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

### [检查用户输入是否为有效数字](https://www.jimengity.com)

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

### [JavaScript Set有新功能啦，子、交、并、补轻松搞定](https://juejin.cn/post/7411416025729957928)

```
子，isSubsetOf/isSupersetOf/isDisjointFrom
交，intersection
并，union
补，difference/symmetricDifference
```

### [使用Intl.Segmenter返回更准确的字符长度](https://www.zhangxinxu.com/wordpress/2025/09/js-intl-segmenter-string-length/)

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

### [10 个被严重低估的 JS 特性，直接少写 500 行代码](https://juejin.cn/post/7568153532014559267)

> element.closest () 方法返回调用它的元素或其最近的祖先元素（也可以是相同的元素），该元素匹配指定的选择器字符串。如果没有匹配的元素，则返回 null。
> URL + URLSearchParams 可以用于构建 URL 字符串，同时添加查询参数。

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

### ElementUI校验[Violation] Added non-passive event listener to a scroll-blocking 'touchmove' event. 问题解决

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

### [typescr中常规的dom元素和event事件类型声明](https://juejin.cn/post/7274626136327110708)

### [页面关闭时请求](https://www.zhangxinxu.com/wordpress/2025/07/html-popover-hint/)

>sendBeacon	fetch + keepalive

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

### [JavaScript → Python](https://langshift.dev/)

### [我刚刚学会的三个 Markdown 技巧](https://www.stefanjudis.com/blog/three-markdown-tricks-i-just-learned/)
This text is ***cursive and bold***. Here are escaped backticks: `` `foo` ``.

### [正则表达式可视化工具](https://regex-vis.com/)

### [指数退避算法](https://www.practicalnetworking.net/practical-tcp-ip/exponential-backoff/)

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

### [模块的特殊变量](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#23-%E6%A8%A1%E5%9D%97%E7%9A%84%E7%89%B9%E6%AE%8A%E5%8F%98%E9%87%8F)

### [动态导入](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#62-%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5)

### [特殊方法魔术方法](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#24-%E7%89%B9%E6%AE%8A%E6%96%B9%E6%B3%95%E9%AD%94%E6%9C%AF%E6%96%B9%E6%B3%95)

### [列表推导式](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#33-%E5%88%97%E8%A1%A8%E6%8E%A8%E5%AF%BC%E5%BC%8F)

### [Dijkstra 算法](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra/README.zh-CN.md)

### [马尔可夫链](https://setosa.io/blog/2014/07/26/markov-chains/)

> 马尔可夫链是一种随机过程，用于描述一个系统在不同状态之间转换的概率。它由一个状态集合和一个转移矩阵组成。每个状态都有一个概率分布，描述了从该状态转换到其他状态的概率。马尔可夫链可以用于模拟随机过程，例如股票价格、天气模式或交通流量。
> canvas

### [高级动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)

### [Canvas 变换](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#%E5%8F%98%E5%BD%A2)

### [Document.elementFromPoint()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint)

> 这个方法返回文档中指定坐标位置的元素。它可以用于确定用户点击的元素，或者在需要知道元素位置的情况下使用。
> elementFromPoint

### [浏览器指纹检测器](https://fingerprint.goldenowl.ai/)

> 该工具旨在揭示您在浏览互联网时共享的数据，并通过自定义您授予的权限来帮助您加强隐私保护。它不使用 cookies，也不收集、存储或传输任何个人信息。它的唯一目的是让您意识到潜在隐私风险，展示网站可以访问哪些数据，并指导您如何防范不受欢迎的追踪。

### [JS正则新特性：安全过滤RegExp.escape方法](https://www.zhangxinxu.com/wordpress/2025/07/js-regexp-escape/)

> RegExp escape

### [你编程 20 年的指导原则](https://www.jitao.tech/posts/my-guiding-principles-after-20-years-of-programming)

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

### [用新的 HTML 对话框元素替换 JavaScript 对话框](https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/)

### [一个 16.67 毫秒的帧](https://koolcodez.com/blog/inside-the-frame/)

> Performance monitor 控制台

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

### [在 Markdown 中渲染数学表达式](https://github.blog/changelog/2022-05-19-render-mathematical-expressions-in-markdown/)

### [大道至简，繁在人心：在浏览器控制台安装npm包是什么操作？](https://segmentfault.com/a/1190000040875211)

> $i('npm包名称')

### [You-Get](https://github.com/soimort/you-get)

> pthon3 -m pip install you-get
> 一个命令行工具，用于下载视频、音频、图片、直播等互联网资源。
> 支持的网站包括 YouTube、Twitter、Facebook、Instagram、Bilibili、Vimeo、Twitch、Youku、AcFun 等。

### [Volta](https://volta.jikun.dev/guide/understanding.html)

```
Volta 的工作是管理 JavaScript 命令行工具，如 node、npm、yarn 或作为 JavaScript 包的一部分发布的可执行文件。

与包管理器类似，Volta 会根据当前目录跟踪您正在处理的项目(如果有的话)。Volta 工具链中的工具会自动检测您所处的项目是否使用特定版本的工具，并为您路由到正确的工具版本。
```

### [Python中使用uv创建环境及原理详解](https://blog.csdn.net/xinjichenlibing/article/details/148056383)

### [Python项目管理神器 PDM，用它管理项目爽到飞起！](https://juejin.cn/post/7503596255122161690)

### [node执行的内存快照](https://nodejs.cn/api/cli/heapsnapshot_signal_signal.html)

```
$ node --heappsnapshot-signal=SIGUSR2 index.js &
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
node         1  5.5  6.1 787252 247004 ?       Ssl  16:43   0:02 node --heapsnapshot-signal=SIGUSR2 index.js
$ kill -USR2 1
$ ls
Heap.20190718.133405.15554.0.001.heapsnapshot
```

### [Tesseract-OCR Windows 64-bit 5.5.0 安装与使用指南](https://blog.csdn.net/gs80140/article/details/145138997)

### [paddleOCR理解及识别手写体，手写公式，表格](https://blog.csdn.net/m0_68926749/article/details/134843387)

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddlepaddle
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddleocr
```

### [通用OCR产线使用教程](https://www.paddleocr.ai/latest/version3.x/pipeline_usage/OCR.html#422)

### [playwright](https://playwright.dev/)

> Playwright 是一个用于自动化浏览器操作的强大工具，支持多种浏览器（如 Chrome、Firefox、Safari）和平台（如 Windows、macOS、Linux）。它提供了丰富的 API 来模拟用户交互、导航网页、提取数据等。Playwright 以其稳定性、跨平台兼容性和强大的功能而闻名，成为了自动化测试和浏览器操作的首选工具。

### [SingleFile](https://github.com/gildas-lormeau/SingleFile)

> SingleFile 是一个兼容 Chrome、Firefox（桌面版和移动版）、Microsoft Edge、Safari、Vivaldi、Brave、Waterfox、Yandex 浏览器和 Opera 的网络扩展（以及一个命令行工具）。

### [7 分钟了解 flatMap 的使用及实现原理，并实现一个简易版的 flatMap](https://juejin.cn/post/7365698962531745830)

> flatMap= map+filter

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

### [文件的黑名单（.gitignore）转变为白名单](https://rgbcu.be/blog/gitignore/)

```
*

!.gitignore

# whitelist `src` directories and their children, regardless of place
!src/
!src/**/
!src/**/*.rs
!Cargo.{toml,lock}

# whitelist root `pysrc` directory
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

### [git 推荐默认配置](https://blog.gitbutler.com/how-git-core-devs-configure-git/)

### [git 工作树](https://opensource.com/article/21/4/git-worktree)

### [Record<Keys, Type>](https://typescript.p6p.net/typescript-tutorial/utility.html#record-keys-type)

> Record<Keys, Type> 是一个内置的 TypeScript 类型，用于创建一个对象类型，其中键的类型为 Keys，值的类型为 Type。

### [typescript中常规的dom元素和event事件类型声明](https://juejin.cn/post/7274626136327110708)

### [TypeScript 导入 JSON Module --resolveJsonModule](https://www.cnblogs.com/wx18638101223/p/16146075.html)

```ts
// typings.d.ts

declare module '*.json' {
    const value: any;
    export default value;
}
```

```
在项目的根目录中找到的tsconfig.json文件，然后添加一个新行："resolveJsonModule"：true，

需要在tsconfig.json文件，然后添加："esModuleInterop": true,就没有问题了。
```

### [json转ts](https://xietiansheng.github.io/json-to-any-web/)

> json-to-any-web 是一个在线工具，可以将 JSON 数据转换为 TypeScript 类型定义。
> 它支持将 JSON 数据转换为 TypeScript 接口、类型别名、联合类型、枚举类型等多种类型定义。

### [浏览器禁用端口](https://www.keenformatics.com/ports-that-are-blocked-by-browsers)

### [HTTPS下A标签下载HTTP资源受限](https://www.cnblogs.com/xwdreamer/articles/3619960.html)

### [shell:startup](https://www.jimengity.com)

> 按 Win + R 打开 "运行" 对话框，输入 shell:startup，然后按回车。这将打开 "启动" 文件夹。

### [ChatGPT for Chrome](https://chatgpt4google.com/)

### [Web 终极拦截技巧（全是骚操作）](https://hughfenghen.github.io/posts/2023/12/23/web-spy/)
